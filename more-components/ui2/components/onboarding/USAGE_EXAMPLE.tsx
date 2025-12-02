/**
 * Usage Example for AccountSetupModal
 * Demonstrates basic implementation with state management
 */

import React, { useState } from 'react';
import { Sun, Lock, Bell } from 'lucide-react';
import { AccountSetupModal } from './AccountSetupModal';
import type { OnboardingStep, SecurityOption } from './types';

export const AccountSetupModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2); // Start at step 2 (Security)
  const [securityOptions, setSecurityOptions] = useState<SecurityOption[]>([
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description:
        'Add an extra layer of security to your account by requiring a verification code in addition to your password.',
      icon: <Sun className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'strong-password',
      title: 'Strong Password Requirements',
      description:
        'Enforce strong password policies including minimum length, special characters, and regular password changes.',
      icon: <Lock className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'login-notifications',
      title: 'Login Notifications',
      description:
        'Receive email notifications when there are new login attempts from unrecognized devices.',
      icon: <Bell className="w-5 h-5" />,
      enabled: false,
    },
  ]);

  // Define steps
  const steps: OnboardingStep[] = [
    { id: 'account', number: 1, title: 'Account', status: 'completed' },
    { id: 'security', number: 2, title: 'Security', status: 'active' },
    { id: 'preferences', number: 3, title: 'Preferences', status: 'inactive' },
    { id: 'complete', number: 4, title: 'Complete', status: 'inactive' },
  ];

  const handleNext = () => {
    console.log('Next clicked, current step:', currentStep);
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Complete setup
      console.log('Setup complete!');
      setIsOpen(false);
    }
  };

  const handleBack = () => {
    console.log('Back clicked, current step:', currentStep);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleToggle = (id: string, enabled: boolean) => {
    console.log('Toggle option:', id, 'to', enabled);
    setSecurityOptions((prev) =>
      prev.map((option) => (option.id === id ? { ...option, enabled } : option))
    );
  };

  const handleClose = () => {
    console.log('Modal closed');
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          Account Setup Modal Demo
        </h1>
        <p className="text-neutral-400 mb-8">
          Click the button below to open the modal
        </p>
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Open Setup Modal
        </button>
      </div>

      <AccountSetupModal
        isOpen={isOpen}
        onClose={handleClose}
        steps={steps}
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        securityOptions={securityOptions}
        onOptionToggle={handleToggle}
      />
    </div>
  );
};

export default AccountSetupModalExample;
