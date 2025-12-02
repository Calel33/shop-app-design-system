import type { FC } from "react";
import SearchBar from "./SearchBar";
import StatsDisplay from "./StatsDisplay";
import type { Statistic } from "../types/directory.types";

export interface HeroSearchSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Statistic[];
  onSearch?: (data: { query: string; location: string }) => void;
}

const HeroSearchSection: FC<HeroSearchSectionProps> = ({
  title = "Discover trusted local businesses",
  subtitle = "Search by what you need and where you are",
  stats = [],
  onSearch,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 py-20">
      <div className="mx-auto max-w-[1600px] px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-3 text-lg text-blue-100">{subtitle}</p>
        <div className="mt-6">
          <SearchBar onSearch={onSearch} />
        </div>
        {stats.length > 0 ? <StatsDisplay stats={stats} /> : null}
      </div>
    </section>
  );
};

export default HeroSearchSection;
