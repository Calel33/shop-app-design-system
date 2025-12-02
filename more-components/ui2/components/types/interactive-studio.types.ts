export interface InteractiveStudioHeroProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  technologies: string[];
  splineUrl?: string;
}

export interface FloatingNavbarProps {
  logo: React.ReactNode;
  brandName: string;
  links: NavLink[];
  authLinks?: AuthLink[];
  ctaButton?: CTAButton;
}

export interface SplineBackgroundProps {
  splineUrl: string;
  fallbackGradient?: string;
  className?: string;
}

export interface GlassBadgeProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

export interface GlassButtonProps {
  children: React.ReactNode;
  variant?: 'solid' | 'glass';
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface AuthLink {
  label: string;
  href: string;
  variant?: 'text' | 'button';
}
