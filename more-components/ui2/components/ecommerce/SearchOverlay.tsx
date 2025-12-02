import React, { useEffect, useRef } from 'react';

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ open, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    if (open) setTimeout(() => inputRef.current?.focus(), 0);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6">
      <div className="w-full max-w-xl rounded-2xl border border-white/20 bg-white/90 p-4 backdrop-blur">
        <div className="flex items-center gap-2">
          <input ref={inputRef} placeholder="Search products..." className="w-full bg-transparent p-2 text-sm outline-none" />
          <button className="rounded bg-zinc-900 px-3 py-1.5 text-xs text-white" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
