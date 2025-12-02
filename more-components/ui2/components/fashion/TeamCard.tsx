import React, { useState } from 'react';
import { TeamMember } from './types';

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="group">
      <div className="rounded-3xl ring-1 ring-slate-200 bg-white p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative rounded-2xl ring-1 ring-black/5 h-40 overflow-hidden bg-slate-50 mb-5">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-slate-100 animate-pulse" />
          )}
          <img
            src={member.imageUrl}
            alt={member.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isImageLoaded ? 'opacity-100 group-hover:scale-110' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-slate-900 tracking-tight">
          {member.name}
        </h3>
        <p className="font-medium text-slate-600 mb-4">{member.role}</p>
        <p className="text-sm text-slate-600">{member.description}</p>
      </div>
    </div>
  );
};
