import React from 'react';
import { GlassBadgeProps } from './types';

const variantClasses = {
  subtle: 'bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10',
  medium: 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10',
  strong: 'bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-20',
};

export const GlassBadge: React.FC<GlassBadgeProps> = ({
  children,
  variant = 'subtle',
  className = '',
}) => {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
