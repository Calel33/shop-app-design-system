import { useState, useEffect, useCallback, useRef } from 'react';
import type { MousePosition } from '../components/types/background.types';

/**
 * Custom hook to track mouse position with smooth interpolation
 * @param followSpeed - Interpolation speed (0-1, default: 0.1)
 * @param enabled - Enable/disable tracking (default: true)
 * @returns Current mouse position with smooth following
 */
export function useMousePosition(
  followSpeed: number = 0.1,
  enabled: boolean = true
): MousePosition {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const targetRef = useRef<MousePosition>({ x: 0, y: 0 });
  const currentRef = useRef<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  // Handle mouse move events
  const handleMouseMove = useCallback((event: MouseEvent) => {
    targetRef.current = {
      x: event.clientX,
      y: event.clientY,
    };
  }, []);

  // Smooth interpolation animation
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const animate = () => {
      // Smooth interpolation
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * followSpeed;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * followSpeed;

      setPosition({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [followSpeed, enabled]);

  // Mouse event listener
  useEffect(() => {
    if (!enabled) {
      return;
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove, enabled]);

  return position;
}
