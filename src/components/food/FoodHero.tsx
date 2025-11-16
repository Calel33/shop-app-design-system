import React from 'react';
import { cn } from '@/lib/utils';

interface FoodHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  tagline: string;
  imageUrl: string;
  verificationLabel?: string;
}

export function FoodHero({
  name,
  tagline,
  imageUrl,
  verificationLabel = 'Verified Business',
  className,
  ...props
}: FoodHeroProps) {
  return (
    <div
      className={cn(
        'relative flex h-72 items-end rounded-2xl bg-gradient-to-b from-black/40 to-black/60 p-8 text-white shadow-md overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent mix-blend-multiply" />
      <div className="relative flex w-full items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-semibold drop-shadow-sm md:text-4xl">{name}</h1>
          <p className="mt-1 max-w-xl text-base font-medium text-slate-50/90 drop-shadow-sm">
            {tagline}
          </p>
        </div>
        {verificationLabel && (
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-emerald-50 shadow-sm">
            <span className="h-4 w-4 rounded-full bg-emerald-50/20" />
            <span>{verificationLabel}</span>
          </div>
        )}
      </div>
    </div>
  );
}
