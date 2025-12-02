/**
 * ModalActions Component
 * Action buttons for modal navigation (Back/Continue)
 */

import React from 'react';
import type { ModalActionsProps } from './types';

export const ModalActions: React.FC<ModalActionsProps> = ({
  onBack,
  onNext,
  isFirstStep,
  isLastStep,
  isLoading = false,
  backLabel = 'Back',
  nextLabel = 'Continue',
  className = '',
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <button
        onClick={onBack}
        disabled={isFirstStep || isLoading}
        className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-neutral-600"
        aria-label={backLabel}
      >
        {backLabel}
      </button>
      <button
        onClick={onNext}
        disabled={isLoading}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
        aria-label={isLastStep ? 'Complete setup' : nextLabel}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
            Loading...
          </span>
        ) : isLastStep ? (
          'Complete'
        ) : (
          nextLabel
        )}
      </button>
    </div>
  );
};

export default ModalActions;
