/**
 * WorkCard Component for KYRO Portfolio
 * Portfolio card with hover effects and project information
 */

import React from 'react';
import type { WorkCardProps } from '../../types/kyro-portfolio.types';

export const WorkCard: React.FC<WorkCardProps> = ({
  image,
  alt,
  category,
  categoryIcon,
  title,
  description,
  className = '',
}) => {
  return (
    <article className={`group rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 ${className}`}>
      <div className="relative aspect-[16/10]">
        <img
          src={image}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <div className="w-4 h-4" aria-hidden="true">
            {categoryIcon}
          </div>
          <span>{category}</span>
        </div>
        <h3 className="mt-2 text-base font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{description}</p>
      </div>
    </article>
  );
};

export default WorkCard;
