/**
 * ServiceCard Component for KYRO Portfolio
 * Individual service row with number, description, checklist, and imagery
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { ServiceCardProps } from '../../types/kyro-portfolio.types';

export const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  subtitle,
  services,
  images,
  className = '',
}) => {
  return (
    <div className={`p-6 sm:p-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Number */}
        <div className="md:col-span-1">
          <div className="text-3xl sm:text-4xl font-medium tracking-tight text-white/70 tabular-nums">
            {number}
          </div>
        </div>

        {/* Services List and Images */}
        <div className="md:col-span-8">
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-neutral-300">
                <Check className="w-3.5 h-3.5 mt-0.5 text-emerald-400 flex-shrink-0" />
                <span>{service}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-3">
            {images.map((image, index) => (
              <div
                key={index}
                className={`aspect-[4/3] w-24 sm:w-28 rounded-md overflow-hidden ring-1 ring-white/10 ${image.className || ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="md:col-span-3 md:text-right">
          <h3 className="text-lg sm:text-xl tracking-tight font-semibold text-white">{title}</h3>
          <p className="text-xs text-neutral-400 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
