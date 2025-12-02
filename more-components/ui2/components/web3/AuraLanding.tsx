/**
 * Main Aura Landing Page Component
 * Integrates all Web3/Aura UI components into a cohesive landing page
 * @module AuraLanding
 */

'use client';

import React from 'react';
import { AuraHeader } from './AuraHeader';
import { AuraHero } from './AuraHero';
import { NetworksSection } from './NetworksSection';
import { PricingSection } from './PricingSection';
import { TestimonialsSection } from './TestimonialsSection';
import { FAQSection } from './FAQSection';
import { AuraFooter } from './AuraFooter';
import type { AuraLandingProps } from '../types/web3.types';

/**
 * Aura Web3 Infrastructure Landing Page
 * Features:
 * - Fixed glass-effect navigation with mobile menu
 * - Hero section with animated floating tags and stats
 * - Networks showcase grid
 * - Pricing section with 3 tiers
 * - Testimonials with 5-star ratings
 * - FAQ section with accordion functionality
 * - Footer with social links
 * - Spline 3D background animation
 * - Custom animations (fadeInUp, float)
 * - Responsive design (mobile, tablet, desktop)
 * - Dark theme with orange accent colors
 * - Geist font family
 */
export const AuraLanding: React.FC<Partial<AuraLandingProps>> = ({
  header,
  hero,
  networks,
  pricing,
  testimonials,
  faq,
  footer,
  splineBackground = 'https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx'
}) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Spline 3D Background */}
      {splineBackground && (
        <div className="spline-container fixed top-0 w-full h-screen -z-10">
          <iframe
            src={splineBackground}
            frameBorder="0"
            width="100%"
            height="100%"
            title="3D Background Animation"
          />
        </div>
      )}

      {/* Navigation */}
      {header && <AuraHeader {...header} />}

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        {hero && <AuraHero {...hero} />}

        {/* Networks Section */}
        {networks && <NetworksSection {...networks} />}

        {/* Pricing Section */}
        {pricing && <PricingSection {...pricing} />}

        {/* Testimonials Section */}
        {testimonials && <TestimonialsSection {...testimonials} />}

        {/* FAQ Section */}
        {faq && <FAQSection {...faq} />}
      </main>

      {/* Footer */}
      {footer && <AuraFooter {...footer} />}
    </div>
  );
};

AuraLanding.displayName = 'AuraLanding';

export default AuraLanding;
