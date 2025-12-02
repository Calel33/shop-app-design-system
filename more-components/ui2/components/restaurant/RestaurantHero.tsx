import React, { useState } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { RestaurantHeroProps } from './types';
import { RestaurantBadge } from './RestaurantBadge';

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({
  brandName,
  headline,
  description,
  badges,
  primaryCTA,
  secondaryCTA,
  navLinks,
  heroImages = [],
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderHeadlineWithImages = () => {
    const parts = headline.split(/(\[IMG:\d+\])/g);
    
    return parts.map((part, index) => {
      const imgMatch = part.match(/\[IMG:(\d+)\]/);
      if (imgMatch) {
        const imgIndex = parseInt(imgMatch[1]);
        const image = heroImages[imgIndex];
        if (image) {
          return (
            <img
              key={index}
              alt={image.alt}
              className={image.className || "inline-block align-middle h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-24 ring-1 ring-neutral-200 object-cover rounded-xl mr-2 ml-2"}
              src={image.src}
            />
          );
        }
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto pr-4 pl-4">
      <div className="relative -mt-2 w-full shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] bg-white/90 border-neutral-200/70 rounded-[40px] border-t backdrop-blur-xl">
        <div className="sm:px-6 md:px-10 pt-8 pr-4 pb-10 pl-4">
          {/* Header Navigation */}
          <header className="w-full">
            <div className="flex gap-4 w-full mb-8 items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-black tracking-tight font-playfair">
                  {brandName}
                </span>
              </div>
              
              <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-black transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
                
                <button className="group inline-flex gap-3 shadow-stone-800/20 ring-1 ring-red-800/10 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white bg-gradient-to-l from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center">
                  Sign In
                </button>
              </div>
            </div>
          </header>

          {/* Headline */}
          <h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl font-normal text-neutral-900 tracking-tighter font-playfair">
            {renderHeadlineWithImages()}
          </h1>

          {/* Description */}
          <p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4">
            {description}
          </p>

          {/* Feature Badges */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            {badges.map((badge, index) => (
              <RestaurantBadge key={index} item={badge} />
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={primaryCTA.href || '#'}
              onClick={primaryCTA.onClick}
              className="group inline-flex items-center justify-center gap-3 shadow-stone-800/20 ring-1 ring-red-800/10 transition duration-150 ease-out hover:-translate-y-0.5 text-base font-medium text-white bg-gradient-to-l from-gray-900 to-black rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg"
            >
              {primaryCTA.label}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </a>
            
            {secondaryCTA && (
              <a
                href={secondaryCTA.href || '#'}
                onClick={secondaryCTA.onClick}
                className="inline-flex items-center justify-center text-base font-medium text-neutral-800 bg-neutral-100/60 border border-neutral-200 rounded-full px-6 py-3 hover:bg-neutral-100"
              >
                {secondaryCTA.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
