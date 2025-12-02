import React from 'react';
import { CalendarDays } from 'lucide-react';
import { ObjectivesCardProps } from '../types/analytics.types';

export const ObjectivesCard: React.FC<ObjectivesCardProps> = ({ targetARR, deadline, objectives }) => {
  return (
    <section className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-lg p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-white font-medium tracking-tight">Quarterly Objectives</h3>
        <div className="flex items-center text-xs text-white/60 gap-2">
          <CalendarDays size={14} />
          <span>{deadline}</span>
        </div>
      </div>
      <p className="mt-1 text-white/60 text-sm">Target ARR: <span className="text-white font-medium">{targetARR}</span></p>

      <div className="mt-5 space-y-4">
        {objectives.map((obj, idx) => (
          <div key={idx} className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <div className="text-white/80 shrink-0">{obj.icon}</div>
                <div className="text-white truncate">{obj.title}</div>
              </div>
              <div className="text-white/70 text-sm tabular-nums">{obj.progress}%</div>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-emerald-500 transition-[width] duration-500"
                style={{ width: `${obj.progress}%` }}
                aria-hidden
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ObjectivesCard;
