import type { BusinessSubmission } from "@/ui/components/types/admin.types";
import BusinessApprovalItem from "./BusinessApprovalItem";
import { useMemo, useState } from "react";

interface Props {
  items: BusinessSubmission[];
  categories: string[];
}

export default function BusinessApprovalQueue({ items, categories }: Props) {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.category === active)),
    [items, active]
  );

  return (
    <section aria-labelledby="approval-heading" className="rounded-lg border border-border bg-card">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <h2 id="approval-heading" className="font-semibold">Approval Queue</h2>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`rounded-full px-3 py-1 text-sm border transition ${
                active === c ? "bg-primary text-primary-foreground border-transparent" : "bg-background border-border hover:bg-muted"
              }`}
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <ul className="max-h-[520px] overflow-auto px-4" role="list">
        {filtered.map((it) => (
          <BusinessApprovalItem
            key={it.id}
            item={it}
            onApprove={(id) => console.log("approve", id)}
            onReject={(id) => console.log("reject", id)}
            onDetails={(id) => console.log("details", id)}
          />
        ))}
      </ul>
    </section>
  );
}
