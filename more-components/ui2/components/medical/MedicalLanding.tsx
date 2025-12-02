/**
 * Main Medical Landing Page Component
 * Integrates all medical UI components into a cohesive landing page
 * @module MedicalLanding
 */

'use client';

import React from 'react';
import { Navigation } from './Navigation';
import { HeroSection } from './HeroSection';
import { BentoGrid } from './BentoGrid';
import { CTASection } from './CTASection';

/**
 * Medical Landing Page
 * Features:
 * - Fixed glass-effect navigation
 * - Hero section with certifications and ratings
 * - Bento grid layout with medical services
 * - Patient testimonials and statistics
 * - Emergency services information
 * - Call-to-action section
 * - Scroll-triggered animations
 * - Responsive design (mobile, tablet, desktop)
 */
export const MedicalLanding: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-gray-900 antialiased min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:py-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Bento Grid Layout */}
        <BentoGrid />

        {/* Bottom CTA */}
        <CTASection />
      </main>
    </div>
  );
};

MedicalLanding.displayName = 'MedicalLanding';

export default MedicalLanding;
