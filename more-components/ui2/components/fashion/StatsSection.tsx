import React, { useEffect, useRef, useState } from 'react';
import { StatsCounter } from './types';

interface StatsSectionProps {
  stats: StatsCounter[];
}

export const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20 opacity-0 transition-opacity duration-800"
      style={{ opacity: hasAnimated ? 1 : 0 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCounter
            key={index}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            shouldAnimate={hasAnimated}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  shouldAnimate: boolean;
  delay: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = '',
  shouldAnimate,
  delay,
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(counter);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [shouldAnimate, value, delay]);

  return (
    <div
      className="text-center opacity-0 translate-y-8 transition-all duration-600"
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(2rem)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-4xl sm:text-5xl font-light font-serif mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
        {displayValue}
        {suffix}
      </div>
      <p className="text-slate-600">{label}</p>
    </div>
  );
};
