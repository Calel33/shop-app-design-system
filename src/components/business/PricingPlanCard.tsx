import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export type PricingPlanVariant = 'default' | 'featured';

export interface PricingPlanCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  price: string;
  period: string;
  features: string[];
  ctaLabel: string;
  variant?: PricingPlanVariant;
}

export function PricingPlanCard({
  name,
  price,
  period,
  features,
  ctaLabel,
  variant = 'default',
  className,
  ...props
}: PricingPlanCardProps) {
  const isFeatured = variant === 'featured';

  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-xl border-2 border-border bg-card p-6 text-center shadow-sm',
        isFeatured &&
          'border-destructive bg-gradient-to-b from-destructive/5 to-background shadow-md',
        className
      )}
      {...props}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-destructive px-3 py-1 text-xs font-semibold text-destructive-foreground shadow-sm">
          Most Popular
        </div>
      )}
      <div className="mb-2 text-body font-semibold text-foreground">{name}</div>
      <div className="mb-1 text-3xl font-bold text-destructive">
        {price}
        <span className="ml-1 align-middle text-small font-normal text-muted-foreground">
          /{period}
        </span>
      </div>
      <ul className="mb-4 mt-3 space-y-1 text-left text-small text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Button
          variant={isFeatured ? 'primary' : 'secondary'}
          className="w-full justify-center"
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
