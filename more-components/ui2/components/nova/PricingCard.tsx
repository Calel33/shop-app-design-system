import React from 'react';
import { Check } from 'lucide-react';
import { PricingCardProps } from './types';

export const PricingCard = ({
  tier,
  price,
  period,
  description,
  features,
  featured = false,
  ctaText,
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow ${
        featured
          ? 'border-2 border-blue-500/60 bg-gradient-to-b from-blue-900/30 to-blue-900/10 shadow-lg'
          : 'border border-white/10 bg-gradient-to-b from-gray-900 to-gray-900/60'
      }`}
    >
      {/* Tier Badge */}
      <span
        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 font-sans ${
          featured
            ? 'bg-blue-500/15 text-blue-200 ring-blue-400/30'
            : 'bg-white/5 text-gray-200 ring-white/10'
        }`}
      >
        {tier}
      </span>

      {/* Pricing */}
      <div className={`mt-6 ${featured ? 'text-white' : ''}`}>
        <div>
          <div className="text-4xl font-manrope tracking-tighter">
            {price}
            <span className={`ml-1 text-base italic font-normal font-sans ${featured ? 'text-gray-300' : 'text-gray-400'}`}>
              {period}
            </span>
          </div>
          <p className={`mt-2 text-sm font-sans ${featured ? 'text-gray-300' : 'text-gray-400'}`}>
            {description}
          </p>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3 text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className={`w-4 h-4 ${featured ? 'text-emerald-300' : 'text-emerald-400'}`} />
              <span className={`font-sans ${featured ? 'text-gray-100' : 'text-gray-300'}`}>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="#"
          className={`mt-8 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition font-sans ${
            featured
              ? 'bg-white text-gray-900 hover:bg-gray-100'
              : 'border border-white/10 text-white hover:bg-white/5'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
};
