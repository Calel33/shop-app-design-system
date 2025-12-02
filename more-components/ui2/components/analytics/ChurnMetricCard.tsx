import React from 'react';
import { Percent, TrendingDown, TrendingUp } from 'lucide-react';
import { ChurnMetricProps } from '../types/analytics.types';

export const ChurnMetricCard: React.FC<ChurnMetricProps> = ({
  currentChurn,
  benchmarkChurn,
  percentile,
  context,
  onBenchmarkChange,
}) => {
  const delta = benchmarkChurn - currentChurn; // positive = good
  const positive = delta >= 0;

  return (
    <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-white font-medium tracking-tight">Customer Churn</h3>
        <Percent className="text-white/60" size={16} />
      </div>
      <p className="mt-1 text-white/60 text-sm">{context}</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
          <div className="text-xs text-white/60">Current</div>
          <div className="mt-1 text-2xl font-semibold text-white">{currentChurn.toFixed(1)}%</div>
        </div>
        <div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/60">Benchmark</div>
            <div className={`text-xs ${positive ? 'text-emerald-400' : 'text-rose-400'} flex items-center gap-1`}>
              {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
              {Math.abs(delta).toFixed(1)}%
            </div>
          </div>
          <div className="mt-1 text-2xl font-semibold text-white">{benchmarkChurn.toFixed(1)}%</div>
        </div>
      </div>

      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={100}
          value={benchmarkChurn}
          onChange={(e) => onBenchmarkChange?.(Number(e.target.value))}
          className="w-full accent-emerald-500"
          aria-label="Adjust benchmark churn"
        />
        <div className="mt-2 flex items-center justify-between text-xs text-white/50">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Percentile</span>
          <span className="text-white">{percentile}th</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-white/10">
          <div
            className="h-2 rounded-full bg-emerald-500"
            style={{ width: `${percentile}%` }}
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};

export default ChurnMetricCard;
