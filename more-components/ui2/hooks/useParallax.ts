// useParallax.ts - Parallax effect for hero backgrounds
import { useRef, useEffect, useState } from 'react';
import type { UseParallaxOptions, UseParallaxReturn } from '../components/types/skincare.types';

export function useParallax(options: UseParallaxOptions = {}): UseParallaxReturn {
  const { intensity = 20, disabled = false } = options;
  const ref = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState<string>('translate3d(0, 0, 0)');

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      const translateX = deltaX * intensity;
      const translateY = deltaY * intensity;
      
      setTransform(`translate3d(${translateX}px, ${translateY}px, 0)`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [intensity, disabled]);

  return {
    ref,
    style: {
      transform,
      transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      willChange: 'transform',
    },
  };
}
