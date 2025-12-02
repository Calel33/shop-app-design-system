/**
 * Header Component for KYRO Portfolio
 * Live clock, status indicator, and contact CTA
 */

import React from 'react';
import { GripHorizontal, Send } from 'lucide-react';
import { useLiveClock } from '../hooks/useLiveClock';

export const Header: React.FC = () => {
  const time = useLiveClock();

  return (
    <header className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
      <div className="flex items-center justify-between">
        {/* Live Clock */}
        <div className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
          <span className="text-xs sm:text-sm tracking-tight text-neutral-300">
            LOCAL/ <span className="tabular-nums">{time}</span>
          </span>
        </div>

        {/* Menu Icon (desktop only) */}
        <div className="hidden sm:flex items-center gap-2 text-neutral-400" aria-label="Menu">
          <GripHorizontal className="w-4 h-4" />
        </div>

        {/* Contact CTA */}
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/5 hover:bg-white/10 ring-1 ring-white/10 transition-colors"
          aria-label="Contact Now"
        >
          <span>Contact Now</span>
          <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
};

export default Header;
