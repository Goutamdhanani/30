import { useState, useEffect } from 'react';
import { Topic, UserStats, Achievement, DailyProgress } from '../types';
import { topics as initialTopics } from '../data/topics';
import { achievements as initialAchievements } from '../data/achievements';

const STORAGE_KEY = 'coding-challenge-progress';

export const useProgress = () => {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);
  const [userStats, setUserStats] = useState<UserStats>({
    totalProblems: 0,
    completedProblems: 0,
    currentStreak: 0,
    longestStreak: 0,
    totalTimeSpent: 0,
    averageTimePerProblem: 0,
    topicsCompleted: 0,
    totalTopics: topics.length,
    level: 1,
    xp: 0,
    problemsToday: 0,
  });
  const [dailyProgress, setDailyProgress] = useState<DailyProgress[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.topics) setTopics(parsed.topics);
      if (parsed.achievements) {
        // Restore condition functions from initial achievements
        const restoredAchievements = parsed.achievements.map((savedAchievement: Achievement) => {
          const originalAchievement = initialAchievements.find(a => a.id === savedAchievement.id);
          return {
            ...savedAchievement,
            condition: originalAchievement?.condition || (() => false)
          };
        });
        setAchievements(restoredAchievements);
      }
      if (parsed.userStats) setUserStats(parsed.userStats);
      if (parsed.dailyProgress) setDailyProgress(parsed.dailyProgress);
    }
  }, []);

  // Calculate stats whenever topics change
  useEffect(() => {
    const totalProblems = topics.reduce((sum, topic) => sum + topic.problems.length, 0);
    const completedProblems = topics.reduce((sum, topic) => 
      sum + topic.problems.filter(p => p.completed).length, 0
    );
    
    const topicsCompleted = topics.filter(topic => 
      topic.problems.every(problem => problem.completed)
    ).length;

    const totalTimeSpent = topics.reduce((sum, topic) =>
      sum + topic.problems.reduce((topicSum, problem) =>
        topicSum + (problem.timeSpent || 0), 0
      ), 0
    );

    const averageTimePerProblem = completedProblems > 0 ? totalTimeSpent / completedProblems : 0;

    // Calculate XP (10 XP per easy, 20 per medium, 30 per hard)
    const xp = topics.reduce((sum, topic) =>
      sum + topic.problems.reduce((topicSum, problem) => {
        if (!problem.completed) return topicSum;
        const points = problem.difficulty === 'Easy' ? 10 : 
                      problem.difficulty === 'Medium' ? 20 : 30;
        return topicSum + points;
      }, 0), 0
    );

    const level = Math.floor(xp / 100) + 1;

    // Calculate today's problems
    const today = new Date().toDateString();
    const problemsToday = topics.reduce((sum, topic) =>
      sum + topic.problems.filter(problem => 
        problem.completed && problem.completedAt && 
        new Date(problem.completedAt).toDateString() === today
      ).length, 0
    );

    // Calculate streak
    const currentStreak = calculateCurrentStreak();

    const newStats: UserStats = {
      totalProblems,
      completedProblems,
      currentStreak,
      longestStreak: Math.max(userStats.longestStreak, currentStreak),
      totalTimeSpent,
      averageTimePerProblem,
      topicsCompleted,
      totalTopics: topics.length,
      level,
      xp,
      problemsToday,
      lastActiveDate: userStats.lastActiveDate,
    };

    setUserStats(newStats);
    
    // Check and unlock achievements
    const updatedAchievements = achievements.map(achievement => {
      if (!achievement.unlocked && achievement.condition(newStats)) {
        return { ...achievement, unlocked: true, unlockedAt: new Date() };
      }
      return achievement;
    });
    
    if (JSON.stringify(updatedAchievements) !== JSON.stringify(achievements)) {
      setAchievements(updatedAchievements);
    }

    // Update daily progress
    updateDailyProgress();
  }, [topics]);

  // Save to localStorage whenever data changes
  useEffect(() => {
    const dataToSave = {
      topics,
      achievements,
      userStats,
      dailyProgress,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [topics, achievements, userStats, dailyProgress]);

  const calculateCurrentStreak = (): number => {
    const completedDates = topics.flatMap(topic =>
      topic.problems
        .filter(p => p.completed && p.completedAt)
        .map(p => new Date(p.completedAt!).toDateString())
    );

    const uniqueDates = Array.from(new Set(completedDates)).sort((a, b) => 
      new Date(b).getTime() - new Date(a).getTime()
    );

    if (uniqueDates.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < uniqueDates.length; i++) {
      const date = new Date(uniqueDates[i]);
      const daysDiff = Math.floor((today.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
      
      if (i === 0 && daysDiff <= 1) {
        streak = 1;
      } else if (i > 0) {
        const prevDate = new Date(uniqueDates[i - 1]);
        const daysBetween = Math.floor((prevDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        
        if (daysBetween === 1) {
          streak++;
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return streak;
  };

  const updateDailyProgress = () => {
    const today = new Date().toISOString().split('T')[0];
    const problemsToday = topics.reduce((sum, topic) =>
      sum + topic.problems.filter(problem => 
        problem.completed && problem.completedAt && 
        problem.completedAt.toString().split('T')[0] === today
      ).length, 0
    );

    const timeToday = topics.reduce((sum, topic) =>
      sum + topic.problems.reduce((topicSum, problem) => {
        if (problem.completed && problem.completedAt && 
            problem.completedAt.toString().split('T')[0] === today) {
          return topicSum + (problem.timeSpent || 0);
        }
        return topicSum;
      }, 0), 0
    );

    setDailyProgress(prev => {
      const existing = prev.find(d => d.date === today);
      if (existing) {
        return prev.map(d => d.date === today 
          ? { ...d, problemsSolved: problemsToday, timeSpent: timeToday }
          : d
        );
      } else {
        return [...prev, { date: today, problemsSolved: problemsToday, timeSpent: timeToday }];
      }
    });
  };

  const toggleProblem = (topicId: string, problemId: string, timeSpent?: number) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === topicId
          ? {
              ...topic,
              problems: topic.problems.map(problem =>
                problem.id === problemId
                  ? {
                      ...problem,
                      completed: !problem.completed,
                      completedAt: !problem.completed ? new Date() : undefined,
                      timeSpent: !problem.completed ? (timeSpent || 0) : problem.timeSpent,
                      attempts: !problem.completed ? problem.attempts + 1 : problem.attempts,
                    }
                  : problem
              ),
            }
          : topic
      )
    );
  };

  const updateProblemNotes = (topicId: string, problemId: string, notes: string) => {
    setTopics(prevTopics =>
      prevTopics.map(topic =>
        topic.id === topicId
          ? {
              ...topic,
              problems: topic.problems.map(problem =>
                problem.id === problemId
                  ? { ...problem, notes }
                  : problem
              ),
            }
          : topic
      )
    );
  };

  const resetProgress = () => {
    setTopics(initialTopics);
    setAchievements(initialAchievements);
    setUserStats({
      totalProblems: 0,
      completedProblems: 0,
      currentStreak: 0,
      longestStreak: 0,
      totalTimeSpent: 0,
      averageTimePerProblem: 0,
      topicsCompleted: 0,
      totalTopics: initialTopics.length,
      level: 1,
      xp: 0,
      problemsToday: 0,
    });
    setDailyProgress([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    topics,
    achievements,
    userStats,
    dailyProgress,
    toggleProblem,
    updateProblemNotes,
    resetProgress,
  };
};