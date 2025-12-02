import type { FC } from "react";
import { MapPin, ShieldCheck, Star } from "lucide-react";
import type { Business } from "../types/directory.types";

export interface BusinessCardProps {
  business: Business;
}

const BusinessCard: FC<BusinessCardProps> = ({ business }) => {
  return (
    <article
      className="rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      aria-labelledby={`biz-${business.id}`}
    >
      <img
        src={business.imageUrl}
        alt={`${business.name} cover`}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="flex items-center gap-2">
          <h4 id={`biz-${business.id}`} className="text-base font-semibold text-slate-900">
            {business.name}
          </h4>
          {business.isVerified ? (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Verified
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-600">
          {business.category}
          {business.subcategory ? ` • ${business.subcategory}` : ""}
        </p>
        <div
          className="mt-2 flex items-center gap-2 text-sm text-slate-700"
          aria-label={`Rating: ${business.rating} stars out of 5, ${business.reviewCount} reviews`}
        >
          <Star className="h-4 w-4 text-amber-500" aria-hidden="true" />
          <span className="font-medium">{business.rating.toFixed(1)}</span>
          <span className="text-slate-500">({business.reviewCount})</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          <span>
            {business.distance.toFixed(1)} {business.distanceUnit} away
          </span>
        </div>
        {business.description ? (
          <p className="mt-3 line-clamp-3 text-sm text-slate-600">{business.description}</p>
        ) : null}
        <div className="mt-4 flex gap-2">
          {business.primaryAction ? (
            <a
              href={business.primaryAction.url}
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {business.primaryAction.label}
            </a>
          ) : null}
          {business.secondaryAction ? (
            <a
              href={business.secondaryAction.url}
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {business.secondaryAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default BusinessCard;
