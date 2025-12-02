import React from 'react';
import { FeatureGrid } from './FeatureGrid';
import { FileText, Send } from 'lucide-react';
import { FeatureItem } from './types';

const exampleFeatures: FeatureItem[] = [
  {
    id: '1',
    title: 'Launch experiments, not guesses',
    description: 'Submit unlimited test ideas and creative requests. We prioritize by impact, ship fast, and report clearly so learnings stack every week.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f2227b53-6c8a-42ab-a473-d7a119e14c95_1600w.jpg',
    imageAlt: 'Neon next button 3D render',
    badge: {
      label: 'NEW',
      variant: 'new',
    },
    metadata: 'Unlimited pipeline',
    size: 'hero',
    hasGradientOverlay: true,
    buttons: [
      {
        label: 'See case studies',
        icon: FileText,
        variant: 'secondary',
        onClick: () => console.log('Case studies clicked'),
      },
      {
        label: 'Start a request',
        icon: Send,
        variant: 'primary',
        onClick: () => console.log('Start request clicked'),
      },
    ],
  },
  {
    id: '2',
    title: 'Requests & revisions',
    description: 'Iterate quickly with async requests and structured feedback. Every round ends with clear rationale and next steps.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e2b186b-730f-4956-8043-14955d1766bf_800w.jpg',
    imageAlt: 'App UI preview',
    badge: {
      label: 'NEW',
      variant: 'new',
    },
    size: 'standard',
  },
  {
    id: '3',
    title: 'Worry‑free pricing',
    description: 'Simple plans, no surprises. Pause anytime. Scale up when you\'re ready.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg',
    imageAlt: 'Pricing illustration',
    badge: {
      label: 'NEW',
      variant: 'new',
    },
    size: 'standard',
  },
  {
    id: '4',
    title: 'Quick turnaround',
    description: 'Most tasks ship in 48–72 hours without sacrificing quality.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91cceaf5-3a72-47d0-9d15-ee799cfea874_800w.jpg',
    imageAlt: 'Speed dashboard',
    badge: {
      label: 'NEW',
      variant: 'new',
    },
    size: 'compact',
  },
  {
    id: '5',
    title: 'Go live in days',
    description: 'From first brief to live campaigns in a week, with tracking and QA handled.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70ea4bbd-c103-404b-bff1-cab817e4f4d6_800w.jpg',
    imageAlt: 'Launch imagery',
    size: 'compact',
  },
  {
    id: '6',
    title: 'Comprehensive tracking',
    description: 'Monitor performance metrics and KPIs in real-time with detailed analytics.',
    image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0573e8d-a170-4eda-aba7-4f4fc78c43b7_800w.jpg',
    imageAlt: 'Analytics dashboard',
    size: 'compact',
  },
];

export const FeatureGridExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <FeatureGrid
        sectionLabel="What you get"
        title="Features built for efficient growth"
        description="From unlimited creative requests to transparent pricing, our operating system helps you scale acquisition with confidence."
        features={exampleFeatures}
        columns={3}
      />
    </div>
  );
};

export default FeatureGridExample;
