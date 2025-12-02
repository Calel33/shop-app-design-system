/**
 * Reusable Bento card component with animation support
 * @module BentoCard
 */

import React from 'react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import type { BentoCardProps } from '../types/medical.types';

export const BentoCard: React.FC<BentoCardProps> = ({
  className = '',
  children,
  animationDelay = 0,
  animationType = 'fade-in',
}) => {
  const { ref, isVisible } = useScrollAnimation();

  const animationClass = isVisible ? `animate-${animationType}` : 'opacity-0';
  const delayClass = animationDelay > 0 ? `animate-delay-${animationDelay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

BentoCard.displayName = 'BentoCard';
