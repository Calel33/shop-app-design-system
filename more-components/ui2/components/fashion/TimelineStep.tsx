import React from 'react';
import { Clock } from 'lucide-react';
import { TimelineStep as TimelineStepType } from './types';

interface TimelineStepProps {
  step: TimelineStepType;
  index: number;
  isActive: boolean;
  isAnimated: boolean;
}

export const TimelineStep: React.FC<TimelineStepProps> = ({
  step,
  index,
  isActive,
  isAnimated,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      {/* Left Content (even steps) */}
      {isEven ? (
        <>
          <div className="flex-1 lg:text-right lg:pr-12">
            <div
              className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 opacity-0 translate-y-12"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(3rem)',
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="flex gap-4 lg:justify-end mb-6 items-center">
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-3xl font-light font-serif mb-4 text-slate-800">
                {step.title}
              </h3>
              <p className="leading-relaxed text-slate-600 mb-6">{step.description}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500 lg:justify-end">
                <Clock className="h-4 w-4" />
                <span>Duration: {step.duration}</span>
              </div>
            </div>
          </div>

          {/* Dot */}
          <div
            className="w-6 h-6 flex-shrink-0 rounded-full shadow-lg z-10 transition-all duration-600"
            style={{
              background: isActive ? '#475569' : '#e2e8f0',
              transform: isActive ? 'scale(1)' : 'scale(0.8)',
              opacity: isActive ? 1 : 0.5,
              boxShadow: isActive ? '0 0 20px rgba(71, 85, 105, 0.4)' : 'none',
              transitionDelay: `${index * 200}ms`,
            }}
          />

          {/* Empty Space */}
          <div className="flex-1 lg:pl-12" />
        </>
      ) : (
        <>
          {/* Empty Space */}
          <div className="flex-1 lg:pr-12" />

          {/* Dot */}
          <div
            className="w-6 h-6 flex-shrink-0 rounded-full shadow-lg z-10 transition-all duration-600"
            style={{
              background: isActive ? '#475569' : '#e2e8f0',
              transform: isActive ? 'scale(1)' : 'scale(0.8)',
              opacity: isActive ? 1 : 0.5,
              boxShadow: isActive ? '0 0 20px rgba(71, 85, 105, 0.4)' : 'none',
              transitionDelay: `${index * 200}ms`,
            }}
          />

          {/* Right Content (odd steps) */}
          <div className="flex-1 lg:pl-12">
            <div
              className="backdrop-blur-xl bg-white/80 border border-slate-200/60 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 opacity-0 translate-y-12"
              style={{
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(3rem)',
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-slate-600 uppercase tracking-wider">
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-3xl font-light font-serif mb-4 text-slate-800">
                {step.title}
              </h3>
              <p className="leading-relaxed text-slate-600 mb-6">{step.description}</p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Clock className="h-4 w-4" />
                <span>Duration: {step.duration}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
