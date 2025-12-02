import React from 'react';
import { useScrollAnimation } from '@/ui/hooks/useScrollAnimation';
import type { ServiceCardProps } from '@/ui/components/types/interior-design.types';

function ServiceCard({ icon, title, description, features, featured, badge, link }: ServiceCardProps) {
  return (
    <article
      className={
        'relative rounded-3xl p-8 h-full transition-all border ' +
        (featured
          ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white border-white/10'
          : 'bg-white border-gray-100 text-foreground hover:shadow-xl')
      }
    >
      <div className="w-16 h-16 rounded-2xl grid place-items-center mb-6 bg-black/5 text-black/80">
        {icon}
      </div>
      {badge && (
        <div className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold mb-4 ${featured ? 'bg-white/10 text-white' : 'bg-muted text-muted-foreground'}`}>
          <span>{badge}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold mb-4 tracking-tight">{title}</h3>
      <p className={`leading-relaxed mb-6 ${featured ? 'text-white/80' : 'text-muted-foreground'}`}>{description}</p>
      {features?.length > 0 && (
        <ul className={`space-y-2 mb-6 text-sm ${featured ? 'text-white/80' : 'text-muted-foreground'}`}>
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">• {f}</li>
          ))}
        </ul>
      )}
      <a href={link} className={`inline-flex items-center gap-2 font-semibold ${featured ? 'text-white/90' : 'text-foreground'}`}>
        <span>Learn More</span>
      </a>
    </article>
  );
}

export const ServicesGrid: React.FC<{ services: ServiceCardProps[] }> = ({ services }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <section id="expertise" ref={ref as any} className="relative py-24 bg-gray-50">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-4">Excellence in <span className="font-semibold">Every Detail</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From conceptual vision to flawless execution, we deliver bespoke interior solutions.
          </p>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
          {services.map((s, i) => (
            <div key={s.title} style={{ transitionDelay: `${i * 60}ms` }} className={`transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-3'}`}>
              <ServiceCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
