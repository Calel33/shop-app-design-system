import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { RevenueDataPoint } from './types';

Chart.register(...registerables);

interface RevenueChartProps {
  data: RevenueDataPoint[];
  delay?: number;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data, delay = 0 }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart instance
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const labels = data.map(d => d.month);
    const q4Values = data.map(d => d.q4Value);
    const q3Values = data.map(d => d.q3Value);

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Q4 Revenue',
            data: q4Values,
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#8b5cf6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
          },
          {
            label: 'Q3 Revenue',
            data: q3Values,
            borderColor: '#e2e8f0',
            backgroundColor: 'rgba(226, 232, 240, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#e2e8f0',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: '#64748b', font: { size: 12 } },
          },
          y: {
            grid: { color: '#f1f5f9' },
            ticks: {
              color: '#64748b',
              font: { size: 12 },
              callback: (value) => '$' + (Number(value) / 1000) + 'k',
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
              usePointStyle: true,
              padding: 20,
              color: '#64748b',
              font: { size: 12 },
            },
          },
          tooltip: {
            backgroundColor: '#ffffff',
            titleColor: '#1e293b',
            bodyColor: '#64748b',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            cornerRadius: 12,
            padding: 12,
            callbacks: {
              label: (ctx) => ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString(),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'index',
        },
      },
    };

    chartInstanceRef.current = new Chart(ctx, config);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div 
      className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 opacity-0 animate-fade-in-up" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-medium text-slate-800">Monthly Revenue Trends</h3>
          <p className="text-sm text-slate-500">Comparing Q3 vs Q4 performance</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-xs bg-violet-100 text-violet-600 rounded-lg">Q4</button>
          <button className="px-3 py-1 text-xs text-slate-500 hover:bg-slate-100 rounded-lg">Q3</button>
        </div>
      </div>
      <div className="relative h-64">
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};
