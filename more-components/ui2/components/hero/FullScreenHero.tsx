import React from 'react';
import { FullScreenHeroProps } from '../types/hero.types';
import { HeroNav } from './HeroNav';
import { HeroContent } from './HeroContent';

export const FullScreenHero: React.FC<FullScreenHeroProps> = ({
  backgroundImage,
  navigation,
  content,
  enableAnimations = true,
}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background image */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/40 to-zinc-950" />
      </div>

      {/* Skip link */}
      <a href="#hero-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-zinc-900 focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>

      {/* Floating Nav */}
      <HeroNav {...navigation} />

      {/* Centered Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div id="hero-content" className="w-full">
          <HeroContent {...content} enableAnimations={enableAnimations} />
        </div>
      </div>
    </section>
  );
};

export default FullScreenHero;
