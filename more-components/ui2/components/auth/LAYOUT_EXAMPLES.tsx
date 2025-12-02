/**
 * Layout Examples for GlasmorphicSignIn
 * Various configuration examples and use cases
 */

import React, { useState } from 'react';
import { Mail, Lock, Github, Apple, Chrome } from 'lucide-react';
import { GlasmorphicSignIn } from './GlasmorphicSignIn';
import type { SignInFormData, OAuthProvider } from './types';

// Example 1: Simple Sign-In (No OAuth)
export const SimpleSignInExample: React.FC = () => {
  const handleSubmit = async (data: SignInFormData) => {
    console.log('Simple sign in:', data);
  };

  return (
    <div className="max-w-md w-full">
      <GlasmorphicSignIn
        onSubmit={handleSubmit}
        showOAuth={false}
        showFooter={false}
      />
    </div>
  );
};

// Example 2: Multiple OAuth Providers
export const MultipleOAuthExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const customProviders: OAuthProvider[] = [
    {
      id: 'github',
      name: 'Continue with GitHub',
      icon: <Github className="h-4 w-4" />,
    },
    {
      id: 'google',
      name: 'Continue with Google',
      icon: <Chrome className="h-4 w-4" />,
    },
    {
      id: 'apple',
      name: 'Continue with Apple',
      icon: <Apple className="h-4 w-4" />,
    },
  ];

  const handleSubmit = async (data: SignInFormData) => {
    console.log('Sign in:', data);
  };

  const handleOAuth = async (provider: string) => {
    setIsLoading(true);
    console.log('OAuth with:', provider);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="max-w-md w-full">
      <GlasmorphicSignIn
        onSubmit={handleSubmit}
        onOAuthSignIn={handleOAuth}
        oauthProviders={customProviders}
        isLoading={isLoading}
      />
    </div>
  );
};

// Example 3: Custom Title and Subtitle
export const CustomTextExample: React.FC = () => {
  const handleSubmit = async (data: SignInFormData) => {
    console.log('Custom sign in:', data);
  };

  return (
    <div className="max-w-md w-full">
      <GlasmorphicSignIn
        onSubmit={handleSubmit}
        title="Welcome Back"
        subtitle="Enter your credentials to access your dashboard."
        secureIndicator={false}
      />
    </div>
  );
};

// Example 4: With Error State
export const WithErrorExample: React.FC = () => {
  const [error, setError] = useState({
    field: 'general' as const,
    message: 'Invalid email or password. Please try again.',
  });

  const handleSubmit = async (data: SignInFormData) => {
    console.log('Sign in with error:', data);
    setError({
      field: 'general',
      message: 'Your account has been locked. Please contact support.',
    });
  };

  return (
    <div className="max-w-md w-full">
      <GlasmorphicSignIn
        onSubmit={handleSubmit}
        error={error}
      />
    </div>
  );
};

// Example 5: Minimal Configuration
export const MinimalExample: React.FC = () => {
  const handleSubmit = async (data: SignInFormData) => {
    console.log('Minimal sign in:', data);
  };

  return (
    <div className="max-w-sm w-full">
      <GlasmorphicSignIn
        onSubmit={handleSubmit}
        showOAuth={false}
        showFooter={false}
        secureIndicator={false}
        title="Sign In"
        subtitle="Enter your email and password."
      />
    </div>
  );
};

export default MultipleOAuthExample;
