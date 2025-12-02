import React from 'react';
import { Guest } from '../types/scheduling.types';

const badgeMap: Record<Guest['badgeColor'], string> = {
  indigo: 'bg-indigo-500/20 text-indigo-300 ring-indigo-400/20',
  amber: 'bg-amber-500/20 text-amber-300 ring-amber-400/20',
  teal: 'bg-teal-500/20 text-teal-300 ring-teal-400/20',
  blue: 'bg-sky-500/20 text-sky-300 ring-sky-400/20',
};

export interface GuestListProps {
  guests: Guest[];
}

export const GuestList: React.FC<GuestListProps> = ({ guests }) => {
  return (
    <ul className="space-y-3">
      {guests.map((g, idx) => (
        <li key={idx} className="flex items-center gap-3">
          <img src={g.avatar} alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" />
          <div className="min-w-0">
            <div className="text-white truncate">{g.name}</div>
            <div className="text-xs text-white/60 truncate">{g.role}</div>
          </div>
          <span className={`ml-auto inline-flex items-center rounded-full px-2 py-0.5 text-xs ring-1 ${badgeMap[g.badgeColor]}`}>
            {g.badgeColor}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GuestList;
