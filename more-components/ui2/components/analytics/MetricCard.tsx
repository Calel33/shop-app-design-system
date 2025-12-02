import React from 'react';
import { MetricCardProps } from '../types/analytics.types';

const trendColors = {
  up: 'text-emerald-400',
  down: 'text-rose-400',
} as const;

export const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, trend }) => {
  return (
    <div
      className="rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-4 flex items-center gap-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
      role="group"
    >
      <div className="shrink-0 text-white/80">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-white/60 truncate">{label}</div>
        <div className="mt-0.5 text-2xl font-semibold text-white tracking-tight">{value}</div>
      </div>
      {trend && (
        <div
          className={`text-sm font-medium ${trendColors[trend.direction]} ml-auto whitespace-nowrap`}
          aria-label={`trend ${trend.direction} ${trend.value}`}
        >
          {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </div>
  );
};

export default MetricCard;
