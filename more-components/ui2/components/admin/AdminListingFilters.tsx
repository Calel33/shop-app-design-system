import { useEffect, useRef } from "react";
import type { BulkActionState, FilterOptions, PriorityLevel } from "../types/admin.types";

interface AdminListingFiltersProps {
  filters: FilterOptions;
  categoryValue: string;
  priorityValue: PriorityLevel | "all";
  timeframeValue: string;
  onCategoryChange: (value: string) => void;
  onPriorityChange: (value: PriorityLevel | "all") => void;
  onTimeframeChange: (value: string) => void;
  bulkState: BulkActionState;
  onToggleSelectAll: () => void;
}

const AdminListingFilters = ({
  filters,
  categoryValue,
  priorityValue,
  timeframeValue,
  onCategoryChange,
  onPriorityChange,
  onTimeframeChange,
  bulkState,
  onToggleSelectAll,
}: AdminListingFiltersProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = bulkState.indeterminate;
    }
  }, [bulkState.indeterminate]);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-flex items-center gap-2 text-sm font-medium text-slate-600">
          <input
            ref={checkboxRef}
            type="checkbox"
            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            checked={bulkState.allSelected}
            aria-checked={bulkState.indeterminate ? "mixed" : bulkState.allSelected}
            onChange={onToggleSelectAll}
          />
          Select All
        </label>
        <span className="text-sm text-slate-500">{bulkState.selectedIds.length} selected</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Category
          </span>
          <select
            value={categoryValue}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Filter by category"
          >
            {filters.categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Priority
          </span>
          <select
            value={priorityValue}
            onChange={(event) =>
              onPriorityChange(event.target.value as PriorityLevel | "all")
            }
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Filter by priority"
          >
            <option value="all">All Priorities</option>
            {filters.priorities.map((option) => (
              <option key={option} value={option}>
                {option === "high" ? "High Priority" : "Normal"}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Submitted
          </span>
          <select
            value={timeframeValue}
            onChange={(event) => onTimeframeChange(event.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            aria-label="Filter by submission time"
          >
            {filters.timeframes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AdminListingFilters;
