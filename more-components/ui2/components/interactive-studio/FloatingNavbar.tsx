import React from 'react';
import { FloatingNavbarProps } from './types';
import { GlassButton } from './GlassButton';

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({
  logo,
  brandName,
  links,
  authLinks = [],
  ctaButton,
}) => {
  return (
    <nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-5 backdrop-blur-md border border-white border-opacity-10 rounded-full px-4 py-3 shadow-xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {logo}
          <span className="ml-2 text-sm font-medium text-white">{brandName}</span>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-xs text-gray-300 ml-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 ml-8">
          {authLinks.map((authLink, index) => (
            <a
              key={index}
              href={authLink.href}
              className={
                authLink.variant === 'button'
                  ? 'text-xs font-medium text-black bg-white rounded-full px-3 py-1.5 hover:bg-gray-200 transition-colors'
                  : 'hidden md:inline-block text-xs font-medium hover:text-white transition-colors text-gray-300'
              }
            >
              {authLink.label}
            </a>
          ))}
          {ctaButton && (
            <GlassButton
              variant="solid"
              size="sm"
              href={ctaButton.href}
              onClick={ctaButton.onClick}
            >
              {ctaButton.label}
            </GlassButton>
          )}
        </div>
      </div>
    </nav>
  );
};
