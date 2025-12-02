import type { LoyaltyBannerProps } from "../types/business.types";

const LoyaltyBanner = ({ title, description, icon: Icon, benefits }: LoyaltyBannerProps) => {
  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 p-8 shadow-sm">
      <header className="mb-6 flex items-start gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-amber-800">{title}</h2>
          <p className="text-sm text-amber-700/80 sm:text-base">{description}</p>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex flex-col items-center justify-center rounded-2xl bg-white/70 p-4 text-center shadow-sm"
          >
            <span className="text-lg font-bold text-amber-600 sm:text-xl">{benefit.value}</span>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-700/80">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoyaltyBanner;
