/**
 * CardLogo Component
 * SVG card logo with gradient fill
 */

import React from 'react';

interface CardLogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const CardLogo: React.FC<CardLogoProps> = ({ 
  className = '', 
  width = 42, 
  height = 28 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="logoGradient"
          x1="0"
          y1="0"
          x2="42"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2563eb" />
          <stop offset="0.65" stopColor="#6366f1" />
          <stop offset="1" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <path
        d="M6 22 Q21 2 36 22"
        stroke="url(#logoGradient)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};
