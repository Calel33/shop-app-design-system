import React from 'react';
import { ArrowRight } from 'lucide-react';
import { UnboxingLayoutProps } from './types';
import { UnboxingFeatureColumn } from './UnboxingFeatureColumn';
import { UnboxingHeader } from './UnboxingHeader';
import { UnboxingProductCard } from './UnboxingProductCard';
import { UnboxingFooter } from './UnboxingFooter';

export const UnboxingLayout: React.FC<UnboxingLayoutProps> = ({
  brandName,
  brandLogo,
  features,
  mainContent,
  footer,
  ctaButton,
  className = '',
}) => {
  const {
    backgroundColor = 'bg-yellow-400',
    heading,
    headingHighlight,
    description,
    secondaryDescription,
    utilityIcons = [],
    productCard,
  } = mainContent;

  return (
    <div className={`max-w-7xl mr-auto ml-auto ${className}`}>
      <div className="overflow-hidden bg-white rounded-3xl shadow-2xl relative">
        <main className="flex flex-col">
          <section className="grid grid-cols-1 lg:grid-cols-3 flex-1">
            {features.map((feature, index) => (
              <UnboxingFeatureColumn key={index} {...feature} />
            ))}

            {/* Main Content Column */}
            <div className={`${backgroundColor} flex flex-col relative overflow-hidden`}>
              {/* Decorative orbs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-12 -translate-x-12" />

              <UnboxingHeader
                brandName={brandName}
                brandLogo={brandLogo}
                utilityIcons={utilityIcons}
              />

              <div className="px-6 lg:px-8 relative z-10">
                <h1 className="md:text-4xl lg:text-5xl leading-tight text-3xl font-medium text-gray-900 tracking-tighter">
                  {heading}{' '}
                  {headingHighlight && (
                    <span className="text-gray-700">{headingHighlight}</span>
                  )}
                </h1>
                <p className="lg:mt-6 max-w-sm lg:text-base leading-relaxed text-sm text-gray-800 mt-4">
                  {description}
                </p>
                {secondaryDescription && (
                  <p className="lg:mt-6 max-w-sm lg:text-base leading-relaxed text-sm text-gray-800 mt-4">
                    {secondaryDescription}
                  </p>
                )}
              </div>

              {productCard && (
                <div className="lg:px-8 lg:pb-8 relative z-10 mt-auto pr-6 pb-6 pl-6">
                  <div className="h-px bg-gray-900/20 w-full my-6 lg:my-8" />
                  <UnboxingProductCard {...productCard} />
                </div>
              )}
            </div>
          </section>

          <UnboxingFooter {...footer} />
        </main>

        {ctaButton && (
          <button
            type="button"
            onClick={ctaButton.onClick}
            className={`absolute bottom-8 right-8 hover:from-gray-800 hover:to-gray-700 flex transition-all duration-200 hover:scale-105 z-50 text-sm font-semibold text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl pt-3 pr-6 pb-3 pl-6 shadow-2xl space-x-2 items-center ${
              ctaButton.className || ''
            }`}
          >
            <span>{ctaButton.label}</span>
            {ctaButton.icon || <ArrowRight className="w-4 h-4" />}
          </button>
        )}
      </div>
    </div>
  );
};
