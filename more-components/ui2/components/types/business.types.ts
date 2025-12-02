import type { LucideIcon } from "lucide-react";
import type { Weekday } from "./business-listing.types";

export type { Weekday };

export interface HeaderNavLink {
  id: string;
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface HeaderPrimaryAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  external?: boolean;
}

export interface HeaderNavProps {
  brand: {
    label: string;
    href?: string;
  };
  links: HeaderNavLink[];
  primaryAction?: HeaderPrimaryAction;
}

export interface BusinessHeroFeature {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface BusinessHeroProps {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  tagline: string;
  verifiedLabel: string;
  description: string;
  features: BusinessHeroFeature[];
}

export interface LoyaltyBenefit {
  id: string;
  value: string;
  description: string;
}

export interface LoyaltyBannerProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: LoyaltyBenefit[];
}

export type MenuBadgeVariant =
  | "vegan"
  | "vegetarian"
  | "glutenFree"
  | "proteinPlus"
  | "warning"
  | "info";

export interface MenuBadge {
  id: string;
  label: string;
  variant?: MenuBadgeVariant;
}

export interface MenuItemAction {
  label: string;
  href?: string;
  onSelect?: () => void;
  disabled?: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  calorieRange?: string;
  priceLabel?: string;
  badges?: MenuBadge[];
  action?: MenuItemAction;
}

export interface MenuCategory {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
  emptyState?: {
    title: string;
    description?: string;
    actionLabel?: string;
  };
}

export interface MenuTab {
  id: string;
  label: string;
  description?: string;
  categories: MenuCategory[];
  badgeLabel?: string;
  disabled?: boolean;
}

export interface MenuTabsProps {
  tabs: MenuTab[];
  activeTabId: string;
  onChange: (tabId: string) => void;
}

export interface MenuCategoryListProps {
  tab: MenuTab;
}

export interface MenuSectionMeta {
  title: string;
  subtitle?: string;
}

export interface NutritionLegendItem {
  id: string;
  label: string;
  variant: MenuBadgeVariant;
  description?: string;
}

export interface NutritionLegendProps {
  title: string;
  items: NutritionLegendItem[];
}

export interface QuickAction {
  id: string;
  label: string;
  href?: string;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export interface QuickActionsProps {
  actions: QuickAction[];
}

export interface ContactDetail {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

export interface ContactInfoProps {
  title: string;
  details: ContactDetail[];
}

export interface HoursRange {
  open: string;
  close: string;
  closed?: boolean;
  note?: string;
}

export type WeeklyHours = Record<Weekday, HoursRange>;

export interface HoursProps {
  title: string;
  hours: WeeklyHours;
  currentDay: Weekday;
}

export interface FeatureItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface FeatureListProps {
  title: string;
  items: FeatureItem[];
}

export interface HealthSafetyItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface HealthSafetyProps {
  title: string;
  items: HealthSafetyItem[];
}

export interface BusinessListingProps {
  header: HeaderNavProps;
  hero: BusinessHeroProps;
  loyalty: LoyaltyBannerProps;
  menu: MenuSectionMeta;
  menuTabs: MenuTab[];
  nutritionLegend: NutritionLegendProps;
  quickActions: QuickAction[];
  contact: ContactInfoProps;
  hours: HoursProps;
  features: FeatureListProps;
  healthSafety: HealthSafetyProps;
}
