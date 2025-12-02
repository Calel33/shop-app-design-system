import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import type { SpectrumChartData } from './types';

export const SpectrumChart: React.FC<{ data: SpectrumChartData }> = ({ data }) => {
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
        labels: data.frequencies,
        datasets: [
          {
            data: data.amplitudes,
            backgroundColor: data.amplitudes.map((val) =>
              val > 70 ? '#ef4444' : val > 40 ? '#f59e0b' : '#10b981'
            ),
            borderRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Frequency (Hz)' } },
          y: { title: { display: true, text: 'Amplitude (dB)' }, beginAtZero: true },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [data]);

  return (
    <div className="bg-slate-900/40 backdrop-blur-lg border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-medium">Frequency Spectrum Analysis</h2>
        <button className="text-xs text-white/60 hover:text-white transition">View Details</button>
      </div>
      <div className="h-64">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};
