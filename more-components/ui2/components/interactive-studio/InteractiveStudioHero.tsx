import React from 'react';
import { InteractiveStudioHeroProps } from './types';
import { GlassBadge } from './GlassBadge';
import { GlassButton } from './GlassButton';

export const InteractiveStudioHero: React.FC<InteractiveStudioHeroProps> = ({
  badge,
  title,
  highlightedTitle,
  description,
  primaryCTA,
  secondaryCTA,
  technologies,
}) => {
  return (
    <div className="relative z-10 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {badge && (
              <GlassBadge variant="medium">
                {badge}
              </GlassBadge>
            )}

            <h1 className="text-5xl md:text-7xl leading-none font-medium tracking-tighter text-white">
              {title}
              {highlightedTitle && (
                <>
                  {' '}
                  <span className="text-white text-opacity-60">{highlightedTitle}</span>
                </>
              )}
            </h1>

            <p className="text-xl text-neutral-300 max-w-lg leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <GlassButton
                variant="solid"
                href={primaryCTA.href}
                onClick={primaryCTA.onClick}
              >
                {primaryCTA.label}
              </GlassButton>

              {secondaryCTA && (
                <GlassButton
                  variant="glass"
                  href={secondaryCTA.href}
                  onClick={secondaryCTA.onClick}
                >
                  {secondaryCTA.label}
                </GlassButton>
              )}
            </div>

            {technologies.length > 0 && (
              <div className="pt-8 space-y-4">
                <div className="text-sm text-neutral-400">Featured Technologies</div>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <GlassBadge key={index} variant="subtle">
                      {tech}
                    </GlassBadge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="hidden lg:block">
            {/* Empty space for 3D orb interaction */}
          </div>
        </div>
      </div>
    </div>
  );
};
