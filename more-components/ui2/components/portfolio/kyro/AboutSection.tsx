/**
 * AboutSection Component for KYRO Portfolio
 * Complex 12-column grid layout with portrait, statistics overlay, and biographical information
 */

import React from 'react';
import { MapPin, FileText } from 'lucide-react';
import type { AboutSectionProps } from '../../types/kyro-portfolio.types';

export const AboutSection: React.FC<AboutSectionProps> = ({
  name,
  role,
  location,
  portraitImage,
  portraitAlt,
  bio,
  stats,
  className = '',
}) => {
  return (
    <section id="about" className={`max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20 ${className}`}>
      <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/5">
        {/* Header */}
        <div className="flex items-end justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">About</h2>
          <p className="hidden sm:block text-xs text-neutral-400">Story, experience, recognitions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Name Card */}
          <div className="p-6 md:col-span-3 border-b md:border-b-0 md:border-r border-white/10">
            <p className="text-sm text-neutral-400">{role}</p>
            <p className="mt-1 text-lg font-medium tracking-tight text-white">{name}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>

          {/* Portrait with Stats Overlay */}
          <div className="relative md:col-span-6 md:row-span-2 border-b md:border-b-0 md:border-r border-white/10">
            <div className="relative aspect-[16/10] md:aspect-[9/10] lg:aspect-[16/10]">
              <img
                src={portraitImage}
                alt={portraitAlt}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Overlay Stats (desktop) */}
              <div className="hidden md:block absolute inset-0 pointer-events-none">
                <div className="absolute top-5 right-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                    {stats.projects}
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5">Completed Projects</p>
                </div>
                <div className="absolute bottom-5 left-5 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                    {stats.experience}
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5">Years of Experience</p>
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-xl bg-black/45 ring-1 ring-white/10 backdrop-blur-sm p-4">
                  <div className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                    {stats.languages}
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5">Languages Spoken</p>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Stat */}
          <div className="p-6 md:col-span-3 border-b md:border-b-0">
            <div className="text-3xl font-semibold tracking-tight text-white">{stats.awards}</div>
            <p className="text-xs text-neutral-400 mt-1">Industry Awards</p>
          </div>

          {/* Bio */}
          <div className="p-6 md:col-span-3 border-t md:border-t border-white/10 md:border-r">
            <p className="text-sm text-neutral-300 leading-relaxed">{bio}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 ring-1 ring-white/10 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Request CV</span>
            </button>
          </div>

          {/* Clients Stat */}
          <div className="p-6 md:col-span-3 border-t border-white/10">
            <div className="text-3xl font-semibold tracking-tight text-white">{stats.clients}</div>
            <p className="text-xs text-neutral-400 mt-1">Clients Served</p>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="md:hidden border-t border-white/10 grid grid-cols-3">
          <div className="p-4 text-center border-r border-white/10">
            <div className="text-xl font-semibold tracking-tight text-white">{stats.projects}</div>
            <p className="text-[11px] text-neutral-400 mt-0.5">Projects</p>
          </div>
          <div className="p-4 text-center border-r border-white/10">
            <div className="text-xl font-semibold tracking-tight text-white">{stats.experience}</div>
            <p className="text-[11px] text-neutral-400 mt-0.5">Years</p>
          </div>
          <div className="p-4 text-center">
            <div className="text-xl font-semibold tracking-tight text-white">{stats.languages}</div>
            <p className="text-[11px] text-neutral-400 mt-0.5">Languages</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
