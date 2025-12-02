/**
 * Aura Header Component
 * Fixed navigation with glass-effect backdrop blur and mobile menu
 * @module AuraHeader
 */

'use client';

import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import type { AuraHeaderProps } from '../types/web3.types';

export const AuraHeader: React.FC<AuraHeaderProps> = ({
  logo = { text: 'Aura', href: '#' },
  navigation,
  ctaButton = { text: 'Join Testnet', href: '#beta', icon: 'zap' }
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <a 
          href={logo.href} 
          className="flex items-center space-x-3 opacity-0 animate-fade-in-up"
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <div className="relative">
            <span className="block h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg"></span>
            <span className="absolute inset-0 block h-3 w-3 rounded-full bg-orange-500 opacity-75 animate-ping"></span>
          </div>
          <span className="text-xl font-semibold tracking-tight font-geist">{logo.text}</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex opacity-0 animate-fade-in-up animate-delay-100 text-sm font-medium space-x-8 items-center"
            style={{ opacity: 1, transform: 'translateY(0px)' }}>
          {navigation.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist rounded-lg px-3 py-2"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA and Mobile Menu Button */}
        <div className="flex items-center space-x-4 opacity-0 animate-fade-in-up animate-delay-200"
             style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <button
            id="mobile-btn"
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-white" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6 stroke-white" strokeWidth={1.5} />
            )}
          </button>

          {ctaButton && (
            <a
              href={ctaButton.href}
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-orange-500 hover:text-white hover:scale-105 shadow-lg font-geist"
            >
              <Zap className="w-4 h-4" strokeWidth={1.5} />
              {ctaButton.text}
            </a>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col gap-6 bg-black/95 px-6 pt-24 text-lg font-medium backdrop-blur-xl md:hidden">
          <button
            id="mobile-close"
            className="absolute top-5 right-5 p-2 rounded-lg hover:bg-white/5"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X className="h-6 w-6 stroke-white" strokeWidth={1.5} />
          </button>

          {navigation.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="transition-colors hover:text-orange-400 py-2 font-geist"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {ctaButton && (
            <a
              href={ctaButton.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all hover:bg-orange-500 hover:text-white font-geist"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Zap className="w-4 h-4" strokeWidth={1.5} />
              {ctaButton.text}
            </a>
          )}
        </div>
      )}
    </header>
  );
};

AuraHeader.displayName = 'AuraHeader';

export default AuraHeader;
