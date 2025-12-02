import { Check, Pause, Trash } from "lucide-react";

type Props = {
  count: number;
  onApprove?: () => void;
  onSuspend?: () => void;
  onDelete?: () => void;
};

export function BulkToolbar({ count, onApprove, onSuspend, onDelete }: Props) {
  if (count <= 0) return null;
  return (
    <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-slate-900 px-6 py-4 text-white shadow-2xl ring-1 ring-white/10">
      <div className="flex items-center gap-4">
        <div className="text-sm font-semibold">{count} {count === 1 ? "business" : "businesses"} selected</div>
        <div className="flex items-center gap-2">
          <button onClick={onApprove} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
            <Check className="h-4 w-4" /> Approve Selected
          </button>
          <button onClick={onSuspend} className="inline-flex items-center gap-2 rounded-md bg-amber-500 px-3 py-2 text-sm font-semibold text-white hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
            <Pause className="h-4 w-4" /> Suspend
          </button>
          <button onClick={onDelete} className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400">
            <Trash className="h-4 w-4" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BulkToolbar;
