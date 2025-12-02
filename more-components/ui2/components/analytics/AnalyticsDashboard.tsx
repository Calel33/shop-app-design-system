import React, { useState } from 'react';
import { DashboardNav } from './DashboardNav';
import { AnalyticsHero } from './AnalyticsHero';
import { MetricCard } from './MetricCard';
import { ChurnMetricCard } from './ChurnMetricCard';
import { ObjectivesCard } from './ObjectivesCard';
import { KPISnapshotCard } from './KPISnapshotCard';
import { ArrowUpRight, DollarSign, LineChart, Users } from 'lucide-react';

export interface AnalyticsDashboardProps {
  onPrimaryCta?: () => void;
  onSecondaryCta?: () => void;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onPrimaryCta, onSecondaryCta }) => {
  const [benchmark, setBenchmark] = useState<number>(8);

  return (
    <div className="min-h-[100dvh] bg-neutral-950 text-white">
      <DashboardNav title="PulsePeak" notifications={2} />
      <main className="pb-16">
        <AnalyticsHero
          primaryCta={onPrimaryCta ? { label: 'Create Report', onClick: onPrimaryCta } : undefined}
          secondaryCta={onSecondaryCta ? { label: 'Invite Team', onClick: onSecondaryCta } : undefined}
        />

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top metric row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard icon={<DollarSign size={18} />} value="$248k" label="MRR" trend={{ direction: 'up', value: '12.4%' }} />
            <MetricCard icon={<Users size={18} />} value="14,208" label="Active Users" trend={{ direction: 'up', value: '4.1%' }} />
            <MetricCard icon={<LineChart size={18} />} value="2.3%" label="Churn" trend={{ direction: 'down', value: '0.3%' }} />
            <MetricCard icon={<ArrowUpRight size={18} />} value="31%" label="MoM Growth" trend={{ direction: 'up', value: '3.2%' }} />
          </div>

          {/* Cards grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ChurnMetricCard
                currentChurn={6.5}
                benchmarkChurn={benchmark}
                percentile={92}
                context="Your churn is below the industry benchmark. Keep improving onboarding and value moments."
                onBenchmarkChange={setBenchmark}
              />
            </div>
            <div className="lg:col-span-1">
              <ObjectivesCard
                targetARR="$2.5M"
                deadline="Q4 2025"
                objectives={[
                  { icon: <ArrowUpRight size={14} />, title: 'Increase MRR by 20%', progress: 65 },
                  { icon: <Users size={14} />, title: 'Reach 20k MAU', progress: 54 },
                  { icon: <LineChart size={14} />, title: 'Reduce churn below 2%', progress: 40 },
                ]}
              />
            </div>
            <div className="lg:col-span-1">
              <KPISnapshotCard
                metrics={[
                  { icon: <DollarSign size={14} />, value: '$1.24M', label: 'ARR' },
                  { icon: <Users size={14} />, value: '14,208', label: 'Active' },
                  { icon: <LineChart size={14} />, value: '3.1%', label: 'Churn' },
                  { icon: <ArrowUpRight size={14} />, value: '31%', label: 'MoM' },
                  { icon: <ArrowUpRight size={14} />, value: '4.2%', label: 'ARPU' },
                  { icon: <ArrowUpRight size={14} />, value: '6.8%', label: 'LTV' },
                ]}
                actions={[
                  { label: 'Export', icon: <ArrowUpRight size={14} />, onClick: () => {} },
                  { label: 'Share', icon: <Users size={14} />, onClick: () => {} },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
