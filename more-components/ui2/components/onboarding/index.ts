/**
 * Barrel exports for Onboarding components
 */

export { AccountSetupModal } from './AccountSetupModal';
export { ModalHeader } from './ModalHeader';
export { ProgressStepper } from './ProgressStepper';
export { SecurityOptionCard } from './SecurityOptionCard';
export { ModalActions } from './ModalActions';

export type {
  StepStatus,
  OnboardingStep,
  SecurityOption,
  ModalHeaderProps,
  ProgressStepperProps,
  SecurityOptionCardProps,
  ModalActionsProps,
  AccountSetupModalProps,
} from './types';

// Default export
export { AccountSetupModal as default } from './AccountSetupModal';
