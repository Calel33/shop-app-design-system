import React, { useMemo, useState } from 'react';
import type { BookingFormData } from '../types/booking.types';
import { Calendar, Users, BedDouble, Search } from 'lucide-react';

interface BookingFormProps {
  onSearch: (data: BookingFormData) => void;
  className?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSearch, className }) => {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState(today);
  const [guests, setGuests] = useState(2);
  const [roomType, setRoomType] = useState('deluxe');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ci = new Date(checkIn);
    const co = new Date(checkOut);
    if (isNaN(ci.getTime()) || isNaN(co.getTime()) || co <= ci) return;
    if (guests < 1) return;
    onSearch({ checkIn: ci, checkOut: co, guests, roomType });
  };

  const inputBase = 'flex items-center gap-2 rounded-xl border border-white/15 bg-white/70 px-3 py-2 text-sm text-zinc-900 backdrop-blur-md';

  return (
    <form onSubmit={submit} className={"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 " + (className ?? '')}>
      <label className="grid gap-1 text-xs">
        <span className="text-white/80">Check-in</span>
        <div className={inputBase}>
          <Calendar size={16} />
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full bg-transparent outline-none" />
        </div>
      </label>

      <label className="grid gap-1 text-xs">
        <span className="text-white/80">Check-out</span>
        <div className={inputBase}>
          <Calendar size={16} />
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full bg-transparent outline-none" />
        </div>
      </label>

      <label className="grid gap-1 text-xs">
        <span className="text-white/80">Guests</span>
        <div className={inputBase}>
          <Users size={16} />
          <input type="number" min={1} value={guests} onChange={(e) => setGuests(parseInt(e.target.value || '1', 10))} className="w-full bg-transparent outline-none" />
        </div>
      </label>

      <label className="grid gap-1 text-xs">
        <span className="text-white/80">Room</span>
        <div className={inputBase}>
          <BedDouble size={16} />
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="w-full bg-transparent outline-none">
            <option value="deluxe">Deluxe</option>
            <option value="suite">Suite</option>
            <option value="penthouse">Penthouse</option>
          </select>
        </div>
      </label>

      <button type="submit" className="rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-zinc-900 backdrop-blur hover:bg-white transition flex items-center justify-center gap-2">
        <Search size={16} />
        Search
      </button>
    </form>
  );
};

export default BookingForm;
