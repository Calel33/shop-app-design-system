// ui/components/types/dashboard-sidebar.types.ts
// Centralized type definitions for Dashboard with Sidebar Navigation components

export interface SidebarNavItem {
  id: string;
  label: string;
  icon: string; // Lucide icon name
  href: string;
  badge?: {
    text: string;
    variant: 'live' | 'new' | 'beta';
  };
  isActive?: boolean;
}

export interface SidebarProps {
  logo?: {
    icon: string;
    text: string;
  };
  newActionButton?: {
    label: string;
    shortcut?: string;
    onClick: () => void;
  };
  navItems: SidebarNavItem[];
  upgradeCard?: {
    title: string;
    description: string;
    highlight?: string;
    ctaText: string;
    dismissText?: string;
    onUpgrade: () => void;
    onDismiss?: () => void;
  };
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string; // Lucide icon name
  iconColor: 'blue' | 'cyan' | 'green' | 'purple';
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
}

export interface RevenueChartData {
  labels: string[];
  revenue: number[];
  target?: number[];
}

export interface GenreChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}

export interface UsageChartData {
  labels: string[];
  values: number[];
}

export interface SpectrumChartData {
  frequencies: string[];
  amplitudes: number[];
}

export interface Artist {
  id: string;
  name: string;
  avatar: string;
  genre: string;
  isFeatured?: boolean;
  status: {
    label: 'Online' | 'Recording' | 'Away' | 'Offline';
    variant: 'green' | 'yellow' | 'gray';
  };
  location: string;
}

export interface ArtistsTableProps {
  artists: Artist[];
  onArtistAction?: (artistId: string) => void;
}

export interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
  notifications?: number;
  userAvatar?: string;
  onNotificationClick?: () => void;
  onHelpClick?: () => void;
  onProfileClick?: () => void;
}

export interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}
