import React, { useState } from 'react';
import { Settings, Award, BarChart3, BookOpen, RotateCcw } from 'lucide-react';
import { Header } from './components/Header';
import { TopicCard } from './components/TopicCard';
import { AchievementCard } from './components/AchievementCard';
import { StatsDashboard } from './components/StatsDashboard';
import { useProgress } from './hooks/useProgress';

function App() {
  const [activeTab, setActiveTab] = useState<'topics' | 'achievements' | 'stats'>('topics');
  const [showResetModal, setShowResetModal] = useState(false);
  
  const {
    topics,
    achievements,
    userStats,
    dailyProgress,
    toggleProblem,
    updateProblemNotes,
    resetProgress,
  } = useProgress();

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  const handleReset = () => {
    resetProgress();
    setShowResetModal(false);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <Header userStats={userStats} />
      
      <div className="max-w-7xl mx-auto p-xl">
        {/* Navigation Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-3xl">
          <div className="flex card p-sm mb-lg lg:mb-0 animate-fade-in">
            <button
              onClick={() => setActiveTab('topics')}
              className={`flex items-center px-lg py-md rounded-lg transition-all duration-250 font-medium relative overflow-hidden ${
                activeTab === 'topics'
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              <BookOpen className="w-4 h-4 mr-sm" />
              <span>Topics</span>
            </button>
            <button
              onClick={() => setActiveTab('achievements')}
              className={`flex items-center px-lg py-md rounded-lg transition-all duration-250 font-medium relative overflow-hidden ${
                activeTab === 'achievements'
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              <Award className="w-4 h-4 mr-sm" />
              <span>Achievements</span>
              {unlockedAchievements.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 text-xs font-bold rounded-full flex items-center justify-center text-white animate-pulse-success"
                      style={{ background: 'var(--accent-secondary)' }}>
                  {unlockedAchievements.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex items-center px-lg py-md rounded-lg transition-all duration-250 font-medium relative overflow-hidden ${
                activeTab === 'stats'
                  ? 'btn-primary'
                  : 'btn-secondary'
              }`}
            >
              <BarChart3 className="w-4 h-4 mr-sm" />
              <span>Statistics</span>
            </button>
          </div>
          
          <button
            onClick={() => setShowResetModal(true)}
            className="flex items-center px-lg py-md rounded-lg transition-all duration-250 font-medium border relative overflow-hidden"
            style={{ 
              background: 'rgba(239, 68, 68, 0.1)', 
              borderColor: 'rgba(239, 68, 68, 0.2)',
              color: '#EF4444'
            }}
          >
            <RotateCcw className="w-4 h-4 mr-sm" />
            <span>Reset Progress</span>
          </button>
        </div>

        {/* Content */}
        {activeTab === 'topics' && (
          <div className="grid grid-2 gap-2xl">
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onToggleProblem={toggleProblem}
                onUpdateNotes={updateProblemNotes}
              />
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-3xl">
            {unlockedAchievements.length > 0 && (
              <div>
                <h2 className="subheading mb-2xl flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-lg">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <span>Unlocked Achievements ({unlockedAchievements.length})</span>
                </h2>
                <div className="grid grid-2 gap-lg">
                  {unlockedAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>
            )}

            {lockedAchievements.length > 0 && (
              <div>
                <h2 className="subheading mb-2xl" style={{ color: 'var(--text-secondary)' }}>
                  Locked Achievements ({lockedAchievements.length})
                </h2>
                <div className="grid grid-2 gap-lg">
                  {lockedAchievements.map((achievement) => (
                    <AchievementCard key={achievement.id} achievement={achievement} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <StatsDashboard userStats={userStats} dailyProgress={dailyProgress} />
        )}
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-lg animate-fade-in"
             style={{ background: 'rgba(0, 0, 0, 0.8)' }}>
          <div className="card p-3xl max-w-md w-full animate-slide-down">
            <h3 className="subheading mb-lg">Reset Progress</h3>
            <p className="body-text mb-2xl" style={{ color: 'var(--text-secondary)' }}>
              Are you sure you want to reset all your progress? This action cannot be undone.
            </p>
            <div className="flex gap-md">
              <button
                onClick={handleReset}
                className="flex-1 px-lg py-md rounded-lg font-medium border transition-all duration-250 relative overflow-hidden"
                style={{ 
                  background: 'rgba(239, 68, 68, 0.1)', 
                  borderColor: 'rgba(239, 68, 68, 0.2)',
                  color: '#EF4444'
                }}
              >
                Reset Everything
              </button>
              <button
                onClick={() => setShowResetModal(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;