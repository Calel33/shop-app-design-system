import type { FC } from "react";
import type { Business } from "../types/directory.types";
import BusinessCard from "./BusinessCard";

export interface TrendingSectionProps {
  title?: string;
  businesses: Business[];
}

const TrendingSection: FC<TrendingSectionProps> = ({ title = "Trending Now", businesses }) => {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-16">
      <div className="flex items-baseline justify-between">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-800">
          View All
        </a>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
