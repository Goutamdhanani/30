import React, { useState } from 'react';
import { Clock, CheckCircle2, Circle, MessageSquare, ExternalLink } from 'lucide-react';
import { Problem } from '../types';

interface ProblemItemProps {
  problem: Problem;
  index: number;
  topicId: string;
  topicColor: string;
  onToggle: (topicId: string, problemId: string, timeSpent?: number) => void;
  onUpdateNotes: (topicId: string, problemId: string, notes: string) => void;
}

export const ProblemItem: React.FC<ProblemItemProps> = ({
  problem,
  index,
  topicId,
  topicColor,
  onToggle,
  onUpdateNotes,
}) => {
  const [showTimeInput, setShowTimeInput] = useState(false);
  const [timeSpent, setTimeSpent] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState(problem.notes || '');

  const getDifficultyStyle = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'status-easy';
      case 'Medium': return 'status-medium';
      case 'Hard': return 'status-hard';
      default: return 'status-easy';
    }
  };

  const handleToggle = () => {
    if (!problem.completed) {
      setShowTimeInput(true);
    } else {
      onToggle(topicId, problem.id);
    }
  };

  const handleTimeSubmit = () => {
    const minutes = parseInt(timeSpent) || 0;
    setShowTimeInput(false);
    // Add loading state simulation
    setTimeout(() => {
    onToggle(topicId, problem.id, minutes);
      setTimeSpent('');
    }, 200);
  };

  const handleNotesSubmit = () => {
    setShowNotes(false);
    // Add loading state simulation
    setTimeout(() => {
    onUpdateNotes(topicId, problem.id, notes);
    }, 200);
  };

  const isFinalProblem = problem.name.includes('FINAL');

  return (
    <div className={`card p-lg ${problem.completed ? 'selected' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-1">
          <div className="flex items-center mr-lg">
            <div className="w-8 h-8 rounded-full flex items-center justify-center mr-md" 
                 style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-medium)' }}>
              <span className="metadata-small font-medium">#{index}</span>
            </div>
            <button
              onClick={handleToggle}
              className={`transition-all duration-200 ${
                problem.completed 
                  ? 'text-emerald-500 hover:text-emerald-400' 
                  : 'hover:text-white'
              }`}
              style={{ color: problem.completed ? 'var(--accent-secondary)' : 'var(--text-secondary)' }}
            >
              {problem.completed ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Circle className="w-6 h-6" />
              )}
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center mb-sm">
              <h4 className={`card-title mr-md ${problem.completed ? 'line-through opacity-60' : ''}`}>
                {problem.name}
              </h4>
              {isFinalProblem && <span className="text-lg">👑</span>}
              {problem.leetcodeNumber > 0 && (
                <a
                  href={`https://leetcode.com/problems/${problem.name.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '')}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-md transition-all duration-200 hover:scale-110"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            
            <div className="flex items-center flex-wrap gap-sm">
              <span className={`status-badge ${getDifficultyStyle(problem.difficulty)}`}>
                {problem.difficulty}
              </span>
              {problem.leetcodeNumber > 0 && (
                <span className="metadata-small px-2 py-1 rounded" 
                      style={{ background: 'var(--bg-tertiary)' }}>
                  LC {problem.leetcodeNumber}
                </span>
              )}
              {problem.completed && problem.timeSpent && (
                <span className="metadata-small flex items-center px-2 py-1 rounded" 
                      style={{ background: 'var(--bg-tertiary)' }}>
                  <Clock className="w-3 h-3 mr-1" />
                  {problem.timeSpent}m
                </span>
              )}
              {problem.attempts > 0 && (
                <span className="metadata-small px-2 py-1 rounded" 
                      style={{ background: 'var(--bg-tertiary)' }}>
                  {problem.attempts} attempt{problem.attempts !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => setShowNotes(!showNotes)}
          className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 ${
            problem.notes 
              ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
              : 'hover:bg-white/5 hover:border-white/10 border border-transparent'
          }`}
          style={{ color: problem.notes ? 'var(--accent-primary)' : 'var(--text-secondary)' }}
        >
          <MessageSquare className="w-4 h-4" />
        </button>
      </div>

      {showTimeInput && (
        <div className="mt-lg card p-lg animate-slide-down">
          <label className="body-text font-medium mb-md block">
            Time spent (minutes):
          </label>
          <div className="flex gap-md">
            <input
              type="number"
              value={timeSpent}
              onChange={(e) => setTimeSpent(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleTimeSubmit()}
              placeholder="30"
              className="flex-1 p-md rounded-lg border text-white placeholder-gray-400 transition-all duration-200 focus:scale-105"
              style={{ 
                background: 'var(--bg-tertiary)', 
                borderColor: 'var(--border-medium)',
                fontSize: '15px'
              }}
              autoFocus
            />
            <button onClick={handleTimeSubmit} className="btn btn-success">
              Complete
            </button>
            <button onClick={() => setShowTimeInput(false)} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      )}

      {showNotes && (
        <div className="mt-lg card p-lg animate-slide-down">
          <label className="body-text font-medium mb-md block">
            Notes:
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your thoughts, approach, or key insights..."
            className="w-full p-md rounded-lg border text-white placeholder-gray-400 mb-md transition-all duration-200 focus:scale-105"
            style={{ 
              background: 'var(--bg-tertiary)', 
              borderColor: 'var(--border-medium)',
              fontSize: '15px',
              minHeight: '100px'
            }}
            rows={4}
          />
          <div className="flex gap-md">
            <button onClick={handleNotesSubmit} className="btn btn-primary">
              Save
            </button>
            <button onClick={() => setShowNotes(false)} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};