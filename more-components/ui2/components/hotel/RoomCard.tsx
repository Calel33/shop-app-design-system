import React from 'react';
import type { RoomCardProps } from '../types/booking.types';

const BADGE_COLORS: Record<NonNullable<RoomCardProps['badge']>['color'], string> = {
  blue: 'bg-blue-500/20 text-blue-200',
  indigo: 'bg-indigo-500/20 text-indigo-200',
  yellow: 'bg-yellow-500/20 text-yellow-900',
};

export const RoomCard: React.FC<RoomCardProps> = ({ image, title, description, pricePerNight, badge, onBook }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt="" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
        {badge && (
          <div className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs ${BADGE_COLORS[badge.color]}`}>
            <span aria-hidden>{badge.icon}</span>
            {badge.label}
          </div>
        )}
      </div>
      <div className="grid gap-2 p-4">
        <div className="text-base font-semibold">{title}</div>
        <p className="text-sm text-white/80">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-white/90">
            <span className="text-lg font-semibold">${pricePerNight}</span>
            <span className="text-white/60"> / night</span>
          </div>
          <button onClick={onBook} className="rounded-full bg-white/90 px-3 py-1.5 text-sm font-medium text-zinc-900 transition hover:bg-white">
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
