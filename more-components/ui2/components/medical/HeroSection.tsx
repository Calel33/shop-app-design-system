/**
 * Hero section with title, badge, stats, and patient ratings
 * @module HeroSection
 */

import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import type { HeroSectionProps } from '../types/medical.types';

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <div
      ref={heroRef}
      className={`flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between mb-16 ${
        heroVisible ? 'animate-fade-in' : 'opacity-0'
      } ${className}`}
    >
      {/* Main Content */}
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-6">
          <ShieldCheck className="w-4 h-4" />
          Healthcare Excellence Certified
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-semibold tracking-tight">
          Advanced Medical
          <br />
          <span className="font-normal text-blue-700">Care Solutions</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mt-6 leading-relaxed">
          Delivering cutting-edge healthcare with compassionate care, innovative
          technology, and evidence-based treatments for optimal patient outcomes.
        </p>
      </div>

      {/* Stats & Accreditation */}
      <div
        ref={statsRef}
        className={`flex flex-col gap-6 lg:items-end ${
          statsVisible ? 'animate-slide-left animate-delay-200' : 'opacity-0'
        }`}
      >
        {/* Rating Card */}
        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-5 h-5 fill-blue-400 text-blue-400"
              />
            ))}
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">4.9 Patient Rating</div>
            <div className="text-sm text-gray-500">15,000+ reviews</div>
          </div>
        </div>

        {/* Patient Avatars */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">
            Trusted by patients
          </span>
          <div className="flex -space-x-3">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=120&h=120&fit=crop&crop=face"
              alt="Patient"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=120&h=120&fit=crop&crop=face"
              alt="Patient"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&q=80"
              alt="Patient"
              className="w-10 h-10 object-cover border-white border-2 rounded-full shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&crop=face"
              alt="Patient"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="w-10 h-10 bg-blue-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
              <span className="text-xs font-semibold text-blue-700">15K+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSection.displayName = 'HeroSection';
