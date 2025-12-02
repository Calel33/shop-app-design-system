import React, { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from './types';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Section Header */}
      <div
        className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Client Stories</p>
        <h2 className="text-5xl sm:text-7xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Loved by Many
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            isVisible={isVisible}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  isVisible: boolean;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  isVisible,
  delay,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      className="bg-white rounded-3xl ring-1 ring-slate-200 p-12 text-center shadow-sm hover:shadow-xl hover:ring-slate-300 hover:-translate-y-2 hover:scale-105 transition-all duration-300 cursor-pointer group opacity-0 translate-y-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Avatar */}
      {testimonial.avatar && (
        <div className="w-20 h-20 mx-auto mb-8 rounded-full p-1 bg-white ring-1 ring-slate-200 group-hover:ring-slate-300 group-hover:shadow-lg transition-all duration-300">
          <div className="w-full h-full rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
            {!isImageLoaded && (
              <div className="w-full h-full bg-slate-100 animate-pulse" />
            )}
            <img
              src={testimonial.avatar}
              alt={testimonial.author}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              loading="lazy"
            />
          </div>
        </div>
      )}

      {/* Quote */}
      <p className="text-slate-600 leading-relaxed max-w-md mx-auto group-hover:text-slate-700 transition-colors duration-300">
        {testimonial.quote}
      </p>

      {/* Divider */}
      <div className="w-24 h-px bg-slate-200 my-6 mx-auto group-hover:bg-slate-400 group-hover:w-32 transition-all duration-300" />

      {/* Author Info */}
      <div className="text-xs tracking-widest text-slate-500 uppercase group-hover:text-slate-700 transition-colors duration-300">
        {testimonial.author}
        <div className="mt-1">{testimonial.role}</div>
      </div>

      {/* Quote Icon */}
      <div className="mt-8 inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600 group-hover:bg-slate-50 group-hover:scale-110 transition-all duration-300">
        <Quote className="h-4 w-4" />
      </div>
    </div>
  );
};
