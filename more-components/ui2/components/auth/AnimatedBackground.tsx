/**
 * AnimatedBackground Component
 * Dual-layer rotating blur gradients for glassmorphic effect
 */

import React from 'react';
import type { AnimatedBackgroundProps } from './types';

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 rounded-2xl overflow-hidden ${className}`}>
      {/* Primary blur layer - 10s rotation */}
      <div className="pointer-events-none absolute -inset-10 rounded-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent blur-xl opacity-50 animate-spin [animation-duration:10s]" />
      
      {/* Secondary blur layer - 18s reverse rotation */}
      <div className="pointer-events-none absolute -inset-20 rounded-full bg-gradient-to-r from-transparent via-gray-500/15 to-transparent blur-2xl opacity-30 animate-spin [animation-duration:18s] [animation-direction:reverse]" />
    </div>
  );
};

export default AnimatedBackground;
