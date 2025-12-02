import React from 'react';
import type { FAQSectionProps } from '../types/faq.types';
import { FAQHero } from './FAQHero';
import { FAQGrid } from './FAQGrid';
import { FAQCTASection } from './FAQCTASection';

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  subtitle,
  description,
  faqs,
  onReadMore,
  onBrowseAll,
  onAskExperts,
  showCTA = true,
  animateOnScroll = true,
}) => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Hero Section */}
      <FAQHero
        title={title}
        subtitle={subtitle}
        description={description}
        animated={animateOnScroll}
      />

      {/* FAQ Grid */}
      <FAQGrid
        faqs={faqs}
        onReadMore={onReadMore}
        animateOnScroll={animateOnScroll}
      />

      {/* CTA Section */}
      {showCTA && (
        <FAQCTASection
          onBrowseAll={onBrowseAll}
          onAskExperts={onAskExperts}
          totalCount={faqs.length}
          animated={animateOnScroll}
        />
      )}
    </section>
  );
};
