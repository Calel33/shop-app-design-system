/**
 * ProgramsSection Component
 * Programs grid with image cards
 * @module childcare/ProgramsSection
 */

import { Map, ArrowRight } from 'lucide-react';
import type { ProgramsSectionProps, ProgramCardProps } from '../types/childcare.types';

const ProgramCard = ({
  image,
  imageAlt,
  ageRange,
  icon,
  title,
  description,
  link,
  linkText = 'Learn More',
}: ProgramCardProps) => (
  <article className="group overflow-hidden bg-black/5 border-black/10 border rounded-2xl shadow-xl">
    <div className="relative overflow-hidden">
      <img
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        src={image}
        alt={imageAlt}
      />
    </div>
    <div className="pt-6 pr-6 pb-6 pl-6">
      <div className="inline-flex text-[11px] font-medium text-black/80 border-black/10 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5 gap-x-2 gap-y-2 items-center font-nunito">
        {ageRange}
        <span className="inline-flex h-3.5 w-3.5 items-center justify-center">
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight font-nunito mt-3">
        {title}
      </h3>
      <p className="text-sm text-black/70 mt-2 font-nunito">
        {description}
      </p>
      <a
        href={link}
        className="inline-flex items-center gap-2 hover:text-black text-sm font-medium text-black/80 mt-4 font-nunito"
      >
        {linkText}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </a>
    </div>
  </article>
);

export const ProgramsSection = ({
  title = 'Programs for Every Stage',
  subtitle = 'From first steps to school-ready, we meet children where they are.',
  programs,
  viewSampleDayLink = '#visit',
  className = '',
}: ProgramsSectionProps) => {
  return (
    <section className={`sm:py-8 pt-4 pb-4 ${className}`} id="programs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-nunito font-semibold">
              {title}
            </h2>
            <p className="mt-2 text-sm text-black/70 font-nunito">
              {subtitle}
            </p>
          </div>
          <a
            href={viewSampleDayLink}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition border-black/10 bg-black/0 text-black hover:bg-black/5 font-nunito"
          >
            <Map className="h-4 w-4" />
            View a sample day
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-6 gap-y-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};
