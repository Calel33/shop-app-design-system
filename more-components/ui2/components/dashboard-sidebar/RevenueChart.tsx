import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { TrendingUp } from 'lucide-react';
import type { RevenueChartData } from './types';

interface RevenueChartProps {
  data: RevenueChartData;
}

export const RevenueChart: React.FC<RevenueChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Set Chart.js defaults for dark theme
    Chart.defaults.color = 'rgba(255, 255, 255, 0.6)';
    Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Revenue',
            data: data.revenue,
            borderColor: '#06b6d4',
            backgroundColor: 'rgba(6, 182, 212, 0.1)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#06b6d4',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4,
          },
          ...(data.target
            ? [
                {
                  label: 'Target',
                  data: data.target,
                  borderColor: 'rgba(139, 92, 246, 0.5)',
                  backgroundColor: 'transparent',
                  borderDash: [5, 5],
                  pointRadius: 0,
                  tension: 0.2,
                },
              ]
            : []),
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: { usePointStyle: true, padding: 20 },
          },
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function (value) {
                return '$' + (Number(value) / 1000) + 'k';
              },
            },
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium">Monthly Revenue Trends</h2>
        <div className="flex items-center gap-2">
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            +12.5%
          </span>
          <select className="text-xs bg-slate-800/50 border border-white/10 rounded px-2 py-1">
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>
      <div className="h-48">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
