import React from 'react';
import { GlassButtonProps } from './types';

const variantClasses = {
  solid: 'bg-white text-black hover:bg-gray-200 shadow-lg hover:shadow-xl',
  glass: 'bg-white bg-opacity-10 backdrop-blur-sm text-white hover:bg-opacity-20 border border-white border-opacity-10',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
};

export const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = 'solid',
  onClick,
  href,
  className = '',
  size = 'lg',
}) => {
  const baseClasses = `inline-block font-medium rounded-full transition-all duration-300 text-center ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
