import React from 'react';
import { BarChart3, TrendingUp, Calendar, Award } from 'lucide-react';
import { UserStats, DailyProgress } from '../types';

interface StatsDashboardProps {
  userStats: UserStats;
  dailyProgress: DailyProgress[];
}

export const StatsDashboard: React.FC<StatsDashboardProps> = ({ userStats, dailyProgress }) => {
  const last7Days = dailyProgress.slice(-7);
  const maxProblems = Math.max(...last7Days.map(d => d.problemsSolved), 1);

  return (
    <div className="card p-3xl">
      <div className="flex items-center mb-3xl">
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mr-lg">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h2 className="subheading">Statistics Dashboard</h2>
      </div>

      <div className="grid grid-4 gap-lg mb-3xl">
        <div className="card p-2xl text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-lg">
            <Calendar className="w-7 h-7 text-white" />
          </div>
          <div className="text-3xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
            {Math.round(userStats.totalTimeSpent / 60)}h
          </div>
          <div className="metadata">Total Time</div>
        </div>

        <div className="card p-2xl text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-lg">
            <TrendingUp className="w-7 h-7 text-white" />
          </div>
          <div className="text-3xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
            {userStats.longestStreak}
          </div>
          <div className="metadata">Longest Streak</div>
        </div>

        <div className="card p-2xl text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-lg">
            <Award className="w-7 h-7 text-white" />
          </div>
          <div className="text-3xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
            {userStats.problemsToday}
          </div>
          <div className="metadata">Problems Today</div>
        </div>

        <div className="card p-2xl text-center">
          <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-lg">
            <div className="text-2xl">⚡</div>
          </div>
          <div className="text-3xl font-bold mb-xs" style={{ color: 'var(--text-primary)' }}>
            {userStats.xp}
          </div>
          <div className="metadata">XP Points</div>
        </div>
      </div>

      {last7Days.length > 0 && (
        <div>
          <h3 className="subheading mb-2xl">Last 7 Days Activity</h3>
          <div className="card p-2xl">
            <div className="flex items-end gap-md h-48">
              {last7Days.map((day, index) => (
                <div key={day.date} className="flex-1 flex flex-col items-center">
                  <div className="w-full rounded-t-lg flex-1 flex flex-col justify-end" 
                       style={{ background: 'var(--bg-tertiary)' }}>
                    <div 
                      className="rounded-t-lg transition-all duration-1000 ease-out"
                      style={{ 
                        background: 'var(--accent-secondary)',
                        height: `${(day.problemsSolved / maxProblems) * 100}%`,
                        minHeight: day.problemsSolved > 0 ? '8px' : '0'
                      }}
                    />
                  </div>
                  <div className="text-center mt-md">
                    <div className="metadata-small">
                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="text-lg font-bold mt-xs" style={{ color: 'var(--text-primary)' }}>
                      {day.problemsSolved}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};