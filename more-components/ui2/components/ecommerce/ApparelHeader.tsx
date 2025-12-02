import React, { useEffect, useState } from 'react';

export interface HeaderProps {
  announcement?: string;
  primary: { label: string; href: string }[];
  secondary: { label: string; href: string }[];
  onSearchClick: () => void;
}

export const ApparelHeader: React.FC<HeaderProps> = ({ announcement, primary, secondary, onSearchClick }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      {announcement && (
        <div className="w-full bg-zinc-900 py-2 text-center text-xs text-white">{announcement}</div>
      )}
      <div className="border-b border-zinc-200/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button className="md:hidden rounded border px-3 py-1.5 text-sm" onClick={() => setOpen(true)}>Menu</button>
          <a href="#" className="text-sm font-semibold tracking-wide">LYRA</a>
          <div className="hidden items-center gap-6 md:flex">
            {primary.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                {i.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-4 md:flex">
            {secondary.map((i) => (
              <a key={i.href} href={i.href} className="text-sm text-zinc-700 hover:text-zinc-900">
                {i.label}
              </a>
            ))}
            <button onClick={onSearchClick} className="rounded-full border border-zinc-300 px-3 py-1.5 text-sm">Search</button>
          </div>
        </div>
      </div>

      {open && (
        <div role="dialog" aria-modal className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)}>
          <div className="h-full w-72 bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm font-semibold">Menu</div>
              <button className="rounded bg-zinc-900 px-3 py-1.5 text-xs text-white" onClick={() => setOpen(false)}>Close</button>
            </div>
            <div className="grid gap-2">
              {[...primary, ...secondary].map((i) => (
                <a key={i.href} href={i.href} className="rounded px-2 py-1.5 hover:bg-zinc-100" onClick={() => setOpen(false)}>
                  {i.label}
                </a>
              ))}
              <button onClick={() => { onSearchClick(); setOpen(false); }} className="mt-2 rounded border px-2 py-1.5 text-left">
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default ApparelHeader;
