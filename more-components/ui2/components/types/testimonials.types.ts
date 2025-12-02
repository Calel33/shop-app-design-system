/**
 * Type definitions for Testimonials components
 * @module testimonials.types
 */

export interface TestimonialAuthor {
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  avatarAlt?: string;
  location?: string;
}

export interface TestimonialMetrics {
  label: string;
  value: string;
  change?: string;
}

export interface TestimonialBadge {
  label: string;
  variant: 'success' | 'info' | 'warning' | 'primary';
}

export interface TestimonialTimeline {
  phase: string;
  description: string;
  color: 'green' | 'blue' | 'violet';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: TestimonialAuthor;
  hasMeteor?: boolean;
  meteorDelay?: number;
  rating?: number;
  maxRating?: number;
  industry?: {
    name: string;
    icon?: string;
  };
  metrics?: TestimonialMetrics[];
  badges?: TestimonialBadge[];
  timeline?: TestimonialTimeline[];
  variant?: 'default' | 'featured' | 'detailed' | 'quote' | 'video';
  hasVideo?: boolean;
  cardHeight?: 'short' | 'medium' | 'tall';
}

export interface TestimonialsGridProps {
  sectionLabel?: string;
  title: string;
  description?: string;
  testimonials: Testimonial[];
  columns?: 1 | 2 | 3 | 4;
  showMeteors?: boolean;
  className?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  hasMeteor?: boolean;
  meteorDelay?: number;
  className?: string;
}

export interface MeteorBackgroundProps {
  delay?: number;
  className?: string;
}

export interface TestimonialsMasonryProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  showParticles?: boolean;
  showCTA?: boolean;
  staggerAnimation?: boolean;
  className?: string;
}

export interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export interface StaggeredAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    label: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick?: () => void;
  };
  className?: string;
}