import type { ActivityItem } from "@/ui/components/types/admin.types";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

function Dot({ type }: { type: ActivityItem["type"] }) {
  const map: Record<ActivityItem["type"], string> = {
    success: "bg-[hsl(var(--chart-3))]",
    info: "bg-[hsl(var(--chart-2))]",
    warning: "bg-[hsl(var(--chart-4))]",
    error: "bg-[hsl(var(--destructive))]",
  };
  return <span className={`h-2 w-2 rounded-full ${map[type]}`} aria-hidden />;
}

function Icon({ type }: { type: ActivityItem["type"] }) {
  if (type === "success") return <CheckCircle2 className="h-4 w-4" />;
  if (type === "warning") return <AlertTriangle className="h-4 w-4" />;
  if (type === "error") return <XCircle className="h-4 w-4" />;
  return <Info className="h-4 w-4" />;
}

export default function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <section aria-labelledby="activity-heading" className="rounded-lg border border-border bg-card">
      <div className="px-4 py-3 border-b border-border">
        <h2 id="activity-heading" className="font-semibold">Recent Activity</h2>
      </div>
      <ul className="p-4 space-y-4" role="list">
        {items.map((it) => (
          <li key={it.id} className="flex items-start gap-3">
            <Dot type={it.type} />
            <div className="flex-1 min-w-0">
              <p className="text-sm flex items-center gap-2">
                <Icon type={it.type} /> {it.text}
              </p>
              <p className="text-xs text-muted-foreground">{it.meta} • {new Date(it.timestamp).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
