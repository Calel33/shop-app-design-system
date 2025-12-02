import type { FC } from "react";
import { ShieldCheck, Star } from "lucide-react";
import type { Business } from "../types/directory.types";

export interface VerifiedBusinessCardProps {
  business: Business;
}

const VerifiedBusinessCard: FC<VerifiedBusinessCardProps> = ({ business }) => {
  return (
    <article className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <img
        src={business.logoUrl || business.imageUrl}
        alt="logo"
        className="h-12 w-12 rounded-md object-cover"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h4 className="truncate text-sm font-semibold text-slate-900">{business.name}</h4>
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Verified
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-600">
          <Star className="h-4 w-4 text-amber-500" aria-hidden="true" />
          {business.rating.toFixed(1)} • {business.reviewCount}
        </div>
      </div>
    </article>
  );
};

export default VerifiedBusinessCard;
