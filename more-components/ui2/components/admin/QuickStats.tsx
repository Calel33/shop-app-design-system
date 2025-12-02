import { ArrowDown, ArrowUp } from "lucide-react";

type Stat = {
  id: string;
  label: string;
  value: string | number;
  change?: { direction: "up" | "down"; value: string };
  variant?: "indigo" | "emerald" | "amber" | "red" | "cyan";
};

const barClasses: Record<NonNullable<Stat["variant"]>, string> = {
  indigo: "from-indigo-500 to-violet-500",
  emerald: "from-emerald-500 to-emerald-600",
  amber: "from-amber-500 to-amber-600",
  red: "from-red-500 to-red-600",
  cyan: "from-cyan-500 to-cyan-600",
};

export function QuickStats({ stats }: { stats: Stat[] }) {
  return (
    <div className="mb-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
      {stats.map((s) => (
        <div key={s.id} className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${barClasses[s.variant ?? "indigo"]}`} />
          <div className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">{s.value}</div>
          <div className="text-sm font-medium text-slate-500">{s.label}</div>
          {s.change && (
            <div className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${s.change.direction === "up" ? "text-emerald-600" : "text-red-600"}`}>
              {s.change.direction === "up" ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />}
              {s.change.value}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuickStats;
