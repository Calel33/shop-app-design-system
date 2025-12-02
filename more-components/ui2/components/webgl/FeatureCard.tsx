/**
 * Feature Card Component
 * Card for displaying AI features with icons
 * @module FeatureCard
 */

'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { FeatureCardProps } from './types';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText = 'Learn more',
  linkColor = 'blue',
  animationDelay,
}) => {
  const colorMap: Record<string, string> = {
    blue: 'text-blue-400',
    indigo: 'text-indigo-400',
    purple: 'text-purple-400',
  };

  return (
    <GlassCard floating animationDelay={animationDelay}>
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/8 border border-white/15 mb-4">
        {icon}
      </div>
      <h3 className="text-xl text-white mb-3 font-semibold">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-4">{description}</p>
      <div className={`flex items-center ${colorMap[linkColor] || colorMap.blue} text-sm cursor-pointer hover:opacity-80 transition-opacity`}>
        <span>{linkText}</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </GlassCard>
  );
};

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
