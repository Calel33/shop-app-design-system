// SkincareHeader.tsx - Sticky navigation header with dropdown and utility icons
import { useState } from 'react';
import { Menu, Search, Heart, ShoppingBag, Sun, Moon } from 'lucide-react';
import { SkincareCollectionsDropdown } from './SkincareCollectionsDropdown';
import { SkincareMobileMenu } from './SkincareMobileMenu';
import type { SkincareHeaderProps } from '../types/skincare.types';

export function SkincareHeader({
  brandName,
  brandLogo,
  navLinks,
  collectionsMenu = [],
  showUtilityIcons = true,
  cartCount = 0,
  onCartToggle,
  onThemeToggle,
  onSearch,
  className = '',
}: SkincareHeaderProps) {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    onThemeToggle?.();
  };

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-700 transition-colors duration-300 ${className}`}>
        <div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
          {/* Left: Mobile menu + Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="sm:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <a href="#" className="flex items-center gap-2">
              {brandLogo}
              <span className="text-lg font-semibold tracking-tight">{brandName}</span>
            </a>
          </div>

          {/* Center: Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8 text-sm">
            {navLinks.map((link) => {
              if (link.label === 'Collections' && collectionsMenu.length > 0) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsCollectionsOpen(true)}
                    onMouseLeave={() => setIsCollectionsOpen(false)}
                  >
                    <button className="hover:text-neutral-600 dark:hover:text-neutral-400 transition flex items-center gap-1">
                      {link.label}
                      <svg
                        className="w-3 h-3 transition-transform"
                        style={{ transform: isCollectionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <SkincareCollectionsDropdown
                      collections={collectionsMenu}
                      isOpen={isCollectionsOpen}
                      onClose={() => setIsCollectionsOpen(false)}
                    />
                  </div>
                );
              }
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={link.onClick}
                  className="hover:text-neutral-600 dark:hover:text-neutral-400 transition"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Utility icons */}
          {showUtilityIcons && (
            <div className="flex items-center gap-2">
              <button
                onClick={onSearch}
                className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                onClick={onCartToggle}
                className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 text-[10px] bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full h-4 w-4 grid place-items-center transition-colors duration-300">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={handleThemeToggle}
                className="inline-flex gap-1 border border-neutral-200 dark:border-neutral-700 rounded-full px-2 py-1 items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors ml-1"
                aria-label="Toggle theme"
              >
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                <span className="text-xs">{isDark ? 'Dark' : 'Light'}</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu */}
      <SkincareMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
        onSearch={onSearch}
      />
    </>
  );
}
