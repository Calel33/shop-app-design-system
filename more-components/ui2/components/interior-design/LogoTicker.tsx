import React, { useEffect, useRef } from 'react';

interface LogoTickerProps {
  logos: { src: string; alt: string }[];
  speed?: number; // pixels per second
}

export const LogoTicker: React.FC<LogoTickerProps> = ({ logos, speed = 60 }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const duration = track.scrollWidth / speed;
    track.style.animationDuration = `${duration}s`;
  }, [speed, logos]);

  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-6">
      <div
        ref={trackRef}
        className="flex items-center gap-10 will-change-transform [animation:slide_linear_infinite]"
        style={{
          // keyframes declared via tailwind plugin not available; using inline fallback
          animation: 'ticker linear infinite',
        }}
      >
        {items.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="h-8 opacity-70" />
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LogoTicker;
