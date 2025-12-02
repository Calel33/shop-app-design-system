import { ActivitySquare } from 'lucide-react';
import { BrandCardProps } from './types';

export const BrandCard = ({ 
  logo, 
  tagline, 
  backgroundImage 
}: BrandCardProps) => {
  const backgroundStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <div 
      className="flex flex-col gap-4 rounded-xl p-10 shadow-sm items-center justify-center text-center bg-[hsl(var(--chart-5))] text-white bg-cover opacity-0 animate-fade-in-up"
      style={{ 
        ...backgroundStyle,
        animationDelay: '0.45s', 
        animationFillMode: 'forwards' 
      }}
    >
      <ActivitySquare 
        className="w-[42px] h-[42px]" 
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <h1 className="text-3xl tracking-tight font-playfair font-normal">
        {logo.text}
      </h1>
      <p className="max-w-xs text-sm text-white/80">
        {tagline}
      </p>
    </div>
  );
};
