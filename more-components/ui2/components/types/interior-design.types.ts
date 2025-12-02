import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  link: string;
}

export interface PortfolioProjectProps {
  image: string;
  title: string;
  description: string;
  location: string;
  size: string;
  category: string;
  featured?: boolean;
}

export interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

export interface TimelinePhaseProps {
  phase: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}
