/**
 * Type definitions for Account Setup Modal components
 * @module onboarding.types
 */

import type { ReactNode } from 'react';

export type StepStatus = 'completed' | 'active' | 'inactive';

export interface OnboardingStep {
  id: string;
  number: number;
  title: string;
  status: StepStatus;
  icon?: ReactNode;
}

export interface SecurityOption {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  enabled: boolean;
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  className?: string;
}

export interface ProgressStepperProps {
  steps: OnboardingStep[];
  currentStep: number;
  className?: string;
}

export interface SecurityOptionCardProps {
  option: SecurityOption;
  onToggle: (id: string, enabled: boolean) => void;
  className?: string;
}

export interface ModalActionsProps {
  onBack: () => void;
  onNext: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  isLoading?: boolean;
  backLabel?: string;
  nextLabel?: string;
  className?: string;
}

export interface AccountSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  steps: OnboardingStep[];
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  title?: string;
  subtitle?: string;
  description?: string;
  securityOptions: SecurityOption[];
  onOptionToggle: (id: string, enabled: boolean) => void;
  isLoading?: boolean;
  className?: string;
}
