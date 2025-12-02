import React from 'react';
import type { PerformanceMetric } from '../types/dashboard.types';

interface PerformanceMetricsProps {
  metrics: PerformanceMetric[];
}

const statusClasses: Record<PerformanceMetric['status'], string> = {
  optimal: 'text-emerald-400 bg-emerald-500/10',
  moderate: 'text-amber-400 bg-amber-500/10',
  warning: 'text-rose-400 bg-rose-500/10',
};

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {metrics.map((m, idx) => (
        <div key={idx} className="flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/60 p-4">
          <div className="flex items-center gap-3">
            <div className="text-neutral-300">{m.icon}</div>
            <div>
              <div className="text-xs text-neutral-400">{m.label}</div>
              <div className="text-lg font-semibold text-white tabular-nums">{m.value}</div>
            </div>
          </div>
          <span className={`rounded-full px-2 py-1 text-xs ${statusClasses[m.status]}`}>{m.status}</span>
        </div>
      ))}
    </div>
  );
};

export default PerformanceMetrics;
