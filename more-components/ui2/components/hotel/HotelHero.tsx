import React from 'react';
import { BookingForm } from './BookingForm';
import { RoomsGrid } from './RoomsGrid';
import type { BookingFormData, RoomCardProps, HotelNavProps } from '../types/booking.types';
import { HotelNav } from './HotelNav';

interface HotelHeroProps {
  backgroundImage: string;
  navigation: HotelNavProps;
  onSearch: (data: BookingFormData) => void;
  rooms: RoomCardProps[];
  enableAnimations?: boolean;
}

export const HotelHero: React.FC<HotelHeroProps> = ({ backgroundImage, navigation, onSearch, rooms, enableAnimations }) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950">
      <div aria-hidden className="absolute inset-0">
        <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/40 to-zinc-950" />
      </div>

      <HotelNav {...navigation} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end gap-10 px-6 pb-16 pt-28 text-white">
        <div className="mx-auto w-full rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl supports-[backdrop-filter]:bg-white/10">
          <BookingForm onSearch={onSearch} />
        </div>

        <RoomsGrid rooms={rooms} enableAnimations={enableAnimations} />
      </div>
    </section>
  );
};

export default HotelHero;
