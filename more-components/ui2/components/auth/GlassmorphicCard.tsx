import React from 'react';

interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={
        'rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-xl ' +
        'supports-[backdrop-filter]:bg-white/10 ' +
        className
      }
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
