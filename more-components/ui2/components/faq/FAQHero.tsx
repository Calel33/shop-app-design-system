import React, { useEffect, useRef, useState } from 'react';
import { HelpCircle } from 'lucide-react';
import type { FAQHeroProps } from '../types/faq.types';

export const FAQHero: React.FC<FAQHeroProps> = ({
  title = 'QUESTIONS',
  subtitle = 'ANSWERS',
  description = 'Get instant answers to the most common questions about our digital transformation services, AI solutions, and creative partnerships.',
  animated = true,
}) => {
  const [isVisible, setIsVisible] = useState(!animated);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [animated]);

  return (
    <div
      ref={heroRef}
      className={`
        text-center mb-16 sm:mb-20 lg:mb-24
        transition-all duration-800 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
        <HelpCircle className="w-4 h-4 text-red-400" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-medium text-red-400 tracking-wider uppercase">
          Frequently Asked Questions
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6 font-serif">
        <span className="block text-white mb-2">{title}</span>
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          {subtitle}
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </div>
  );
};
