import React from 'react';
import * as LucideIcons from 'lucide-react';
import { TokenIconProps } from './types';

/**
 * TokenIcon - Displays a token icon with a gradient background
 * 
 * Features:
 * - Dynamic gradient colors from props
 * - Support for all Lucide icon names
 * - Three sizes: sm, md, lg
 * - Glass morphism ring effect
 */
export const TokenIcon: React.FC<TokenIconProps> = ({ 
  icon, 
  gradient, 
  size = 'md' 
}) => {
  // Map size to Tailwind classes
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-9 w-9',
    lg: 'h-12 w-12'
  };

  const iconSizeClasses = {
    sm: 'h-3.5 w-3.5',
    md: 'h-4 w-4',
    lg: 'h-5 w-5'
  };

  // Dynamically get the Lucide icon component
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[icon];

  if (!IconComponent) {
    console.warn(`Icon "${icon}" not found in lucide-react`);
    return null;
  }

  return (
    <span 
      className={`inline-flex items-center justify-center rounded-full ${sizeClasses[size]} bg-gradient-to-br from-${gradient.from} to-${gradient.to} ring-1 ring-white/10`}
      aria-hidden="true"
    >
      <IconComponent className={`${iconSizeClasses[size]} text-neutral-950`} />
    </span>
  );
};
