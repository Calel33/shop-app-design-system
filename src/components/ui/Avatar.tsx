import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
}

const sizeClasses = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
  xl: 'size-16',
};

export function Avatar({ src, alt = 'Avatar', size = 'md', fallback, className, ...props }: AvatarProps) {
  const [imageError, setImageError] = React.useState(false);

  const showFallback = !src || imageError;

  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden bg-muted flex items-center justify-center',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {showFallback ? (
        <span className="text-muted-foreground font-medium text-small">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}

export function AvatarGroup({ children, className, max = 3 }: { children: React.ReactNode; className?: string; max?: number }) {
  const childArray = React.Children.toArray(children);
  const displayChildren = childArray.slice(0, max);
  const remaining = childArray.length - max;

  return (
    <div className={cn('flex -space-x-2', className)}>
      {displayChildren}
      {remaining > 0 && (
        <div className="size-10 rounded-full bg-muted border-2 border-background flex items-center justify-center">
          <span className="text-small font-medium text-muted-foreground">+{remaining}</span>
        </div>
      )}
    </div>
  );
}

