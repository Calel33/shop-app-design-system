import { CountdownBadgeProps } from './types';

export const CountdownBadge = ({ label, variant = 'warning' }: CountdownBadgeProps) => {
  const variantStyles = {
    warning: 'bg-amber-950 text-amber-400',
    info: 'bg-blue-950 text-blue-400',
    success: 'bg-emerald-950 text-emerald-400'
  };

  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${variantStyles[variant]}`}>
      {label}
    </span>
  );
};
