/**
 * FeatureHighlights Component
 * Grid of feature cards with icons
 * @module childcare/FeatureHighlights
 */

import type { FeatureHighlightsProps, FeatureCardProps } from '../types/childcare.types';

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="rounded-2xl border p-6 border-black/10 bg-black/5">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black text-neutral-100">
      {icon}
    </div>
    <h3 className="mt-4 text-lg font-semibold tracking-tight font-nunito">
      {title}
    </h3>
    <p className="mt-2 text-sm text-black/70 font-nunito">
      {description}
    </p>
  </div>
);

export const FeatureHighlights = ({
  features,
  className = '',
}: FeatureHighlightsProps) => {
  return (
    <section className={`sm:py-20 pt-16 pb-16 ${className}`} id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
