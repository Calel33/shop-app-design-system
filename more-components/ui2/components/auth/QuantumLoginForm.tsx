import React, { useState } from 'react';
import { GlassmorphicCard } from './GlassmorphicCard';
import type { LoginFormData, LoginFormProps } from '../types/auth.types';

export const QuantumLoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  onForgotPassword,
  onSignUp,
  loading = false,
  error,
  className = '',
}) => {
  const [form, setForm] = useState<LoginFormData>({ email: '', password: '', rememberMe: false });
  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({ email: false, password: false });

  const emailError = touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Enter a valid email' : '';
  const passwordError = touched.password && form.password.length < 6 ? 'Min 6 characters' : '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, password: true });
    if (emailError || passwordError) return;
    await onSubmit(form);
  };

  return (
    <div className={`relative min-h-screen flex items-center justify-center px-4 ${className}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_50%_at_50%_-20%,theme(colors.indigo.500/.25),transparent_60%),linear-gradient(to_bottom_right,theme(colors.fuchsia.500/.15),transparent)]" />

      <GlassmorphicCard className="w-full max-w-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="relative h-10 w-10">
            <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 opacity-80" />
            <span className="absolute inset-[2px] rounded-lg bg-black/60" />
            <span className="relative z-10 flex h-full w-full items-center justify-center text-white/90">⚛︎</span>
          </div>
          <div>
            <div className="font-semibold leading-tight">Quantum</div>
            <div className="text-xs text-white/70">Sign in to continue</div>
          </div>
        </div>

        {error && (
          <div className="mb-3 rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              placeholder="you@example.com"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 font-medium text-white shadow hover:opacity-95 disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        {onSignUp && (
          <div className="mt-4 text-center text-sm text-white/80">
            Don’t have an account?{' '}
            <button type="button" onClick={onSignUp} className="underline hover:text-white">
              Sign up
            </button>
          </div>
        )}
      </GlassmorphicCard>
    </div>
  );
};

export default QuantumLoginForm;
