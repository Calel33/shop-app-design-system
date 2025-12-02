import React, { useEffect, useRef, useState } from 'react';
import { TeamCard } from './TeamCard';
import { TeamMember } from './types';

interface TeamSectionProps {
  team: TeamMember[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ team }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
      {/* Section Header */}
      <div
        className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Meet Our Team</p>
        <h2 className="text-5xl sm:text-7xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          Master Artisans
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          The talented individuals who bring your fashion dreams to life.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={member.id}
            className="opacity-0 translate-y-8 transition-all duration-600"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
              transitionDelay: `${index * 100}ms`,
            }}
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </section>
  );
};
