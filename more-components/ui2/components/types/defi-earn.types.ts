// ui/components/types/defi-earn.types.ts
// Centralized TypeScript definitions for DeFi Earn Dashboard components

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isActive?: boolean;
}

export interface DeFiHeaderProps {
  logo?: {
    icon: string;
    text: string;
  };
  navItems: NavItem[];
  walletAddress?: string;
  notifications?: number;
  onSearchClick?: () => void;
  onNotificationClick?: () => void;
  onWalletConnect?: () => void;
  onWalletDisconnect?: () => void;
}

export interface HeroBannerProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaPrimary?: {
    label: string;
    onClick: () => void;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
}

export interface TokenData {
  symbol: string;
  name: string;
  icon: string;
  iconGradient: {
    from: string;
    to: string;
  };
  balance: string;
  balanceUSD: string;
  supplyAPY: string;
}

export interface PortfolioCardProps {
  title: string;
  description: string;
  token: TokenData;
  portfolio: {
    amount: string;
    symbol: string;
  };
  stats: {
    supplyAPY: string;
    balance: string;
  };
  onDeposit: () => void;
  onTransfer: () => void;
  image?: string;
}

export interface DepositsMetrics {
  netDeposits: string;
  utilization: number; // 0-100
  weeklyInflow: string;
  weeklyOutflow: string;
}

export interface DepositsSidebarProps {
  metrics: DepositsMetrics;
  onAddFunds: () => void;
  onWithdraw: () => void;
}

export interface VaultStrategy {
  label: string;
  variant: 'bullish' | 'trending' | 'limited-downside';
  icon: string;
}

export interface Vault {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  iconGradient: {
    from: string;
    to: string;
  };
  tvl: string;
  tvlAmount: string;
  apy: string;
  apyRange?: {
    min: number;
    max: number;
  };
  strategy: VaultStrategy;
  description?: string;
}

export interface VaultsTableProps {
  vaults: Vault[];
  onVaultClick?: (vaultId: string) => void;
  onFilterChange?: (filters: VaultFilters) => void;
  onSortChange?: (sort: VaultSort) => void;
}

export interface VaultFilters {
  strategy?: string[];
  apyMin?: number;
  tvlMin?: number;
  searchQuery?: string;
}

export interface VaultSort {
  field: 'name' | 'tvl' | 'apy';
  direction: 'asc' | 'desc';
}

export interface StrategyBadgeProps {
  label: string;
  variant: 'bullish' | 'trending' | 'limited-downside';
  icon: string;
}

export interface TokenIconProps {
  icon: string;
  gradient: {
    from: string;
    to: string;
  };
  size?: 'sm' | 'md' | 'lg';
}

export interface UtilizationBarProps {
  utilization: number; // 0-100
  color?: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface DeFiFooterProps {
  logo: {
    icon: string;
    text: string;
  };
  description: string;
  socialLinks: SocialLink[];
  columns: FooterColumn[];
  copyright?: string;
  tagline?: string;
}

export interface DeFiLayoutProps {
  children: React.ReactNode;
}

export interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface VaultRowProps {
  vault: Vault;
  onClick?: (vaultId: string) => void;
}

export interface VaultsFiltersProps {
  onFilterChange?: (filters: VaultFilters) => void;
  onSortChange?: (sort: VaultSort) => void;
}
