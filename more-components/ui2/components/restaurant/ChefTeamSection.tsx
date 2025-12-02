import React from 'react';
import { Plus } from 'lucide-react';
import { ChefTeamSectionProps } from './types';
import { ChefCard } from './ChefCard';

export const ChefTeamSection: React.FC<ChefTeamSectionProps> = ({
  title,
  subtitle,
  chefs,
  features,
  ctaText,
  sectionCopy,
  rightCopy,
}) => {
  return (
    <section className="sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-8 pt-6 pr-6 pb-6 pl-6 relative overflow-hidden">
      {/* Background decorative grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-zinc-600 to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
        {/* Left: Heading + copy */}
        <div className="flex flex-col justify-between min-h-full">
          <div>
            {subtitle && (
              <span className="text-sm font-normal text-zinc-500">{subtitle}</span>
            )}
            <h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-zinc-100 mt-2 font-medium tracking-tighter font-playfair">
              {title}
            </h2>

            {/* Feature markers with divider */}
            <div className="mt-8 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />
              </div>
              <div className="hidden sm:grid grid-cols-3 gap-6 text-zinc-600 bg-zinc-900 px-4 relative">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" strokeWidth={1.5} />
                    <span className="text-sm font-normal">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {sectionCopy && (
              <div>
                <p className="text-sm text-zinc-100 font-medium tracking-tight">
                  {sectionCopy.title}
                </p>
                <p className="mt-1 text-sm text-zinc-400">
                  {sectionCopy.description}
                </p>
                {ctaText && (
                  <button className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-100 text-zinc-900 text-sm font-normal hover:bg-zinc-200 transition">
                    {ctaText}
                    <span className="inline-flex h-2 w-2 rounded-full bg-zinc-900" />
                  </button>
                )}
              </div>
            )}

            {rightCopy && (
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent sm:block hidden" />
                <p className="text-base text-zinc-300 leading-relaxed sm:text-right sm:pl-8">
                  {rightCopy}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Chef grid */}
        <div className="grid grid-cols-2 gap-4 relative">
          {chefs.map((chef, index) => (
            <ChefCard key={index} {...chef} />
          ))}
        </div>
      </div>
    </section>
  );
};
