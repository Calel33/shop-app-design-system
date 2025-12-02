/**
 * ProgressStepper Component
 * Displays multi-step progress indicator with status visualization
 */

import React from 'react';
import { Check } from 'lucide-react';
import type { ProgressStepperProps } from './types';

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  currentStep,
  className = '',
}) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {steps.map((step, index) => {
        const isActive = step.status === 'active';
        const isCompleted = step.status === 'completed';
        const isInactive = step.status === 'inactive';
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={step.id}>
            {/* Step Indicator */}
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                  ${isCompleted ? 'bg-emerald-500 text-white' : ''}
                  ${isActive ? 'bg-blue-600 text-white' : ''}
                  ${isInactive ? 'bg-neutral-800 text-neutral-500' : ''}
                `}
                aria-label={`Step ${step.number}: ${step.title}`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" aria-hidden="true" />
                ) : step.icon ? (
                  step.icon
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`
                  text-xs mt-2
                  ${isActive ? 'text-white font-medium' : ''}
                  ${isCompleted ? 'text-neutral-400' : ''}
                  ${isInactive ? 'text-neutral-500' : ''}
                `}
              >
                {step.title}
              </span>
            </div>

            {/* Progress Line */}
            {!isLast && (
              <div className="w-full mx-2 h-0.5 bg-neutral-800 relative">
                {isCompleted && (
                  <div className="absolute inset-0 bg-blue-500" aria-hidden="true" />
                )}
                {isActive && index < currentStep && (
                  <div
                    className="absolute inset-0 bg-blue-500"
                    style={{ width: '33%' }}
                    aria-hidden="true"
                  />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ProgressStepper;
