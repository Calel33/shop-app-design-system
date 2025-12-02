import React from 'react';
import { Diamond, Search, Bell, Wallet } from 'lucide-react';
import { DeFiHeaderProps } from './types';

/**
 * DeFiHeader - Sticky navigation header with wallet connection
 * 
 * Features:
 * - Sticky positioning with backdrop blur
 * - Responsive navigation (hidden on mobile)
 * - Wallet connection button with truncated address
 * - Search and notification buttons
 * - Glass morphism styling
 */
export const DeFiHeader: React.FC<DeFiHeaderProps> = ({
  logo = { icon: 'Diamond', text: 'Aventra' },
  navItems,
  walletAddress,
  notifications = 0,
  onSearchClick,
  onNotificationClick,
  onWalletConnect,
  onWalletDisconnect
}) => {
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section: Logo and Navigation */}
          <div className="flex gap-4 items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
                <Diamond className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="text-[17px] uppercase font-semibold tracking-tighter font-sans">
                {logo.text}
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-2 ml-6" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-2 text-sm transition ${
                    item.isActive
                      ? 'text-white rounded-md bg-white/5 ring-1 ring-white/10'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right section: Actions */}
          <div className="flex items-center gap-3">
            {/* Search button */}
            <button
              onClick={onSearchClick}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 text-sm text-neutral-200 hover:bg-white/[0.08] transition"
              aria-label="Search"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
              <span>Search</span>
              <span className="ml-2 text-[10px] text-neutral-400">/</span>
            </button>

            {/* Notifications button */}
            <button
              onClick={onNotificationClick}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 ring-1 ring-white/10 text-sm text-neutral-200 hover:bg-white/[0.08] transition relative"
              aria-label={`Notifications ${notifications > 0 ? `(${notifications} unread)` : ''}`}
            >
              <Bell className="h-4 w-4" aria-hidden="true" />
              {notifications > 0 && (
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
              )}
            </button>

            {/* Wallet button */}
            <button
              onClick={walletAddress ? onWalletDisconnect : onWalletConnect}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-amber-500 to-orange-600 text-sm font-medium text-neutral-950 hover:opacity-95 transition"
              aria-label={walletAddress ? `Wallet connected: ${walletAddress}` : 'Connect wallet'}
            >
              <Wallet className="h-4 w-4" aria-hidden="true" />
              <span>{walletAddress || 'Connect'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
