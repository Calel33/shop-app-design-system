/**
 * BubbleLanding Component
 * Main container for Bubble Childcare landing page
 * @module childcare/BubbleLanding
 */

import type { BubbleLandingProps } from '../types/childcare.types';
import { BubbleHeader } from './BubbleHeader';
import { BubbleHero } from './BubbleHero';
import { FeatureHighlights } from './FeatureHighlights';
import { ProgramsSection } from './ProgramsSection';
import { PromiseSection } from './PromiseSection';
import { TestimonialsSection } from './TestimonialsSection';
import { VisitCTA } from './VisitCTA';
import { BubbleFooter } from './BubbleFooter';

export const BubbleLanding = ({
  header,
  hero,
  features,
  programs,
  promise,
  testimonials,
  visitCTA,
  footer,
  className = '',
}: BubbleLandingProps) => {
  return (
    <div className={`min-h-screen antialiased text-black bg-neutral-50 font-nunito ${className}`}>
      <BubbleHeader {...header} />
      <main>
        <BubbleHero {...hero} />
        <FeatureHighlights features={features} />
        <ProgramsSection {...programs} />
        <PromiseSection {...promise} />
        <TestimonialsSection {...testimonials} />
        <VisitCTA {...visitCTA} />
      </main>
      <BubbleFooter {...footer} />
    </div>
  );
};

export default BubbleLanding;
