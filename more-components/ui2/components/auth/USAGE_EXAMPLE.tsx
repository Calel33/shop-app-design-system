/**
 * Usage Example for GlasmorphicSignIn
 * Demonstrates basic implementation with authentication flow
 */

import React, { useState } from 'react';
import { GlasmorphicSignIn } from './GlasmorphicSignIn';
import type { SignInFormData, FormFieldError } from './types';

export const GlasmorphicSignInExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FormFieldError | null>(null);

  const handleSubmit = async (data: SignInFormData) => {
    console.log('Sign in data:', data);
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate error for demo@example.com
          if (data.email === 'demo@example.com') {
            reject(new Error('Invalid credentials'));
          } else {
            resolve({ success: true });
          }
        }, 2000);
      });

      console.log('Sign in successful!');
      alert('Sign in successful!');
    } catch (err) {
      setError({
        field: 'general',
        message: 'Invalid email or password. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthSignIn = async (provider: string) => {
    console.log('OAuth sign in with:', provider);
    setIsLoading(true);
    
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    alert(`Signed in with ${provider}!`);
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    alert('Password reset link sent!');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
    alert('Redirecting to sign up...');
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <GlasmorphicSignIn
          onSubmit={handleSubmit}
          onOAuthSignIn={handleOAuthSignIn}
          onForgotPassword={handleForgotPassword}
          onSignUp={handleSignUp}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default GlasmorphicSignInExample;
