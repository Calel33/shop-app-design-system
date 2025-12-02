import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroBannerProps } from './types';

/**
 * HeroBanner - Hero section with image overlay and CTAs
 * 
 * Features:
 * - Full-width image with dark overlay
 * - Primary and secondary CTA buttons
 * - Responsive text sizing
 * - Accessible image alt text
 */
export const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  image,
  imageAlt,
  ctaPrimary,
  ctaSecondary
}) => {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="relative overflow-hidden rounded-3xl">
        <img 
          src={image} 
          alt={imageAlt} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative bg-black/40">
          <div className="sm:px-12 sm:py-20 pt-16 pr-8 pb-16 pl-8">
            <div className="max-w-2xl text-white">
              <h3 className="text-3xl sm:text-4xl tracking-tight font-medium">
                {title}
              </h3>
              <p className="mt-3 text-white/80">
                {description}
              </p>
              <div className="flex flex-wrap gap-3 mt-6 items-center">
                {ctaPrimary && (
                  <button
                    onClick={ctaPrimary.onClick}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-neutral-950 px-5 py-3 text-sm font-medium hover:opacity-95 transition"
                  >
                    {ctaPrimary.label}
                  </button>
                )}
                {ctaSecondary && (
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
                  >
                    {ctaSecondary.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
