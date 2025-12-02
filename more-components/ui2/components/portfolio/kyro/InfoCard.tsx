/**
 * InfoCard Component for KYRO Portfolio
 * Displays location, availability, and role information
 */

import React from 'react';
import type { InfoCardProps } from '../../types/kyro-portfolio.types';

export const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  iconColor,
  title,
  subtitle,
  className = '',
}) => {
  return (
    <div className={`border-t border-white/10 pt-5 ${className}`}>
      <div className="flex items-start gap-3">
        <div className={`w-5 h-5 mt-0.5 ${iconColor}`} aria-hidden="true">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium tracking-tight text-white/90">{title}</p>
          <p className="text-xs text-neutral-400 mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
