import React from 'react';
import { TeamCollageProps } from './types';

export const TeamCollage: React.FC<TeamCollageProps> = ({
  photos,
  teamCount,
  description = "Our passionate team pushes creative boundaries to deliver exceptional results that exceed expectations.",
  className = ''
}) => {
  return (
    <div className={`ring-1 ring-border text-background bg-foreground rounded-3xl p-6 space-y-4 ${className}`}>
      <div className="mb-4 space-y-6">
        <div className="relative h-40 sm:h-48">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`absolute w-28 h-24 sm:w-32 sm:h-28 ring-1 ring-border bg-card rounded-2xl p-1 shadow-xl`}
              style={{
                transform: `rotate(${photo.rotation || 0}deg)`,
                ...photo.position
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
        <p className="text-muted mt-4">
          <span className="sm:text-6xl text-5xl font-light text-background tracking-tighter">{teamCount}+</span> creatives
        </p>
      </div>

      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default TeamCollage;