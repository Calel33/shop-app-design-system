/**
 * Type definitions for KYRO Creative Technologist Portfolio components
 * @module kyro-portfolio.types
 */

import type { ReactNode } from 'react';

export interface InfoCardProps {
  icon: ReactNode;
  iconColor: string;
  title: string;
  subtitle: string;
  className?: string;
}

export interface WorkCardProps {
  image: string;
  alt: string;
  category: string;
  categoryIcon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export interface ServiceItemProps {
  label: string;
}

export interface ServiceCardProps {
  number: string;
  title: string;
  subtitle: string;
  services: string[];
  images: Array<{
    src: string;
    alt: string;
    className?: string;
  }>;
  className?: string;
}

export interface AboutSectionProps {
  name: string;
  role: string;
  location: string;
  portraitImage: string;
  portraitAlt: string;
  bio: string;
  stats: {
    projects: string;
    experience: string;
    languages: string;
    awards: string;
    clients: string;
  };
  className?: string;
}

export interface ContactFooterProps {
  status: string;
  title: string;
  email: string;
  className?: string;
}

export interface KyroPortfolioLandingProps {
  className?: string;
}
