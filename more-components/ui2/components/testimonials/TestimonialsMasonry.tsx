import React from 'react';
import { TestimonialsMasonryProps } from './types';
import { TestimonialCard } from './TestimonialCard';

export const TestimonialsMasonry: React.FC<TestimonialsMasonryProps> = ({ 
  title = "Loved by teams worldwide",
  subtitle = "We partner with forward-thinking companies to craft digital products.",
  testimonials,
  showParticles: _showParticles = true,
  showCTA = true,
  staggerAnimation: _staggerAnimation = true,
  className = '' 
}) => {
  return (
    <section className={`relative overflow-hidden py-24 bg-neutral-950 text-white ${className}`}>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="md:text-5xl text-4xl font-semibold tracking-tight mb-3">
            {title}
          </h2>
          <p className="mx-auto max-w-xl text-center text-sm text-white/70">
            {subtitle}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <TestimonialCard
                testimonial={testimonial}
                hasMeteor={testimonial.hasMeteor}
                meteorDelay={testimonial.meteorDelay}
              />
            </div>
          ))}
        </div>

        {showCTA && (
          <div className="mt-20 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <h3 className="mb-4 text-2xl font-semibold text-white">Ready to join them?</h3>
              <p className="mb-6 text-white/70 max-w-md mx-auto">
                Let's create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-700">
                  Start Your Project
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
