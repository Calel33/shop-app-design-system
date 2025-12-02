import React from 'react';
import { UnboxingProductCardProps } from './types';

export const UnboxingProductCard: React.FC<UnboxingProductCardProps> = ({
  icon,
  badgeCount,
  badgeColor = 'bg-orange-500',
  title,
  description,
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="relative flex-shrink-0">
        <div className="p-3 lg:p-4 bg-gray-900 rounded-2xl shadow-lg">
          <div className="w-6 h-6 lg:w-7 lg:h-7 text-white">{icon}</div>
        </div>
        {badgeCount !== undefined && (
          <span
            className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${badgeColor} border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
          >
            {badgeCount}
          </span>
        )}
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
