import React from 'react';

interface SocialLoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'github';
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider, children, className = '', ...props }) => {
  const icon = provider === 'google' ? (
    <span aria-hidden>🟢</span>
  ) : (
    <span aria-hidden>🐙</span>
  );
  return (
    <button
      {...props}
      className={`w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10 ${className}`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default SocialLoginButton;
