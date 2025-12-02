import React from 'react';
import { SpecListProps } from '../types/product.types';

export const SpecList: React.FC<SpecListProps> = ({ specs, className = '' }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {specs.map((spec, index) => (
        <div
          key={index}
          className="flex justify-between py-2 border-b border-white/5"
        >
          <span className="text-sm text-neutral-400 font-sans">{spec.label}</span>
          <span className="text-sm text-neutral-200 font-sans">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};
