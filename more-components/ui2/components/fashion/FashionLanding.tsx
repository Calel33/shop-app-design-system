import React from 'react';
import { FloatingNav } from './FloatingNav';
import { FashionHero } from './FashionHero';
import { StatsSection } from './StatsSection';
import { AboutStudio } from './AboutStudio';
import { CollectionGrid } from './CollectionGrid';
import { TimelineSection } from './TimelineSection';
import { ServiceCards } from './ServiceCards';
import { TeamSection } from './TeamSection';
import { TestimonialGrid } from './TestimonialGrid';
import { CTASection } from './CTASection';
import { FashionLandingProps, StatsCounter } from './types';

export const FashionLanding: React.FC<FashionLandingProps> = ({
  collections,
  timeline,
  team,
  testimonials,
  services,
  onBookConsultation,
  onExploreCollections,
}) => {
  // Default navigation links
  const navLinks = [
    { label: 'Collections', href: '#collections' },
    { label: 'Studio', href: '#studio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  // Default stats data
  const statsData: StatsCounter[] = [
    { value: 500, label: 'Happy Clients', suffix: '+' },
    { value: 1200, label: 'Designs Created', suffix: '+' },
    { value: 15, label: 'Years Experience', suffix: '' },
    { value: 98, label: 'Satisfaction %', suffix: '%' },
  ];

  // Default about studio image
  const aboutStudioImage =
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3208bf01-65b0-4fa1-8ea9-3dd17c27c1ce_1600w.jpg';

  // Default CTA background
  const ctaBackground =
    'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7ee1ae4-6186-4fda-8f94-0751ebe55bf2_800w.jpg';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 font-sans antialiased text-slate-800">
      {/* Floating Navigation */}
      <FloatingNav links={navLinks} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <FashionHero
          onExplore={onExploreCollections}
          onBookConsultation={onBookConsultation}
        />

        {/* Stats Section */}
        <StatsSection stats={statsData} />

        {/* About Studio */}
        <AboutStudio imageUrl={aboutStudioImage} />

        {/* Collections Grid */}
        <CollectionGrid items={collections} />

        {/* Design Process Timeline */}
        <TimelineSection steps={timeline} />

        {/* Services */}
        <ServiceCards services={services} />

        {/* Team Section */}
        <TeamSection team={team} />

        {/* Testimonials */}
        <TestimonialGrid testimonials={testimonials} />

        {/* Newsletter CTA */}
        <CTASection backgroundImage={ctaBackground} />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-xl bg-white/80 border-t border-slate-200/60 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-light font-serif tracking-tight mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              ATELIER
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-md mb-6">
              Crafting timeless elegance through bespoke fashion design. Where your personal style
              meets our artistic vision.
            </p>
            <div className="flex gap-4">
              <SocialButton href="#" ariaLabel="Instagram" />
              <SocialButton href="#" ariaLabel="LinkedIn" />
              <SocialButton href="#" ariaLabel="Twitter" />
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink href="#" label="Personal Styling" />
              <FooterLink href="#" label="Ready-to-Wear" />
              <FooterLink href="#" label="Bespoke Couture" />
              <FooterLink href="#" label="Alterations" />
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-slate-800 mb-6">Contact</h4>
            <ul className="space-y-3 text-slate-600">
              <li className="text-sm">Madison Avenue, NYC</li>
              <li className="text-sm">(555) 123-4567</li>
              <li className="text-sm">hello@atelier.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-200 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Atelier. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <FooterLink href="#" label="Privacy Policy" />
            <FooterLink href="#" label="Terms of Service" />
            <FooterLink href="#" label="Cookie Policy" />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => (
  <li>
    <a href={href} className="text-slate-600 hover:text-slate-900 transition-colors">
      {label}
    </a>
  </li>
);

interface SocialButtonProps {
  href: string;
  ariaLabel: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="backdrop-blur-xl bg-slate-100 border border-slate-200/60 text-slate-600 hover:text-slate-900 rounded-xl p-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
  >
    <div className="h-5 w-5" />
  </a>
);
