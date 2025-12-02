import React from 'react';
import type { PortfolioProjectProps } from '@/ui/components/types/interior-design.types';

export const PortfolioGrid: React.FC<{ projects: PortfolioProjectProps[] }> = ({ projects }) => {
  return (
    <section id="portfolio" className="relative py-24 bg-gray-900 text-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-4">Signature <span className="font-semibold">Spaces</span></h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our most celebrated projects where innovative design meets craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`rounded-3xl overflow-hidden ${p.featured ? 'lg:col-span-8' : 'lg:col-span-4'} bg-white/5 border border-white/10`}
            >
              <img src={p.image} alt={p.title} className={p.featured ? 'w-full h-[500px] object-cover' : 'w-full h-48 object-cover'} />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
