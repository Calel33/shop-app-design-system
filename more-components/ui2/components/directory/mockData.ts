import type {
  Business,
  Category,
  FilterOption,
  LocationMeta,
  Statistic,
} from "./types/directory.types";

export const mockCategories: Category[] = [
  {
    id: "cat-1",
    name: "Restaurants",
    slug: "restaurants",
    icon: "UtensilsCrossed",
    imageUrl: "/images/categories/restaurants.webp",
    businessCount: 284,
    description: "Discover amazing dining experiences",
  },
  {
    id: "cat-2",
    name: "Healthcare",
    slug: "healthcare",
    icon: "HeartPulse",
    imageUrl: "/images/categories/healthcare.webp",
    businessCount: 156,
    description: "Quality medical and wellness services",
  },
  {
    id: "cat-3",
    name: "Shopping",
    slug: "shopping",
    icon: "ShoppingBag",
    imageUrl: "/images/categories/shopping.webp",
    businessCount: 198,
    description: "Local retail and boutique stores",
  },
  {
    id: "cat-4",
    name: "Automotive",
    slug: "automotive",
    icon: "Car",
    imageUrl: "/images/categories/automotive.webp",
    businessCount: 89,
    description: "Auto repair and maintenance services",
  },
  {
    id: "cat-5",
    name: "Beauty & Wellness",
    slug: "beauty-wellness",
    icon: "Scissors",
    imageUrl: "/images/categories/beauty.webp",
    businessCount: 142,
    description: "Salons, spas, and wellness centers",
  },
  {
    id: "cat-6",
    name: "Fitness",
    slug: "fitness",
    icon: "Dumbbell",
    imageUrl: "/images/categories/fitness.webp",
    businessCount: 73,
    description: "Gyms, studios, and training facilities",
  },
  {
    id: "cat-7",
    name: "Home Services",
    slug: "home-services",
    icon: "Home",
    imageUrl: "/images/categories/home-services.webp",
    businessCount: 167,
    description: "Plumbing, electrical, and home repair",
  },
  {
    id: "cat-8",
    name: "Professional",
    slug: "professional",
    icon: "Briefcase",
    imageUrl: "/images/categories/professional.webp",
    businessCount: 124,
    description: "Legal, financial, and business services",
  },
];

export const mockTrendingBusinesses: Business[] = [
  {
    id: "biz-1",
    name: "Farm & Table Bistro",
    category: "Restaurants",
    subcategory: "Farm-to-Table Restaurant",
    description:
      "Fresh, locally-sourced ingredients crafted into seasonal dishes. Award-winning chef creates innovative comfort food.",
    imageUrl: "/images/businesses/farm-table.webp",
    rating: 4.9,
    reviewCount: 127,
    distance: 0.8,
    distanceUnit: "mi",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      coordinates: { lat: 39.7817, lng: -89.6501 },
    },
    contact: {
      phone: "(217) 555-0123",
      website: "https://farmandtable.example.com",
    },
    isVerified: true,
    isTrending: true,
    trendingRank: 1,
    badges: [
      {
        type: "trending",
        label: "#1 Trending",
        color: "orange",
        gradient: "from-amber-500 to-amber-600",
        icon: "TrendingUp",
      },
    ],
    primaryAction: {
      label: "Reserve Table",
      type: "reservation",
      url: "/reserve/farm-table",
    },
    secondaryAction: {
      label: "View Menu",
      type: "menu",
      url: "/business/farm-table/menu",
    },
  },
];

export const mockNewBusinesses: Business[] = [
  {
    id: "biz-new-1",
    name: "Artisan Coffee Co.",
    category: "Restaurants",
    subcategory: "Coffee Shop",
    description: "Specialty coffee roasted daily",
    logoUrl: "/images/logos/artisan-coffee.webp",
    imageUrl: "/images/businesses/artisan-coffee.webp",
    rating: 4.7,
    reviewCount: 23,
    distance: 0.5,
    distanceUnit: "mi",
    address: {
      street: "101 Coffee St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      coordinates: { lat: 39.783, lng: -89.651 },
    },
    contact: {},
    isVerified: true,
    isNew: true,
    newDate: "2024-03-18",
    badges: [
      {
        type: "new",
        label: "New This Week",
        color: "green",
        gradient: "from-emerald-500 to-emerald-600",
      },
    ],
  },
];

export const mockVerifiedBusinesses: Business[] = [
  {
    id: "biz-verified-1",
    name: "Miller & Associates Law",
    category: "Professional",
    subcategory: "Legal Services",
    description: "Experienced attorneys serving Springfield",
    logoUrl: "/images/logos/miller-law.webp",
    imageUrl: "/images/businesses/miller-law.webp",
    rating: 4.9,
    reviewCount: 76,
    distance: 1.1,
    distanceUnit: "mi",
    address: {
      street: "505 Legal Lane",
      city: "Springfield",
      state: "IL",
      zip: "62701",
      coordinates: { lat: 39.785, lng: -89.653 },
    },
    contact: {},
    isVerified: true,
    verifiedDate: "2024-03-19",
    badges: [
      {
        type: "verified",
        label: "Verified March 19",
        color: "green",
        gradient: "from-emerald-600 to-emerald-500",
        icon: "ShieldCheck",
        date: "March 19",
      },
    ],
  },
];

export const mockFilterOptions: FilterOption[] = [
  { id: "trending", label: "Trending Now", icon: "Flame", isActive: false },
  { id: "open", label: "Open Now", icon: "Clock", isActive: false },
  { id: "rated", label: "Highly Rated", icon: "Star", isActive: false },
  { id: "nearby", label: "Nearby", icon: "MapPin", isActive: false },
  { id: "offers", label: "Special Offers", icon: "Tag", isActive: false },
  { id: "verified", label: "Newly Verified", icon: "ShieldCheck", isActive: false },
];

export const mockStats: Statistic[] = [
  { value: "2,847", label: "Verified Businesses", format: "number", animate: true },
  { value: "98%", label: "Customer Satisfaction", format: "percentage", animate: true },
  { value: "24/7", label: "Platform Available", format: "text", animate: false },
];

export const mockCurrentLocation: LocationMeta = {
  name: "Springfield",
  displayName: "Springfield, IL",
  coordinates: { lat: 39.7817, lng: -89.6501 },
  businessCount: 847,
  radius: 25,
};
