/**
 * Type definitions for Bubble Childcare Landing Page components
 * @module childcare.types
 */

import { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProgramCardProps {
  image: string;
  imageAlt: string;
  ageRange: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  linkText?: string;
}

export interface TestimonialCardProps {
  avatar: string;
  avatarAlt: string;
  name: string;
  role: string;
  quote: string;
}

export interface StatCardProps {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface BubbleHeaderProps {
  logoUrl: string;
  logoAlt?: string;
  navLinks?: NavLink[];
  callUsLink?: string;
  bookVisitLink?: string;
  className?: string;
}

export interface BubbleHeroProps {
  backgroundImage: string;
  backgroundVideo?: string;
  videoPoster?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

export interface FeatureHighlightsProps {
  features: FeatureCardProps[];
  className?: string;
}

export interface ProgramsSectionProps {
  title?: string;
  subtitle?: string;
  programs: ProgramCardProps[];
  viewSampleDayLink?: string;
  className?: string;
}

export interface PromiseSectionProps {
  title: string;
  description: string;
  benefits: string[];
  stats: StatCardProps[];
  image: string;
  imageAlt: string;
  askQuestionLink?: string;
  tourCenterLink?: string;
  className?: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialCardProps[];
  className?: string;
}

export interface VisitCTAProps {
  locationBadge?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  onSubmit?: (data: VisitFormData) => void;
  className?: string;
}

export interface VisitFormData {
  name: string;
  email: string;
  preferredDate?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'twitter';
  href: string;
  ariaLabel: string;
}

export interface BubbleFooterProps {
  logoUrl: string;
  logoAlt?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

export interface BubbleLandingProps {
  header: BubbleHeaderProps;
  hero: BubbleHeroProps;
  features: FeatureCardProps[];
  programs: Omit<ProgramsSectionProps, 'programs'> & { programs: ProgramCardProps[] };
  promise: PromiseSectionProps;
  testimonials: Omit<TestimonialsSectionProps, 'testimonials'> & { testimonials: TestimonialCardProps[] };
  visitCTA: VisitCTAProps;
  footer: BubbleFooterProps;
  className?: string;
}
