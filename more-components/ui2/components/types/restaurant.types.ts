// Centralized type definitions for restaurant domain components
// Location: ui/components/types/restaurant.types.ts

export interface RestaurantHeroProps {
  brandName: string;
  headline: string;
  description: string;
  badges: BadgeItem[];
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  navLinks: NavLink[];
  heroImages?: HeroImage[];
}

export interface HeroImage {
  src: string;
  alt: string;
  className?: string;
}

export interface ChefCardProps {
  name: string;
  role: string;
  image: string;
  icon: 'chef-hat' | 'utensils' | 'wheat' | 'pizza';
}

export interface ChefTeamSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  chefs: ChefCardProps[];
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  sectionCopy?: {
    title: string;
    description: string;
  };
  rightCopy?: string;
}

export interface DishCardProps {
  name: string;
  category: string;
  subcategory: string;
  image: string;
  onClick?: () => void;
}

export interface MenuShowcaseProps {
  title: string;
  subtitle: string;
  description?: string;
  dishes: DishCardProps[];
  ctaText?: string;
  ctaHref?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: 'amber' | 'orange' | 'purple' | 'green' | 'blue';
  size?: 'small' | 'large';
  ctas?: CTAButton[];
  category?: string;
}

export interface FeatureGridProps {
  title: string;
  subtitle?: string;
  description?: string;
  features: FeatureCardProps[];
}

export interface ReservationFormProps {
  onSubmit: (data: ReservationData) => void;
  phoneNumber?: string;
  features?: string[];
}

export interface ReservationData {
  name: string;
  phone: string;
  partySize: number;
  dateTime: string;
  specialRequests?: string;
}

export interface RestaurantFooterProps {
  brandName: string;
  description: string;
  address: string;
  hours: string;
  phoneNumber: string;
  reservationFeatures?: string[];
  onReservationSubmit?: (data: ReservationData) => void;
}

export interface BadgeItem {
  icon: string;
  label: string;
}

export interface CTAButton {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface NavLink {
  label: string;
  href: string;
}
