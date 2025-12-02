/**
 * PortfolioHeader Component
 * Section header with title, subtitle, and optional CTA button
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioHeaderProps } from '../types/portfolio.types';

export const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({
  sectionLabel = '(03) Selected Work',
  title,
  subtitle,
  ctaText = 'View Portfolio',
  ctaLink = '#work',
  className = '',
}) => {
  return (
    <div className={`flex sm:mb-8 mb-6 items-end justify-between ${className}`}>
      <div>
        <p className="text-[11px] sm:text-xs tracking-widest text-neutral-500 uppercase">
          {sectionLabel}
        </p>
        <h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-medium">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-2 text-sm text-neutral-600">{subtitle}</p>
        )}
      </div>
      <a
        href={ctaLink}
        className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 bg-white rounded-full pt-2 pr-4 pb-2 pl-4 transition-shadow"
        aria-label={ctaText}
      >
        {ctaText}
        <ArrowUpRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default PortfolioHeader;
