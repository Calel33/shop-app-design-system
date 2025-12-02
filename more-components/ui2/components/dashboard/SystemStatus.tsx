import React from 'react';

interface StatusItem {
  label: string;
  value: string;
  status: 'green' | 'yellow' | 'red';
}

interface SystemStatusProps {
  items: StatusItem[];
}

const dotClass: Record<StatusItem['status'], string> = {
  green: 'bg-emerald-400',
  yellow: 'bg-amber-400',
  red: 'bg-rose-500',
};

export const SystemStatus: React.FC<SystemStatusProps> = ({ items }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="mb-3 text-sm font-medium text-white">System Status</div>
      <div className="space-y-2">
        {items.map((it, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-neutral-300">
              <span className={`h-2 w-2 rounded-full ${dotClass[it.status]}`} />
              {it.label}
            </div>
            <div className="tabular-nums text-neutral-400">{it.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemStatus;
