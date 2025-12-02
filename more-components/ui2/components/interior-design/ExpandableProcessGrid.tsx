import React, { useState } from 'react';
import type { ProcessStep } from '../types/interior-design.types';

interface ExpandableProcessGridProps {
  steps: ProcessStep[];
}

export const ExpandableProcessGrid: React.FC<ExpandableProcessGridProps> = ({ steps }) => {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {steps.map((s, idx) => (
        <button
          key={s.title}
          onClick={() => setActive(idx)}
          className={
            'group relative overflow-hidden rounded-2xl text-left transition-[flex-grow] duration-300 ' +
            (active === idx ? 'sm:col-span-2 lg:col-span-2' : 'sm:col-span-1 lg:col-span-1')
          }
          style={{ flexGrow: active === idx ? 2 : 1 }}
        >
          <img src={s.backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
          <div className="relative p-5 h-40 sm:h-56 lg:h-64 flex flex-col justify-end text-white">
            <div className="text-xs uppercase tracking-widest opacity-80">Step {s.number}</div>
            <div className="text-lg font-semibold">{s.title}</div>
            {active === idx && <p className="mt-1 text-sm text-white/80 line-clamp-2">{s.description}</p>}
          </div>
        </button>
      ))}
    </div>
  );
};

export default ExpandableProcessGrid;
