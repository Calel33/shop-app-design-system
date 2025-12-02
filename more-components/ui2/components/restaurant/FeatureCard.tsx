import React from 'react';
import { Calendar } from 'lucide-react';
import { FeatureCardProps } from './types';

const badgeColorMap = {
  amber: 'group-hover:bg-amber-500/20 group-hover:border-amber-400/30 group-hover:text-amber-200',
  orange: 'group-hover:bg-orange-500/20 group-hover:border-orange-400/30 group-hover:text-orange-200',
  purple: 'group-hover:bg-purple-500/20 group-hover:border-purple-400/30 group-hover:text-purple-200',
  green: 'group-hover:bg-green-500/25 group-hover:border-green-400/50 group-hover:text-green-200',
  blue: 'group-hover:bg-blue-500/20 group-hover:border-blue-400/30 group-hover:text-blue-200',
};

const titleColorMap = {
  amber: 'group-hover:text-amber-100',
  orange: 'group-hover:text-orange-200',
  purple: 'group-hover:text-purple-200',
  green: 'group-hover:text-green-200',
  blue: 'group-hover:text-blue-200',
};

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  badge,
  badgeColor = 'amber',
  size = 'small',
  ctas,
  category,
}) => {
  const isLarge = size === 'large';
  const badgeClasses = badgeColorMap[badgeColor];
  const titleColorClass = titleColorMap[badgeColor];

  if (isLarge) {
    return (
      <div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-zinc-900 border-white/10 border rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 opacity-0 animate-fade-in-up">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="sm:p-6 pt-5 pr-5 pb-5 pl-5 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="flex items-center gap-2">
            {badge && (
              <span className={`inline-flex items-center text-[11px] font-medium text-slate-50 font-inter bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 ${badgeClasses}`}>
                {badge}
              </span>
            )}
            {category && (
              <span className="text-xs text-white/60 font-inter transition-colors duration-300 group-hover:text-white/80">
                {category}
              </span>
            )}
          </div>
          
          <h3 className={`mt-3 text-2xl sm:text-3xl font-medium tracking-tight font-playfair text-white transition-colors duration-300 ${titleColorClass}`}>
            {title}
          </h3>
          
          <p className="mt-2 text-sm sm:text-base text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">
            {description}
          </p>
          
          {ctas && ctas.length > 0 && (
            <div className="mt-5 flex flex-wrap items-center gap-3 transform transition-all duration-300 group-hover:translate-x-1">
              {ctas.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href || '#'}
                  onClick={cta.onClick}
                  className={
                    cta.variant === 'primary'
                      ? 'inline-flex items-center gap-2 text-sm font-medium text-black font-inter bg-amber-500 rounded-lg px-4 py-2 hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-lg'
                      : 'inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur hover:bg-white/10 font-inter transition-all duration-300 hover:scale-105 hover:border-white/20'
                  }
                >
                  <Calendar className="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="group sm:p-8 bg-zinc-900 border-zinc-800 border rounded-3xl mt-0 pt-6 pr-6 pb-6 pl-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-zinc-800/80 hover:shadow-xl opacity-0 animate-fade-in-up">
      <div className="sm:p-6 md:p-8 bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
        <div className="flex items-center justify-between">
          <h3 className={`text-xl font-medium tracking-tight font-playfair text-white flex items-center gap-2 transition-colors duration-300 ${titleColorClass}`}>
            {title}
          </h3>
          {badge && (
            <span className={`inline-flex items-center text-[11px] font-medium text-slate-50 font-inter bg-slate-50/5 border-slate-50/10 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2 transition-all duration-300 ${badgeClasses}`}>
              {badge}
            </span>
          )}
        </div>
        
        <p className="mt-2 text-sm text-white/70 font-inter transition-colors duration-300 group-hover:text-white/80">
          {description}
        </p>
        
        <div className="mt-4 rounded-lg overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-white/20">
          <img
            src={image}
            alt={title}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};
