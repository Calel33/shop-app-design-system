import React from 'react';
import type { AnimatedButtonProps } from '../types/auth.types';

export const AnimatedGradientButton: React.FC<AnimatedButtonProps> = ({ children, type = 'button', onClick, loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="relative inline-flex items-center justify-center px-4 py-2 rounded-xl text-white font-medium
      transition-transform duration-200 hover:scale-[1.06] disabled:opacity-60"
    >
      <span className="absolute -inset-[2px] rounded-xl bg-[conic-gradient(from_0deg,theme(colors.fuchsia.500),theme(colors.indigo.500),theme(colors.fuchsia.500))] animate-[spin_5s_linear_infinite]" />
      <span className="absolute inset-[2px] rounded-[10px] bg-neutral-900" />
      <span className="absolute -z-10 h-10 w-10 rounded-full bg-fuchsia-500/40 blur-xl animate-[pulse_4s_ease-in-out_infinite]" />
      <span className="relative z-10 flex items-center gap-2">
        {loading && <span className="h-4 w-4 rounded-full border-2 border-white/60 border-t-transparent animate-spin" />}
        {children}
      </span>
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-white/10 blur-2xl animate-[rise_6s_linear_infinite]" />
        <span className="absolute bottom-0 left-1/3 -translate-x-1/2 h-20 w-20 rounded-full bg-white/10 blur-2xl animate-[rise_7s_linear_infinite]" />
      </span>
      <style>{`
        @keyframes pulse { 0%,100%{ transform: scale(1)} 50%{ transform: scale(1.15)} }
        @keyframes rise { 0%{ transform: translateY(100%); opacity:.0 } 100%{ transform: translateY(-120%); opacity:.6 } }
      `}</style>
    </button>
  );
};

export default AnimatedGradientButton;
