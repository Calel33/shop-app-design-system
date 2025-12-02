/**
 * DividerWithText Component
 * Horizontal divider with centered text label
 */

import React from 'react';
import type { DividerWithTextProps } from './types';

export const DividerWithText: React.FC<DividerWithTextProps> = ({
  text,
  className = '',
}) => {
  return (
    <div className={`relative py-1 ${className}`}>
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-white/10" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-transparent px-2 text-[10px] uppercase tracking-wide text-gray-500">
          {text}
        </span>
      </div>
    </div>
  );
};

export default DividerWithText;
