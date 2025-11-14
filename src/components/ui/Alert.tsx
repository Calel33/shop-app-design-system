import React from 'react';
import { cn } from '@/lib/utils';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'destructive' | 'success';
  children: React.ReactNode;
}

export function Alert({ variant = 'default', className, children, ...props }: AlertProps) {
  const variants = {
    default: 'bg-card text-card-foreground border-border',
    destructive: 'bg-destructive/10 text-destructive border-destructive/50',
    success: 'bg-secondary/10 text-secondary border-secondary/50',
  };

  return (
    <div
      className={cn(
        'relative w-full rounded-lg border p-4',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 className={cn('mb-1 font-medium leading-none tracking-tight', className)} {...props}>
      {children}
    </h5>
  );
}

export function AlertDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <div className={cn('text-small [&_p]:leading-relaxed', className)} {...props}>
      {children}
    </div>
  );
}

