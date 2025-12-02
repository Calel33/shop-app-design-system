import React from 'react';
import { Menu } from 'lucide-react';
import type { DashboardLayoutProps } from './types';

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  sidebar,
  header,
  mobileMenuOpen = false,
  onMobileMenuToggle,
}) => {
  return (
    <div className="flex h-full min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0c1425] text-white">
      {/* Mobile Menu Button */}
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800/80 backdrop-blur-lg rounded-lg border border-white/10"
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Sidebar */}
      {sidebar}

      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div
          onClick={onMobileMenuToggle}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        {header}

        {/* Content */}
        <section className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-6">
          {children}
        </section>
      </div>
    </div>
  );
};
