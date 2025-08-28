import React from 'react';
import { Trophy, Flame, Clock, Target, Star, Zap } from 'lucide-react';
import { UserStats } from '../types';

interface HeaderProps {
  userStats: UserStats;
}

export const Header: React.FC<HeaderProps> = ({ userStats }) => {
  const completionPercentage = userStats.totalProblems > 0 
    ? (userStats.completedProblems / userStats.totalProblems) * 100 
    : 0;

  const xpToNextLevel = ((userStats.level * 100) - userStats.xp);

  return (
    <header className="relative" style={{ background: 'var(--bg-primary)' }}>
      <div className="p-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3xl">
            <div className="mb-2xl lg:mb-0">
              <div className="flex items-center mb-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl flex items-center justify-center mr-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1 className="headline mb-xs">
                    30-Day Coding Challenge
                  </h1>
                  <p className="body-text-large" style={{ color: 'var(--text-secondary)' }}>
                    Master the fundamentals, one problem at a time
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card p-2xl" style={{ minWidth: '280px' }}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-sm" style={{ color: 'var(--accent-primary)' }}>
                  {userStats.level}
                </div>
                <div className="metadata mb-lg">
                  Level • {userStats.xp} XP
                </div>
                <div className="progress-container mb-sm">
                  <div 
                    className="progress-bar"
                    style={{ width: `${((userStats.xp % 100) / 100) * 100}%` }}
                  />
                </div>
                <div className="metadata-small">
                  {xpToNextLevel} XP to Level {userStats.level + 1}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-5 gap-lg">
            <div className="card p-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
                {Math.round(completionPercentage)}%
              </div>
              <div className="metadata">Complete</div>
            </div>

            <div className="card p-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-md">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
                {userStats.completedProblems}
              </div>
              <div className="metadata">Problems Solved</div>
            </div>

            <div className="card p-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-md">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
                {userStats.currentStreak}
              </div>
              <div className="metadata">Day Streak</div>
            </div>

            <div className="card p-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-md">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
                {Math.round(userStats.averageTimePerProblem)}
              </div>
              <div className="metadata">Avg Minutes</div>
            </div>

            <div className="card p-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-md">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
                {userStats.topicsCompleted}
              </div>
              <div className="metadata">Topics Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};