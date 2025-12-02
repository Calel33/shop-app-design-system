import React from 'react';
import type { TestimonialProps } from '@/ui/components/types/interior-design.types';

export const TestimonialsGrid: React.FC<{ testimonials: TestimonialProps[] }> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="relative py-24 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light tracking-tighter mb-4">What Our Clients <span className="font-semibold">Say</span></h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Discover why clients choose us for their most important projects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article key={t.author} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-6" aria-label={`Rating ${t.rating} of 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`w-5 h-5 ${i < t.rating ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-8 text-lg">“{t.content}”</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
