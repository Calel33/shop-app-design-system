/**
 * GlasmorphicSignIn Component
 * Animated dark-themed sign-in card with glassmorphic effects
 * Includes form validation, password toggle, and OAuth support
 */

import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn, Github } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';
import { FormField } from './FormField';
import { CustomCheckbox } from './CustomCheckbox';
import { DividerWithText } from './DividerWithText';
import type { GlasmorphicSignInProps, SignInFormData } from './types';

const validateEmail = (email: string): string | undefined => {
  if (!email) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email format';
  return undefined;
};

const validatePassword = (password: string): string | undefined => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  return undefined;
};

export const GlasmorphicSignIn: React.FC<GlasmorphicSignInProps> = ({
  onSubmit,
  onOAuthSignIn,
  onForgotPassword,
  onSignUp,
  isLoading = false,
  error: externalError,
  title = 'Sign in',
  subtitle = 'Use your email and password, or continue with your provider.',
  secureIndicator = true,
  showOAuth = true,
  oauthProviders = [{ id: 'github', name: 'Continue with GitHub', icon: <Github className="h-4 w-4" /> }],
  showFooter = true,
  className = '',
}) => {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleFieldChange = (field: keyof SignInFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    
    // Validate on blur
    if (field === 'email') {
      const error = validateEmail(formData.email);
      if (error) setErrors((prev) => ({ ...prev, email: error }));
    } else if (field === 'password') {
      const error = validatePassword(formData.password);
      if (error) setErrors((prev) => ({ ...prev, password: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError || '',
        password: passwordError || '',
      });
      setTouched({ email: true, password: true });
      return;
    }

    // Clear errors and submit
    setErrors({});
    await onSubmit(formData);
  };

  const handleOAuthClick = async (providerId: string) => {
    if (onOAuthSignIn) {
      await onOAuthSignIn(providerId);
    }
  };

  return (
    <section className={`relative ${className}`}>
      <div className="group relative w-full h-full">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-b from-gray-300/40 via-gray-600/60 to-gray-800/50 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Card with radial gradient background */}
        <div
          className="relative h-full overflow-hidden ring-1 ring-white/15 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:ring-gray-400/30 hover:shadow-[0_10px_40px_-10px_rgba(107,114,128,0.4)] rounded-2xl shadow-inner"
          style={{
            backgroundColor: 'hsl(220, 13%, 9%)',
            backgroundImage: `
              radial-gradient(at 88% 40%, hsl(220, 13%, 9%) 0px, transparent 85%),
              radial-gradient(at 49% 30%, hsl(220, 13%, 9%) 0px, transparent 85%),
              radial-gradient(at 14% 26%, hsl(220, 13%, 9%) 0px, transparent 85%),
              radial-gradient(at 0% 64%, hsl(220, 9%, 46%) 0px, transparent 85%),
              radial-gradient(at 41% 94%, hsl(215, 14%, 34%) 0px, transparent 85%),
              radial-gradient(at 100% 99%, hsl(217, 19%, 27%) 0px, transparent 85%)
            `,
          }}
        >
          <div className="relative sm:p-8 lg:p-10 flex flex-col h-full pt-6 pr-6 pb-6 pl-6">
            {/* Header */}
            <div className="mb-8">
              {secureIndicator && (
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" aria-hidden="true" />
                  <span>Secure area</span>
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="text-sm text-gray-400 mt-1.5">{subtitle}</p>
            </div>

            {/* External Error */}
            {externalError && (
              <div className="mb-5 p-3 rounded-lg bg-red-900/20 border border-red-500/30">
                <p className="text-sm text-red-400">{externalError.message}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email Field */}
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(value) => handleFieldChange('email', value)}
                onBlur={() => handleBlur('email')}
                placeholder="you@example.com"
                icon={<Mail className="h-4 w-4" />}
                error={touched.email ? errors.email : undefined}
                required
                autoComplete="email"
              />

              {/* Password Field */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-xs font-medium text-gray-300">
                    Password<span className="text-red-400 ml-1">*</span>
                  </label>
                  {onForgotPassword && (
                    <button
                      type="button"
                      onClick={onForgotPassword}
                      className="text-xs text-gray-400 hover:text-gray-200 hover:underline underline-offset-4 focus:outline-none focus:underline"
                    >
                      Forgot?
                    </button>
                  )}
                </div>
                <FormField
                  label=""
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(value) => handleFieldChange('password', value)}
                  onBlur={() => handleBlur('password')}
                  placeholder="••••••••"
                  icon={<Lock className="h-4 w-4" />}
                  rightIcon={showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  onRightIconClick={() => setShowPassword(!showPassword)}
                  error={touched.password ? errors.password : undefined}
                  required
                  autoComplete="current-password"
                />
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between">
                <CustomCheckbox
                  id="remember"
                  name="remember"
                  label="Remember me"
                  checked={formData.remember}
                  onChange={(checked) => handleFieldChange('remember', checked)}
                />
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onForgotPassword?.();
                  }}
                  className="text-xs text-gray-400 hover:text-gray-200 hover:underline underline-offset-4 focus:outline-none focus:underline"
                >
                  Trouble signing in?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full inline-flex gap-2 shadow-[inset_0_-2px_25px_-4px_rgba(255,255,255,0.2)] ring-1 ring-white/10 hover:ring-gray-300/40 hover:from-gray-600 hover:to-gray-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-4 w-4" />
                    Sign in
                  </>
                )}
              </button>

              {/* OAuth Section */}
              {showOAuth && oauthProviders.length > 0 && (
                <>
                  <DividerWithText text="or" />

                  <div className="space-y-3">
                    {oauthProviders.map((provider) => (
                      <button
                        key={provider.id}
                        type="button"
                        onClick={() => handleOAuthClick(provider.id)}
                        disabled={isLoading}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300 bg-gray-800/60 ring-1 ring-gray-600/30 hover:bg-gray-700/60 hover:text-white hover:ring-gray-500/40 transition-all duration-300 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400/60 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {provider.icon}
                        {provider.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </form>

            {/* Footer */}
            {showFooter && (
              <div className="mt-8 text-xs text-gray-500">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p>
                    Don't have an account?{' '}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onSignUp?.();
                      }}
                      className="text-gray-300 hover:text-white hover:underline underline-offset-4 focus:outline-none focus:underline"
                    >
                      Sign up
                    </a>
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="hover:text-white transition-colors focus:outline-none focus:text-white"
                    >
                      Terms
                    </a>
                    <span className="text-gray-600">•</span>
                    <a
                      href="#"
                      className="hover:text-white transition-colors focus:outline-none focus:text-white"
                    >
                      Privacy
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlasmorphicSignIn;
