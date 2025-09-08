import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp,
  ArrowLeftRight,
  RotateCcw,
  Hash,
  Plus,
  Layers3,
  ArrowRightLeft,
  Link,
  TreePine,
  Search,
  Network,
  Zap,
  Repeat,
  Mountain,
  Target,
  Binary,
  Calculator
} from 'lucide-react';
import { Topic } from '../types';
import { ProblemItem } from './ProblemItem';

// Icon mapping for dynamic icon rendering
const iconMap = {
  ArrowLeftRight,
  RotateCcw,
  Hash,
  Plus,
  Layers3,
  ArrowRightLeft,
  Link,
  TreePine,
  Search,
  Network,
  Zap,
  Repeat,
  Mountain,
  Target,
  Binary,
  Calculator
};

interface TopicCardProps {
  topic: Topic;
  onToggleProblem: (topicId: string, problemId: string, timeSpent?: number) => void;
  onUpdateNotes: (topicId: string, problemId: string, notes: string) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({ 
  topic, 
  onToggleProblem, 
  onUpdateNotes 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const completedProblems = topic.problems.filter(p => p.completed).length;
  const totalProblems = topic.problems.length;
  const progressPercentage = (completedProblems / totalProblems) * 100;
  const isCompleted = completedProblems === totalProblems;

  // Get the icon component from the mapping
  const IconComponent = iconMap[topic.icon as keyof typeof iconMap];

  // Get topic color for icon background
  const getIconColor = (color: string) => {
    if (color.includes('blue')) return 'from-blue-500 to-cyan-600';
    if (color.includes('green') || color.includes('emerald')) return 'from-emerald-500 to-teal-600';
    if (color.includes('purple') || color.includes('violet') || color.includes('indigo')) return 'from-violet-500 to-purple-600';
    if (color.includes('red') || color.includes('pink') || color.includes('rose')) return 'from-pink-500 to-rose-600';
    if (color.includes('orange')) return 'from-orange-500 to-red-600';
    if (color.includes('yellow') || color.includes('amber')) return 'from-yellow-500 to-orange-600';
    if (color.includes('teal')) return 'from-teal-500 to-cyan-600';
    if (color.includes('cyan')) return 'from-cyan-500 to-blue-600';
    if (color.includes('lime')) return 'from-lime-500 to-green-600';
    return 'from-violet-500 to-purple-600';
  };

  return (
    <div className={`card card-interactive ${isCompleted ? 'selected' : ''}`}>
      {/* Completion indicator */}
      {isCompleted && (
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">✓</span>
          </div>
        </div>
      )}
      
      <div 
        className="p-2xl cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-2xl">
          <div className="flex items-center">
            <div className={`w-16 h-16 bg-gradient-to-br ${getIconColor(topic.color)} rounded-2xl flex items-center justify-center mr-lg transition-all duration-300 hover:scale-110 animate-glow`}>
              {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
            </div>
            <div>
              <h3 className="card-title mb-sm">{topic.name}</h3>
              <p className="body-text" style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                {topic.description}
              </p>
            </div>
          </div>
          <div className="text-right flex items-center">
            <div className="mr-lg">
              <div className="flex items-baseline mb-xs">
                <span className="text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {completedProblems}
                </span>
                <span className="text-lg mx-2" style={{ color: 'var(--text-secondary)' }}>/</span>
                <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                  {totalProblems}
                </span>
                {isCompleted && <span className="ml-2 text-xl">👑</span>}
              </div>
            </div>
            <div className="transition-transform duration-300" style={{ 
              color: 'var(--text-secondary)',
              transform: isExpanded ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1)'
            }}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>
        </div>
        
        <div className="progress-container mb-lg">
          <div 
            className="progress-bar"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center">
          <span className="body-text font-medium">{Math.round(progressPercentage)}% Complete</span>
          <span className={`metadata ${isCompleted ? 'text-emerald-400' : ''}`}>
            {isCompleted ? '✓ Mastered' : `${totalProblems - completedProblems} remaining`}
          </span>
        </div>
      </div>
      
      {isExpanded && (
        <div className="border-t animate-slide-down" style={{ borderColor: 'var(--border-subtle)' }}>
          <div className="p-2xl space-y-md" style={{ background: 'var(--bg-tertiary)' }}>
            {topic.problems.map((problem, index) => (
              <ProblemItem
                key={problem.id}
                problem={problem}
                index={index + 1}
                topicId={topic.id}
                topicColor={topic.color}
                onToggle={onToggleProblem}
                onUpdateNotes={onUpdateNotes}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};