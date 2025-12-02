import { Edit3 } from 'lucide-react';
import { MobileAppCardProps } from './types';

export const MobileAppCard = ({ 
  title, 
  mockupImage, 
  cta 
}: MobileAppCardProps) => {
  return (
    <div 
      className="relative flex aspect-[9/16] overflow-hidden rounded-xl shadow-sm sm:col-span-2 lg:col-span-1 bg-card opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.55s', animationFillMode: 'forwards' }}
    >
      <img 
        src={mockupImage}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-white/60 via-transparent p-5">
        <h2 className="text-lg font-medium tracking-tight text-white">
          {title}
        </h2>
        <button 
          onClick={cta.onClick}
          className="mt-3 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-medium backdrop-blur transition bg-black/90 text-neutral-100 hover:bg-black focus-visible:ring focus-visible:ring-ring"
        >
          <Edit3 className="h-4 w-4" />
          {cta.label}
        </button>
      </div>
    </div>
  );
};
