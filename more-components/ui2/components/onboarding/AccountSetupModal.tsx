/**
 * AccountSetupModal Component
 * Multi-step account setup modal with progress tracking and security options
 * Uses React Portal for proper z-index layering
 */

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalHeader } from './ModalHeader';
import { ProgressStepper } from './ProgressStepper';
import { SecurityOptionCard } from './SecurityOptionCard';
import { ModalActions } from './ModalActions';
import type { AccountSetupModalProps } from './types';

export const AccountSetupModal: React.FC<AccountSetupModalProps> = ({
  isOpen,
  onClose,
  steps,
  currentStep,
  onNext,
  onBack,
  title = 'Complete Your Account Setup',
  subtitle = 'Set Up Your Security Preferences',
  description = 'Enhance your account security by configuring these important settings.',
  securityOptions,
  onOptionToggle,
  isLoading = false,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Store previously focused element
    previousFocusRef.current = document.activeElement as HTMLElement;

    // Focus modal on open
    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0]?.focus();
    }

    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Handle focus trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !focusableElements) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement?.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);

    // Restore focus on unmount
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === steps.length;

  const modal = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div
          ref={modalRef}
          className={`
            relative max-w-2xl w-full z-50
            before:content-[''] before:absolute before:inset-[-1px]
            before:bg-gradient-to-br before:from-neutral-600 before:via-transparent before:to-neutral-800
            before:rounded-xl before:z-[-1]
            ${className}
          `}
        >
          <div className="rounded-xl overflow-hidden bg-neutral-900 shadow-xl">
            {/* Header */}
            <ModalHeader title={title} onClose={onClose} />

            {/* Progress Indicator */}
            <div className="px-6 pt-6">
              <ProgressStepper steps={steps} currentStep={currentStep} className="mb-6" />
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
              <h3 id="modal-title" className="text-lg font-medium text-white mb-4">
                {subtitle}
              </h3>
              <p className="text-neutral-400 mb-6">{description}</p>

              {/* Security Options */}
              <div className="space-y-5 mb-6">
                {securityOptions.map((option) => (
                  <SecurityOptionCard
                    key={option.id}
                    option={option}
                    onToggle={onOptionToggle}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <ModalActions
                onBack={onBack}
                onNext={onNext}
                isFirstStep={isFirstStep}
                isLastStep={isLastStep}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Render modal using portal
  return createPortal(modal, document.body);
};

export default AccountSetupModal;
