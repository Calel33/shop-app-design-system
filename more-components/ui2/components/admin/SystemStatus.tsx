import type { SystemStatusEntry } from "@/ui/components/types/admin.types";

function badgeClass(status: SystemStatusEntry["status"]) {
  if (status === "online") return "bg-[hsl(var(--chart-3))]/20 text-foreground";
  if (status === "degraded") return "bg-[hsl(var(--chart-4))]/20 text-foreground";
  return "bg-[hsl(var(--destructive))]/20 text-foreground";
}

export default function SystemStatus({ items }: { items: SystemStatusEntry[] }) {
  return (
    <section aria-labelledby="system-status" className="rounded-lg border border-border bg-card">
      <div className="px-4 py-3 border-b border-border">
        <h2 id="system-status" className="font-semibold">System Health</h2>
      </div>
      <ul className="p-4 space-y-3" role="list">
        {items.map((s) => (
          <li key={s.service} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden />
              <span>{s.service}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-md ${badgeClass(s.status)}`}>{s.badge}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
