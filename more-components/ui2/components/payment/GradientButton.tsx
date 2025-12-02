/**
 * GradientButton Component
 * Animated gradient button with loading state
 */

import React from 'react';
import { GradientButtonProps } from './types';

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  className = '',
}) => {
  return (
    <>
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .gradient-btn {
          background-size: 200% 200%;
          background-image: linear-gradient(90deg, #2563eb 0%, #6366f1 35%, #fb923c 65%, #2563eb 100%);
          animation: gradientShift 3s ease infinite;
        }

        .gradient-btn:hover:not(:disabled) {
          animation: gradientShift 1.5s ease infinite;
        }

        .gradient-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>

      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={`
          gradient-btn
          w-full text-white font-medium py-3 px-4 rounded-lg shadow-lg
          transition-opacity
          ${className}
        `}
        aria-busy={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    </>
  );
};
