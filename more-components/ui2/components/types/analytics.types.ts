import React from 'react';

export interface MetricCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
}

export interface ChurnMetricProps {
  currentChurn: number; // percentage 0-100
  benchmarkChurn: number; // percentage 0-100
  percentile: number; // e.g., 92 => top 8%
  context: string; // short sentence describing context
  onBenchmarkChange?: (value: number) => void;
}

export interface ObjectiveItem {
  icon: React.ReactNode;
  title: string;
  progress: number; // 0-100
}

export interface ObjectivesCardProps {
  targetARR: string; // e.g., "$2.5M"
  deadline: string; // e.g., "Q4 2025"
  objectives: ObjectiveItem[];
}

export interface KPIMetric {
  icon: React.ReactNode;
  value: string;
  label: string;
}

export interface KPISnapshotProps {
  metrics: KPIMetric[];
  actions: {
    label: string;
    icon: React.ReactNode;
    onClick: () => void;
  }[];
}
