import React from 'react';
import { FeatureGridProps } from './types';
import { FeatureCard } from './FeatureCard';

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  title,
  subtitle,
  description,
  features,
}) => {
  return (
    <section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div>
          {subtitle && (
            <p className="text-sm font-medium text-[#000000]/50 font-playfair">
              {subtitle}
            </p>
          )}
          <h2 className="sm:text-4xl md:text-5xl text-3xl font-medium text-[#000000] tracking-tight font-playfair">
            {title}
          </h2>
          {description && (
            <p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </section>
  );
};
