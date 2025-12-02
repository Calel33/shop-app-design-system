import { DoctorCardProps } from './types';

export const DoctorCard = ({ 
  name, 
  specialty, 
  image, 
  imageAlt 
}: DoctorCardProps) => {
  return (
    <figure 
      className="relative overflow-hidden rounded-xl shadow-sm bg-neutral-800 opacity-0 animate-fade-in-up"
      style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
    >
      <img 
        src={image} 
        alt={imageAlt || `Portrait of ${name}`}
        className="h-full w-full object-cover transition hover:scale-105 duration-500 ease-out"
        loading="lazy"
      />
      <figcaption className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="text-lg font-medium tracking-tight text-white">
          {name}
        </p>
        <p className="text-xs text-white/80">
          {specialty}
        </p>
      </figcaption>
    </figure>
  );
};
