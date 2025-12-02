// Types for Listing Homepage (directory landing)
// Keep in sync with business-directory and admin types where possible
export interface Coordinates {
  lat: number;
  lng: number;
}

export interface OperatingHours {
  monday?: { open: string; close: string; isClosed?: boolean };
  tuesday?: { open: string; close: string; isClosed?: boolean };
  wednesday?: { open: string; close: string; isClosed?: boolean };
  thursday?: { open: string; close: string; isClosed?: boolean };
  friday?: { open: string; close: string; isClosed?: boolean };
  saturday?: { open: string; close: string; isClosed?: boolean };
  sunday?: { open: string; close: string; isClosed?: boolean };
}

export interface Badge {
  type: "trending" | "new" | "verified" | "top-rated" | "hot";
  label: string;
  color: "orange" | "green" | "blue" | "red";
  gradient?: string;
  icon?: string;
  date?: string;
}

export interface BusinessAction {
  label: string;
  type:
    | "reservation"
    | "booking"
    | "trial"
    | "contact"
    | "menu"
    | "info"
    | "services"
    | "portfolio";
  url?: string;
}

export interface Business {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  description: string;
  imageUrl: string;
  logoUrl?: string;
  rating: number;
  reviewCount: number;
  distance: number;
  distanceUnit: "mi" | "km";
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates: Coordinates;
  };
  contact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: OperatingHours;
  isVerified: boolean;
  verifiedDate?: string;
  isTrending?: boolean;
  trendingRank?: number;
  isNew?: boolean;
  newDate?: string;
  badges?: Badge[];
  primaryAction?: BusinessAction;
  secondaryAction?: BusinessAction;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // Lucide icon name
  imageUrl: string;
  businessCount: number;
  color?: string;
  description?: string;
}

export interface LocationMeta {
  name: string;
  displayName: string;
  coordinates: Coordinates;
  businessCount: number;
  radius: number;
}

export interface FilterOption {
  id: string;
  label: string;
  icon: string;
  isActive: boolean;
}

export interface Statistic {
  value: string;
  label: string;
  format?: "number" | "percentage" | "text";
  animate?: boolean;
}

export interface CarouselConfig {
  itemsPerView: { mobile: number; tablet: number; desktop: number };
  gap: number;
  showControls: boolean;
  autoScroll?: boolean;
  autoScrollDelay?: number;
}

export interface SearchParams {
  query?: string;
  location?: string;
  category?: string;
  filters?: string[];
  sort?: "relevance" | "rating" | "distance" | "trending";
}
