export interface Problem {
  id: string;
  name: string;
  leetcodeNumber: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  completed: boolean;
  timeSpent?: number; // in minutes
  completedAt?: Date;
  attempts: number;
  notes?: string;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  problems: Problem[];
  color: string;
  icon: string;
  completed: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  condition: (stats: UserStats) => boolean;
}

export interface UserStats {
  totalProblems: number;
  completedProblems: number;
  currentStreak: number;
  longestStreak: number;
  totalTimeSpent: number;
  averageTimePerProblem: number;
  topicsCompleted: number;
  totalTopics: number;
  level: number;
  xp: number;
  problemsToday: number;
  lastActiveDate?: Date;
}

export interface DailyProgress {
  date: string;
  problemsSolved: number;
  timeSpent: number;
}