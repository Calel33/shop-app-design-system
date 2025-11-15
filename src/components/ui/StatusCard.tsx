import React from 'react';
import { cn } from '@/lib/utils';

type StatusVariant = 'info' | 'warning' | 'success';

interface StatusCardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: StatusVariant;
  title: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const variantClasses: Record<StatusVariant, string> = {
  info: 'border-sky-500 bg-sky-50 text-sky-900 dark:border-sky-400/60 dark:bg-sky-950/40 dark:text-sky-100',
  warning:
    'border-amber-500 bg-amber-50 text-amber-900 dark:border-amber-400/60 dark:bg-amber-950/40 dark:text-amber-100',
  success:
    'border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-400/60 dark:bg-emerald-950/40 dark:text-emerald-100',
};

export function StatusCard({
  variant = 'info',
  title,
  children,
  icon,
  className,
  ...props
}: StatusCardProps) {
  return (
    <div
      className={cn(
        'flex gap-3 rounded-xl border border-border/0 border-l-4 p-4 text-small',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && <div className="mt-0.5 text-base">{icon}</div>}
      <div className="space-y-1">
        <div className="font-medium">{title}</div>
        {children && <div className="text-[13px] leading-relaxed opacity-90">{children}</div>}
      </div>
    </div>
  );
}
