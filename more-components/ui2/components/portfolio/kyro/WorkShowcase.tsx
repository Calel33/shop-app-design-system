/**
 * WorkShowcase Component for KYRO Portfolio
 * Three-column grid of recent work with "View all" link
 */

import React from 'react';
import { Box, Mountain, Sparkles, ArrowUpRight } from 'lucide-react';
import { WorkCard } from './WorkCard';

export const WorkShowcase: React.FC = () => {
  const works = [
    {
      image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4e25fdd-1ad7-4b5d-8138-c0b5dbe0c9e2_800w.jpg',
      alt: '3D abstract render',
      category: '3D System',
      categoryIcon: <Box className="w-4 h-4" />,
      title: 'Nebula Interface',
      description: 'Interactive motion study for modular components.',
    },
    {
      image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e0a39d5f-b50a-4023-af86-d6cd0cd2c5c6_800w.jpg',
      alt: 'Mountain landscape',
      category: 'Exploration',
      categoryIcon: <Mountain className="w-4 h-4" />,
      title: 'Summit Dashboard',
      description: 'Data viz prototypes for outdoor telemetry.',
    },
    {
      image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/166b473a-a637-42d7-92a0-a1c7325e07cc_800w.jpg',
      alt: 'Minimal ocean scene',
      category: 'Minimal',
      categoryIcon: <Sparkles className="w-4 h-4" />,
      title: 'Tide Kit',
      description: 'A clean component set for rapid prototyping.',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">
          Recent Work
        </h2>
        <a
          href="#"
          className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2 transition-colors"
        >
          <span>View all</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;
