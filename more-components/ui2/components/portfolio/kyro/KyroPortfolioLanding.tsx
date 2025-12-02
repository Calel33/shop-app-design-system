/**
 * KyroPortfolioLanding Component
 * Main component for KYRO Creative Technologist Portfolio
 * Combines all sub-components with 3D background and featured image
 */

import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { InfoGrid } from './InfoGrid';
import { WorkShowcase } from './WorkShowcase';
import { AboutSection } from './AboutSection';
import { ServicesSection } from './ServicesSection';
import { ContactFooter } from './ContactFooter';
import type { KyroPortfolioLandingProps } from '../../types/kyro-portfolio.types';

export const KyroPortfolioLanding: React.FC<KyroPortfolioLandingProps> = ({ className = '' }) => {
  return (
    <div className={`bg-black text-neutral-200 antialiased min-h-screen ${className}`}>
      {/* 3D Spline Background */}
      <div className="spline-container fixed top-0 w-full h-screen -z-10">
        <iframe
          src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Gradient Background"
          loading="lazy"
        />
      </div>

      {/* Background layers */}
      <div className="fixed inset-0 -z-10">
        {/* Subtle dots */}
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(#101010_1px,transparent_1px)] [background-size:16px_16px]" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.22] bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_1px,1px_120px]" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* Info Grid */}
      <InfoGrid />

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-10 sm:mt-14">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/30 via-transparent to-transparent mix-blend-screen pointer-events-none" />
            <img
              src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c00ff13b-bcc2-4ddd-a8bc-13bd3da53a81_1600w.jpg"
              alt="Portrait with bold red lighting"
              className="w-full h-[52vh] sm:h-[60vh] object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Work Showcase */}
      <WorkShowcase />

      {/* About Section */}
      <AboutSection
        name="Kyro Studio"
        role="Creative Technologist"
        location="Seattle, Washington • Remote‑friendly"
        portraitImage="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/102e9e77-7a32-4330-92f4-d2149285c86b_1600w.jpg"
        portraitAlt="Portrait side profile with dramatic lighting"
        bio="I design and build considered interfaces and rapid prototypes that bridge engineering and visual craft. From early concepts to production, I help teams move faster with clarity and intention."
        stats={{
          projects: '100+',
          experience: '10+',
          languages: '3',
          awards: '5',
          clients: '30+',
        }}
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Footer */}
      <ContactFooter
        status="Open for new collaborations"
        title="Let's build something considered."
        email="hello@kyro.studio"
      />
    </div>
  );
};

export default KyroPortfolioLanding;
