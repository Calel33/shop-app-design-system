import type { BusinessSubmission } from "@/ui/components/types/admin.types";
import { Check, Info, X } from "lucide-react";

interface Props {
  item: BusinessSubmission;
  onApprove?: (id: string) => void;
  onReject?: (id: string) => void;
  onDetails?: (id: string) => void;
}

export default function BusinessApprovalItem({ item, onApprove, onReject, onDetails }: Props) {
  return (
    <li className="flex items-center gap-4 border-b border-border py-4">
      <img
        src={item.avatarUrl}
        alt=""
        className="h-20 w-20 rounded-md object-cover"
      />
      <div className="min-w-0 flex-1">
        <p className="font-medium truncate">{item.name}</p>
        <p className="text-sm text-muted-foreground truncate">{item.category} • {item.location}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="text-xs rounded-full bg-muted px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onApprove?.(item.id)}
          className="inline-flex items-center gap-1 rounded-md bg-[hsl(var(--chart-3))]/20 text-foreground px-3 py-1.5 text-sm hover:opacity-90"
        >
          <Check className="h-4 w-4" /> Approve
        </button>
        <button
          type="button"
          onClick={() => onReject?.(item.id)}
          className="inline-flex items-center gap-1 rounded-md bg-[hsl(var(--destructive))]/20 text-foreground px-3 py-1.5 text-sm hover:opacity-90"
        >
          <X className="h-4 w-4" /> Reject
        </button>
        <button
          type="button"
          onClick={() => onDetails?.(item.id)}
          className="inline-flex items-center gap-1 rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:bg-muted"
        >
          <Info className="h-4 w-4" /> Details
        </button>
      </div>
    </li>
  );
}
