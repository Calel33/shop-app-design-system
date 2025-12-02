import React, { useEffect, useRef, useState } from 'react';
import { HeroNavProps } from '../types/hero.types';
import { MobileMenu } from './MobileMenu';

export const HeroNav: React.FC<HeroNavProps> = ({ logo, navItems, ctaButton }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open && menuRef.current) {
      const firstBtn = menuRef.current.querySelector<HTMLElement>('a, button');
      firstBtn?.focus();
    }
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5 shadow-lg"
    >
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-2 text-sm font-medium text-white">
          {typeof logo === 'string' ? <span>{logo}</span> : logo}
        </a>
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 hover:text-white text-sm">
              <span className="sr-only">Navigate to </span>
              {item.label}
            </a>
          ))}
        </div>
        {ctaButton && (
          <a
            href={ctaButton.href}
            onClick={ctaButton.onClick}
            className="ml-2 hidden md:inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          >
            {ctaButton.label}
          </a>
        )}
        <button
          aria-label="Open menu"
          className="md:hidden ml-2 inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} navItems={navItems} ctaButton={ctaButton} />
    </nav>
  );
};

export default HeroNav;
