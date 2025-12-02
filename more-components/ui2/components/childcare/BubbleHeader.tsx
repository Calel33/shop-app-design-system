/**
 * BubbleHeader Component
 * Fixed navigation with glass-effect backdrop blur
 * @module childcare/BubbleHeader
 */

import { useState } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import type { BubbleHeaderProps } from '../types/childcare.types';

const defaultNavLinks = [
  { label: 'Home', href: '#' },
  { label: 'Programs', href: '#programs' },
  { label: 'About', href: '#about' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
];

export const BubbleHeader = ({
  logoUrl,
  logoAlt = 'Bubble Childcare',
  navLinks = defaultNavLinks,
  callUsLink = '#contact',
  bookVisitLink = '#visit',
  className = '',
}: BubbleHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed z-50 top-0 right-0 left-0 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border backdrop-blur supports-[backdrop-filter]:bg-white/5 border-black/10 bg-black/5">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Brand */}
            <a
              href="#"
              className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[140px] h-[40px] bg-cover rounded invert"
              style={{ backgroundImage: `url(${logoUrl})` }}
              aria-label={logoAlt}
            />

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className="text-sm font-medium transition text-black/80 hover:text-black font-nunito"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={callUsLink}
                className="inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition border-black/10 bg-black/0 text-black/90 hover:bg-black/5 font-nunito"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href={bookVisitLink}
                className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition bg-black text-neutral-100 hover:bg-black/90 font-nunito"
              >
                <Calendar className="h-4 w-4" />
                Book a Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border transition border-black/10 bg-black/0 hover:bg-black/5"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="border-t px-4 py-3 md:hidden border-black/10">
              <nav className="grid gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium transition text-black/80 hover:bg-black/5 hover:text-black font-nunito"
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="mt-2 flex gap-2">
                  <a
                    href={callUsLink}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition border-black/10 bg-black/0 text-black/90 hover:bg-black/5 font-nunito"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                  <a
                    href={bookVisitLink}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition bg-black text-neutral-100 hover:bg-black/90 font-nunito"
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Visit
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
