/**
 * Reusable Portfolio Layout Component
 * Provides consistent page structure for portfolio pages
 * @module PortfolioLayout
 */

import React from 'react';
import type { PortfolioLayoutProps } from '../types/portfolio.types';

/**
 * Portfolio Layout
 * Wraps page content with consistent styling and structure
 * 
 * @example Basic usage
 * ```tsx
 * <PortfolioLayout>
 *   <YourPageContent />
 * </PortfolioLayout>
 * ```
 * 
 * @example With custom background
 * ```tsx
 * <PortfolioLayout background="gradient-to-br from-neutral-50 to-white">
 *   <YourPageContent />
 * </PortfolioLayout>
 * ```
 * 
 * @example With custom header
 * ```tsx
 * <PortfolioLayout 
 *   showHeader={true}
 *   headerContent={<nav>Your Navigation</nav>}
 * >
 *   <YourPageContent />
 * </PortfolioLayout>
 * ```
 * 
 * @example With custom container width
 * ```tsx
 * <PortfolioLayout maxWidth="max-w-6xl" showHeader={false}>
 *   <YourPageContent />
 * </PortfolioLayout>
 * ```
 */
export const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  children,
  className = '',
  background = 'gradient-to-br from-neutral-50 to-white',
  maxWidth = 'max-w-7xl',
  showHeader = false,
  headerClassName = '',
  contentClassName = '',
  headerContent,
}) => {
  return (
    <div
      className={`bg-${background} text-neutral-900 antialiased min-h-screen ${className}`}
    >
      {/* Optional Header */}
      {showHeader && (
        <header
          className={`border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50 ${headerClassName}`}
        >
          {headerContent || (
            <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 py-4`}>
              <h1 className="text-2xl font-bold text-neutral-900">Portfolio</h1>
            </div>
          )}
        </header>
      )}

      {/* Main Content Container */}
      <main
        className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${
          showHeader ? 'pt-8' : 'pt-0'
        } pb-20 lg:py-24 ${contentClassName}`}
      >
        {children}
      </main>
    </div>
  );
};

PortfolioLayout.displayName = 'PortfolioLayout';

export default PortfolioLayout;
