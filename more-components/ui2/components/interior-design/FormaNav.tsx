import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useScrollProgress } from '@/ui/hooks/useScrollProgress';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export const FormaNav: React.FC = () => {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useScrollProgress();
  const navRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = useMemo(() => NAV_ITEMS.findIndex(n => n.id === active), [active]);

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 200;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && pos >= el.offsetTop) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top scroll progress bar */}
      <div className="absolute left-0 right-0 top-0 h-0.5 bg-transparent">
        <div className="h-0.5 bg-foreground/70" style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }} />
      </div>
      <div className="absolute inset-0 bg-white/80 border-b border-border/50 backdrop-blur-xl"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" onClick={handleClick('hero')} className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-foreground text-background grid place-items-center shadow-sm">
            <span className="text-sm font-bold tracking-tighter">F</span>
          </div>
          <span className="text-xl font-semibold tracking-tight">Forma</span>
        </a>

        <nav className="hidden lg:flex items-center">
          <div ref={navRef} className="relative flex items-center gap-1 bg-muted/50 rounded-full p-1.5 backdrop-blur">
            {/* Animated underline pill */}
            {activeIndex >= 0 && (
              <div
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 h-8 rounded-full bg-background shadow-sm transition-transform duration-300"
                style={{
                  transform: `translate(${(activeIndex) * 100}%, -50%)`,
                  width: '90px',
                  zIndex: 0,
                }}
              />
            )}
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all relative overflow-hidden ${
                  active === item.id ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                  active === item.id ? 'opacity-0' : 'opacity-0'
                }`} />
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={handleClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-medium text-sm hover:opacity-90 transition-all shadow-sm"
          >
            <span>Book Consultation</span>
          </a>
          <button onClick={() => setMobileOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-muted/60">
            <span className="sr-only">Open menu</span>
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-background shadow-2xl p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-foreground text-background grid place-items-center">
                  <span className="text-sm font-bold tracking-tighter">F</span>
                </div>
                <span className="text-xl font-semibold">Forma</span>
              </div>
              <button className="p-2 rounded-xl hover:bg-muted/60" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                ✕
              </button>
            </div>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleClick(item.id)}
                  className="block px-4 py-3 rounded-xl hover:bg-muted/50 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
