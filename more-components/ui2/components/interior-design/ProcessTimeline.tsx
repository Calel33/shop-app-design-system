import React from 'react';
import type { TimelinePhaseProps } from '@/ui/components/types/interior-design.types';

export const ProcessTimeline: React.FC<{ phases: TimelinePhaseProps[] }> = ({ phases }) => {
  return (
    <section id="process" className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-4">From Vision to <span className="font-semibold">Reality</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures seamless project delivery with design excellence.
          </p>
        </div>
        <div className="space-y-16">
          {phases.map((p) => (
            <div key={p.phase} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm font-medium mb-4">
                  <span>Phase {p.phase}</span>
                </div>
                <h3 className="text-3xl font-semibold mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">{p.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">• {f}</li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img src={p.image} alt={p.title} className="w-full h-64 object-cover rounded-2xl shadow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
