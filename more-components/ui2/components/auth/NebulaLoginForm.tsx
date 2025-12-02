import React, { useState } from 'react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { AnimatedGradientButton } from './AnimatedGradientButton';
import { SocialLoginButton } from './SocialLoginButton';
import type { LoginFormData, NebulaloginProps } from '../types/auth.types';

export const NebulaLoginForm: React.FC<NebulaloginProps> = ({
  onLogin,
  onGoogleLogin,
  onGitHubLogin,
  onForgotPassword,
  onSignUp,
  loading = false,
}) => {
  const [form, setForm] = useState<LoginFormData>({ email: '', password: '', rememberMe: false });
  const [touched, setTouched] = useState({ email: false, password: false });
  const emailError = touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email' : '';
  const passwordError = touched.password && form.password.length < 6 ? 'Min 6 characters' : '';

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,theme(colors.indigo.500/.25),transparent_60%),linear-gradient(to_bottom_right,theme(colors.fuchsia.500/.15),transparent)]" />
      <GlassmorphicCard className="w-full max-w-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-[0.05em]">Nebula Login</h1>
          <p className="text-sm text-white/70">Welcome back. Let’s get you in.</p>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setTouched({ email: true, password: true });
            if (emailError || passwordError) return;
            await onLogin(form);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="you@site.com"
              className={`w-full rounded-lg bg-white/5 border px-3 py-2 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-indigo-400/60 border-white/10 ${
                emailError ? 'ring-2 ring-red-400/60' : ''
              }`}
              autoComplete="email"
              required
            />
            {emailError && <p className="mt-1 text-xs text-red-300">{emailError}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, password: true }))}
              placeholder="••••••••"
              className={`w-full rounded-lg bg-white/5 border px-3 py-2 outline-none placeholder:text-white/40 focus:ring-2 focus:ring-indigo-400/60 border-white/10 ${
                passwordError ? 'ring-2 ring-red-400/60' : ''
              }`}
              autoComplete="current-password"
              required
              minLength={6}
            />
            {passwordError && <p className="mt-1 text-xs text-red-300">{passwordError}</p>}
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center gap-2 select-none">
              <input
                type="checkbox"
                checked={form.rememberMe}
                onChange={(e) => setForm((f) => ({ ...f, rememberMe: e.target.checked }))}
                className="h-4 w-4 rounded border-white/20 bg-white/10 text-indigo-400 focus:ring-indigo-400"
              />
              Remember me
            </label>
            {onForgotPassword && (
              <button type="button" onClick={onForgotPassword} className="text-white/80 hover:text-white">
                Forgot password?
              </button>
            )}
          </div>

          <AnimatedGradientButton type="submit" loading={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </AnimatedGradientButton>
        </form>

        <div className="my-4 text-center text-xs uppercase tracking-wider text-white/50">or</div>
        <div className="grid grid-cols-2 gap-3">
          <SocialLoginButton provider="google" onClick={onGoogleLogin}>Sign in with Google</SocialLoginButton>
          <SocialLoginButton provider="github" onClick={onGitHubLogin}>Sign in with GitHub</SocialLoginButton>
        </div>

        {onSignUp && (
          <div className="mt-4 text-center text-sm text-white/80">
            New here?{' '}
            <button type="button" onClick={onSignUp} className="underline hover:text-white">
              Create account
            </button>
          </div>
        )}
      </GlassmorphicCard>
    </div>
  );
};

export default NebulaLoginForm;
