import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialsCarouselProps } from './types';

export const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  title = "Creative partnerships that inspire.",
  subtitle = "(04) Testimonials",
  className = ''
}) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className={`py-16 sm:py-20 scroll-element fade-in-up ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-border bg-gradient-to-br from-card to-background sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
          <div className="relative">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] sm:text-xs tracking-widest text-muted-foreground font-light uppercase">
                  {subtitle}
                </p>
                <h3 className="mt-2 text-3xl sm:text-4xl tracking-tight font-light text-foreground">
                  {title}
                </h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden ring-1 ring-border bg-card">
                  <img
                    src={current.avatar}
                    alt="Client portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] tracking-widest text-muted-foreground uppercase font-light">
                  Client Story
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card ring-1 ring-border shadow-sm hover:bg-muted transition"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="inline-flex h-10 w-10 ring-1 ring-border/10 hover:bg-muted transition text-background bg-foreground rounded-full shadow-sm items-center justify-center"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-8 relative">
                <div className="text-foreground">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted ring-1 ring-border">
                    <Quote className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <p className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.25] tracking-tight">
                    {current.quote}
                  </p>
                  <p className="mt-6 text-sm text-muted-foreground">— {current.author}</p>
                </div>
                
                <div className="absolute right-0 -bottom-2 sm:bottom-0">
                  <div className="flex items-center gap-3 p-2 rounded-2xl bg-card ring-1 ring-border shadow-sm">
                    <img
                      src={current.nextAvatar}
                      alt="Next client"
                      className="h-14 w-20 object-cover rounded-xl"
                    />
                    <div className="pr-2">
                      <p className="text-[11px] tracking-widest text-muted-foreground uppercase font-light">
                        Next Story →
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{current.nextName}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'w-6 bg-foreground'
                      : 'w-1.5 bg-muted hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;