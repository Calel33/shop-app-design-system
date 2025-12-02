import type { LastUpdatedBadgeProps } from "../types/business-listing.types";

const LastUpdatedBadge = ({ updatedAt, icon: Icon }: LastUpdatedBadgeProps) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
      <Icon className="h-4 w-4" aria-hidden="true" />
      Last updated by owner on {updatedAt}
    </div>
  );
};

export default LastUpdatedBadge;
