import React from 'react';
import { cn } from '@/lib/utils';
import { PricingPlanCard, PricingPlanCardProps } from './PricingPlanCard';

export interface PricingPlan extends Omit<PricingPlanCardProps, 'className'> {}

export interface PricingPlanGridProps extends React.HTMLAttributes<HTMLDivElement> {
  plans: PricingPlan[];
}

export function PricingPlanGrid({ plans, className, ...props }: PricingPlanGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6 md:grid-cols-2 lg:grid-cols-3',
        className
      )}
      {...props}
    >
      {plans.map((plan) => (
        <PricingPlanCard key={plan.name} {...plan} />
      ))}
    </div>
  );
}
