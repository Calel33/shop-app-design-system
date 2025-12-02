import React from 'react';

interface AllocationItem {
  label: string;
  percent: number; // 0-100
  color?: string; // tailwind color class
}

interface ResourceAllocationProps {
  items: AllocationItem[];
}

export const ResourceAllocation: React.FC<ResourceAllocationProps> = ({ items }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="mb-3 text-sm font-medium text-white">Resource Allocation</div>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i}>
            <div className="mb-1 flex items-center justify-between text-xs text-neutral-400">
              <span>{it.label}</span>
              <span className="tabular-nums">{it.percent}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div
                className={`h-full rounded-full transition-all duration-700 ${it.color || 'bg-sky-500'}`}
                style={{ width: `${it.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceAllocation;
