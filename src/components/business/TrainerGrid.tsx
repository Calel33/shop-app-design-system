import React from 'react';
import { cn } from '@/lib/utils';
import { TrainerCard, TrainerCardProps } from './TrainerCard';

export interface Trainer extends Omit<TrainerCardProps, 'className'> {}

export interface TrainerGridProps extends React.HTMLAttributes<HTMLDivElement> {
  trainers: Trainer[];
}

export function TrainerGrid({ trainers, className, ...props }: TrainerGridProps) {
  return (
    <div
      className={cn(
        'grid gap-6 md:grid-cols-2',
        className
      )}
      {...props}
    >
      {trainers.map((trainer) => (
        <TrainerCard key={trainer.name} {...trainer} />
      ))}
    </div>
  );
}
