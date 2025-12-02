/**
 * Stat Card Component
 * Card for displaying statistics and metrics
 * @module StatCard
 */

'use client';

import React from 'react';
import { StatCardProps } from './types';

export const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-[200] text-white mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-sm text-white/60">{label}</div>
    </div>
  );
};

StatCard.displayName = 'StatCard';

export default StatCard;
