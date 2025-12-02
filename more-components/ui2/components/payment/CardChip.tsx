/**
 * CardChip Component
 * SVG representation of a realistic credit card chip
 */

import React from 'react';

interface CardChipProps {
  className?: string;
  width?: number;
  height?: number;
}

export const CardChip: React.FC<CardChipProps> = ({ 
  className = '', 
  width = 46, 
  height = 32 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer chip frame */}
      <rect
        x="1"
        y="1"
        width="44"
        height="30"
        rx="6"
        fill="#475569"
        stroke="#cbd5e1"
        strokeWidth="2"
      />
      
      {/* Inner chip surface */}
      <rect
        x="7"
        y="7"
        width="32"
        height="18"
        rx="3"
        fill="#cbd5e1"
      />
      
      {/* Chip contact lines - horizontal */}
      <path
        d="M10.5,15 h25"
        stroke="#64748b"
        strokeWidth="1.1"
      />
      <path
        d="M10.5,21 h25"
        stroke="#64748b"
        strokeWidth="1.1"
      />
      
      {/* Chip contact lines - vertical */}
      <path
        d="M15,10 v12"
        stroke="#64748b"
        strokeWidth="1.1"
      />
      <path
        d="M31,10 v12"
        stroke="#64748b"
        strokeWidth="1.1"
      />
    </svg>
  );
};
