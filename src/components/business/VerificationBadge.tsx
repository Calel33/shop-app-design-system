import React from 'react';
import { cn } from '@/lib/utils';

export interface VerificationBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: React.ReactNode;
}

export function VerificationBadge({ label, icon, className, ...props }: VerificationBadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-lg bg-gradient-to-tr from-emerald-500 to-emerald-400 px-3 py-1.5 text-small font-semibold text-emerald-50 shadow-sm',
        className
      )}
      {...props}
    >
      {icon && <span className="flex h-4 w-4 items-center justify-center" aria-hidden="true">{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
