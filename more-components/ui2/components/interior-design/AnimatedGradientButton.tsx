import React from 'react';

interface AnimatedGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const AnimatedGradientButton: React.FC<AnimatedGradientButtonProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <button
      {...props}
      className={
        'relative inline-flex items-center justify-center px-6 py-3 font-medium text-white group ' +
        'transition-transform duration-200 hover:scale-[1.02] ' +
        className
      }
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 blur opacity-60 group-hover:opacity-80 transition-opacity" />
      <span className="absolute inset-[2px] rounded-full bg-black/60 backdrop-blur-sm" />
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <span className="relative inline-block h-4 w-4">
          <span className="absolute inset-0 rounded-full border-2 border-white/60 animate-spin [animation-duration:2s]" />
        </span>
      </span>
    </button>
  );
};

export default AnimatedGradientButton;
