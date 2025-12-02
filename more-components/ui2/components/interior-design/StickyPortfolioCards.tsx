import React, { useRef, useEffect, useState } from 'react';
import type { PortfolioProject } from '../types/interior-design.types';

interface StickyPortfolioCardsProps {
  projects: PortfolioProject[];
}

export const StickyPortfolioCards: React.FC<StickyPortfolioCardsProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      const idx = Math.min(projects.length - 1, Math.floor(progress * projects.length + 0.3));
      setActiveIndex(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [projects.length]);

  return (
    <section ref={containerRef} className="relative min-h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-[70vh]">
          {projects.map((p, i) => (
            <article
              key={p.title + i}
              className={
                'absolute inset-0 rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-700 ' +
                (i <= activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6')
              }
              style={{ zIndex: 10 + i }}
            >
              <div className="absolute inset-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover scale-105 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
              <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full text-white">
                <div className="text-xs uppercase tracking-widest opacity-80">{p.category}</div>
                <h3 className="text-2xl md:text-4xl font-semibold mt-2">{p.title}</h3>
                <p className="mt-3 max-w-2xl text-white/80">{p.description}</p>
                {p.stats?.length ? (
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {p.stats.map((s, idx) => (
                      <div key={idx} className="/glass rounded-xl p-3 bg-white/10 backdrop-blur">
                        <div className="text-sm opacity-80">{s.label}</div>
                        <div className="text-lg font-medium">{s.value}</div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyPortfolioCards;
