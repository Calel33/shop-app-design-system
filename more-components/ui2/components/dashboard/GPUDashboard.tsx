import React, { useEffect, useMemo, useState } from 'react';
import type { GPUDashboardProps } from '../types/dashboard.types';
import { ResourceOverviewCard } from './ResourceOverviewCard';
import { UsageChart } from './UsageChart';
import { PerformanceMetrics } from './PerformanceMetrics';
import { SystemStatus } from './SystemStatus';
import { ActiveJobs } from './ActiveJobs';
import { ResourceAllocation } from './ResourceAllocation';

export const GPUDashboard: React.FC<GPUDashboardProps> = ({ stats, metrics, jobs, chartData, refreshInterval = 5000 }) => {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), refreshInterval);
    return () => clearInterval(id);
  }, [refreshInterval]);

  const allocation = useMemo(() => {
    const used = Math.min(100, Math.round(stats.utilizationPercent));
    return [
      { label: 'Compute Projects', percent: Math.min(80, used), color: 'bg-emerald-500' },
      { label: 'Research', percent: Math.max(0, used - 40), color: 'bg-sky-500' },
      { label: 'Idle/Buffer', percent: Math.max(0, 100 - used), color: 'bg-neutral-600' },
    ];
  }, [stats.utilizationPercent, tick]);

  const system = useMemo(
    () => [
      { label: 'Cluster Health', value: 'OK', status: 'green' as const },
      { label: 'Avg Temp', value: '68°C', status: 'yellow' as const },
      { label: 'Power Draw', value: '31.4 kW', status: 'green' as const },
    ],
    [tick]
  );

  return (
    <div className="w-full space-y-4 text-white">
      {/* Overview */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <ResourceOverviewCard label="Total GPUs" value={stats.totalGPUs} />
        <ResourceOverviewCard label="Active Units" value={stats.activeUnits} />
        <ResourceOverviewCard label="A100" value={stats.a100Count} />
        <ResourceOverviewCard label="H100" value={stats.h100Count} />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <UsageChart datasets={chartData} />
          <PerformanceMetrics metrics={metrics} />
        </div>
        <div className="space-y-4">
          <SystemStatus items={system} />
          <ResourceAllocation items={allocation} />
          <ActiveJobs jobs={jobs} />
        </div>
      </div>
    </div>
  );
};

export default GPUDashboard;
