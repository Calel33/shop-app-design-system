import React from 'react';
import { ChefHat, Utensils, Wheat, Pizza } from 'lucide-react';
import { ChefCardProps } from './types';

const iconMap = {
  'chef-hat': ChefHat,
  'utensils': Utensils,
  'wheat': Wheat,
  'pizza': Pizza,
};

export const ChefCard: React.FC<ChefCardProps> = ({ name, role, image, icon }) => {
  const IconComponent = iconMap[icon] || ChefHat;

  return (
    <article className="relative overflow-hidden h-[200px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-800 rounded-2xl">
      <div
        className="absolute inset-0 bg-cover hover:scale-105 transition-transform duration-500 bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      <div className="absolute top-3 left-3">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-900 border border-zinc-700">
          <IconComponent className="h-3.5 w-3.5" strokeWidth={1.5} />
        </span>
      </div>
      
      <div className="absolute top-3 right-3">
        <span className="px-2 py-1 rounded-md bg-zinc-900/60 backdrop-blur text-[11px] text-zinc-300 font-normal border border-zinc-800">
          {role}
        </span>
      </div>
      
      <div className="absolute bottom-3 left-3 right-3">
        <p className="text-white text-lg font-medium tracking-tight leading-tight">
          {name}
        </p>
      </div>
    </article>
  );
};
