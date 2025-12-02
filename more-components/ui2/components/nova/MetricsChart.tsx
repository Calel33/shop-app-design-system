import { useRef, useEffect } from 'react';

export const MetricsChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    // Simple gradient visualization instead of Chart.js
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = 160;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, 'rgba(16,185,129,0.3)');
    gradient.addColorStop(1, 'rgba(16,185,129,0.1)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw simple line chart
    ctx.strokeStyle = 'rgb(16,185,129)';
    ctx.lineWidth = 2;
    ctx.beginPath();

    const data = [320, 410, 390, 520, 610, 700, 650];
    const step = canvas.width / (data.length - 1);
    const max = Math.max(...data);

    data.forEach((value, index) => {
      const x = index * step;
      const y = canvas.height - (value / max) * canvas.height * 0.8;
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();
  }, []);

  return (
    <div className="mt-4">
      <div className="relative h-40">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
    </div>
  );
};
