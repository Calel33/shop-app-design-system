/**
 * Reusable Medical Layout Component
 * Provides consistent navigation and page structure for medical pages
 * @module MedicalLayout
 */

'use client';

import React from 'react';
import { Navigation } from './Navigation';
import type { MedicalLayoutProps } from '../types/medical.types';

/**
 * Medical Layout
 * Wraps page content with consistent navigation and styling
 * 
 * @example
 * ```tsx
 * <MedicalLayout>
 *   <YourPageContent />
 * </MedicalLayout>
 * ```
 * 
 * @example With custom background
 * ```tsx
 * <MedicalLayout background="gradient-to-br from-blue-50 to-white">
 *   <YourPageContent />
 * </MedicalLayout>
 * ```
 * 
 * @example With custom container width
 * ```tsx
 * <MedicalLayout maxWidth="max-w-6xl" showNavigation={false}>
 *   <YourPageContent />
 * </MedicalLayout>
 * ```
 */
export const MedicalLayout: React.FC<MedicalLayoutProps> = ({
  children,
  className = '',
  background = 'gradient-to-br from-slate-50 via-white to-blue-50/30',
  maxWidth = 'max-w-7xl',
  showNavigation = true,
  navigationClassName = '',
  contentClassName = '',
}) => {
  return (
    <div
      className={`bg-${background} text-gray-900 antialiased min-h-screen ${className}`}
    >
      {/* Navigation */}
      {showNavigation && <Navigation className={navigationClassName} />}

      {/* Main Content Container */}
      <main
        className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${
          showNavigation ? 'pt-20' : 'pt-0'
        } pb-20 lg:py-24 ${contentClassName}`}
      >
        {children}
      </main>
    </div>
  );
};

MedicalLayout.displayName = 'MedicalLayout';

export default MedicalLayout;
