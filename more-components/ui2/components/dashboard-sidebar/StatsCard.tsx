import React from 'react';
import { Music, HardDrive, Activity, DollarSign } from 'lucide-react';
import type { StatsCardProps } from './types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  music: Music,
  'hard-drive': HardDrive,
  activity: Activity,
  'dollar-sign': DollarSign,
};

const iconColorMap: Record<StatsCardProps['iconColor'], string> = {
  blue: 'bg-blue-600/20 text-blue-400',
  cyan: 'bg-cyan-600/20 text-cyan-400',
  green: 'bg-green-600/20 text-green-400',
  purple: 'bg-purple-600/20 text-purple-400',
};

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  icon,
  iconColor,
  trend,
}) => {
  const Icon = iconMap[icon] || Music;
  const colorClass = iconColorMap[iconColor];

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-white/60">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
        <div className={`h-10 w-10 ${colorClass} rounded-lg flex items-center justify-center`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      {trend && (
        <div className="mt-2 text-xs">
          <span
            className={
              trend.direction === 'up'
                ? 'text-green-400'
                : trend.direction === 'down'
                ? 'text-red-400'
                : 'text-white/60'
            }
          >
            {trend.value}
          </span>
        </div>
      )}
    </div>
  );
};
