import { Calendar, Check, Edit, MapPin, User, X } from "lucide-react";
import type { BusinessListing } from "../types/admin.types";

interface BusinessApprovalCardProps {
  business: BusinessListing;
  isSelected: boolean;
  submittedLabel: string;
  onToggleSelect: (id: string) => void;
  onViewDetails: (business: BusinessListing) => void;
  onApprove: (business: BusinessListing) => void;
  onRequestChanges: (business: BusinessListing) => void;
  onReject: (business: BusinessListing) => void;
}

const priorityStyles: Record<BusinessListing["priority"], string> = {
  high: "bg-red-50 text-red-600",
  normal: "bg-blue-50 text-blue-600",
};

const priorityLabel: Record<BusinessListing["priority"], string> = {
  high: "High Priority",
  normal: "Normal",
};

const BusinessApprovalCard = ({
  business,
  isSelected,
  submittedLabel,
  onToggleSelect,
  onViewDetails,
  onApprove,
  onRequestChanges,
  onReject,
}: BusinessApprovalCardProps) => {
  return (
    <article
      className={`relative flex flex-col gap-5 rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
        isSelected ? "border-blue-400 ring-2 ring-blue-100" : "border-slate-200"
      }`}
      aria-selected={isSelected}
    >
      <div className="flex items-start justify-between gap-4">
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleSelect(business.id)}
            className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            aria-label={`Select ${business.name}`}
          />
          <span className="sr-only">Select {business.name}</span>
        </label>
        <span
          className={`${priorityStyles[business.priority]} inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold`}
        >
          {priorityLabel[business.priority]}
        </span>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
        <img
          src={business.avatarUrl}
          alt={`${business.name} logo`}
          className="h-16 w-16 rounded-2xl object-cover"
        />
        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-semibold text-slate-900">{business.name}</h2>
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
              {business.category}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4" aria-hidden="true" />
              {business.owner}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {business.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Submitted {submittedLabel}
            </span>
          </div>
        </div>
      </div>
      {business.description && (
        <p className="text-sm leading-relaxed text-slate-600">{business.description}</p>
      )}
      <div className="rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Owner Contact</p>
        <p className="mt-1">{business.ownerEmail}</p>
        {business.ownerPhone && <p className="mt-1">{business.ownerPhone}</p>}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
        <button
          type="button"
          onClick={() => onViewDetails(business)}
          className="text-blue-600 hover:text-blue-700"
        >
          View Full Details
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => onApprove(business)}
            className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <Check className="h-4 w-4" aria-hidden="true" />
            Approve
          </button>
          <button
            type="button"
            onClick={() => onRequestChanges(business)}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500/90 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-amber-600"
          >
            <Edit className="h-4 w-4" aria-hidden="true" />
            Changes
          </button>
          <button
            type="button"
            onClick={() => onReject(business)}
            className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Reject
          </button>
        </div>
      </div>
    </article>
  );
};

export default BusinessApprovalCard;
