import React from 'react';
import { SplineBackgroundProps } from './types';

export const SplineBackground: React.FC<SplineBackgroundProps> = ({
  splineUrl,
  fallbackGradient = 'bg-gradient-to-br from-black via-gray-900 to-black',
  className = '',
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`fixed inset-0 z-0 ${fallbackGradient} ${className}`}>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      {isLoading && (
        <div className={`absolute inset-0 ${fallbackGradient}`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white border-opacity-20 border-t-white rounded-full animate-spin" />
          </div>
        </div>
      )}
      <iframe
        src={splineUrl}
        frameBorder="0"
        width="100%"
        height="100%"
        className="w-full h-full"
        title="3D Interactive Background"
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
