import React, { useEffect, useRef, useState } from 'react';
import { CollectionCard } from './CollectionCard';
import { CollectionGridProps } from './types';

export const CollectionGrid: React.FC<CollectionGridProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="collections"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-40"
    >
      {/* Section Header */}
      <div
        className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">
          Featured Collection
        </p>
        <h2 className="text-5xl sm:text-7xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Spring Awakening
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Ethereal designs inspired by nature's rebirth, crafted with sustainable luxury
          materials.
        </p>
      </div>

      {/* Masonry Grid */}
      <div
        className="opacity-0 translate-y-8 transition-all duration-800 delay-100"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
          transitionDelay: '100ms',
        }}
      >
        <div
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-0"
          style={{ columnFill: 'balance' }}
        >
          {items.map((item) => (
            <CollectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
