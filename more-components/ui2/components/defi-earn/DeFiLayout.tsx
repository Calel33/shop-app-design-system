import React from 'react';
import { DeFiLayoutProps } from './types';

/**
 * DeFiLayout - Main layout wrapper for DeFi Earn pages
 * 
 * Features:
 * - Dark theme background
 * - Consistent padding and max-width
 * - Content wrapper with proper spacing
 */
export const DeFiLayout: React.FC<DeFiLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-200 antialiased">
      <main className="sm:px-6 lg:px-8 max-w-7xl mx-auto pt-8 px-4 pb-8">
        {children}
      </main>
    </div>
  );
};
