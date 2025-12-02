import React, { useEffect, useRef, useState } from 'react';
import { TimelineStep } from './TimelineStep';
import { TimelineSectionProps } from './types';

export const TimelineSection: React.FC<TimelineSectionProps> = ({ steps }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progressHeight, setProgressHeight] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate timeline
          setTimeout(() => {
            animateTimeline();
          }, 200);
        } else if (!entries[0].isIntersecting && entries[0].boundingClientRect.top > 0) {
          // Reset when scrolling back up
          setIsVisible(false);
          setActiveStep(0);
          setProgressHeight(0);
        }
      },
      { threshold: 0.2, rootMargin: '-100px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateTimeline = () => {
    // Animate progress line
    setProgressHeight(100);

    // Animate steps sequentially
    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index + 1);
      }, 400 + index * 600);
    });
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-20"
    >
      {/* Section Header */}
      <div
        className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-800"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
        }}
      >
        <p className="text-sm text-slate-500 uppercase tracking-wider mb-4">Our Process</p>
        <h2 className="text-5xl sm:text-7xl font-light font-serif tracking-tight mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
          From Vision to Reality
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          A seamless journey from initial consultation to your perfect garment.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Progress Line (Desktop only) */}
        <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-200 hidden lg:block rounded-full overflow-hidden">
          <div
            className="w-full bg-gradient-to-b from-slate-700 to-slate-600 rounded-full shadow-sm transition-all duration-1000 ease-out"
            style={{
              height: `${progressHeight}%`,
              boxShadow: '0 0 10px rgba(71, 85, 105, 0.3)',
            }}
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isActive={index < activeStep}
              isAnimated={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
