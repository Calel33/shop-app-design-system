/**
 * TestimonialsSection Component
 * Parent testimonials grid
 * @module childcare/TestimonialsSection
 */

import type { TestimonialsSectionProps, TestimonialCardProps } from '../types/childcare.types';

const TestimonialCard = ({
  avatar,
  avatarAlt,
  name,
  role,
  quote,
}: TestimonialCardProps) => (
  <article className="rounded-2xl border p-6 border-black/10 bg-black/5">
    <div className="flex items-center gap-3">
      <img
        className="h-10 w-10 rounded-full object-cover"
        src={avatar}
        alt={avatarAlt}
      />
      <div>
        <div className="text-sm font-semibold tracking-tight font-nunito">
          {name}
        </div>
        <div className="text-[11px] text-black/60 font-nunito">
          {role}
        </div>
      </div>
    </div>
    <p className="mt-4 text-sm text-black/80 font-nunito">
      {quote}
    </p>
  </article>
);

export const TestimonialsSection = ({
  title = 'Parent Stories',
  subtitle = 'Real notes from families who trust us every day.',
  testimonials,
  className = '',
}: TestimonialsSectionProps) => {
  return (
    <section className={`sm:py-20 pt-16 pb-16 ${className}`} id="stories">
      <div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-nunito font-semibold">
              {title}
            </h2>
            <p className="mt-2 text-sm text-black/70 font-nunito">
              {subtitle}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
