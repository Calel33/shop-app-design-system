import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface AboutStudioProps {
  imageUrl: string;
  onLearnMore?: () => void;
}

export const AboutStudio: React.FC<AboutStudioProps> = ({ imageUrl, onLearnMore }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div
          className="opacity-0 translate-y-8 transition-all duration-800"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          }}
        >
          <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">
            About Our Studio
          </p>
          <h2 className="text-4xl sm:text-6xl font-light font-serif tracking-tight mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Crafted with Passion
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-slate-600">
            <p>
              For over a decade, Atelier has been at the forefront of bespoke fashion design,
              creating timeless pieces that reflect the unique personality of each client.
            </p>
            <p>
              Our atelier combines traditional craftsmanship with contemporary design
              sensibilities, resulting in garments that are both elegant and innovative.
            </p>
            <p>
              Every piece is meticulously crafted by our skilled artisans using only the finest
              materials sourced from renowned suppliers worldwide.
            </p>
          </div>
          <div className="mt-10">
            <button
              onClick={onLearnMore}
              className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-2xl px-8 py-4 font-medium hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              Discover Our Story
              <ExternalLink className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div
          className="relative opacity-0 translate-y-8 transition-all duration-800 delay-100"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            transitionDelay: '100ms',
          }}
        >
          <div className="relative z-10 group cursor-pointer">
            <img
              src={imageUrl}
              alt="Atelier Studio"
              className="w-full h-[600px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:rotate-3 group-hover:scale-102"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-full h-full bg-slate-200 rounded-3xl opacity-30 -z-10" />
        </div>
      </div>
    </section>
  );
};
