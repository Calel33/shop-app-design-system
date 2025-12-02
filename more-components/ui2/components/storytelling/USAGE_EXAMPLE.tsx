/**
 * Complete Usage Examples for Scroll Story Component
 * @module USAGE_EXAMPLE
 */

import React from 'react';
import { ScrollStory } from './ScrollStory';
import type { Chapter } from './types';

/**
 * Example 1: Complete Digital Odyssey Story (From Original)
 */
export const DigitalOdysseyStory: React.FC = () => {
  const chapters: Chapter[] = [
    {
      number: '01',
      gradient: 'bg-gradient-to-b from-black via-gray-900 to-black',
      content: {
        heading: 'In the beginning, there was only darkness.',
        paragraphs: ['A void waiting to be filled with imagination, creativity, and the spark of digital life.'],
      },
      decorations: [
        { type: 'gradient-overlay', color: 'radial-gradient(circle at center, rgba(29, 78, 216, 0.2), transparent)' },
      ],
    },
    {
      number: '02',
      gradient: 'bg-gradient-to-br from-purple-900 via-blue-900 to-black',
      content: {
        heading: 'Then came the first spark of light.',
        paragraphs: ['Ideas began to form, pixels started to dance, and the digital realm awakened from its eternal slumber.'],
      },
      decorations: [
        { type: 'pulse-dot', position: { top: '25%', left: '25%' }, color: 'white', size: '0.5rem' },
        { type: 'pulse-dot', position: { top: '75%', right: '33%' }, color: '#60a5fa', size: '0.25rem', animationDelay: 300 },
        { type: 'pulse-dot', position: { bottom: '33%', left: '50%' }, color: '#a78bfa', size: '0.25rem', animationDelay: 700 },
      ],
    },
    {
      number: '03',
      gradient: 'bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900',
      content: {
        heading: 'We saw what others could not.',
        paragraphs: [
          'Beyond the screen lay infinite possibilities. Interactive worlds where stories come alive, where users become heroes of their own digital adventures.',
          'This was our calling.',
        ],
      },
      layout: 'split',
      decorations: [
        { type: 'spinning-circle', size: '20rem', color: 'rgba(34, 211, 238, 0.3)', animationDuration: 20 },
      ],
    },
    {
      number: '04',
      gradient: 'bg-gradient-to-br from-teal-900 via-green-900 to-emerald-900',
      content: {
        heading: 'We became architects of experience.',
        features: [
          {
            icon: <div className="w-28 h-28 border-2 border-emerald-400 rounded-lg mx-auto mb-8 flex items-center justify-center transform rotate-45">
              <div className="w-14 h-14 bg-emerald-400/20 rounded transform -rotate-45"></div>
            </div>,
            title: 'Craft',
            description: 'Every pixel placed with purpose, every interaction designed with intention.',
          },
          {
            icon: <div className="w-28 h-28 border-2 border-teal-400 rounded-full mx-auto mb-8 flex items-center justify-center">
              <div className="w-20 h-20 border border-teal-400 rounded-full animate-pulse"></div>
            </div>,
            title: 'Innovation',
            description: 'Pushing beyond what\'s possible into what\'s magical.',
          },
          {
            icon: <div className="w-28 h-28 border-2 border-green-400 mx-auto mb-8 flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
              <div className="w-14 h-14 bg-green-400/20"></div>
            </div>,
            title: 'Impact',
            description: 'Creating moments that resonate long after the screen goes dark.',
          },
        ],
      },
    },
    {
      number: '05',
      gradient: 'bg-gradient-to-br from-emerald-900 via-yellow-900 to-orange-900',
      content: {
        heading: 'The story never ends.',
        paragraphs: ['Each project is a new chapter, each client a new adventure. We\'re not just building websites—we\'re crafting digital legends.'],
        cta: {
          text: 'BEGIN YOUR STORY',
          onClick: () => alert('Let\'s create something amazing!'),
        },
      },
    },
    {
      number: '∞',
      gradient: 'bg-gradient-to-b from-orange-900 via-red-900 to-black',
      content: {
        heading: 'The End?',
        paragraphs: ['No. This is where your story begins.'],
      },
    },
  ];

  return <ScrollStory chapters={chapters} onChapterChange={(i) => console.log('Chapter:', i)} />;
};

/**
 * Example 2: Simple 3-Chapter Story
 */
export const SimpleStory: React.FC = () => {
  const chapters: Chapter[] = [
    {
      number: 1,
      gradient: 'bg-gradient-to-br from-black to-gray-900',
      content: {
        heading: 'Welcome',
        paragraphs: ['This is the beginning of something beautiful.'],
      },
    },
    {
      number: 2,
      gradient: 'bg-gradient-to-br from-indigo-900 to-purple-900',
      content: {
        heading: 'Discover',
        paragraphs: ['Explore the possibilities.'],
      },
    },
    {
      number: 3,
      gradient: 'bg-gradient-to-br from-purple-900 to-pink-900',
      content: {
        heading: 'Create',
        paragraphs: ['Make it yours.'],
      },
    },
  ];

  return <ScrollStory chapters={chapters} />;
};

/**
 * Example 3: Product Launch Story
 */
export const ProductLaunchStory: React.FC = () => {
  const chapters: Chapter[] = [
    {
      number: '01',
      gradient: 'bg-gradient-to-b from-black via-slate-900 to-black',
      content: {
        heading: 'Introducing Our New Product',
        paragraphs: ['A revolution in design and functionality.'],
      },
    },
    {
      number: '02',
      gradient: 'bg-gradient-to-br from-blue-900 to-cyan-900',
      content: {
        heading: 'Built for Performance',
        features: [
          { title: 'Fast', description: 'Lightning-quick response times' },
          { title: 'Reliable', description: '99.9% uptime guarantee' },
          { title: 'Secure', description: 'Enterprise-grade security' },
        ],
      },
    },
    {
      number: '03',
      gradient: 'bg-gradient-to-br from-cyan-900 to-teal-900',
      content: {
        heading: 'Get Started Today',
        paragraphs: ['Join thousands of satisfied customers.'],
        cta: { text: 'SIGN UP NOW', onClick: () => window.location.href = '/signup' },
      },
    },
  ];

  return <ScrollStory chapters={chapters} enableCustomCursor={true} />;
};

export default DigitalOdysseyStory;
