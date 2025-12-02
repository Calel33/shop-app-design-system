import React from "react";
import { BarChart3, Bell, Clock9, Compass, Database, FileOutput, Layers3, MapPin, Settings2, Store } from "lucide-react";

type NavItem = { id: string; label: string; icon: React.ElementType; badge?: number; active?: boolean };

const groups: { title: string; items: NavItem[] }[] = [
  {
    title: "Overview",
    items: [
      { id: "analytics", label: "Analytics Dashboard", icon: BarChart3 },
      { id: "approvals", label: "Pending Approvals", icon: Clock9, badge: 18 },
      { id: "activity", label: "Recent Activity", icon: Bell },
    ],
  },
  {
    title: "Management",
    items: [
      { id: "directory", label: "Business Directory", icon: Store, active: true },
      { id: "users", label: "User Management", icon: Settings2 },
      { id: "categories", label: "Categories & Tags", icon: Layers3 },
      { id: "locations", label: "Location Management", icon: MapPin },
    ],
  },
  {
    title: "Tools",
    items: [
      { id: "export", label: "Data Export", icon: FileOutput },
      { id: "security", label: "Security Settings", icon: Database },
      { id: "system", label: "System Configuration", icon: Settings2 },
    ],
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-[300px] shrink-0 border-r border-slate-200 bg-gradient-to-b from-white to-slate-50 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 lg:flex lg:flex-col">
      <div className="border-b border-slate-200 p-7 dark:border-slate-800">
        <div className="mb-5 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-white"><Compass className="h-5 w-5" /></div>
          <div className="text-xl font-extrabold text-slate-900 dark:text-slate-100">BusinessHub</div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">AJ</div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Alex Johnson</div>
            <div className="text-xs text-slate-500">Super Admin</div>
          </div>
        </div>
      </div>
      <nav className="flex-1 space-y-8 p-6">
        {groups.map((g) => (
          <div key={g.title}>
            <div className="mb-2 px-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">{g.title}</div>
            <ul className="space-y-1">
              {g.items.map((it) => (
                <li key={it.id}>
                  <a href="#" className={["flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition", it.active ? "bg-gradient-to-r from-indigo-500/15 to-transparent text-indigo-600" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"].join(" ")}>
                    <it.icon className="h-4 w-4" />
                    <span>{it.label}</span>
                    {typeof it.badge === "number" && (
                      <span className="ml-auto rounded-full bg-rose-500 px-2 py-0.5 text-[10px] font-extrabold text-white">{it.badge}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
