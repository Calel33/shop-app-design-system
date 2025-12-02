// Fashion Studio Landing Page Type Definitions

export interface CollectionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
  height?: number;
}

export interface TimelineStep {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  icon?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  priceNote: string;
  badge?: string;
  popular?: boolean;
}

export interface FashionLandingProps {
  collections: CollectionItem[];
  timeline: TimelineStep[];
  team: TeamMember[];
  testimonials: Testimonial[];
  services: ServiceOffering[];
  onBookConsultation?: () => void;
  onExploreCollections?: () => void;
}

export interface FloatingNavProps {
  links: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FashionHeroProps {
  onExplore?: () => void;
  onBookConsultation?: () => void;
}

export interface StatsCounter {
  value: number;
  label: string;
  suffix?: string;
}

export interface CollectionGridProps {
  items: CollectionItem[];
}

export interface TimelineSectionProps {
  steps: TimelineStep[];
}
