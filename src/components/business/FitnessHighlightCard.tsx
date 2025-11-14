import React from 'react';
import { cn } from '@/lib/utils';

export interface FitnessHighlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FitnessHighlightCard({
  icon,
  title,
  description,
  className,
  ...props
}: FitnessHighlightCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center rounded-xl border border-border bg-muted/60 p-5 text-center shadow-sm',
        className
      )}
      {...props}
    >
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-destructive to-accent text-accent-foreground">
        {icon}
      </div>
      <div className="mb-1 text-body font-semibold text-foreground">{title}</div>
      <p className="text-small text-muted-foreground">{description}</p>
    </div>
  );
}
