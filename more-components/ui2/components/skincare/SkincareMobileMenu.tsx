// SkincareMobileMenu.tsx - Mobile drawer navigation menu
import { X, Search } from 'lucide-react';
import type { SkincareMobileMenuProps } from '../types/skincare.types';

export function SkincareMobileMenu({
  isOpen,
  onClose,
  navLinks,
  onSearch,
  className = '',
}: SkincareMobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={`sm:hidden fixed inset-0 z-50 ${className}`}>
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <aside className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-neutral-900 shadow-xl p-6 flex flex-col transition-colors duration-300">
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-semibold tracking-tight">Menu</span>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 text-base">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                link.onClick?.();
                onClose();
              }}
              className="hover:text-neutral-600 dark:hover:text-neutral-400 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <button
            onClick={() => {
              onSearch?.();
              onClose();
            }}
            className="w-full flex items-center justify-between px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            <span>Search</span>
            <Search className="w-4 h-4" />
          </button>
        </div>
      </aside>
    </div>
  );
}
