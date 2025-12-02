import React from 'react';
import { RoomCard } from './RoomCard';
import type { RoomCardProps } from '../types/booking.types';
import { useRevealAnimation } from '@/ui/hooks/useRevealAnimation';

interface RoomsGridProps {
  rooms: RoomCardProps[];
  enableAnimations?: boolean;
}

export const RoomsGrid: React.FC<RoomsGridProps> = ({ rooms, enableAnimations = true }) => {
  const ref = useRevealAnimation<HTMLDivElement>(enableAnimations);
  return (
    <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room, idx) => (
        <div key={room.title + idx} data-reveal className="opacity-0 translate-y-3 blur-sm">
          <RoomCard {...room} />
        </div>
      ))}
    </div>
  );
};

export default RoomsGrid;
