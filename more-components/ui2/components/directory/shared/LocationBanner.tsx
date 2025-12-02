import type { FC } from "react";
import { Navigation } from "lucide-react";
import type { LocationMeta } from "../types/directory.types";

export interface LocationBannerProps {
  location: LocationMeta;
  onChange?: () => void;
}

const LocationBanner: FC<LocationBannerProps> = ({ location, onChange }) => {
  return (
    <div className="mx-auto mt-6 max-w-[1600px] px-6">
      <div className="flex items-center gap-4 rounded-xl border border-sky-500 bg-gradient-to-br from-sky-50 to-sky-100 p-5">
        <div className="shrink-0 rounded-lg bg-sky-500/10 p-2 text-sky-700">
          <Navigation className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-slate-900">{location.displayName}</p>
          <p className="text-sm text-slate-600">
            Showing results within {location.radius} miles • {location.businessCount} businesses
          </p>
        </div>
        <button
          type="button"
          onClick={onChange}
          className="rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          Change Location
        </button>
      </div>
    </div>
  );
};

export default LocationBanner;
