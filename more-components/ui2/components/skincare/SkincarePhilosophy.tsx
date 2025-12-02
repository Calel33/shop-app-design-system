// SkincarePhilosophy.tsx - About/philosophy section with background image
import { Check } from 'lucide-react';
import type { SkincarePhilosophyProps } from '../types/skincare.types';

export function SkincarePhilosophy({
  backgroundImage,
  heading,
  description,
  features,
  cta,
  className = '',
}: SkincarePhilosophyProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 py-20 ${className}`} id="about">
      <div
        className="grid lg:grid-cols-2 gap-16 relative group cursor-pointer transition-all duration-500 rounded-3xl p-8 md:p-16 lg:p-20 shadow-2xl"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30 dark:bg-black/45 group-hover:bg-black/45 rounded-3xl transition-all duration-500" />
        
        <div className="relative z-10 text-white flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            {heading}
          </h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            {description}
          </p>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-base">{feature}</span>
              </li>
            ))}
          </ul>
          
          {cta && (
            <div>
              <a
                href={cta.href || '#'}
                onClick={cta.onClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-neutral-900 font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
              >
                {cta.label}
                {cta.icon}
              </a>
            </div>
          )}
        </div>
        
        <div className="relative z-10" />
      </div>
    </section>
  );
}
