import React from 'react';
import { ArrowRight } from 'lucide-react';
import { DishCardProps } from './types';

export const DishCard: React.FC<DishCardProps> = ({
  name,
  category,
  subcategory,
  image,
  onClick,
}) => {
  return (
    <div
      className="group relative overflow-hidden ring-1 ring-neutral-200 cursor-pointer bg-white rounded-3xl shadow-sm h-80"
      onClick={onClick}
    >
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs text-white/70">
          {category} • {subcategory}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <h3 className="sm:text-lg text-base font-semibold text-white tracking-tight">
            {name}
          </h3>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-900">
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </span>
        </div>
      </div>
    </div>
  );
};
