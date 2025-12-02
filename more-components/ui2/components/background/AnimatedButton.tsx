import React from 'react';
import type { AnimatedButtonProps } from '../types/background.types';

/**
 * AnimatedButton Component
 * Button with rotating border animation and smooth hover effects
 * Supports both button and anchor rendering
 */
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  href,
  size = 'md',
  disabled = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 rounded-full font-medium
    relative transition-transform duration-300 ease-in-out
    transform scale-100 hover:scale-110 focus-visible:scale-110
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    ${sizeClasses[size]}
    ${className}
  `;

  const Component = href ? 'a' : 'button';

  return (
    <Component
      className={baseClasses}
      onClick={!disabled ? onClick : undefined}
      href={href}
      disabled={disabled}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {/* Text content with gradient */}
      <span
        className="relative z-10 bg-clip-text text-transparent font-light tracking-tight"
        style={{
          backgroundImage: 'linear-gradient(90deg, hsl(0 0% 100% / 1) 0%, hsl(0 0% 100% / 1) 120%)',
        }}
      >
        {children}
      </span>

      {/* Rotating border container */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full -z-10"
        style={{
          width: 'calc(100% + 2px)',
          height: 'calc(100% + 2px)',
        }}
      >
        <span
          className="absolute top-[30%] left-1/2 w-full h-8 origin-left animate-spin-slow"
          style={{
            backgroundColor: 'white',
            maskImage: 'linear-gradient(transparent 0%, white 120%)',
            animationDuration: '2s',
          }}
        />
      </span>

      {/* Inner background */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full z-0 transition-all duration-300"
        style={{
          backgroundColor: 'hsl(0 0% 12% / 1)',
          boxShadow: `
            inset 0 0.5px hsl(0, 0%, 100%),
            inset 0 -1px 2px 0 hsl(0, 0%, 0%),
            0px 4px 10px -4px hsla(0 0% 0% / 1)
          `,
        }}
      />

      {/* Hover gradient overlay */}
      <span
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full z-[2] opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          backgroundColor: 'hsla(260 97% 61% / 0.75)',
          backgroundImage: `
            radial-gradient(at 51% 89%, hsla(266, 45%, 74%, 1) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsla(266, 36%, 60%, 1) 0px, transparent 50%),
            radial-gradient(at 22% 91%, hsla(266, 36%, 60%, 1) 0px, transparent 50%)
          `,
          backgroundPosition: 'top',
        }}
      />

      <style>{`
        @keyframes spin-slow {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </Component>
  );
};
