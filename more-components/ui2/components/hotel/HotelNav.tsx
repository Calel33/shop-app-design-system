import React, { useEffect, useState } from 'react';
import { HotelNavProps } from '../types/booking.types';

export const HotelNav: React.FC<HotelNavProps> = ({ brandName, tagline, navItems, phone, onReserve }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto mt-3 w-[92%] rounded-full border border-white/15 bg-white/90 px-4 py-2 text-zinc-900 shadow-lg backdrop-blur-lg supports-[backdrop-filter]:bg-white/70">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-sm font-semibold tracking-wide">{brandName}</span>
            <span className="hidden text-xs text-zinc-600 sm:inline">{tagline}</span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="relative text-sm text-zinc-700 hover:text-zinc-900">
                <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]">
                  {n.label}
                </span>
              </a>
            ))}
            <a href={`tel:${phone}`} className="text-sm text-zinc-700 hover:text-zinc-900">
              {phone}
            </a>
            <button onClick={onReserve} className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm text-white hover:scale-[1.02] transition">
              Reserve
            </button>
          </div>
          <button onClick={() => setOpen(true)} className="md:hidden rounded-full border border-zinc-300 bg-white/50 px-3 py-1.5 text-sm">Menu</button>
        </div>
      </nav>

      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm p-6" onClick={() => setOpen(false)}>
          <div className="mx-auto mt-16 w-full max-w-sm rounded-2xl border border-white/10 bg-white p-6 text-zinc-900 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-lg font-semibold">Menu</div>
              <button className="rounded-full bg-zinc-900 px-3 py-1.5 text-sm text-white" onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="grid gap-2">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="rounded-lg px-3 py-2 hover:bg-zinc-100" onClick={() => setOpen(false)}>
                  {n.label}
                </a>
              ))}
              <button onClick={() => { onReserve(); setOpen(false);}} className="mt-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white">Reserve</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HotelNav;
