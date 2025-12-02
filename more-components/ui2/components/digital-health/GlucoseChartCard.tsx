import { useEffect, useRef } from 'react';
import { RefreshCcw } from 'lucide-react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
import { GlucoseChartCardProps } from './types';

Chart.register(...registerables);

export const GlucoseChartCard = ({ 
  title, 
  data, 
  targetRange,
  onRefresh 
}: GlucoseChartCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels: data.map(d => d.day),
        datasets: [{
          label: 'Glucose (mg/dL)',
          data: data.map(d => d.value),
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          borderColor: '#10b981',
          pointRadius: 3,
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#10b981',
          pointHoverRadius: 5,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: false,
            suggestedMin: targetRange.min - 20,
            suggestedMax: targetRange.max + 20,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)'
            }
          },
          x: {
            grid: {
              display: false
            },
            ticks: {
              color: 'rgba(255, 255, 255, 0.6)'
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#fff',
            bodyColor: '#fff',
            borderColor: '#10b981',
            borderWidth: 1
          }
        }
      }
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data, targetRange]);

  return (
    <div 
      className="flex flex-col rounded-xl p-6 shadow-sm ring-1 lg:col-span-1 sm:col-span-2 bg-card ring-border opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.85s', animationFillMode: 'forwards' }}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-5xl font-normal tracking-tight font-playfair">
          {title}
        </h3>
        {onRefresh && (
          <button 
            onClick={onRefresh}
            className="rounded-md p-1 text-muted-foreground transition hover:bg-muted focus-visible:ring focus-visible:ring-ring"
            aria-label="Refresh chart"
          >
            <RefreshCcw className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <div className="mt-4 h-40">
        <canvas 
          ref={canvasRef}
          aria-label="Line chart of weekly glucose readings"
        />
      </div>
      
      <p className="mt-4 text-xs text-muted-foreground">
        {targetRange.description}
      </p>
    </div>
  );
};
