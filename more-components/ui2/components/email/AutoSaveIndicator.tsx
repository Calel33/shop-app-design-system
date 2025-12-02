import React from 'react';
import { AutoSaveIndicatorProps } from './types';

export const AutoSaveIndicator: React.FC<AutoSaveIndicatorProps> = ({
  lastSaved,
  isSaving,
}) => {
  const getTimeAgo = (date?: Date): string => {
    if (!date) return 'Not saved';
    
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 120) return '1 minute ago';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    if (seconds < 7200) return '1 hour ago';
    return `${Math.floor(seconds / 3600)} hours ago`;
  };

  return (
    <div className="flex items-center space-x-1.5 text-xs text-zinc-400">
      {isSaving ? (
        <>
          <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
          <span>Saving...</span>
        </>
      ) : (
        <>
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          <span>{lastSaved ? `Saved ${getTimeAgo(lastSaved)}` : 'Draft auto-saved'}</span>
        </>
      )}
    </div>
  );
};
