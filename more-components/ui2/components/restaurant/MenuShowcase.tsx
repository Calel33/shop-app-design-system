import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { MenuShowcaseProps } from './types';
import { DishCard } from './DishCard';

export const MenuShowcase: React.FC<MenuShowcaseProps> = ({
  title,
  subtitle,
  description,
  dishes,
  ctaText = 'View complete menu',
  ctaHref = '#menu',
}) => {
  return (
    <section id="menu" className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-6 pl-4">
      {/* Header */}
      <div className="flex items-end justify-between mb-6 sm:mb-8">
        <div>
          <p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-[0.2em]">
            {subtitle}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight font-playfair">
            {title}
          </h2>
          {description && (
            <p className="mt-2 text-sm text-neutral-600 max-w-2xl">
              {description}
            </p>
          )}
        </div>
        <a
          href={ctaHref}
          className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full px-4 py-2"
        >
          Full menu
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>

      {/* Dish Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {dishes.map((dish, index) => (
          <DishCard key={index} {...dish} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href={ctaHref}
          className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow"
        >
          {ctaText}
          <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};
