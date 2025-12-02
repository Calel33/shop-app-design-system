import React from 'react';
import { KPIMetric } from './types';

interface KPICardProps {
  metric: KPIMetric;
  delay?: number;
}

export const KPICard: React.FC<KPICardProps> = ({ metric, delay = 0 }) => {
  const Icon = metric.icon;
  
  return (
    <div 
      className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-opacity-50 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div 
          className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br ${metric.gradientFrom} ${metric.gradientTo} shadow-lg`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <span 
          className={`text-xs font-medium ${metric.accentColor} bg-opacity-10 px-3 py-1 rounded-full`}
        >
          {metric.changeType === 'positive' ? '+' : ''}{metric.change}
        </span>
      </div>
      <div>
        <p className="text-sm text-slate-500 mb-1">{metric.title}</p>
        <p className="text-3xl font-semibold text-slate-800 mb-1">{metric.value}</p>
        <p className="text-xs text-slate-400">{metric.description}</p>
      </div>
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${metric.gradientFrom} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
      />
    </div>
  );
};
