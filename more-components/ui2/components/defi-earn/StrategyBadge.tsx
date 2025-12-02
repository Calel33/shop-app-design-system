import React from 'react';
import * as LucideIcons from 'lucide-react';
import { StrategyBadgeProps } from './types';

/**
 * StrategyBadge - Display strategy label with icon
 * 
 * Features:
 * - Three variants: bullish, trending, limited-downside
 * - Dynamic icon support via Lucide
 * - Glass morphism style
 * - Responsive text sizing
 */
export const StrategyBadge: React.FC<StrategyBadgeProps> = ({ 
  label, 
  icon 
}) => {
  // Dynamically get the Lucide icon component
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react`);
  }

  return (
    <span className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-neutral-200">
      {IconComponent && <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />}
      <span className="uppercase">{label}</span>
    </span>
  );
};
