/**
 * Navigation Component
 * Navigation bar with glass effect and custom logo
 * @module Navigation
 */

'use client';

import React from 'react';
import { NavigationProps } from './types';

export const Navigation: React.FC<NavigationProps> = ({
  links = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
  ],
  ctaText = 'Get Started',
  onCtaClick,
}) => {
  return (
    <nav className="relative z-20 backdrop-blur-[14px] backdrop-brightness-[0.91] bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="logo-circle mr-3"></div>
            <span className="text-white font-semibold text-lg">Aura</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={onCtaClick}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;
