/**
 * TypeScript Type Definitions for Web3/Aura Components
 * @module web3.types
 */

export interface NetworkCard {
  symbol: string;
  name: string;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary';
}

export interface TestimonialCard {
  rating: number;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  avatarColor?: string;
  initials?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatCard {
  value: string;
  label: string;
}

export interface FloatingTag {
  text: string;
  icon?: string;
  delay?: number;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface AuraHeroProps {
  statusBadge?: {
    icon?: string;
    text: string;
    badge?: string;
  };
  headline: string;
  highlightedText: string;
  description: string;
  stats: StatCard[];
  floatingTags?: FloatingTag[];
  primaryCta?: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: string;
  };
  backgroundImage?: string;
}

export interface AuraHeaderProps {
  logo?: {
    text: string;
    href: string;
  };
  navigation: NavigationLink[];
  ctaButton?: {
    text: string;
    href: string;
    icon?: string;
  };
}

export interface NetworksSectionProps {
  title: string;
  description: string;
  networks: NetworkCard[];
}

export interface PricingSectionProps {
  title: string;
  description: string;
  plans: PricingPlan[];
  footer?: {
    guaranteeText?: string;
    features?: Array<{ icon: string; text: string }>;
  };
}

export interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: TestimonialCard[];
  metrics?: StatCard[];
}

export interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
}

export interface AuraFooterProps {
  logo?: {
    text: string;
  };
  description?: string;
  socialLinks: SocialLink[];
  copyright?: string;
}

export interface AuraLandingProps {
  header: AuraHeaderProps;
  hero: AuraHeroProps;
  networks: NetworksSectionProps;
  pricing: PricingSectionProps;
  testimonials: TestimonialsSectionProps;
  faq: FAQSectionProps;
  footer: AuraFooterProps;
  splineBackground?: string;
}
