import React from 'react';
import { GlassCardProps } from './types';

const variantClasses = {
  subtle: 'bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10',
  medium: 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-10',
  strong: 'bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-20',
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'medium',
  className = '',
}) => {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
