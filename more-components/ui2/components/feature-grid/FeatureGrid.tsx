import React from 'react';
import { FeatureGridProps, FeatureItem, ButtonConfig } from './types';

const Badge: React.FC<{ label: string; variant?: 'new' | 'featured' | 'popular' }> = ({ 
  label, 
  variant = 'new' 
}) => {
  const variantStyles = {
    new: 'border-emerald-500/30 bg-emerald-500/15 text-emerald-300',
    featured: 'border-blue-500/30 bg-blue-500/15 text-blue-300',
    popular: 'border-purple-500/30 bg-purple-500/15 text-purple-300',
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-medium font-geist ${variantStyles[variant]}`}>
      {label}
    </span>
  );
};

const Button: React.FC<ButtonConfig> = ({ label, icon: Icon, variant, onClick, href }) => {
  const variantStyles = {
    primary: 'bg-emerald-500 text-black hover:bg-emerald-400',
    secondary: 'border-white/10 bg-white/5 text-white/90 hover:bg-white/10',
    ghost: 'text-white/70 hover:text-white',
  };

  const baseClasses = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium font-geist transition-colors backdrop-blur';
  const classes = `${baseClasses} ${variantStyles[variant]}`;

  const content = (
    <>
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

const FeatureCard: React.FC<{ feature: FeatureItem }> = ({ feature }) => {
  const sizeClasses = {
    hero: 'md:col-span-2 md:row-span-2',
    standard: '',
    compact: '',
  };

  const isHero = feature.size === 'hero';

  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${sizeClasses[feature.size || 'standard']}`}>
      {isHero && (
        <div className="relative">
          <img 
            src={feature.image} 
            alt={feature.imageAlt} 
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
          {feature.hasGradientOverlay && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          )}
        </div>
      )}
      
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2">
          {feature.badge && <Badge label={feature.badge.label} variant={feature.badge.variant} />}
          {feature.metadata && (
            <span className="text-xs text-white/60 font-geist">{feature.metadata}</span>
          )}
        </div>
        
        <h3 className={`mt-3 font-medium tracking-tight font-geist ${isHero ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
          {feature.title}
        </h3>
        
        <p className={`mt-2 text-white/70 font-geist ${isHero ? 'text-sm sm:text-base' : 'text-sm'}`}>
          {feature.description}
        </p>
        
        {!isHero && (
          <div className="mt-4 rounded-lg overflow-hidden border border-white/10">
            <img 
              src={feature.image} 
              alt={feature.imageAlt} 
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        
        {feature.buttons && feature.buttons.length > 0 && (
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {feature.buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  sectionLabel,
  title,
  description,
  features,
  columns = 3,
  className = '',
}) => {
  const gridClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  return (
    <section className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
        <div>
          {sectionLabel && (
            <p className="text-sm font-medium text-white/50 font-geist">{sectionLabel}</p>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter font-geist">
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base text-white/70 font-geist">{description}</p>
          )}
        </div>
      </div>

      <div className={`grid gap-6 ${gridClasses[columns]}`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
