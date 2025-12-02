/**
 * PortfolioCard Component
 * Individual portfolio card with hover effects and gradient overlay
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { PortfolioCardProps } from '../types/portfolio.types';

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, className = '' }) => {
  return (
    <a
      href={item.link}
      className={`group relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm ${className}`}
      aria-label={`View ${item.title} project`}
    >
      <img
        src={item.image}
        alt={item.alt}
        className={`${item.height} w-full transition-transform duration-500 group-hover:scale-105 object-cover`}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs text-white/70">{item.category}</p>
        <div className="mt-1 flex items-center justify-between">
          <h4 className="text-base sm:text-lg tracking-tight font-medium text-white">
            {item.title}
          </h4>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </a>
  );
};

export default PortfolioCard;
