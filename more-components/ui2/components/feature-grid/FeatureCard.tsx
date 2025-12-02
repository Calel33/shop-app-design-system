import React from 'react';
import type { FeatureCardProps } from '../types/feature-grid.types';

const baseCard =
  'rounded-xl border bg-card/5 border-border/40 shadow-xl transition-colors';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  variant = 'default',
  badge,
  iconColor,
}) => {
  const variantClasses =
    variant === 'highlight'
      ? 'bg-card/10 border-border/50 shadow-2xl relative overflow-hidden'
      : 'bg-card/5';

  return (
    <div className={`${baseCard} ${variantClasses} p-5 sm:p-6 flex items-center`}>
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${
          iconColor ?? 'text-primary'
        }`}
        aria-hidden
      >
        {/* Consumers pass Lucide icons or custom nodes */}
        <div className="h-8 w-8">{icon}</div>
      </div>
      <div className="ml-4 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-foreground font-semibold text-base sm:text-lg">
            {title}
          </h3>
          {badge && (
            <span className="text-[10px] font-medium rounded px-2 py-0.5 bg-primary/15 text-primary border border-primary/30">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-foreground/70 line-clamp-2 sm:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
