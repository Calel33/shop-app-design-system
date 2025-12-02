import React from 'react';
import type { ActiveJob } from '../types/dashboard.types';

interface ActiveJobsProps {
  jobs: ActiveJob[];
}

const badgeClass: Record<ActiveJob['status'], string> = {
  running: 'bg-emerald-500/10 text-emerald-400',
  queued: 'bg-amber-500/10 text-amber-400',
  starting: 'bg-sky-500/10 text-sky-400',
};

export const ActiveJobs: React.FC<ActiveJobsProps> = ({ jobs }) => {
  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
      <div className="mb-3 text-sm font-medium text-white">Active Jobs</div>
      <div className="space-y-2">
        {jobs.map((job, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg bg-black/20 p-3">
            <div className="flex items-center gap-3">
              <div className={`rounded-full px-2 py-0.5 text-xs ${badgeClass[job.status]}`}>{job.status}</div>
              <div className="text-sm text-neutral-300">{job.name}</div>
            </div>
            <div className="flex items-center gap-4 text-xs text-neutral-400">
              <span className="tabular-nums">{job.gpuCount} GPUs</span>
              <span className="tabular-nums">ETA {job.eta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveJobs;
