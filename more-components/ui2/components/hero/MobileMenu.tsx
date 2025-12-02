import React, { useEffect, useRef } from 'react';
import { HeroNavProps } from '../types/hero.types';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: HeroNavProps['navItems'];
  ctaButton?: HeroNavProps['ctaButton'];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose, navItems, ctaButton }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
    >
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900 p-6 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Menu</div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
          >
            Close
          </button>
        </div>
        <div className="mt-4 grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              {item.label}
            </a>
          ))}
        </div>
        {ctaButton && (
          <a
            href={ctaButton.href}
            onClick={() => {
              ctaButton.onClick?.();
              onClose();
            }}
            className="mt-4 inline-flex w-full justify-center rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20"
          >
            {ctaButton.label}
          </a>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
