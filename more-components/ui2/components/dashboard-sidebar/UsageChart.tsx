import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import type { UsageChartData } from './types';

export const UsageChart: React.FC<{ data: UsageChartData }> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: 'rgba(59, 130, 246, 0.8)',
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, ticks: { stepSize: 5 } },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [data]);

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
      <h2 className="font-medium mb-4">Studio Usage (7 days)</h2>
      <div className="h-48">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
