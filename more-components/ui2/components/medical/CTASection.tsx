/**
 * Call-to-action section for appointment booking
 * @module CTASection
 */

import React from 'react';
import { CalendarCheck } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import type { CTASectionProps } from '../types/medical.types';

export const CTASection: React.FC<CTASectionProps> = ({ className = '' }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`text-center mt-48 ${
        isVisible ? 'animate-fade-in animate-delay-1000' : 'opacity-0'
      } ${className}`}
    >
      <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <CalendarCheck className="w-4 h-4" />
        Same-day appointments available
      </div>
      <h2 className="text-3xl font-semibold mb-4 tracking-tight">
        Ready to Experience Better Healthcare?
      </h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Join thousands of patients who trust us with their health and wellness
        journey.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
        Schedule Your Appointment
      </button>
    </div>
  );
};

CTASection.displayName = 'CTASection';
