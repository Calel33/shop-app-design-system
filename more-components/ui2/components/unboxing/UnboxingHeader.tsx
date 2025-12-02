import React from 'react';
import { Video } from 'lucide-react';
import { UnboxingHeaderProps } from './types';

export const UnboxingHeader: React.FC<UnboxingHeaderProps> = ({
  brandName,
  brandLogo,
  utilityIcons = [],
}) => {
  return (
    <div className="flex items-start justify-between p-6 lg:p-8 relative z-10">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
          {brandLogo || <Video className="w-5 h-5 text-white" />}
        </div>
        <span className="text-xl font-medium text-gray-900">{brandName}</span>
      </div>
      <div className="flex space-x-3 text-gray-900">
        {utilityIcons.map((iconItem, index) => (
          <button
            key={index}
            type="button"
            className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer"
            onClick={iconItem.onClick}
            aria-label={iconItem.ariaLabel}
          >
            {iconItem.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
