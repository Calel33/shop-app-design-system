import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { FloatingNavProps } from './types';

export const FloatingNav: React.FC<FloatingNavProps> = ({ links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-in fade-in duration-800">
      <nav className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-2xl px-6 py-3 shadow-lg shadow-slate-900/5">
        <div className="flex items-center gap-8">
          <a href="#" className="text-lg font-semibold tracking-tight text-slate-900">
            ATELIER
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-200/60 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
