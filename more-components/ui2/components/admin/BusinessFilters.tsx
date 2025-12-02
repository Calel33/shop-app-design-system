import { Search, Download, Plus } from "lucide-react";
import type { BusinessFilters, BusinessStatus, VerificationType } from "../types/admin.types";

type Props = {
  value: BusinessFilters;
  categories: string[];
  zones: string[];
  onChange: (next: BusinessFilters) => void;
  onExport?: () => void;
  onAdd?: () => void;
};

export function BusinessFilters({ value, categories, zones, onChange, onExport, onAdd }: Props) {
  const update = (patch: Partial<BusinessFilters>) => onChange({ ...value, ...patch });
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Business Listings</h3>
        <div className="inline-flex rounded-lg bg-slate-100 p-1 ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:ring-slate-700" role="tablist" aria-label="View switcher">
          {/* Consumers provide view switcher externally; this component focuses on filters */}
        </div>
      </div>
      <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-6">
        <label className="col-span-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="mb-2 block">Search Businesses</span>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={value.query}
              onChange={(e) => update({ query: e.target.value })}
              placeholder="Business name, owner, address..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-9 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="mb-2 block">Category</span>
          <select
            value={value.category}
            onChange={(e) => update({ category: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800"
          >
            {(["All Categories", ...categories]).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="mb-2 block">Status</span>
          <select
            value={value.status}
            onChange={(e) => update({ status: e.target.value as BusinessStatus | "All Statuses" })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800"
          >
            {["All Statuses", "active", "pending", "suspended", "inactive", "expired"].map((s) => (
              <option key={s} value={s}>{typeof s === "string" ? s.charAt(0).toUpperCase() + s.slice(1) : s}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="mb-2 block">Location Zone</span>
          <select
            value={value.zone}
            onChange={(e) => update({ zone: e.target.value })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800"
          >
            {(["All Zones", ...zones]).map((z) => (
              <option key={z} value={z}>{z}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          <span className="mb-2 block">Verification</span>
          <select
            value={value.verification}
            onChange={(e) => update({ verification: e.target.value as VerificationType | "All Types" })}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800"
          >
            {["All Types", "verified", "premium", "basic", "unverified"].map((v) => (
              <option key={v} value={v}>{typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : v}</option>
            ))}
          </select>
        </label>
        <div className="flex items-center justify-end gap-2 md:justify-start">
          <button className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-300" onClick={onExport}>
            <Download className="h-4 w-4" /> Export
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" onClick={onAdd}>
            <Plus className="h-4 w-4" /> Add Business
          </button>
        </div>
      </div>
    </div>
  );
}

export default BusinessFilters;
