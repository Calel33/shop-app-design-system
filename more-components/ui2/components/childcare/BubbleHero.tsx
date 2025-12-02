/**
 * BubbleHero Component
 * Hero section with video hover effect
 * @module childcare/BubbleHero
 */

import { useRef, useEffect } from 'react';
import { Hand, Compass } from 'lucide-react';
import type { BubbleHeroProps } from '../types/childcare.types';

export const BubbleHero = ({
  backgroundImage,
  backgroundVideo,
  videoPoster,
  title,
  description,
  primaryButtonText = 'Schedule a Tour',
  primaryButtonLink = '#visit',
  secondaryButtonText = 'Explore Programs',
  secondaryButtonLink = '#programs',
  className = '',
}: BubbleHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video || !backgroundVideo) return;

    const playVideo = () => {
      try {
        video.currentTime = 0;
        video.play();
      } catch (e) {
        console.error('Error playing video:', e);
      }
    };

    const pauseVideo = () => {
      try {
        video.pause();
        video.currentTime = 0;
      } catch (e) {
        console.error('Error pausing video:', e);
      }
    };

    section.addEventListener('mouseenter', playVideo);
    section.addEventListener('mouseleave', pauseVideo);
    section.addEventListener('focusin', playVideo);
    section.addEventListener('focusout', pauseVideo);

    return () => {
      section.removeEventListener('mouseenter', playVideo);
      section.removeEventListener('mouseleave', pauseVideo);
      section.removeEventListener('focusin', playVideo);
      section.removeEventListener('focusout', pauseVideo);
    };
  }, [backgroundVideo]);

  return (
    <section
      ref={sectionRef}
      className={`pt-32 pb-20 relative group ${className}`}
    >
      <div className="-z-10 absolute top-0 right-0 bottom-0 left-0">
        <img
          className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-0"
          src={backgroundImage}
          alt="Children learning and playing"
        />
        {backgroundVideo && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100 pointer-events-none"
            src={backgroundVideo}
            muted
            playsInline
            loop
            preload="metadata"
            poster={videoPoster || backgroundImage}
          />
        )}
      </div>

      <div className="max-w-7xl mt-40 mr-auto ml-auto pr-4 pl-4 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-3xl">
          <h1 className="sm:text-5xl md:text-7xl md:font-bold text-4xl font-semibold tracking-tight font-nunito mt-6">
            {title}
          </h1>
          <p className="sm:text-lg text-base text-black/80 font-nunito mt-4">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={primaryButtonLink}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition bg-black text-neutral-100 hover:bg-black/90 font-nunito"
            >
              <Hand className="h-4 w-4" />
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonLink}
              className="inline-flex items-center gap-2 transition hover:bg-black/5 text-sm font-medium text-black font-nunito bg-black/0 border-black/10 border rounded-xl pt-3 pr-5 pb-3 pl-5 backdrop-blur-xl"
            >
              <Compass className="h-4 w-4" />
              {secondaryButtonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
