import React from 'react';
import { MetaItem } from '@/components/ui/MetaItem';
import { cn } from '@/lib/utils';
import { Clock, MapPin, Users } from 'lucide-react';

export interface BusinessMetaProps extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  reviewCount: number;
  distance: string;
  openStatus: string;
  spotsLeft?: string;
}

export function BusinessMeta({
  rating,
  reviewCount,
  distance,
  openStatus,
  spotsLeft,
  className,
  ...props
}: BusinessMetaProps) {
  const safeRating = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating - fullStars >= 0.5;

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-4 text-small text-muted-foreground',
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => {
            const isFull = index < fullStars;
            const isHalf = !isFull && hasHalfStar && index === fullStars;
            return (
              <span key={index} className="inline-block h-4 w-4">
                <span
                  className={cn(
                    'block h-full w-full rounded-sm bg-amber-500',
                    !isFull && !isHalf && 'bg-muted'
                  )}
                />
              </span>
            );
          })}
        </div>
        <span className="font-medium text-foreground">
          {safeRating.toFixed(1)}
        </span>
        <span>({reviewCount} reviews)</span>
      </div>

      <MetaItem icon={<MapPin className="h-4 w-4" aria-hidden="true" />}>{distance}</MetaItem>
      <MetaItem icon={<Clock className="h-4 w-4" aria-hidden="true" />}>{openStatus}</MetaItem>
      {spotsLeft && (
        <MetaItem icon={<Users className="h-4 w-4" aria-hidden="true" />}>{spotsLeft}</MetaItem>
      )}
    </div>
  );
}
