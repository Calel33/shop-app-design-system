import { StyleGuideCardProps } from './types';

export const StyleGuideCard = ({ 
  typography, 
  palette 
}: StyleGuideCardProps) => {
  return (
    <div 
      className="flex flex-col justify-between gap-6 rounded-xl p-6 shadow-sm ring-1 bg-card ring-border opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
    >
      <div>
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">
          STYLE GUIDE
        </p>
        <p className="mt-2 text-lg font-semibold">Typography</p>
        <p className="text-muted-foreground">{typography.primary}</p>
      </div>
      
      <p className="text-8xl font-normal tracking-tight font-playfair">
        AaBb
      </p>
      
      <div className="flex overflow-hidden rounded-lg">
        {palette.map((color, index) => (
          <div 
            key={index}
            className="h-6 flex-1"
            style={{ backgroundColor: color }}
            aria-label={`Color swatch ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
