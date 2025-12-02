import React from 'react';
import { UnboxingFooterProps } from './types';

export const UnboxingFooter: React.FC<UnboxingFooterProps> = ({
  title,
  description,
  features,
}) => {
  return (
    <section className="lg:px-8 lg:py-8 bg-gray-50 border-gray-200 border-t pt-6 pr-6 pb-6 pl-6">
      <div className="flex flex-col sm:flex-row sm:items-center max-w-6xl mr-auto ml-auto items-start justify-between">
        <div className="sm:mb-0 mb-4">
          <p className="uppercase leading-snug text-xs font-semibold text-gray-800 tracking-wider max-w-md">
            {title}
            <br />
            <span className="normal-case font-normal text-gray-600">{description}</span>
          </p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {index > 0 && <span className="text-gray-400">•</span>}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4">{feature.icon}</div>
                <span>{feature.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
