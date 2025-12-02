import React from 'react';
import type { ApparelHeroProps } from '../types/ecommerce.types';

export const SplitHero: React.FC<ApparelHeroProps> = ({ leftImage, rightImage, brandName, leftCta, rightCta }) => {
  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[44vh] md:h-[70vh]">
          <img src={leftImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="relative h-[44vh] md:h-[70vh]">
          <img src={rightImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-auto rounded-full border border-white/20 bg-white/20 px-4 py-2 text-center text-white backdrop-blur">
          <div className="text-xs uppercase tracking-widest">{brandName}</div>
          <div className="mt-2 flex items-center gap-3 text-xs">
            <a href={leftCta.href} className="rounded-full bg-white/90 px-3 py-1 text-zinc-900">{leftCta.label}</a>
            <a href={rightCta.href} className="rounded-full bg-white/20 px-3 py-1 text-white">{rightCta.label}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
