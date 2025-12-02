import React from 'react';
import { KPISnapshotProps } from '../types/analytics.types';

export const KPISnapshotCard: React.FC<KPISnapshotProps> = ({ metrics, actions }) => {
  return (
    <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-white font-medium tracking-tight">KPI Snapshot</h3>
        <div className="flex items-center gap-2">
          {actions.map((a, idx) => (
            <button
              key={idx}
              type="button"
              onClick={a.onClick}
              className="inline-flex items-center gap-1 rounded-md bg-white/10 text-white px-3 py-1.5 text-xs font-medium ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span className="text-white/80">{a.icon}</span>
              {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {metrics.map((m, idx) => (
          <div key={idx} className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
            <div className="text-white/70 text-xs flex items-center gap-2">
              <span className="text-white/80">{m.icon}</span>
              {m.label}
            </div>
            <div className="mt-1 text-xl font-semibold text-white tracking-tight">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KPISnapshotCard;
