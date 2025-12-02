import React from 'react';
import type { FAQCornerIconsProps, FAQCategoryColor } from '../types/faq.types';

const colorMap: Record<FAQCategoryColor, string> = {
  red: 'rgb(239, 68, 68)',
  blue: 'rgb(59, 130, 246)',
  green: 'rgb(34, 197, 94)',
  purple: 'rgb(168, 85, 247)',
  orange: 'rgb(249, 115, 22)',
  emerald: 'rgb(16, 185, 129)',
};

const iconComponents: Record<string, React.FC<{ className: string; color: string }>> = {
  plus: ({ className, color }) => (
    <svg className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5v14" />
    </svg>
  ),
  // Add more icon types as needed
};

export const FAQCornerIcons: React.FC<FAQCornerIconsProps> = ({
  color,
}) => {
  const strokeColor = colorMap[color];
  const IconComponent = iconComponents.plus; // Default to plus icon

  return (
    <>
      <div className="absolute top-4 left-4" aria-hidden="true">
        <IconComponent className="w-4 h-4" color={strokeColor} />
      </div>
      <div className="absolute top-4 right-4" aria-hidden="true">
        <IconComponent className="w-4 h-4" color={strokeColor} />
      </div>
      <div className="absolute bottom-4 left-4" aria-hidden="true">
        <IconComponent className="w-4 h-4" color={strokeColor} />
      </div>
      <div className="absolute bottom-4 right-4" aria-hidden="true">
        <IconComponent className="w-4 h-4" color={strokeColor} />
      </div>
    </>
  );
};
