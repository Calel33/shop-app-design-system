/**
 * SecurityOptionCard Component
 * Individual security option with toggle switch
 */

import React from 'react';
import type { SecurityOptionCardProps } from './types';

export const SecurityOptionCard: React.FC<SecurityOptionCardProps> = ({
  option,
  onToggle,
  className = '',
}) => {
  const handleToggle = () => {
    onToggle(option.id, !option.enabled);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className={`bg-neutral-800/40 rounded-lg p-4 ${className}`}>
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-1 text-blue-500 w-5 h-5" aria-hidden="true">
          {option.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center gap-4">
            <h4 className="text-white font-medium text-sm sm:text-base">{option.title}</h4>

            {/* Toggle Switch */}
            <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
              <input
                type="checkbox"
                checked={option.enabled}
                onChange={handleToggle}
                onKeyDown={handleKeyDown}
                className="sr-only peer"
                aria-label={`Toggle ${option.title}`}
              />
              <div className="w-11 h-6 bg-neutral-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>
          <p className="text-neutral-400 text-sm mt-1">{option.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SecurityOptionCard;
