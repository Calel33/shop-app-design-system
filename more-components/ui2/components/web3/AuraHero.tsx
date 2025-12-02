/**
 * Aura Hero Component
 * Hero section with animated floating tags and stats
 * @module AuraHero
 */

'use client';

import React from 'react';
import { ShieldCheck, Rocket, Database, Zap, Globe, Shield, Cpu } from 'lucide-react';
import type { AuraHeroProps } from '../types/web3.types';

export const AuraHero: React.FC<AuraHeroProps> = ({
  statusBadge = {
    text: 'Live on Mainnet',
    badge: 'Production Ready'
  },
  headline,
  highlightedText,
  description,
  stats,
  floatingTags,
  primaryCta,
  secondaryCta,
  backgroundImage = 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30eeab2d-e97c-4b45-b740-6695c7862813_1600w.jpg'
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    zap: <Zap className="w-3 h-3 inline mr-2" strokeWidth={1.5} />,
    globe: <Globe className="w-3 h-3 inline mr-2" strokeWidth={1.5} />,
    shield: <Shield className="w-3 h-3 inline mr-2" strokeWidth={1.5} />,
    cpu: <Cpu className="w-3 h-3 inline mr-2" strokeWidth={1.5} />,
  };

  return (
    <section className="relative flex overflow-hidden min-h-screen pt-32 pb-20 items-center justify-center">
      {/* Main Card */}
      <div 
        className="relative w-full max-w-6xl md:p-16 ring-1 ring-white/10 bg-cover rounded-3xl mx-4 p-8 shadow-2xl backdrop-blur-xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Status Badge */}
        <div className="opacity-0 animate-fade-in-up animate-delay-300" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <span className="inline-flex items-center gap-3 text-sm font-semibold bg-gradient-to-r from-white/10 to-white/5 border-white/10 border rounded-full mb-8 px-5 py-2">
            <ShieldCheck className="h-4 w-4 stroke-green-400" strokeWidth={1.5} />
            <span className="text-green-400 font-geist">{statusBadge.text}</span>
            {statusBadge.badge && (
              <span className="text-xs text-white font-geist bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full px-3 py-1">
                {statusBadge.badge}
              </span>
            )}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl opacity-0 animate-fade-in-up animate-delay-500 font-geist font-light"
            style={{ opacity: 1, transform: 'translateY(0px)' }}>
          {headline}<br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-geist font-light">
            {highlightedText}
          </span><br />
          Built for Scale.
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg text-gray-300 leading-relaxed sm:text-xl opacity-0 animate-fade-in-up animate-delay-700 font-geist"
           style={{ opacity: 1, transform: 'translateY(0px)' }}>
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animate-delay-700"
             style={{ opacity: 1, transform: 'translateY(0px)' }}>
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-orange-500 hover:text-white hover:scale-105 shadow-lg font-geist"
            >
              <Rocket className="w-5 h-5" strokeWidth={1.5} />
              {primaryCta.text}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 backdrop-blur-sm font-geist"
            >
              <Database className="w-5 h-5" strokeWidth={1.5} />
              {secondaryCta.text}
            </a>
          )}
        </div>

        {/* Stats */}
        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up animate-delay-700"
               style={{ opacity: 1, transform: 'translateY(0px)' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl text-orange-400 font-geist font-light">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1 font-geist">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Floating Feature Tags */}
        {floatingTags && floatingTags.length > 0 && (
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {floatingTags.map((tag, index) => (
              <span
                key={index}
                className={`absolute rounded-full bg-white/5 px-4 py-2 text-xs backdrop-blur-sm border border-white/10 animate-float font-geist ${
                  index === 0 ? 'right-20 top-16' :
                  index === 1 ? 'left-16 bottom-32' :
                  index === 2 ? 'right-24 bottom-40' :
                  'bottom-8 left-1/2 -translate-x-1/2'
                }`}
                style={{ animationDelay: `${tag.delay || -1 * (index + 1)}s` }}
              >
                {tag.icon && iconMap[tag.icon]}
                {tag.text}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

AuraHero.displayName = 'AuraHero';

export default AuraHero;
