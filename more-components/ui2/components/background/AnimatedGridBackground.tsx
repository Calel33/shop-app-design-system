import React, { useState } from 'react';
import type { GridBackgroundProps } from '../types/background.types';

/**
 * AnimatedGridBackground Component
 * Creates an interactive grid background that reveals cells on hover
 * Optimized for performance with GPU-accelerated transforms
 */
export const AnimatedGridBackground: React.FC<GridBackgroundProps> = ({
  cellCount = 12,
  baseColor = '#111',
  highlightColor = 'transparent',
  enableHover = true,
  columns = {
    desktop: '1fr 1fr 1fr 1fr',
    tablet: '1fr 1fr',
    mobile: '1fr',
  },
  className = '',
}) => {
  const [revealedCells, setRevealedCells] = useState<Set<number>>(new Set());

  const handleCellHover = (index: number) => {
    if (!enableHover) return;
    setRevealedCells((prev) => new Set(prev).add(index));
  };

  const handleCellLeave = (index: number) => {
    if (!enableHover) return;
    setRevealedCells((prev) => {
      const next = new Set(prev);
      next.delete(index);
      return next;
    });
  };

  return (
    <div
      className={`animated-grid-background fixed inset-0 w-screen h-screen pointer-events-none select-none z-0 ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: columns.desktop,
        gridTemplateRows: '1fr 1fr 1fr',
        gridAutoColumns: '1fr',
        gridColumnGap: '2px',
        gridRowGap: '2px',
      }}
      aria-hidden="true"
    >
      {Array.from({ length: cellCount }).map((_, index) => (
        <div
          key={index}
          className={`relative flex flex-col w-full p-2.5 transition-colors duration-200 ${
            revealedCells.has(index) ? 'opacity-100' : 'opacity-75'
          }`}
          style={{
            backgroundColor: revealedCells.has(index) ? highlightColor : baseColor,
          }}
          onMouseEnter={() => handleCellHover(index)}
          onMouseLeave={() => handleCellLeave(index)}
        />
      ))}

      <style>{`
        @media (max-width: 900px) {
          .animated-grid-background {
            grid-template-columns: ${columns.tablet} !important;
            grid-template-rows: 1fr 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .animated-grid-background {
            grid-template-columns: ${columns.mobile} !important;
            grid-template-rows: repeat(5, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
};
