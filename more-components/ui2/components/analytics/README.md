# Analytics Components

Growth Analytics dashboard components with dark theme and glassmorphism.

## Components

- `AnalyticsDashboard` – Composed dashboard layout
- `DashboardNav` – Top navigation
- `AnalyticsHero` – Heading and CTAs
- `MetricCard` – Reusable stat card
- `ChurnMetricCard` – Churn with benchmark slider and percentile bar
- `ObjectivesCard` – Quarterly objectives with progress
- `KPISnapshotCard` – KPI grid with quick actions

## Usage

```tsx
import { AnalyticsDashboard } from '@/ui/components/analytics';

export default function Page() {
  return <AnalyticsDashboard />;
}
```

### Individual Components

```tsx
import { MetricCard, ChurnMetricCard, ObjectivesCard, KPISnapshotCard } from '@/ui/components/analytics';
import { ArrowUpRight, Users } from 'lucide-react';

<MetricCard icon={<Users size={18} />} value="14,208" label="Active Users" trend={{ direction: 'up', value: '4.1%' }} />

<ChurnMetricCard currentChurn={6.5} benchmarkChurn={8} percentile={92} context="Below industry benchmark" />

<ObjectivesCard
  targetARR="$2.5M"
  deadline="Q4 2025"
  objectives={[
    { icon: <ArrowUpRight size={14} />, title: 'Increase MRR by 20%', progress: 65 },
  ]}
/>

<KPISnapshotCard
  metrics={[{ icon: <Users size={14} />, value: '14,208', label: 'Active' }]}
  actions={[{ label: 'Share', icon: <Users size={14} />, onClick: () => {} }]}
/>
```
