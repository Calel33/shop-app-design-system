import React from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import QuickStats from "./QuickStats";
import BusinessListItem from "./BusinessListItem";
import BulkToolbar from "./BulkToolbar";
import type { Business, BusinessFilters as Filters, ViewMode } from "../types/admin.types";

type Props = { data: Business[] };

const DEFAULT_FILTERS: Filters = {
  query: "",
  category: "All Categories",
  status: "All Statuses",
  zone: "All Zones",
  verification: "All Types",
};

export function BusinessDirectory({ data }: Props) {
  const [filters, setFilters] = React.useState<Filters>(DEFAULT_FILTERS);
  const [view, setView] = React.useState<ViewMode>("list");
  const [selected, setSelected] = React.useState<Record<string, boolean>>({});
  const MODES: ViewMode[] = ["list", "card", "map"];
  const allSelected = React.useMemo(() => Object.keys(selected).length > 0 && data.filter(d => match(d, filters)).every(d => selected[d.id]), [selected, data, filters]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "a" && (e.ctrlKey || e.metaKey)) return; // allow browser select-all
      if (e.key === "a") {
        e.preventDefault();
        toggleSelectAll();
      }
      if (e.key === "Escape") {
        setSelected({});
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filters, data, selected]);

  const categories = React.useMemo(() => Array.from(new Set(data.map(d => d.category))).sort(), [data]);
  const zones = React.useMemo(() => Array.from(new Set(data.map(d => d.zone).filter(Boolean) as string[])).sort(), [data]);

  const toggleSelect = (id: string) => setSelected((s) => ({ ...s, [id]: !s[id] }));
  const clearSelection = () => setSelected({});
  const toggleSelectAll = () => {
    const list = filtered;
    if (list.length === 0) return;
    if (allSelected) return setSelected({});
    const next: Record<string, boolean> = {};
    list.forEach((b) => (next[b.id] = true));
    setSelected(next);
  };

  const filtered = React.useMemo(() => data.filter((b) => match(b, filters)), [data, filters]);

  const stats = [
    { id: "total", label: "Total Businesses", value: data.length, change: { direction: "up" as const, value: "+12.5%" }, variant: "indigo" as const },
    { id: "active", label: "Active Listings", value: data.filter(d => d.status === "active").length, change: { direction: "up" as const, value: "+8.2%" }, variant: "emerald" as const },
    { id: "pending", label: "Pending Review", value: data.filter(d => d.status === "pending").length, change: { direction: "down" as const, value: "-15.3%" }, variant: "amber" as const },
    { id: "suspended", label: "Inactive/Suspended", value: data.filter(d => d.status === "suspended" || d.status === "inactive").length, change: { direction: "up" as const, value: "+5.7%" }, variant: "red" as const },
    { id: "revenue", label: "Monthly Revenue", value: "$18.2K", change: { direction: "up" as const, value: "+23.1%" }, variant: "cyan" as const },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Sidebar />
      <main className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <div className="mx-auto w-full max-w-7xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">Business Directory</h1>
            <p className="text-slate-500">Manage and monitor all business listings across your platform</p>
          </div>
          <QuickStats stats={stats} />
          <div className="mb-6">
            <div className="mb-3 flex items-center justify-end">
              <div className="inline-flex rounded-lg bg-slate-100 p-1 ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:ring-slate-700" role="tablist" aria-label="View switcher">
                {MODES.map((m) => {
                  const cls = [
                    "rounded-md px-3 py-1.5 text-xs font-semibold capitalize",
                    view === m ? "bg-white text-indigo-600 shadow ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700" : "text-slate-600 dark:text-slate-300",
                  ].join(" ");
                  return (
                    <button key={m} className={cls} onClick={() => setView(m)} aria-selected={view === m} role="tab">
                      {m} view
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-6">
                <label className="col-span-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="mb-2 block">Search Businesses</span>
                  <input
                    value={filters.query}
                    onChange={(e) => setFilters({ ...filters, query: e.target.value })}
                    placeholder="Business name, owner, address..."
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  <span className="mb-2 block">Category</span>
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
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
                    value={filters.status}
                    onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
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
                    value={filters.zone}
                    onChange={(e) => setFilters({ ...filters, zone: e.target.value })}
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
                    value={filters.verification}
                    onChange={(e) => setFilters({ ...filters, verification: e.target.value as any })}
                    className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800"
                  >
                    {["All Types", "verified", "premium", "basic", "unverified"].map((v) => (
                      <option key={v} value={v}>{typeof v === "string" ? v.charAt(0).toUpperCase() + v.slice(1) : v}</option>
                    ))}
                  </select>
                </label>
                <div className="flex items-center justify-end gap-2 md:justify-start">
                  <button className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-3 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:text-indigo-300">
                    Export
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                    Add Business
                  </button>
                </div>
              </div>
            </div>
          </div>
          {view === "list" && (
            <div className="flex flex-col gap-4">
              {filtered.map((b) => (
                <BusinessListItem key={b.id} business={b} selected={!!selected[b.id]} onToggleSelect={toggleSelect} />
              ))}
            </div>
          )}
          {view === "card" && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((b) => (
                <div key={b.id} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-2 text-sm font-semibold text-slate-900 dark:text-slate-100">{b.name}</div>
                  <div className="text-sm text-slate-500">{b.address}</div>
                </div>
              ))}
            </div>
          )}
          {view === "map" && (
            <div className="grid place-items-center rounded-xl border border-dashed border-slate-300 bg-white p-16 text-slate-500 dark:border-slate-800 dark:bg-slate-900">Map view placeholder</div>
          )}
        </div>
      </main>
      <BulkToolbar
        count={Object.values(selected).filter(Boolean).length}
        onApprove={clearSelection}
        onSuspend={clearSelection}
        onDelete={clearSelection}
      />
    </div>
  );
}

function match(b: Business, f: Filters) {
  const q = f.query.trim().toLowerCase();
  const passesQuery = !q || [b.name, b.owner, b.address, b.category, b.zone].filter(Boolean).some((v) => String(v).toLowerCase().includes(q));
  const passesCategory = f.category === "All Categories" || b.category === f.category;
  const passesStatus = f.status === "All Statuses" || b.status === f.status;
  const passesZone = f.zone === "All Zones" || b.zone === f.zone;
  const passesVerification = f.verification === "All Types" || (b.verification || []).includes(f.verification);
  return passesQuery && passesCategory && passesStatus && passesZone && passesVerification;
}

export default BusinessDirectory;
