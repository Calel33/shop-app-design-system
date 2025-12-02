/**
 * Layout Examples for AccountSetupModal
 * Various configuration examples and use cases
 */

import React, { useState } from 'react';
import { Sun, Lock, Bell, Shield, Key, Smartphone } from 'lucide-react';
import { AccountSetupModal } from './AccountSetupModal';
import type { OnboardingStep, SecurityOption } from './types';

// Example 1: 3-Step Onboarding
export const ThreeStepExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const steps: OnboardingStep[] = [
    { id: 'profile', number: 1, title: 'Profile', status: 'active' },
    { id: 'security', number: 2, title: 'Security', status: 'inactive' },
    { id: 'done', number: 3, title: 'Done', status: 'inactive' },
  ];

  const securityOptions: SecurityOption[] = [
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Secure your account with an additional verification step.',
      icon: <Shield className="w-5 h-5" />,
      enabled: false,
    },
  ];

  return (
    <AccountSetupModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      steps={steps}
      currentStep={currentStep}
      onNext={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
      onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
      title="Quick Setup"
      subtitle="Security Settings"
      description="Configure your security preferences."
      securityOptions={securityOptions}
      onOptionToggle={() => {}}
    />
  );
};

// Example 2: Extended Security Options
export const ExtendedSecurityExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const [options, setOptions] = useState<SecurityOption[]>([
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Use authenticator apps or SMS for additional security.',
      icon: <Smartphone className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'biometric',
      title: 'Biometric Login',
      description: 'Use fingerprint or face recognition to access your account.',
      icon: <Sun className="w-5 h-5" />,
      enabled: false,
    },
    {
      id: 'password-policy',
      title: 'Enhanced Password Policy',
      description: 'Require complex passwords with special characters and numbers.',
      icon: <Key className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'session-timeout',
      title: 'Auto Session Timeout',
      description: 'Automatically log out after 30 minutes of inactivity.',
      icon: <Lock className="w-5 h-5" />,
      enabled: false,
    },
    {
      id: 'alerts',
      title: 'Security Alerts',
      description: 'Get notified of suspicious activity on your account.',
      icon: <Bell className="w-5 h-5" />,
      enabled: true,
    },
  ]);

  const steps: OnboardingStep[] = [
    { id: 'account', number: 1, title: 'Account', status: 'completed' },
    { id: 'security', number: 2, title: 'Security', status: 'active' },
    { id: 'preferences', number: 3, title: 'Preferences', status: 'inactive' },
    { id: 'complete', number: 4, title: 'Complete', status: 'inactive' },
  ];

  const handleToggle = (id: string, enabled: boolean) => {
    setOptions((prev) =>
      prev.map((option) => (option.id === id ? { ...option, enabled } : option))
    );
  };

  return (
    <AccountSetupModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      steps={steps}
      currentStep={currentStep}
      onNext={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
      onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
      title="Enterprise Security Setup"
      subtitle="Configure Advanced Security"
      description="Choose the security features that best protect your organization."
      securityOptions={options}
      onOptionToggle={handleToggle}
    />
  );
};

// Example 3: With Loading State
export const LoadingStateExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const steps: OnboardingStep[] = [
    { id: 'account', number: 1, title: 'Account', status: 'completed' },
    { id: 'security', number: 2, title: 'Security', status: 'active' },
    { id: 'done', number: 3, title: 'Done', status: 'inactive' },
  ];

  const securityOptions: SecurityOption[] = [
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Enable 2FA for enhanced security.',
      icon: <Shield className="w-5 h-5" />,
      enabled: true,
    },
  ];

  const handleNext = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  return (
    <AccountSetupModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      steps={steps}
      currentStep={currentStep}
      onNext={handleNext}
      onBack={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
      securityOptions={securityOptions}
      onOptionToggle={() => {}}
      isLoading={isLoading}
    />
  );
};

// Example 4: All Steps Completed
export const CompletedExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const steps: OnboardingStep[] = [
    { id: 'account', number: 1, title: 'Account', status: 'completed' },
    { id: 'security', number: 2, title: 'Security', status: 'completed' },
    { id: 'preferences', number: 3, title: 'Preferences', status: 'completed' },
    { id: 'complete', number: 4, title: 'Complete', status: 'active' },
  ];

  const securityOptions: SecurityOption[] = [
    {
      id: 'review',
      title: 'Review Your Settings',
      description: 'All security features have been configured successfully.',
      icon: <Shield className="w-5 h-5" />,
      enabled: true,
    },
  ];

  return (
    <AccountSetupModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      steps={steps}
      currentStep={4}
      onNext={() => setIsOpen(false)}
      onBack={() => {}}
      title="Setup Complete!"
      subtitle="You're All Set"
      description="Your account is now fully configured with the selected security options."
      securityOptions={securityOptions}
      onOptionToggle={() => {}}
    />
  );
};

export default ThreeStepExample;
