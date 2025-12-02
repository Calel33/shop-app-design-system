import React, { useEffect, useMemo, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartConfiguration } from 'chart.js';
import type { ChartDataset } from '../types/dashboard.types';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface UsageChartProps {
  datasets: ChartDataset[];
}

export const UsageChart: React.FC<UsageChartProps> = ({ datasets }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const labels = useMemo(() => {
    const maxLen = Math.max(0, ...datasets.map(d => d.data.length));
    return Array.from({ length: maxLen }, (_, i) => `${i + 1}`);
  }, [datasets]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data: {
        labels,
        datasets: datasets.map(ds => ({
          label: ds.label,
          data: ds.data,
          backgroundColor: ds.backgroundColor,
          borderWidth: 0,
          borderRadius: 4,
          stack: 'usage',
        })),
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, labels: { color: '#a3a3a3' } },
          tooltip: { mode: 'index', intersect: false },
        },
        scales: {
          x: {
            stacked: true,
            grid: { display: false },
            ticks: { color: '#a3a3a3', font: { size: 11 } },
          },
          y: {
            stacked: true,
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: '#a3a3a3', font: { size: 11 } },
          },
        },
      },
    };

    const chart = new Chart(ctx, config);
    return () => chart.destroy();
  }, [labels, datasets]);

  return (
    <div className="h-64 w-full rounded-xl border border-white/10 bg-neutral-900/60 p-3">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default UsageChart;
