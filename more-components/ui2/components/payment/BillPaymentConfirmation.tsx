import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { SuccessIcon } from './SuccessIcon';
import { PaymentDetailsPanel } from './PaymentDetailsPanel';
import { ConfirmationActions } from './ConfirmationActions';
import type { BillPaymentConfirmationProps } from './types';

/**
 * BillPaymentConfirmation - Success confirmation card for bill payments
 * 
 * Displays payment confirmation with transaction details, download receipt action,
 * and dismiss functionality. Supports modal, inline, and toast variants with
 * fade-in/fade-out animations and keyboard accessibility.
 * 
 * Features:
 * - Success icon with checkmark
 * - Payment details panel (amount, recipient, date, transaction ID)
 * - Download receipt and dismiss actions
 * - Fade-in entrance animation (0.35s cubic-bezier)
 * - ESC key dismissal
 * - Auto-dismiss option
 * - Focus management for modal variant
 * - WCAG 2.1 AA accessible
 * 
 * @example
 * ```tsx
 * <BillPaymentConfirmation
 *   transactionId="#9823451"
 *   amount={120.50}
 *   currency="USD"
 *   recipient="Acme Utilities"
 *   date="2024-06-11"
 *   onDismiss={() => setShowConfirmation(false)}
 *   onDownloadReceipt={handleDownload}
 *   variant="modal"
 * />
 * ```
 */
export const BillPaymentConfirmation: React.FC<BillPaymentConfirmationProps> = ({
  transactionId,
  amount,
  currency = 'USD',
  recipient,
  date,
  variant = 'inline',
  onDismiss,
  onDownloadReceipt,
  isDownloading = false,
  autoDismiss,
  title = 'Bill Payment Successful',
  message = 'Your payment has been processed securely. Thank you!',
  downloadLabel = 'Download Receipt',
  dismissLabel = 'Dismiss',
  showCloseButton = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Format date for display
  const formattedDate = typeof date === 'string' ? date : date.toISOString();

  // Handle dismissal with exit animation
  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onDismiss();
    }, 350); // Match animation duration
  }, [onDismiss]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDismiss]);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Auto-dismiss timer
  useEffect(() => {
    if (autoDismiss && autoDismiss > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, autoDismiss);
      return () => clearTimeout(timer);
    }
  }, [autoDismiss, handleDismiss]);

  // Focus management for modal variant
  useEffect(() => {
    if (variant === 'modal') {
      const previousActiveElement = document.activeElement as HTMLElement;
      
      return () => {
        previousActiveElement?.focus();
      };
    }
  }, [variant]);

  const cardContent = (
    <div
      className={`
        relative bg-card border border-border/30
        max-w-sm w-full rounded-[calc(var(--radius)*1.1)] shadow-2xl overflow-hidden
        transition-all duration-350
        ${isVisible && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-97'}
        ${variant === 'toast' ? 'max-w-sm' : ''}
        ${className}
      `}
      role={variant === 'modal' ? 'dialog' : 'status'}
      aria-labelledby="confirmation-title"
      aria-describedby="confirmation-message"
      aria-live={variant === 'inline' ? 'polite' : undefined}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div className="p-6 flex flex-col items-center text-card-foreground">
        <SuccessIcon size="md" className="mb-4" />
        
        <h2
          id="confirmation-title"
          className="text-card-foreground text-xl font-bold mb-1 text-center"
        >
          {title}
        </h2>
        
        <p
          id="confirmation-message"
          className="text-sm text-muted-foreground text-center mb-5"
        >
          {message}
        </p>

        <PaymentDetailsPanel
          amount={amount}
          currency={currency}
          recipient={recipient}
          date={formattedDate}
          transactionId={transactionId}
          className="mb-4"
        />

        <ConfirmationActions
          onDownload={onDownloadReceipt}
          onDismiss={handleDismiss}
          isDownloading={isDownloading}
          downloadLabel={downloadLabel}
          dismissLabel={dismissLabel}
        />
      </div>

      {showCloseButton && (
        <button
          onClick={handleDismiss}
          aria-label="Close confirmation"
          className={`
            absolute top-3 right-3
            text-muted-foreground hover:text-card-foreground
            p-1 rounded transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary
          `}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );

  // Modal variant with backdrop
  if (variant === 'modal') {
    return createPortal(
      <div
        className={`
          fixed inset-0 z-50 flex items-center justify-center p-4
          bg-background/70 backdrop-blur-sm
          transition-opacity duration-350
          ${isVisible && !isExiting ? 'opacity-100' : 'opacity-0'}
        `}
        onClick={handleDismiss}
        role="presentation"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {cardContent}
        </div>
      </div>,
      document.body
    );
  }

  // Toast variant (fixed position)
  if (variant === 'toast') {
    return createPortal(
      <div className="fixed top-4 right-4 z-50 pointer-events-none">
        <div className="pointer-events-auto">
          {cardContent}
        </div>
      </div>,
      document.body
    );
  }

  // Inline variant
  return cardContent;
};
