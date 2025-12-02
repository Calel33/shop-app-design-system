/**
 * ExperienceCard Component
 * 
 * Individual expandable card for camping experiences with smooth animations,
 * background images, glassmorphic icon circles, and staggered entrance effects.
 */

import { useEffect, useRef } from 'react';
import type { ExperienceCardProps } from '../types/interactive.types';

export const ExperienceCard = ({
  image,
  icon,
  title,
  subtitle,
  isActive,
  onClick,
  animationDelay,
}: ExperienceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('animate-slide-fade-in');
      }
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`
        group relative flex flex-col justify-end overflow-hidden
        border-2 cursor-pointer
        min-w-[60px] min-h-[100px]
        opacity-0 -translate-x-[60px]
        transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
        will-change-[flex-grow,box-shadow,background-size,background-position]
        bg-zinc-900 bg-cover bg-center
        ${isActive 
          ? 'flex-grow-[7] border-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] z-10 bg-[length:auto_100%]' 
          : 'flex-1 border-[#292929] shadow-[0_10px_30px_rgba(0,0,0,0.3)] bg-[length:auto_120%]'
        }
      `}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Gradient shadow overlay */}
      <div
        className={`
          absolute left-0 right-0 h-[120px] pointer-events-none
          transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isActive 
            ? 'bottom-0 shadow-[inset_0_-120px_120px_-120px_#000,inset_0_-120px_120px_-80px_#000]'
            : 'bottom-[-40px] shadow-[inset_0_-120px_0px_-120px_#000,inset_0_-120px_0px_-80px_#000]'
          }
        `}
      />

      {/* Label container */}
      <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-12 z-[2] px-4 gap-3 w-full pointer-events-none">
        {/* Icon circle with glassmorphism */}
        <div
          className={`
            min-w-[44px] max-w-[44px] h-[44px]
            flex items-center justify-center
            rounded-full
            bg-[rgba(32,32,32,0.85)]
            backdrop-blur-[10px]
            shadow-[0_1px_4px_rgba(0,0,0,0.18)]
            text-2xl text-white
            pointer-events-auto
            flex-shrink-0 flex-grow-0
            transition-all duration-250
            border-2
            ${isActive ? 'border-white' : 'border-[#444]'}
          `}
        >
          {icon}
        </div>

        {/* Text info */}
        <div
          className={`
            flex-1 flex flex-col justify-center
            pointer-events-auto
          `}
        >
          <div
            className={`
              font-bold text-lg text-white whitespace-pre relative
              transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
              ${isActive 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-[25px]'
              }
            `}
          >
            {title}
          </div>
          <div
            className={`
              text-base text-gray-300 whitespace-pre relative
              transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
              ${isActive 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-[25px]'
              }
            `}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};
