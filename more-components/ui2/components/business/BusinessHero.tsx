import { ShieldCheck } from "lucide-react";

import type { BusinessHeroProps } from "../types/business.types";

const BusinessHero = ({ image, name, tagline, verifiedLabel, description, features }: BusinessHeroProps) => {
  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-emerald-100">
      <div className="relative h-72 w-full overflow-hidden bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-900/20 to-transparent" aria-hidden="true" />
      </div>

      <div className="space-y-8 px-6 pb-8 pt-10 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{name}</h1>
              <p className="text-lg font-semibold text-emerald-600 sm:text-xl">{tagline}</p>
            </div>
            <p className="text-base text-slate-600 sm:text-lg">{description}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            {verifiedLabel}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col gap-2 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 text-center shadow-sm"
            >
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="text-sm font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-xs text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
