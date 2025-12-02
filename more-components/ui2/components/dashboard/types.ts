// TypeScript interfaces for Business Intelligence Dashboard

export interface KPIMetric {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ComponentType<{ className?: string }>;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  description: string;
}

export interface ActivityRecord {
  id: string;
  userName: string;
  userAvatar: string;
  action: string;
  timestamp: string;
  status: 'completed' | 'in-progress' | 'scheduled';
}

export interface RevenueDataPoint {
  month: string;
  q3Value: number;
  q4Value: number;
}

export interface NavigationItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  active?: boolean;
  onClick?: () => void;
}
