/**
 * HeroSection Component for KYRO Portfolio
 * Large typographic title with letter-by-letter slide-in animation
 */

import React from 'react';

export const HeroSection: React.FC = () => {
  const letters = ['K', 'Y', 'R', 'O'];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="relative mt-10 sm:mt-16">
        <h1 className="leading-none tracking-tight text-white select-none">
          <span className="block text-[22vw] md:text-[16vw] xl:text-[12vw] 2xl:text-[10vw] font-extrabold overflow-hidden">
            {letters.map((letter, index) => (
              <span
                key={letter}
                className="inline-block animate-letter-slide-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        <style>{`
          @keyframes letterSlideIn {
            0% {
              transform: translateY(-100%);
              opacity: 0;
              clip-path: inset(0 0 100% 0);
            }
            50% {
              opacity: 0.5;
              clip-path: inset(0 0 50% 0);
            }
            100% {
              transform: translateY(0);
              opacity: 1;
              clip-path: inset(0 0 0% 0);
            }
          }

          .animate-letter-slide-in {
            animation: letterSlideIn 0.8s ease-out forwards;
            transform: translateY(-100%);
            opacity: 0;
            clip-path: inset(0 0 100% 0);
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
