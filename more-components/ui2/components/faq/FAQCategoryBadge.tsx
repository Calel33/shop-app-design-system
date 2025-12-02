import React from 'react';
import type { FAQCategoryBadgeProps, FAQCategoryColor } from '../types/faq.types';

const colorClasses: Record<FAQCategoryColor, {
  bg: string;
  border: string;
  text: string;
}> = {
  red: {
    bg: 'bg-red-500/10 dark:bg-red-400/10',
    border: 'border-red-500/20 dark:border-red-400/20',
    text: 'text-red-400 dark:text-red-300',
  },
  blue: {
    bg: 'bg-blue-500/10 dark:bg-blue-400/10',
    border: 'border-blue-500/20 dark:border-blue-400/20',
    text: 'text-blue-400 dark:text-blue-300',
  },
  green: {
    bg: 'bg-green-500/10 dark:bg-green-400/10',
    border: 'border-green-500/20 dark:border-green-400/20',
    text: 'text-green-400 dark:text-green-300',
  },
  purple: {
    bg: 'bg-purple-500/10 dark:bg-purple-400/10',
    border: 'border-purple-500/20 dark:border-purple-400/20',
    text: 'text-purple-400 dark:text-purple-300',
  },
  orange: {
    bg: 'bg-orange-500/10 dark:bg-orange-400/10',
    border: 'border-orange-500/20 dark:border-orange-400/20',
    text: 'text-orange-400 dark:text-orange-300',
  },
  emerald: {
    bg: 'bg-emerald-500/10 dark:bg-emerald-400/10',
    border: 'border-emerald-500/20 dark:border-emerald-400/20',
    text: 'text-emerald-400 dark:text-emerald-300',
  },
};

const sizeClasses = {
  sm: 'px-2 py-0.5 text-[10px] gap-1',
  md: 'px-3 py-1 text-xs gap-2',
  lg: 'px-4 py-1.5 text-sm gap-2',
};

const iconSizes = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
};

export const FAQCategoryBadge: React.FC<FAQCategoryBadgeProps> = ({
  category,
  size = 'md',
}) => {
  const colors = colorClasses[category.color];
  
  return (
    <div
      className={`inline-flex items-center rounded-full border ${colors.bg} ${colors.border} ${sizeClasses[size]}`}
      role="status"
      aria-label={`Category: ${category.name}`}
    >
      <svg
        className={`${iconSizes[size]} ${colors.text}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {/* Dynamic icon rendering - placeholder for now */}
        <circle cx="12" cy="12" r="10" />
      </svg>
      <span className={`font-medium ${colors.text} tracking-wider uppercase`}>
        {category.name}
      </span>
    </div>
  );
};
