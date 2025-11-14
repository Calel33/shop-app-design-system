import { cn } from '@/lib/utils';
import { Select } from '@/components/ui/Select';

interface FilterOption {
  value: string;
  label: string;
}

interface Filter {
  id: string;
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
}

interface FilterBarProps {
  filters: Filter[];
  className?: string;
}

export function FilterBar({ filters, className }: FilterBarProps) {
  return (
    <div className={cn('flex flex-wrap gap-4', className)}>
      {filters.map((filter) => (
        <div key={filter.id} className="flex flex-col gap-1">
          <label 
            htmlFor={filter.id}
            className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
          >
            {filter.label}
          </label>
          <Select
            id={filter.id}
            value={filter.value}
            onChange={(e) => filter.onChange(e.target.value)}
            className="min-w-[140px]"
          >
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
}

