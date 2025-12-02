import { Clock, MapPin, ShieldCheck, Star } from "lucide-react";

import type { BusinessAction, BusinessDetailsProps } from "../types/business-listing.types";

const actionStyles: Record<"primary" | "secondary" | "outline", string> = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 focus-visible:ring-offset-white",
  secondary:
    "border border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 focus-visible:ring-offset-white",
  outline:
    "border border-slate-200 text-slate-700 hover:bg-slate-100 focus-visible:ring-blue-500 focus-visible:ring-offset-white",
};

const BusinessDetails = ({
  name,
  categories,
  verified,
  rating,
  distanceLabel,
  status,
  description,
  actions,
}: BusinessDetailsProps) => {
  const renderAction = (action: BusinessAction) => {
    const variant = action.variant ?? "primary";
    const classes = actionStyles[variant];

    return (
      <a
        key={action.label}
        href={action.href}
        target={action.external ? "_blank" : undefined}
        rel={action.external ? "noreferrer" : undefined}
        onClick={action.onClick}
        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${classes}`}
      >
        {action.icon ? <action.icon className="h-4 w-4" aria-hidden="true" /> : null}
        <span>{action.label}</span>
      </a>
    );
  };

  return (
    <div className="space-y-6">
      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">{name}</h1>
          {verified ? (
            <span className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-green-600 to-green-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Verified Business
            </span>
          ) : null}
        </div>
        <p className="text-sm text-slate-500">{categories.join(" • ")}</p>
      </header>

      <dl className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
        <div className="flex items-center gap-2" aria-label={`${rating.score.toFixed(1)} out of 5 stars`}>
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, index) => {
              const isFilled = index < Math.round(rating.score);
              return (
                <Star
                  key={`star-${index}`}
                  className={`h-4 w-4 ${
                    isFilled
                      ? "fill-current text-amber-500"
                      : "fill-transparent text-amber-200"
                  }`}
                />
              );
            })}
          </div>
          <span className="font-medium text-slate-700">{rating.score.toFixed(1)}</span>
          <span className="text-slate-400">({rating.count} reviews)</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
          <span>{distanceLabel}</span>
        </div>
        <div className="flex items-center gap-2" aria-live="polite">
          <Clock className={`h-4 w-4 ${status.isOpen ? "text-green-600" : "text-red-500"}`} aria-hidden="true" />
          <span className={status.isOpen ? "text-green-600" : "text-red-500"}>{status.message}</span>
        </div>
      </dl>

      <p className="text-base text-slate-600">{description}</p>

      <div className="flex flex-wrap gap-3">{actions.map(renderAction)}</div>
    </div>
  );
};

export default BusinessDetails;
