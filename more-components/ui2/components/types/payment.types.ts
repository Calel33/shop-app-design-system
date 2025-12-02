/**
 * Type definitions for Payment Dashboard components
 * @module payment.types
 */

import { ReactNode } from 'react';

export interface PaymentDashboardProps {
  title?: string;
  subtitle?: string;
  orderSummary: OrderSummary;
  onPaymentSubmit: (data: PaymentFormData) => Promise<PaymentResult>;
  paymentMethods?: PaymentMethod[];
  securityMessage?: string;
  termsLink?: string;
  className?: string;
}

export interface PaymentFormData {
  cardNumber: string;
  expiryDate: string;
  securityCode: string;
  cardholderName: string;
}

export interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
}

export interface OrderItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  price: number;
  iconBgColor?: string;
  iconColor?: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

export type PaymentMethod = 'visa' | 'mastercard' | 'amex' | 'paypal' | 'discover' | 'apple-pay';

export type CardType = 'visa' | 'mastercard' | 'amex' | 'discover' | 'unknown';

export interface CardValidation {
  cardNumber: {
    isValid: boolean;
    error?: string;
    cardType?: CardType;
  };
  expiryDate: {
    isValid: boolean;
    error?: string;
  };
  securityCode: {
    isValid: boolean;
    error?: string;
  };
  cardholderName: {
    isValid: boolean;
    error?: string;
  };
}

export interface PaymentFormProps {
  title?: string;
  subtitle?: string;
  amount: number;
  onSubmit: (data: PaymentFormData) => Promise<PaymentResult>;
  securityMessage?: string;
  className?: string;
}

export interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  discount?: number;
  shipping?: number;
  tax: number;
  total: number;
  termsLink?: string;
  paymentMethods?: PaymentMethod[];
  className?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormState {
  status: FormStatus;
  error?: string;
}

// ========================================
// Payment Completion Portal Types
// ========================================

export interface PaymentCompletionProps {
  title?: string;
  amount: number;
  currency?: string;
  onSubmit: (data: PaymentCompletionFormData) => Promise<PaymentResult>;
  countries?: CountryOption[];
  securityMessage?: string;
  className?: string;
  cardPreviewEnabled?: boolean;
  maskCardNumber?: boolean;
}

export interface PaymentCompletionFormData {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  country: string;
}

export interface CountryOption {
  code: string;
  name: string;
  flag?: string;
}

export interface CardPreviewProps {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cardType?: 'visa' | 'mastercard' | 'amex' | 'discover' | 'generic';
  maskNumber?: boolean;
  className?: string;
}

export interface ValidationState {
  isValid: boolean;
  error?: string;
  touched?: boolean;
}

export interface PaymentCompletionValidation {
  cardholderName: ValidationState;
  cardNumber: ValidationState;
  expiryDate: ValidationState;
  cvc: ValidationState;
  country: ValidationState;
}

export interface MeshGradientConfig {
  color: string;
  size: { width: number; height: number };
  blur: number;
  animationName: string;
  animationDuration: string;
  animationTimingFunction: string;
  initialPosition: { x: string; y: string };
}

export interface GlassInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  maxLength?: number;
  className?: string;
}

export interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export interface CountrySelectorProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  countries: CountryOption[];
  error?: string;
  touched?: boolean;
  required?: boolean;
  className?: string;
}

// ========================================
// Bill Payment Confirmation Types
// ========================================

export type ConfirmationVariant = 'modal' | 'inline' | 'toast';

export interface PaymentDetails {
  amount: number;
  currency: string;
  recipient: string;
  date: string;
  transactionId: string;
}

export interface BillPaymentConfirmationProps {
  transactionId: string;
  amount: number;
  currency?: string;
  recipient: string;
  date: string | Date;
  variant?: ConfirmationVariant;
  onDismiss: () => void;
  onDownloadReceipt?: () => void | Promise<void>;
  isDownloading?: boolean;
  autoDismiss?: number;
  title?: string;
  message?: string;
  downloadLabel?: string;
  dismissLabel?: string;
  showCloseButton?: boolean;
  className?: string;
}

export interface SuccessIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface PaymentDetailsPanelProps {
  amount: number;
  currency: string;
  recipient: string;
  date: string;
  transactionId: string;
  className?: string;
}

export interface ConfirmationActionsProps {
  onDownload?: () => void | Promise<void>;
  onDismiss: () => void;
  isDownloading?: boolean;
  downloadLabel?: string;
  dismissLabel?: string;
  className?: string;
}


// ========================================
// FlowPay Landing Page Types
// ========================================

export interface FlowPayHeroProps {
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  headline: string;
  highlightedText: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  cards?: PaymentCardData[];
  showGridBackground?: boolean;
  className?: string;
}

export interface PaymentCardData {
  number: string;
  cardholderName: string;
  expiryDate: string;
  type: 'visa' | 'mastercard' | 'amex' | 'discover' | 'generic';
  variant?: 'standard' | 'premium' | 'pro';
  rotation?: number;
  gradient?: string;
  icon?: 'wifi' | 'contactless' | 'smartphone';
}

export interface PaymentFeatureGridProps {
  headline: string;
  description: string;
  features: Feature[];
  className?: string;
}

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
}

export interface PaymentTestimonialsProps {
  testimonial: {
    rating: number;
    quote: string;
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  stats: Stat[];
  className?: string;
}

export interface Stat {
  icon: ReactNode;
  label: string;
  value: string;
  subtitle: string;
  gradient?: string;
}

export interface GlassCardProps {
  children: ReactNode;
  gradient?: string;
  glow?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

// ========================================
// Virtual Payment Card Types
// ========================================

export interface VirtualCardData {
  cardNumber: string; // Full number (masked display)
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardId: string;
  issuer: string;
}

export interface VirtualPaymentCardProps {
  cardData: VirtualCardData;
  onFlip?: (showingBack: boolean) => void;
  enableFlip?: boolean;
  className?: string;
}
