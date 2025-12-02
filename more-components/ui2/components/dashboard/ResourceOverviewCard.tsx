import React from 'react';

interface ResourceOverviewCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
}

export const ResourceOverviewCard: React.FC<ResourceOverviewCardProps> = ({ label, value, sublabel }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="mt-2 text-2xl font-semibold text-white tabular-nums">{value}</div>
      {sublabel && <div className="mt-1 text-xs text-neutral-500">{sublabel}</div>}
    </div>
  );
};

export default ResourceOverviewCard;
