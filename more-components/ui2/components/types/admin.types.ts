import type { LucideIcon } from "lucide-react";

export type TrendDirection = "up" | "down" | "flat";

export interface AdminMetric {
  id: string;
  label: string;
  value: number | string;
  trend?: {
    direction: TrendDirection;
    percent?: number;
  };
  icon: LucideIcon;
  variant: "orange" | "blue" | "green" | "red" | "default";
}

export interface BusinessSubmission {
  id: string;
  name: string;
  category: string;
  location: string;
  avatarUrl: string;
  tags: string[];
  submittedAt: string; // ISO string
  owner: string;
}

export type BusinessStatus = "active" | "pending" | "suspended" | "inactive" | "expired";
export type VerificationType = "verified" | "premium" | "basic" | "unverified";
export type ViewMode = "list" | "card" | "map";

export interface BusinessMeta {
  rating?: number; // 0..5
  reviewsCount?: number;
  lastUpdated?: string; // ISO
  monthlyViews?: number;
  notes?: string;
}

export interface Business extends BusinessSubmission {
  status: BusinessStatus;
  address: string;
  zone?: string;
  verification?: VerificationType[];
  ownerEmail?: string;
  ownerPhone?: string;
  meta?: BusinessMeta;
}

export type PriorityLevel = "high" | "normal";

export interface BusinessListing extends BusinessSubmission {
  priority: PriorityLevel;
  address: string;
  ownerEmail: string;
  ownerPhone?: string;
  description?: string;
  documents?: Array<{
    id: string;
    name: string;
    type: string;
    lastUpdated: string;
  }>;
  isSelected?: boolean;
}

export interface FilterOptions {
  categories: string[];
  priorities: PriorityLevel[];
  timeframes: string[];
}

export interface BusinessFilters {
  query: string;
  category: string | "All Categories";
  status: BusinessStatus | "All Statuses";
  zone: string | "All Zones";
  verification: VerificationType | "All Types";
}

export interface BulkActionState {
  selectedIds: string[];
  allSelected: boolean;
  indeterminate: boolean;
}

export interface PaginationState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export type ActivityType = "success" | "info" | "warning" | "error";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  text: string;
  meta?: string;
  timestamp: string; // ISO string
}

export type ServiceStatus = "online" | "degraded" | "offline";

export interface SystemStatusEntry {
  service: string;
  status: ServiceStatus;
  badge: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  badgeCount?: number;
  section: "Management" | "Moderation" | "Insights";
}
