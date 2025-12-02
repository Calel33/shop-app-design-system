/**
 * Testimonials Section Component
 * Displays user testimonials with ratings and metrics
 * @module TestimonialsSection
 */

'use client';

import React from 'react';
import { Star } from 'lucide-react';
import type { TestimonialsSectionProps } from '../types/web3.types';

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  description,
  testimonials,
  metrics
}) => {
  const getAvatarColor = (color?: string) => {
    const colorMap: Record<string, string> = {
      orange: 'from-orange-400 to-orange-600',
      blue: 'from-blue-400 to-blue-600',
      purple: 'from-purple-400 to-purple-600',
      green: 'from-green-400 to-green-600',
      pink: 'from-pink-400 to-pink-600',
    };
    return colorMap[color || 'orange'] || colorMap.orange;
  };

  return (
    <section className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-geist">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
            >
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-orange-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 mb-6 leading-relaxed font-geist">
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div 
                  className={`w-12 h-12 bg-gradient-to-r ${getAvatarColor(testimonial.avatarColor)} rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-white font-semibold text-sm font-geist">
                    {testimonial.initials || testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm font-geist">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs font-geist">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Metrics */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl text-orange-400 font-light mb-2 font-geist">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-400 font-geist">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

TestimonialsSection.displayName = 'TestimonialsSection';

export default TestimonialsSection;
