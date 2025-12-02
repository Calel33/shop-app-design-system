// SkincareHero.tsx - Hero section with parallax background effect
import { ArrowRight, Play } from 'lucide-react';
import { useParallax } from '../../hooks/useParallax';
import type { SkincareHeroProps } from '../types/skincare.types';

export function SkincareHero({
  backgroundImage,
  tagline,
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  parallax = true,
  className = '',
}: SkincareHeroProps) {
  const { ref, style } = useParallax({ intensity: 20, disabled: !parallax });

  return (
    <section className={`relative h-[80vh] overflow-hidden bg-neutral-900 ${className}`}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className="absolute inset-0" style={style}>
        <img
          src={backgroundImage}
          alt="Hero background"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 dark:from-black/90 dark:via-black/70 dark:to-black/40" />
      </div>
      
      <div className="relative z-10 flex h-full max-w-7xl mx-auto px-6 items-center">
        <div className="max-w-xl text-white">
          <p className="text-sm uppercase tracking-widest opacity-80">
            {tagline}
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
            {heading}
          </h1>
          <p className="text-base md:text-lg opacity-90 mt-4 leading-relaxed">
            {description}
          </p>
          
          <div className="mt-8 flex items-center gap-3 flex-wrap">
            <a
              href={primaryCTA.href || '#'}
              onClick={primaryCTA.onClick}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group"
            >
              <span className="relative z-10">{primaryCTA.label}</span>
              {primaryCTA.icon || <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:rotate-90" />}
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </a>
            
            {secondaryCTA && (
              <a
                href={secondaryCTA.href || '#'}
                onClick={secondaryCTA.onClick}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/30 hover:bg-white/10 backdrop-blur transition-all duration-300 hover:scale-105"
              >
                {secondaryCTA.label}
                {secondaryCTA.icon || <Play className="w-4 h-4" />}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
