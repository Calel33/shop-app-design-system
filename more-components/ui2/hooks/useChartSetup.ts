import { useEffect, RefObject } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartConfiguration
} from 'chart.js';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface UseChartSetupOptions {
  labels: string[];
  data: number[];
  label?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  tension?: number;
}

/**
 * Custom hook to setup and manage Chart.js line chart
 * Handles initialization, configuration, and cleanup
 */
export const useChartSetup = (
  canvasRef: RefObject<HTMLCanvasElement>,
  options: UseChartSetupOptions
) => {
  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: options.labels,
        datasets: [
          {
            label: options.label || 'Messages',
            data: options.data,
            fill: true,
            tension: options.tension || 0.35,
            backgroundColor: options.backgroundColor || 'rgba(16,185,129,0.15)',
            borderColor: options.borderColor || 'rgb(16,185,129)',
            borderWidth: options.borderWidth || 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            intersect: false,
            mode: 'index',
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#a3a3a3',
              font: {
                size: 11,
              },
            },
          },
          y: {
            grid: {
              color: 'rgba(255,255,255,0.06)',
            },
            ticks: {
              color: '#a3a3a3',
              font: {
                size: 11,
              },
              stepSize: 200,
            },
          },
        },
      },
    };

    const chart = new Chart(ctx, config);

    // Cleanup function
    return () => {
      chart.destroy();
    };
  }, [canvasRef, options.labels, options.data, options.label, options.backgroundColor, options.borderColor, options.borderWidth, options.tension]);
};
