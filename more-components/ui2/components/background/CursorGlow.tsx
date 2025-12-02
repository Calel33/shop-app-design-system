import React, { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import type { CursorGlowProps } from '../types/background.types';

/**
 * CursorGlow Component
 * Creates a smooth-following radial gradient glow that tracks mouse position
 * Automatically disabled on touch devices for performance
 */
export const CursorGlow: React.FC<CursorGlowProps> = ({
  glowSize = 400,
  glowColor = 'rgba(187, 187, 187, 0.3)',
  followSpeed = 0.1,
  blurAmount = 70,
  enabled = true,
  className = '',
}) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-expect-error - msMaxTouchPoints is IE-specific
        navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
  }, []);

  // Disable on touch devices
  const shouldEnable = enabled && !isTouchDevice;
  const position = useMousePosition(followSpeed, shouldEnable);

  if (!shouldEnable) {
    return null;
  }

  const halfSize = glowSize / 2;

  return (
    <div
      className={`fixed inset-0 w-screen h-screen pointer-events-none select-none overflow-visible z-[1] ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute top-0 left-0 will-change-transform"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale3d(1, 1, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="absolute rounded-full opacity-100 pointer-events-none"
          style={{
            width: `${glowSize}px`,
            height: `${glowSize}px`,
            top: `-${halfSize}px`,
            left: `-${halfSize}px`,
            aspectRatio: '1',
            backgroundImage: `radial-gradient(
              circle farthest-corner at 50% 50%,
              ${glowColor} 10%,
              transparent 70%
            )`,
            filter: `blur(${blurAmount}px)`,
            transition: 'background 0.3s',
          }}
        />
      </div>
    </div>
  );
};
