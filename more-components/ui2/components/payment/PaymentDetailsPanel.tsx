import React from 'react';
import type { PaymentDetailsPanelProps } from './types';

/**
 * PaymentDetailsPanel - Dark panel displaying payment transaction details
 * 
 * Displays key payment information in a structured layout with labels and values.
 * Uses dark background with subtle contrast for readability.
 * 
 * @example
 * ```tsx
 * <PaymentDetailsPanel
 *   amount={120.50}
 *   currency="USD"
 *   recipient="Acme Utilities"
 *   date="Jun 11, 2024"
 *   transactionId="#9823451"
 * />
 * ```
 */
export const PaymentDetailsPanel: React.FC<PaymentDetailsPanelProps> = ({
  amount,
  currency,
  recipient,
  date,
  transactionId,
  className = '',
}) => {
  const formatCurrency = (value: number, currencyCode: string): string => {
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currencyCode,
      }).format(value);
    } catch {
      return `${currencyCode} ${value.toFixed(2)}`;
    }
  };

  const formatDate = (dateValue: string): string => {
    try {
      const date = new Date(dateValue);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }).format(date);
    } catch {
      return dateValue;
    }
  };

  const detailItems = [
    { label: 'Amount', value: formatCurrency(amount, currency) },
    { label: 'To', value: recipient },
    { label: 'Payment Date', value: formatDate(date) },
    { label: 'Transaction ID', value: transactionId },
  ];

  return (
    <div
      className={`
        bg-muted/40 rounded-lg w-full px-4 py-3
        border border-border/30 text-card-foreground
        ${className}
      `}
      role="region"
      aria-label="Payment details"
    >
      {detailItems.map((item, index) => (
        <div
          key={item.label}
          className={`
            flex justify-between items-center text-sm
            ${index < detailItems.length - 1 ? 'mb-2' : ''}
          `}
        >
          <span className="text-muted-foreground">{item.label}</span>
          <span className="text-card-foreground font-semibold">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
};
