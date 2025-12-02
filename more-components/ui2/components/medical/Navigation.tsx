/**
 * Navigation component with glass-effect styling
 * @module Navigation
 */

import React from 'react';
import { HeartPulse } from 'lucide-react';
import type { NavigationProps } from '../types/medical.types';

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-[20px] bg-white/95 border-b border-gray-100 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <HeartPulse className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              MedCore Health
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a
              href="#services"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#specialists"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Specialists
            </a>
            <a
              href="#research"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Research
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navigation.displayName = 'Navigation';
