import React, { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import { ServiceOffering } from './types';

interface ServiceCardsProps {
  services: ServiceOffering[];
  onBookService?: (serviceId: string) => void;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({ services, onBookService }) => {
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
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Section Header */}
      <div
        className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Our Services</p>
        <h2 className="text-5xl sm:text-7xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Tailored to You
        </h2>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const isPopular = service.popular;
          const delay = index * 100;

          return (
            <div
              key={service.id}
              className={`group rounded-3xl transition-all duration-500 hover:scale-105 ${
                isPopular ? 'mb-0 mt-0' : 'mb-12'
              } opacity-0 translate-y-8`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                transitionDelay: `${delay}ms`,
              }}
            >
              <div
                className={`relative backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border ${
                  isPopular
                    ? 'bg-slate-900/90 border-slate-300/60 hover:bg-white/90'
                    : 'bg-white/80 border-slate-200/60 hover:bg-slate-900'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                    <span className="backdrop-blur-xl text-sm font-medium rounded-full px-4 py-2 text-white bg-slate-800 group-hover:bg-slate-200 group-hover:text-slate-800 transition-colors duration-500">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="relative z-10">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-medium uppercase tracking-wider transition-colors duration-500 ${
                        isPopular
                          ? 'text-white/60 group-hover:text-slate-600'
                          : 'text-slate-500 group-hover:text-white/70'
                      }`}
                    >
                      {service.badge || 'Service'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-2xl font-semibold mb-4 transition-colors duration-500 ${
                      isPopular
                        ? 'text-white group-hover:text-slate-900'
                        : 'text-slate-800 group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mb-6 leading-relaxed transition-colors duration-500 ${
                      isPopular
                        ? 'text-white/60 group-hover:text-slate-600'
                        : 'text-slate-600 group-hover:text-white/80'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check
                          className={`h-4 w-4 transition-colors duration-500 ${
                            isPopular
                              ? 'text-white/60 group-hover:text-slate-500'
                              : 'text-slate-500 group-hover:text-white/70'
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors duration-500 ${
                            isPopular
                              ? 'text-white/80 group-hover:text-slate-600'
                              : 'text-slate-600 group-hover:text-white/80'
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <span
                      className={`text-4xl font-light tracking-tight transition-colors duration-500 ${
                        isPopular
                          ? 'text-white group-hover:text-slate-900'
                          : 'text-slate-900 group-hover:text-white'
                      }`}
                    >
                      {service.price}
                    </span>
                    <span
                      className={`ml-2 transition-colors duration-500 ${
                        isPopular
                          ? 'text-white/60 group-hover:text-slate-500'
                          : 'text-slate-500 group-hover:text-white/70'
                      }`}
                    >
                      {service.priceNote}
                    </span>
                    <p
                      className={`text-xs mt-1 transition-colors duration-500 ${
                        isPopular
                          ? 'text-white/50 group-hover:text-slate-500'
                          : 'text-slate-500 group-hover:text-white/60'
                      }`}
                    >
                      {service.priceNote}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onBookService?.(service.id)}
                    className={`w-full backdrop-blur-xl rounded-2xl py-4 font-medium transition-all duration-500 hover:shadow-xl hover:scale-105 transform ${
                      isPopular
                        ? 'bg-white text-slate-900 group-hover:bg-slate-900 group-hover:text-white'
                        : 'bg-slate-900 text-white group-hover:bg-white group-hover:text-slate-900'
                    }`}
                  >
                    {isPopular ? 'Explore Collection' : service.popular ? 'Book Session' : 'Schedule Consultation'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
