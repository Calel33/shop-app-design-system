import React from 'react';
import { UnboxingFeatureProps } from './types';

export const UnboxingFeatureColumn: React.FC<UnboxingFeatureProps> = ({
  title,
  description,
  backgroundImage,
  imageAlt = 'Product feature',
}) => {
  return (
    <div className="relative lg:border-r flex flex-col min-h-[400px] lg:min-h-auto border-gray-200">
      <div className="lg:p-8 pt-6 pr-6 pb-6 pl-6">
        <p className="uppercase text-xs font-semibold tracking-wider text-gray-800 leading-snug max-w-xs">
          {title}
          <br />
          <span className="normal-case font-normal text-gray-600">{description}</span>
        </p>
      </div>
      <div
        className="flex-1 flex bg-cover bg-center pt-6 pr-6 pb-6 pl-6 items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="img"
        aria-label={imageAlt}
      >
        <div className="relative" />
      </div>
    </div>
  );
};
