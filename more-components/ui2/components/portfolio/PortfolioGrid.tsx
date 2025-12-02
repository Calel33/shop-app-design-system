/**
 * PortfolioGrid Component
 * Main container for portfolio grid with masonry layout
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioHeader } from './PortfolioHeader';
import { PortfolioCard } from './PortfolioCard';
import type { PortfolioGridProps } from '../types/portfolio.types';

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  columns,
  sectionLabel,
  title,
  subtitle,
  ctaText,
  ctaLink,
  viewAllText = 'View All Work',
  viewAllLink = '#work',
  className = '',
}) => {
  return (
    <section id="portfolio" className={`mt-10 ${className}`}>
      <PortfolioHeader
        sectionLabel={sectionLabel}
        title={title}
        subtitle={subtitle}
        ctaText={ctaText}
        ctaLink={ctaLink}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4 sm:gap-5">
            {column.items.map((item) => (
              <PortfolioCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <a
          href={viewAllLink}
          className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow transition-shadow"
          aria-label={viewAllText}
        >
          {viewAllText}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default PortfolioGrid;
