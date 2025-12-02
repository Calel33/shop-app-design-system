/**
 * Glass Card Component
 * Reusable glass morphism card with backdrop blur
 * @module GlassCard
 */

'use client';

import React from 'react';
import { GlassCardProps } from './types';

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  gradient = true,
  floating = false,
  animationDelay,
}) => {
  const baseClasses = 'backdrop-blur-[14px] backdrop-brightness-[0.91] border border-white/10 rounded-2xl p-6';
  const gradientClasses = gradient ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-white/5';
  const floatingClasses = floating ? 'floating-animation' : '';
  
  return (
    <div
      className={`${baseClasses} ${gradientClasses} ${floatingClasses} ${className}`}
      style={animationDelay ? { animationDelay } : undefined}
    >
      {children}
    </div>
  );
};

GlassCard.displayName = 'GlassCard';

export default GlassCard;
