import type { ReviewsPlaceholderProps } from "../types/business-listing.types";

import InfoCard from "./InfoCard";

const ReviewsPlaceholder = ({ title, icon, message }: ReviewsPlaceholderProps) => {
  const Icon = icon;

  return (
    <InfoCard title={title} icon={icon}>
      <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-6 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-200 text-slate-500">
          <Icon className="h-8 w-8" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-slate-600">{message}</p>
      </div>
    </InfoCard>
  );
};

export default ReviewsPlaceholder;
