import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import type { GenreChartData } from './types';

export const GenreChart: React.FC<{ data: GenreChartData }> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) chartRef.current.destroy();

    chartRef.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: data.labels,
        datasets: [
          {
            data: data.values,
            backgroundColor: data.colors || ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { padding: 20, usePointStyle: true } },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [data]);

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
      <h2 className="font-medium mb-4">Genre Distribution</h2>
      <div className="h-48">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
