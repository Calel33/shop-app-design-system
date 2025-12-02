import React, { useState } from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { PricingTiersProps } from './types';

export const PricingTiers: React.FC<PricingTiersProps> = ({
  title,
  subtitle = "Transparent pricing for exceptional creative solutions",
  tiers,
  billingToggle,
  className = ''
}) => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  // Icon selection not used currently; remove until needed to satisfy strict TS

  return (
    <section className={`sm:py-20 pt-16 pb-16 scroll-element fade-in-up ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl ring-1 ring-border bg-gradient-to-br from-card to-background sm:px-10 lg:px-14 lg:py-14 pt-10 pr-6 pb-10 pl-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[11px] sm:text-xs tracking-widest text-muted-foreground font-light uppercase mb-3">
                (06) Investment
              </p>
              <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tighter text-foreground">
                {title}
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">{subtitle}</p>
            </div>
            
            {billingToggle && (
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{billingToggle.savings}</span>
                <div className="inline-flex rounded-full border border-border bg-card p-1">
                  <button
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      billingPeriod === 'monthly'
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setBillingPeriod('monthly')}
                  >
                    {billingToggle.monthly}
                  </button>
                  <button
                    className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                      billingPeriod === 'yearly'
                        ? 'bg-foreground text-background'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    onClick={() => setBillingPeriod('yearly')}
                  >
                    {billingToggle.yearly}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tiers.map((tier, index) => {
              const isPopular = tier.popular;
              const staggerClass = `stagger-${index + 1}`;
              
              return (
                <article
                  key={index}
                  className={`relative overflow-hidden rounded-3xl p-6 shadow-sm ring-1 scroll-element fade-in-up ${staggerClass} ${
                    isPopular
                      ? 'ring-accent/20 bg-foreground text-background'
                      : 'ring-border bg-gradient-to-b from-card to-background'
                  } ${tier.className || ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-lg font-semibold tracking-tight ${
                      isPopular ? 'text-background' : 'text-foreground'
                    }`}>
                      {tier.name}
                    </h3>
                    {tier.badge && (
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                        isPopular
                          ? 'bg-accent/20 text-accent'
                          : tier.badge === 'Start Here'
                          ? 'bg-muted text-muted-foreground'
                          : 'bg-foreground/10 text-foreground'
                      }`}>
                        {tier.badge === 'Most Popular' && <Star className="w-3 h-3" />}
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-3xl font-semibold tracking-tight ${
                        isPopular ? 'text-background' : 'text-foreground'
                      }`}>
                        {typeof tier.price === 'string' ? tier.price : `$${tier.price}`}
                      </span>
                      {tier.period && (
                        <span className={`text-sm ${
                          isPopular ? 'text-background/70' : 'text-muted-foreground'
                        }`}>
                          /{tier.period}
                        </span>
                      )}
                    </div>
                    <p className={`mt-1 text-sm ${
                      isPopular ? 'text-background/70' : 'text-muted-foreground'
                    }`}>
                      {tier.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`flex items-start gap-2 text-sm ${
                        isPopular ? 'text-background/90' : 'text-muted-foreground'
                      }`}>
                        <Check className={`mt-0.5 flex-shrink-0 w-4 h-4 ${
                          isPopular ? 'text-accent' : 'text-accent'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full inline-flex gap-2 transition-colors text-sm font-medium rounded-full pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center ${
                      isPopular
                        ? 'text-foreground bg-background hover:bg-muted border-background border'
                        : 'text-foreground bg-card hover:bg-muted border-border border'
                    }`}
                  >
                    {tier.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              All packages include unlimited revisions and full project ownership. Custom payment plans available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;