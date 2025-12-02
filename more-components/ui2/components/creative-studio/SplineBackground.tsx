import React, { useState } from 'react';
import { SplineBackgroundProps } from './types';

export const SplineBackground: React.FC<SplineBackgroundProps> = ({
  src = "https://my.spline.design/radialpattern-hkyfBWXPTPO4g8csZKdL866B/",
  className = "fixed top-0 w-full h-screen -z-10",
  fallbackClassName = "bg-gradient-to-br from-background to-muted"
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (hasError) {
    // Fallback gradient background
    return (
      <div className={`${className} ${fallbackClassName}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--secondary)) 0%, transparent 50%), radial-gradient(circle at 40% 80%, hsl(var(--primary)) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
        {!isLoaded && (
          <div className={`absolute inset-0 ${fallbackClassName} animate-pulse`} />
        )}
        <iframe
          src={src}
          frameBorder="0"
          width="100%"
          height="100%"
          onError={handleError}
          onLoad={handleLoad}
          className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          title="Spline 3D Background"
        />
      </div>
    </div>
  );
};

export default SplineBackground;