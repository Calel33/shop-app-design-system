import React from 'react';
import { Avatar } from '@/components/ui/Avatar';
import { cn } from '@/lib/utils';

export interface TrainerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  initials: string;
  name: string;
  role: string;
  certifications: string;
  experience: string;
}

export function TrainerCard({
  initials,
  name,
  role,
  certifications,
  experience,
  className,
  ...props
}: TrainerCardProps) {
  return (
    <div
      className={cn(
        'flex gap-4 rounded-xl border border-border bg-muted/60 p-5 shadow-sm',
        className
      )}
      {...props}
    >
      <Avatar
        initials={initials}
        size="lg"
        className="rounded-xl bg-gradient-to-tr from-destructive to-accent text-accent-foreground"
      />
      <div className="space-y-1">
        <h4 className="text-body font-semibold text-foreground">{name}</h4>
        <div className="text-small font-semibold text-destructive">{role}</div>
        <div className="text-xs text-muted-foreground">{certifications}</div>
        <div className="text-small text-muted-foreground">{experience}</div>
      </div>
    </div>
  );
}
