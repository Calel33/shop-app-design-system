import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Clock, Flame, MapPin, ShieldCheck, Star, Tag } from "lucide-react";
import type { FilterOption } from "../types/directory.types";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Clock,
  Star,
  MapPin,
  Tag,
  ShieldCheck,
};

export interface QuickFiltersBarProps {
  filters: FilterOption[];
  onToggle?: (id: string) => void;
}

const QuickFiltersBar: FC<QuickFiltersBarProps> = ({ filters, onToggle }) => {
  return (
    <div className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1600px] overflow-x-auto px-6 py-3">
        <div className="flex min-w-max gap-3">
          {filters.map((filter) => {
            const Icon = iconMap[filter.icon] ?? Star;
            const active = filter.isActive;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => onToggle?.(filter.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
                  active
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-transparent bg-slate-100 text-slate-600 transition hover:bg-blue-600 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickFiltersBar;
