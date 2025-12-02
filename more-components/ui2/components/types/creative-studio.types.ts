// Creative Studio Landing Page Component Types
export interface CreativeStudioLandingProps {
  className?: string;
}

export interface SplineBackgroundProps {
  src?: string;
  className?: string;
  fallbackClassName?: string;
}

export interface CreativeStudioHeroProps {
  title?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  projectCount?: number;
  teamCount?: number;
  className?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  className?: string;
  onClick?: () => void;
}

export interface TeamPhoto {
  src: string;
  alt: string;
  rotation?: number;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export interface TeamCollageProps {
  photos: TeamPhoto[];
  teamCount: number;
  description?: string;
  className?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStepsProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
  image?: string;
  className?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  nextName: string;
  nextAvatar: string;
}

export interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export interface PricingTier {
  name: string;
  price: string | number;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  badge?: string;
  className?: string;
}

export interface PricingTiersProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  billingToggle?: {
    monthly: string;
    yearly: string;
    savings?: string;
  };
  className?: string;
}

export interface CreativeStudioFooterProps {
  brandName?: string;
  description?: string;
  services?: {
    title: string;
    links: { label: string; href: string }[];
  };
  contact?: {
    title: string;
    email?: string;
    phone?: string;
    location?: string;
  };
  socialLinks?: {
    platform: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  className?: string;
}

export interface ServiceCard {
  title: string;
  progress?: number;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface CreativeService {
  title: string;
  description: string;
  progress: number;
}

export interface HeroGridCard {
  type: 'projects' | 'team' | 'services';
  title: string;
  subtitle?: string;
  content?: any;
  className?: string;
}