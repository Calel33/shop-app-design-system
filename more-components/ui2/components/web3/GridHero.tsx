import React from 'react';
import { AnimatedButton } from '../background/AnimatedButton';
import type { GridHeroProps } from '../types/background.types';

/**
 * GridHero Component
 * Hero section with badge, heading, description, CTA button, and optional side cards
 * Designed for grid background layouts
 */
export const GridHero: React.FC<GridHeroProps> = ({
  badge,
  badgeIcon,
  heading,
  description,
  ctaText = 'Get Started',
  onCtaClick,
  ctaHref,
  sideCards,
  className = '',
}) => {
  return (
    <section className={`relative isolate overflow-hidden z-10 ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#222222]/60 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-12 lg:pt-24 pb-20 flex flex-col lg:flex-row items-start lg:items-center gap-14">
        {/* Left Column - Main Content */}
        <div className="w-full lg:w-7/12">
          {/* Badge */}
          {badge && (
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
              {badgeIcon && <span className="w-4 h-4">{badgeIcon}</span>}
              <span className="text-white/70 font-light tracking-tight">{badge}</span>
            </span>
          )}

          {/* Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-light tracking-tighter animate-fade-in-up"
            style={{ letterSpacing: '-0.02em' }}
          >
            {heading}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg text-white/80 font-light tracking-tight animate-fade-in-up">
            {description}
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <AnimatedButton
              onClick={onCtaClick}
              href={ctaHref}
              size="lg"
            >
              {ctaText}
            </AnimatedButton>
          </div>
        </div>

        {/* Right Column - Side Cards */}
        {sideCards && (
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            {sideCards}
          </div>
        )}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
