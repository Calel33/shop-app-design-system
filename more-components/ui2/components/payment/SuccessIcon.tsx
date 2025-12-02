import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { SuccessIconProps } from './types';

/**
 * SuccessIcon - Circular success badge with animated checkmark
 * 
 * A reusable success indicator with green checkmark icon in a circular badge.
 * Features subtle glow effect and configurable sizes.
 * 
 * @example
 * ```tsx
 * <SuccessIcon size="md" />
 * ```
 */
export const SuccessIcon: React.FC<SuccessIconProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
  };

  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`
        flex items-center justify-center
        bg-secondary/15 rounded-full shadow-md
        ${sizeClasses[size]}
        ${className}
      `}
      role="img"
      aria-label="Success"
    >
      <CheckCircle 
        className={`text-secondary ${iconSizeClasses[size]}`}
        strokeWidth={2}
      />
    </div>
  );
};
