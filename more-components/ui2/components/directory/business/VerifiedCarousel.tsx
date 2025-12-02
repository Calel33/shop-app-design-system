import type { FC } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import type { Business } from "../types/directory.types";
import VerifiedBusinessCard from "./VerifiedBusinessCard";

export interface VerifiedCarouselProps {
  title?: string;
  businesses: Business[];
}

const breakpoints = { mobile: 1, tablet: 2, desktop: 5 } as const;

const useItemsPerView = () => {
  const width = typeof window !== "undefined" ? window.innerWidth : 1200;
  if (width < 768) return breakpoints.mobile;
  if (width < 1200) return breakpoints.tablet;
  return breakpoints.desktop;
};

const VerifiedCarousel: FC<VerifiedCarouselProps> = ({ title = "Recently Verified", businesses }) => {
  const [index, setIndex] = useState(0);
  const perView = useItemsPerView();
  const maxIndex = Math.max(0, businesses.length - perView);

  const visible = useMemo(() => businesses.slice(index, index + perView), [businesses, index, perView]);

  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16" aria-label="Recently verified businesses">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Previous verified businesses"
            disabled={index === 0}
            onClick={() => setIndex((value) => Math.max(0, value - perView))}
            className="h-9 w-9 rounded-lg border border-slate-200 disabled:opacity-50"
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next verified businesses"
            disabled={index >= maxIndex}
            onClick={() => setIndex((value) => Math.min(maxIndex, value + perView))}
            className="h-9 w-9 rounded-lg border border-slate-200 disabled:opacity-50"
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        className="mt-6 grid gap-5"
        style={{ gridTemplateColumns: `repeat(${perView}, minmax(0, 1fr))` }}
      >
        {visible.map((business) => (
          <VerifiedBusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default VerifiedCarousel;
