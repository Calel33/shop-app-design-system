import React from 'react';
import { cn } from '@/lib/utils';

interface MetaItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function MetaItem({ icon, children, className, ...props }: MetaItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-1.5 text-small text-muted-foreground',
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

