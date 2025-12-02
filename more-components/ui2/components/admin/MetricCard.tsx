import type { AdminMetric, TrendDirection } from "@/ui/components/types/admin.types";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

function trendIcon(dir?: TrendDirection) {
  if (dir === "up") return <ArrowUpRight className="h-4 w-4" />;
  if (dir === "down") return <ArrowDownRight className="h-4 w-4" />;
  return <ArrowRight className="h-4 w-4" />;
}

function variantClass(variant: AdminMetric["variant"]) {
  switch (variant) {
    case "orange":
      return "from-[hsl(var(--accent))] to-[hsl(var(--primary))]";
    case "blue":
      return "from-[hsl(var(--chart-2))] to-[hsl(var(--primary))]";
    case "green":
      return "from-[hsl(var(--chart-3))] to-[hsl(var(--primary))]";
    case "red":
      return "from-[hsl(var(--destructive))] to-[hsl(var(--primary))]";
    default:
      return "from-primary to-accent";
  }
}

export default function MetricCard({ metric }: { metric: AdminMetric }) {
  const { icon: Icon } = metric;
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-md bg-gradient-to-br ${variantClass(metric.variant)} flex items-center justify-center text-card` }>
            <Icon className="h-5 w-5 text-card-foreground" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-semibold tracking-tight">{metric.value}</p>
          </div>
        </div>
        {metric.trend && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            {trendIcon(metric.trend.direction)}
            {typeof metric.trend.percent === "number" && (
              <span>{metric.trend.percent}%</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
