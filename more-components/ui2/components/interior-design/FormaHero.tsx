import React from 'react';
import { useParallax } from '@/ui/hooks/useParallax';
import { useCounterAnimation } from '@/ui/hooks/useCounterAnimation';

export const FormaHero: React.FC = () => {
  const base = useParallax({ intensity: 10 });
  const c1 = useCounterAnimation({ end: 500, duration: 2000 });
  const c2 = useCounterAnimation({ end: 15, duration: 2000 });
  const c3 = useCounterAnimation({ end: 98, duration: 2000, suffix: '%' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div ref={base.ref as React.RefObject<HTMLDivElement>} style={base.style} className="absolute inset-0">
        <img
          src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/aabac76d-ac03-47b1-be1c-fca16fa43e96_3840w.jpg"
          alt="Luxury interior design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 backdrop-blur bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium mb-8">
            <span>Award-Winning Interior Design Studio</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[0.9] mb-8">
            <span className="block">Redefining</span>
            <span className="block font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Interior Excellence</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-3xl mx-auto">
            We craft extraordinary living spaces that seamlessly blend luxury, functionality, and timeless design principles.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#portfolio" className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg">
              <span>View Our Work</span>
            </a>
            <button className="inline-flex items-center gap-4 text-white font-medium text-lg group">
              <div className="w-14 h-14 rounded-full backdrop-blur bg-white/20 border border-white/30 grid place-items-center">
                ▶
              </div>
              <span className="group-hover:text-white/80 transition-colors">Watch Story</span>
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 px-6 py-5 backdrop-blur text-white">
            <dl className="grid grid-cols-3 divide-x divide-white/15 text-center">
              <div className="px-3">
                <dd className="text-3xl font-light leading-tight">{c1.count}</dd>
                <dt className="mt-1 text-xs sm:text-sm text-white/70">Projects Completed</dt>
              </div>
              <div className="px-3">
                <dd className="text-3xl font-light leading-tight">{c2.count}</dd>
                <dt className="mt-1 text-xs sm:text-sm text-white/70">Years Experience</dt>
              </div>
              <div className="px-3">
                <dd className="text-3xl font-light leading-tight">{c3.count}</dd>
                <dt className="mt-1 text-xs sm:text-sm text-white/70">Client Satisfaction</dt>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
