import React from 'react';
import type { InfoCardProps } from '../types/background.types';

/**
 * InfoCard Component
 * Glassmorphic card for displaying steps or categories
 * Supports two variants: steps (timeline) and categories (list)
 */
export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon,
  steps,
  categories,
  glassmorphism = true,
  variant = steps ? 'steps' : 'categories',
  className = '',
}) => {
  const glassClasses = glassmorphism
    ? 'backdrop-blur-lg bg-white/5 border border-white/10 shadow-inner'
    : 'bg-gray-900 border border-gray-800';

  return (
    <div className={`rounded-3xl p-6 md:p-8 ${glassClasses} ${className}`}>
      {/* Card Header */}
      <h3 className="text-lg md:text-xl mb-5 md:mb-6 text-white flex items-center gap-2 font-light tracking-tight">
        {icon && <span className="w-5 h-5">{icon}</span>}
        {title}
      </h3>

      {/* Steps Variant */}
      {variant === 'steps' && steps && (
        <ol className="relative ml-3 space-y-8 before:absolute before:inset-0 before:ml-2 before:w-px before:bg-white/10">
          {steps.map((step, index) => (
            <li key={index} className="relative flex flex-col gap-2 pl-8">
              {/* Step indicator dot */}
              <span
                className={`absolute left-0 top-0 w-4 h-4 rounded-full ${
                  step.highlighted
                    ? 'bg-white/60'
                    : index === 0
                    ? 'bg-white/60'
                    : index === 1
                    ? 'bg-white/30'
                    : 'bg-white/20'
                }`}
                style={
                  step.highlighted || index === 0
                    ? { boxShadow: '0 0 0 3px rgba(255, 255, 255, 0.13)' }
                    : undefined
                }
              />

              {/* Step content */}
              <div>
                <p className="flex items-center gap-2 font-light tracking-tight text-white">
                  {step.icon && <span className="w-4 h-4">{step.icon}</span>}
                  {step.title}
                </p>
                <p className="text-sm text-white/70 max-w-xs font-light tracking-tight mt-1">
                  {step.description}
                </p>
              </div>

              {/* Additional content (e.g., avatars) */}
              {step.additionalContent && (
                <div className="mt-2">{step.additionalContent}</div>
              )}
            </li>
          ))}
        </ol>
      )}

      {/* Categories Variant */}
      {variant === 'categories' && categories && (
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`w-4 h-4 flex-shrink-0 ${
                    category.active ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {category.icon}
                </span>
                <div>
                  <span
                    className={`font-light tracking-tight ${
                      category.active ? 'text-white' : 'text-white/70'
                    }`}
                  >
                    {category.name}
                  </span>
                  <p
                    className={`text-xs mt-0.5 max-w-xs font-light tracking-tight ${
                      category.active ? 'text-white/50' : 'text-white/40'
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>
              <span
                className={`rounded-full px-2.5 py-0.5 text-xs bg-white/10 font-light tracking-tight ${
                  category.active ? 'text-white/70' : 'text-white/40'
                }`}
              >
                {category.count}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
