import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = ''
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const progress = Math.min((currentTime - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentCount = start + (end - start) * easeOutQuart;
      countRef.current = currentCount;
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, start]);

  const formatCount = (value: number): string => {
    const fixedValue = value.toFixed(decimals);
    return `${prefix}${fixedValue}${suffix}`;
  };

  return {
    count: formatCount(count),
    rawCount: count
  };
};
