import React from 'react';
import { cn } from '@/lib/utils';

interface PhotoUploadProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  hint?: string;
  icon?: React.ReactNode;
}

export function PhotoUpload({
  label = 'Drag and drop photos here',
  hint = 'or click to browse • JPG, PNG up to 5MB each',
  icon,
  className,
  ...props
}: PhotoUploadProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-border bg-muted/40 px-8 py-10 text-center cursor-pointer transition-colors hover:border-primary hover:bg-muted',
        className
      )}
      {...props}
    >
      <div className="text-muted-foreground">
        {icon}
      </div>
      <div className="text-body font-medium text-foreground">{label}</div>
      <div className="text-small text-muted-foreground">{hint}</div>
    </div>
  );
}
