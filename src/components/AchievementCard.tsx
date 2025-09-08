import React from 'react';
import { 
  Trophy, 
  Star, 
  Flame, 
  Award, 
  Target, 
  Zap, 
  Crown, 
  Sparkles 
} from 'lucide-react';
import { Achievement } from '../types';

// Icon mapping for achievements
const iconMap = {
  Trophy,
  Star,
  Flame,
  Award,
  Target,
  Zap,
  Crown,
  Sparkles
};

interface AchievementCardProps {
  achievement: Achievement;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];

  return (
    <div className={`card p-2xl transition-all duration-300 hover:scale-105 ${
      achievement.unlocked 
        ? 'selected animate-glow' 
        : 'opacity-70 hover:opacity-90'
    }`}>
      <div className="flex items-center">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-lg transition-all duration-300 hover:scale-110 ${
          achievement.unlocked 
            ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white animate-float' 
            : 'text-gray-400'
        }`}
        style={{ background: achievement.unlocked ? undefined : 'var(--bg-tertiary)' }}>
          {IconComponent && <IconComponent className="w-8 h-8" />}
        </div>
        <div className="flex-1">
          <h4 className={`card-title mb-sm ${
            achievement.unlocked ? 'text-white' : 'text-gray-400'
          }`}>
            {achievement.name}
            {achievement.unlocked && <span className="ml-2 text-emerald-400">✓</span>}
          </h4>
          <p className={`body-text ${
            achievement.unlocked ? 'text-gray-200' : 'text-gray-500'
          }`}>
            {achievement.description}
          </p>
          {achievement.unlocked && achievement.unlockedAt && (
            <p className="metadata-small mt-sm" style={{ color: 'var(--accent-secondary)' }}>
              Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};