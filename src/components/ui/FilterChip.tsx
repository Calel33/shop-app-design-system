import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, X } from 'lucide-react';

interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  active?: boolean;
  showDropdown?: boolean;
  showClose?: boolean;
  onClose?: () => void;
}

export function FilterChip({
  label,
  active = false,
  showDropdown = false,
  showClose = false,
  onClose,
  className,
  ...props
}: FilterChipProps) {
  return (
    <button
      className={cn(
        'flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium transition-colors',
        active
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted text-foreground hover:bg-muted/80',
        className
      )}
      {...props}
    >
      <span>{label}</span>
      {showDropdown && (
        <ChevronDown className="h-4 w-4" />
      )}
      {showClose && (
        <X
          className="h-4 w-4 hover:opacity-70"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
        />
      )}
    </button>
  );
}

interface FilterChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

export function FilterChipGroup({ children, className }: FilterChipGroupProps) {
  return (
    <div className={cn('flex gap-2 flex-wrap', className)}>
      {children}
    </div>
  );
}

