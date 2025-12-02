/**
 * Pricing Section Component
 * Displays pricing plans with features and CTAs
 * @module PricingSection
 */

'use client';

import React from 'react';
import { Check, ShieldCheck, Headphones, Zap } from 'lucide-react';
import type { PricingSectionProps } from '../types/web3.types';

export const PricingSection: React.FC<PricingSectionProps> = ({
  title,
  description,
  plans,
  footer
}) => {
  return (
    <section className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-geist">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 hover:border-orange-500/50 scale-105'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full font-geist">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2 font-geist">{plan.name}</h3>
                <p className="text-gray-400 text-sm font-geist">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-light tracking-tight font-geist">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm ml-2 font-geist">/{plan.period}</span>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    <span className="font-geist">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 font-geist ${
                  plan.highlighted
                    ? 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 shadow-lg'
                    : 'border border-white/20 bg-white/5 text-white hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
        
        {footer && (
          <div className="text-center">
            {footer.guaranteeText && (
              <p className="text-gray-400 text-sm mb-4 font-geist">{footer.guaranteeText}</p>
            )}
            {footer.features && (
              <div className="flex justify-center items-center gap-6 text-xs text-gray-500">
                {footer.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {feature.icon === 'shield' && <ShieldCheck className="w-4 h-4" />}
                    {feature.icon === 'headphones' && <Headphones className="w-4 h-4" />}
                    {feature.icon === 'zap' && <Zap className="w-4 h-4" />}
                    <span className="font-geist">{feature.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

PricingSection.displayName = 'PricingSection';

export default PricingSection;
