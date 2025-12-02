// Centralized type definitions for the business listing domain
// Location: ui/components/types/business-listing.types.ts

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: LucideIcon;
  isCurrent?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BusinessRating {
  score: number;
  count: number;
}

export interface ContactInfo {
  address: string;
  phone?: string;
  website?: string;
  email?: string;
  directionsUrl?: string;
}

export interface BusinessHoursRange {
  open: string | null;
  close: string | null;
  isClosed?: boolean;
  note?: string;
}

export type BusinessHours = Record<Weekday, BusinessHoursRange>;

export interface BusinessStatus {
  isOpen: boolean;
  closesAt?: string;
  opensAt?: string;
  nextOpenDay?: Weekday;
  message: string;
}

export interface Credential {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BusinessAction {
  label: string;
  href: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  onClick?: () => void;
}

export interface NavigationLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface BusinessHeaderProps {
  brand: {
    name: string;
    href?: string;
  };
  navLinks: NavigationLink[];
  primaryAction?: BusinessAction;
}

export interface SidebarPanel {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}

export interface Business {
  id: string;
  name: string;
  categories: string[];
  verified: boolean;
  distanceMiles: number;
  description: string;
  about: string;
  gallery: GalleryImage[];
  rating: BusinessRating;
  status?: BusinessStatus;
  contact: ContactInfo;
  hours: BusinessHours;
  credentials: Credential[];
  lastUpdated: string;
  breadcrumb: BreadcrumbItem[];
  actions: BusinessAction[];
  specialties: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export interface BusinessListingLayoutProps {
  header: ReactNode;
  breadcrumb: ReactNode;
  hero: ReactNode;
  main: ReactNode;
  sidebar: ReactNode;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export interface BusinessHeroProps {
  gallery: ReactNode;
  details: ReactNode;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export interface BusinessDetailsProps {
  name: string;
  categories: string[];
  verified: boolean;
  rating: BusinessRating;
  distanceLabel: string;
  status: BusinessStatus;
  description: string;
  actions: BusinessAction[];
}

export interface ContactInfoProps {
  title: string;
  icon: LucideIcon;
  contact: ContactInfo;
}

export interface HoursDisplayProps {
  title: string;
  icon: LucideIcon;
  hours: BusinessHours;
  currentDay: Weekday;
}

export interface CredentialsDisplayProps {
  title: string;
  icon: LucideIcon;
  credentials: Credential[];
}

export interface ReviewsPlaceholderProps {
  title: string;
  icon: LucideIcon;
  message: string;
}

export interface LastUpdatedBadgeProps {
  updatedAt: string;
  icon: LucideIcon;
}
