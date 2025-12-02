export interface GPUResourceStats {
  totalGPUs: number;
  activeUnits: number;
  a100Count: number;
  h100Count: number;
  utilizationPercent: number;
}

export type PerformanceStatus = 'optimal' | 'moderate' | 'warning';

export interface PerformanceMetric {
  label: string;
  value: string;
  status: PerformanceStatus;
  icon: React.ReactNode;
}

export type JobStatus = 'running' | 'queued' | 'starting';

export interface ActiveJob {
  name: string;
  gpuCount: number;
  status: JobStatus;
  eta: string;
}

export interface ChartDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface GPUDashboardProps {
  stats: GPUResourceStats;
  metrics: PerformanceMetric[];
  jobs: ActiveJob[];
  chartData: ChartDataset[];
  refreshInterval?: number;
}
