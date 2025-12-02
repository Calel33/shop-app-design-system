/**
 * Type definitions for Medical Landing Page components
 * @module medical.types
 */

export interface StatCardProps {
  label: string;
  value: string;
}

export interface PatientAvatarProps {
  src: string;
  alt: string;
}

export interface RatingProps {
  rating: number;
  totalReviews: string;
}

export interface NavigationProps {
  className?: string;
}

export interface HeroSectionProps {
  className?: string;
}

export interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  animationDelay?: number;
  animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'scale-in';
}

export interface BentoGridProps {
  className?: string;
}

export interface CTASectionProps {
  className?: string;
}

export interface MedicalSpecialty {
  icon: React.ReactNode;
  label: string;
}

export interface PatientTestimonial {
  rating: number;
  text: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export interface EmergencyServiceProps {
  responseTime: string;
}

export interface TechnologyStatsProps {
  diagnosticAccuracy: string;
  treatmentSuccess: string;
}

export interface MedicalLayoutProps {
  children: React.ReactNode;
  className?: string;
  background?: string;
  maxWidth?: string;
  showNavigation?: boolean;
  navigationClassName?: string;
  contentClassName?: string;
}
