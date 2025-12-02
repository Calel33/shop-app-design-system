import React from 'react';

export interface AnalyticsHeroProps {
  title?: string;
  subtitle?: string;
  primaryCta?: { label: string; onClick: () => void };
  secondaryCta?: { label: string; onClick: () => void };
}

export const AnalyticsHero: React.FC<AnalyticsHeroProps> = ({
  title = 'Growth Analytics Dashboard',
  subtitle = 'Track KPIs, objectives, and customer signals in one place.',
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="rounded-2xl bg-gradient-to-br from-emerald-500/10 to-sky-500/10 ring-1 ring-white/10 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        <p className="mt-2 text-white/70 max-w-2xl">{subtitle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {primaryCta && (
            <button
              type="button"
              onClick={primaryCta.onClick}
              className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium shadow-sm hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {primaryCta.label}
            </button>
          )}
          {secondaryCta && (
            <button
              type="button"
              onClick={secondaryCta.onClick}
              className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-4 py-2 text-sm font-medium ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {secondaryCta.label}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsHero;
