import React from 'react';
import { cn } from '@/lib/utils';

type InfoStatTone = 'primary' | 'accent' | 'muted';

interface InfoStatProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
  value: string;
  tone?: InfoStatTone;
}

const toneClasses: Record<InfoStatTone, string> = {
  primary:
    'bg-primary text-primary-foreground dark:bg-primary/90 dark:text-primary-foreground shadow-sm shadow-primary/20',
  accent:
    'bg-amber-500 text-amber-50 dark:bg-amber-400/90 dark:text-slate-950 shadow-sm shadow-amber-500/30',
  muted:
    'bg-muted text-muted-foreground dark:bg-muted/80 dark:text-muted-foreground/90',
};

export function InfoStat({
  icon,
  label,
  value,
  tone = 'primary',
  className,
  ...props
}: InfoStatProps) {
  return (
    <div className={cn('text-center text-small', className)} {...props}>
      <div
        className={cn(
          'mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full text-base',
          toneClasses[tone]
        )}
      >
        {icon}
      </div>
      <div className="text-[13px] font-medium text-muted-foreground mb-0.5">{label}</div>
      <div className="text-[15px] font-semibold text-foreground leading-snug">{value}</div>
    </div>
  );
}
