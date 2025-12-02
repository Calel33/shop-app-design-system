import React, { useEffect, useState } from 'react';
import { HeroContentProps } from '../types/hero.types';

export const HeroContent: React.FC<HeroContentProps & { enableAnimations?: boolean }>
  = ({ badge, title, subtitle, primaryCta, secondaryCta, enableAnimations }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (enableAnimations) {
      const id = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(id);
    }
  }, [enableAnimations]);

  const base = 'transition-all duration-700';

  return (
    <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
      {badge && (
        <div className={`${base} ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur`}
             aria-label="badge">
          <span aria-hidden="true">{badge.icon}</span>
          <span className="text-xs font-medium">{badge.text}</span>
        </div>
      )}
      <h1 className={`${base} ${mounted ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-3'} mt-6 text-4xl font-semibold tracking-tight sm:text-6xl`}>
        {title}
      </h1>
      <p className={`${base} ${mounted ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-3'} mt-6 text-white/80`}>
        {subtitle}
      </p>
      <div className={`${base} ${mounted ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-3'} mt-8 flex items-center justify-center gap-3`}>
        <a
          href={primaryCta.href}
          onClick={primaryCta.onClick}
          className="inline-flex items-center justify-center rounded-full bg-white text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-white/90"
        >
          {primaryCta.label}
        </a>
        {secondaryCta && (
          <button
            onClick={secondaryCta.onClick}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
          >
            <span aria-hidden="true">{secondaryCta.icon}</span>
            {secondaryCta.label}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
