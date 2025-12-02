import React from 'react';
import { UtilizationBarProps } from './types';

/**
 * UtilizationBar - Animated progress bar for utilization metrics
 * 
 * Features:
 * - Percentage-based fill (0-100)
 * - Gradient fill with emerald to teal
 * - Glass morphism container
 * - Smooth transition animation
 */
export const UtilizationBar: React.FC<UtilizationBarProps> = ({ 
  utilization 
}) => {
  // Clamp utilization between 0 and 100
  const clampedUtilization = Math.min(Math.max(utilization, 0), 100);

  return (
    <div className="h-2 w-full rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-500 ease-out"
        style={{ width: `${clampedUtilization}%` }}
        role="progressbar"
        aria-valuenow={clampedUtilization}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Utilization: ${clampedUtilization}%`}
      />
    </div>
  );
};
