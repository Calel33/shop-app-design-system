import React from 'react';
import { cn } from '@/lib/utils';
import { RotateCw } from 'lucide-react';

export interface LastUpdatedStampProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export function LastUpdatedStamp({ text, className, ...props }: LastUpdatedStampProps) {
  return (
    <div
      className={cn(
        'mt-2 flex items-center justify-center gap-2 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground',
        className
      )}
      {...props}
    >
      <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
      <span>{text}</span>
    </div>
  );
}
