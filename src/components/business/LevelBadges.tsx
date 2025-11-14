import React from 'react';
import { cn } from '@/lib/utils';

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

export interface LevelBadgesProps extends React.HTMLAttributes<HTMLDivElement> {
  levels: Level[];
}

const levelStyles: Record<Level, string> = {
  Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
};

export function LevelBadges({ levels, className, ...props }: LevelBadgesProps) {
  if (!levels?.length) return null;

  return (
    <div className={cn('mt-3 flex flex-wrap gap-2', className)} {...props}>
      {levels.map((level) => (
        <span
          key={level}
          className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold',
            levelStyles[level]
          )}
        >
          {level}
        </span>
      ))}
    </div>
  );
}
