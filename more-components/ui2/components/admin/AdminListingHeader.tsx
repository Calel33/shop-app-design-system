import { CheckCheck, Download } from "lucide-react";

interface AdminListingHeaderProps {
  title: string;
  pendingCount: number;
  selectedCount: number;
  onApproveSelected: () => void;
  onExport: () => void;
}

const AdminListingHeader = ({
  title,
  pendingCount,
  selectedCount,
  onApproveSelected,
  onExport,
}: AdminListingHeaderProps) => {
  const disableBulkApprove = selectedCount === 0;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h1>
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-600">
            {pendingCount} pending
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-500">
          Review submissions awaiting moderation. Use bulk actions to speed up approvals.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onExport}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          Export CSV
        </button>
        <button
          type="button"
          onClick={onApproveSelected}
          disabled={disableBulkApprove}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        >
          <CheckCheck className="h-4 w-4" aria-hidden="true" />
          Approve Selected
          <span className="ml-1 rounded-full bg-white/20 px-2 py-0.5 text-xs">
            {selectedCount}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminListingHeader;
