import { Check, Eye, MoreHorizontal, Star, User, Calendar, EyeIcon, Info } from "lucide-react";
import type { Business } from "../types/admin.types";

type Props = {
  business: Business;
  selected?: boolean;
  onToggleSelect?: (id: string) => void;
  onPrimary?: (id: string) => void;
  onSecondary?: (id: string) => void;
};

const statusClasses: Record<string, string> = {
  active: "text-emerald-600",
  pending: "text-amber-600",
  suspended: "text-red-600",
  inactive: "text-slate-500",
  expired: "text-slate-500",
};

export function BusinessListItem({ business, selected, onToggleSelect, onPrimary, onSecondary }: Props) {
  const status = business.status;
  return (
    <div
      className={[
        "relative rounded-xl border bg-white dark:bg-slate-900 transition-colors",
        selected ? "border-indigo-400/60 bg-indigo-50/40 dark:bg-indigo-950/10" : "border-slate-200 dark:border-slate-800",
      ].join(" ")}
      role="group"
      aria-checked={!!selected}
    >
      <input
        aria-label={`Select ${business.name}`}
        type="checkbox"
        className="absolute top-4 left-4 size-4 accent-indigo-600"
        checked={!!selected}
        onChange={() => onToggleSelect?.(business.id)}
      />
      <div className="flex items-start justify-between gap-4 p-6">
        <div className="flex min-w-0 flex-1 gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800">
            <span className="text-lg">{business.category.slice(0,1)}</span>
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-slate-900 dark:text-slate-100">{business.name}</h3>
            <p className="truncate text-sm text-slate-500">{business.address}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:ring-indigo-900">{business.category}</span>
              {business.verification?.includes("verified") && (
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900">Verified</span>
              )}
              {business.verification?.includes("premium") && (
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:ring-amber-900">Premium</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1 rounded-md bg-indigo-50 px-2.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-200 hover:bg-indigo-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-indigo-950/30 dark:text-indigo-300 dark:ring-indigo-900" onClick={() => onPrimary?.(business.id)}>
            <Check className="h-3.5 w-3.5" /> Edit
          </button>
          <button className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2.5 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200 hover:bg-emerald-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:bg-emerald-950/30 dark:text-emerald-300 dark:ring-emerald-900" onClick={() => onSecondary?.(business.id)}>
            <Eye className="h-3.5 w-3.5" /> View
          </button>
          <button aria-label="More actions" className="inline-flex items-center rounded-md bg-slate-50 p-1.5 text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:bg-slate-800/60 dark:text-slate-300 dark:ring-slate-700">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 border-t border-slate-100 p-6 text-sm text-slate-500 dark:border-slate-800 md:grid-cols-4">
        <div className="flex items-center gap-2"><User className="h-4 w-4 text-slate-400" /><span>{business.owner}</span></div>
        {typeof business.meta?.rating === "number" ? (
          <div className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" /><span>{business.meta.rating.toFixed(1)}{business.meta.reviewsCount ? ` (${business.meta.reviewsCount} reviews)` : ""}</span></div>
        ) : (
          <div className="flex items-center gap-2"><Info className="h-4 w-4 text-slate-400" /><span>No rating</span></div>
        )}
        <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-slate-400" /><span>{business.meta?.lastUpdated ? new Date(business.meta.lastUpdated).toLocaleDateString() : "—"}</span></div>
        <div className="flex items-center gap-2"><EyeIcon className="h-4 w-4 text-slate-400" /><span>{business.meta?.monthlyViews ?? 0} monthly views</span></div>
      </div>
      <div className="absolute right-6 top-6 flex items-center gap-2 text-xs font-medium">
        <span className={["inline-flex items-center gap-2", statusClasses[status] ?? "text-slate-500"].join(" ")}
          aria-label={`Status ${status}`}>
          <span className="h-2 w-2 rounded-full bg-current" />
          {status.charAt(0).toUpperCase() + status.slice(1).replace("_"," ")}
        </span>
      </div>
    </div>
  );
}

export default BusinessListItem;
