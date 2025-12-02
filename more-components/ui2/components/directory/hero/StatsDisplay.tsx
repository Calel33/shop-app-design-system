import type { FC } from "react";
import type { Statistic } from "../types/directory.types";

export interface StatsDisplayProps {
  stats: Statistic[];
}

const StatsDisplay: FC<StatsDisplayProps> = ({ stats }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 text-white/90 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-xl bg-white/10 px-4 py-3">
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsDisplay;
