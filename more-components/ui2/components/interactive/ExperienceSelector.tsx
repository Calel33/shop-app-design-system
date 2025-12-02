/**
 * ExperienceSelector Component
 * 
 * Container for expandable camping experience cards with click handling,
 * responsive layout, and optional heading/subheading.
 */

import { useState } from 'react';
import { ExperienceCard } from './ExperienceCard';
import type { ExperienceSelectorProps } from '../types/interactive.types';

export const ExperienceSelector = ({
  experiences,
  onSelect,
  className = '',
  heading,
  subheading,
}: ExperienceSelectorProps) => {
  // Find default active index or use first card
  const defaultActiveIndex = experiences.findIndex(exp => exp.defaultActive) ?? 0;
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleCardClick = (index: number) => {
    if (index === activeIndex) return; // Already active
    setActiveIndex(index);
    onSelect?.(index);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen bg-[#222] text-white ${className}`}>
      {/* Optional heading section */}
      {(heading || subheading) && (
        <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
          {heading && (
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg animate-fade-in-top animation-delay-300">
              {heading}
            </h1>
          )}
          {subheading && (
            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto animate-fade-in-top animation-delay-600">
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Spacer */}
      <div className="h-12" />

      {/* Cards container */}
      <div className="flex w-full max-w-[900px] min-w-[600px] h-[400px] mx-0 items-stretch overflow-hidden relative">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            image={experience.image}
            icon={experience.icon}
            title={experience.title}
            subtitle={experience.subtitle}
            isActive={index === activeIndex}
            onClick={() => handleCardClick(index)}
            animationDelay={180 * index} // Stagger by 180ms
          />
        ))}
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-fade-in {
          animation: slideFadeIn 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-top {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        /* Responsive: hide cards on smaller screens */
        @media (max-width: 900px) {
          .flex > :nth-child(5) {
            display: none;
          }
        }
        @media (max-width: 820px) {
          .flex > :nth-child(4) {
            display: none;
          }
        }
        @media (max-width: 740px) {
          .flex > :nth-child(3) {
            display: none;
          }
        }
        @media (max-width: 660px) {
          .flex > :nth-child(2) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
