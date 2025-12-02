import { GlassCardProps } from './types';

export const GlassCard = ({
  children,
  gradient,
  glow = false,
  hover = false,
  className = '',
  onClick,
}: GlassCardProps) => {
  const baseClasses = 'rounded-2xl backdrop-blur-xl border border-border/30';
  const glassEffect = 'bg-card/10 text-card-foreground relative overflow-hidden';
  const glowEffect = glow ? 'shadow-lg ring-1 ring-primary/20' : '';
  const hoverEffect = hover ? 'transition-all duration-300 hover:bg-card/20' : '';
  const cursorStyle = onClick ? 'cursor-pointer' : '';

  return (
    <div
      className={`${baseClasses} ${glassEffect} ${glowEffect} ${hoverEffect} ${cursorStyle} ${className}`}
      onClick={onClick}
    >
      {gradient && (
        <div className="absolute inset-0 rounded-2xl opacity-20" style={{ background: gradient }} />
      )}
      <div className="relative">{children}</div>
    </div>
  );
};
