/**
 * Type definitions for Authentication components
 * @module auth.types
 */

import type { ReactNode } from 'react';

export interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

export interface FormFieldError {
  field: 'email' | 'password' | 'general';
  message: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type: 'email' | 'password' | 'text';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  onRightIconClick?: () => void;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}

export interface CustomCheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export interface DividerWithTextProps {
  text: string;
  className?: string;
}

export interface OAuthProvider {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface GlasmorphicSignInProps {
  onSubmit: (data: SignInFormData) => void | Promise<void>;
  onOAuthSignIn?: (provider: string) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  isLoading?: boolean;
  error?: FormFieldError | null;
  title?: string;
  subtitle?: string;
  secureIndicator?: boolean;
  showOAuth?: boolean;
  oauthProviders?: OAuthProvider[];
  showFooter?: boolean;
  className?: string;
}

export interface AnimatedBackgroundProps {
  className?: string;
}
