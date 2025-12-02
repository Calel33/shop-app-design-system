import React from 'react';
import { CertificationGridProps } from '../types/product.types';

export const CertificationGrid: React.FC<CertificationGridProps> = ({ 
  certifications, 
  className = '' 
}) => {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 ${className}`}>
      {certifications.map((cert, index) => (
        <div
          key={index}
          className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10"
        >
          <div className="text-sm font-medium text-white font-sans">
            {cert.title}
          </div>
          <div className="text-xs text-neutral-400 font-sans">
            {cert.subtitle}
          </div>
        </div>
      ))}
    </div>
  );
};
