import { MeteorBackgroundProps } from './types';
import './testimonials.css';

export const MeteorBackground = ({ 
  delay = 0, 
  className = '' 
}: MeteorBackgroundProps) => {
  // Random positioning for more natural meteor effect
  const topPosition = Math.random() * 60 + 20; // 20-80%
  const leftOffset = Math.random() * 100 - 200; // -200px to -100px

  return (
    <div className={`meteor-container ${className}`}>
      <div
        className="meteor"
        style={{
          top: `${topPosition}%`,
          left: `${leftOffset}px`,
          animationDelay: `${delay}s`,
        }}
      />
    </div>
  );
};