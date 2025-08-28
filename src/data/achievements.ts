import { Achievement, UserStats } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first-problem',
    name: 'First Steps',
    description: 'Complete your first problem',
    icon: 'Trophy',
    unlocked: false,
    condition: (stats) => stats.completedProblems >= 1
  },
  {
    id: 'perfect-day',
    name: 'Perfect Day',
    description: 'Complete 10 problems in a single day',
    icon: 'Star',
    unlocked: false,
    condition: (stats) => stats.problemsToday >= 10
  },
  {
    id: 'week-warrior',
    name: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: 'Flame',
    unlocked: false,
    condition: (stats) => stats.currentStreak >= 7
  },
  {
    id: 'topic-master',
    name: 'Topic Master',
    description: 'Complete your first topic',
    icon: 'Award',
    unlocked: false,
    condition: (stats) => stats.topicsCompleted >= 1
  },
  {
    id: 'halfway-there',
    name: 'Halfway There',
    description: 'Complete 50% of all problems',
    icon: 'Target',
    unlocked: false,
    condition: (stats) => (stats.completedProblems / stats.totalProblems) >= 0.5
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Average less than 30 minutes per problem',
    icon: 'Zap',
    unlocked: false,
    condition: (stats) => stats.averageTimePerProblem <= 30 && stats.completedProblems >= 10
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Complete 3 topics perfectly',
    icon: 'Crown',
    unlocked: false,
    condition: (stats) => stats.topicsCompleted >= 3
  },
  {
    id: 'grand-master',
    name: 'Grand Master',
    description: 'Complete all problems!',
    icon: 'Sparkles',
    unlocked: false,
    condition: (stats) => stats.completedProblems === stats.totalProblems
  }
];