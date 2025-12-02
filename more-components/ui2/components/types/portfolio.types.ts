/**
 * Type definitions for Portfolio components
 * @module portfolio.types
 */

import type { ReactNode } from 'react';

export type PortfolioCardHeight = 'h-48' | 'h-56' | 'h-64' | 'h-72';

export interface PortfolioItem {
  id: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  link: string;
  height: PortfolioCardHeight;
}

export interface PortfolioColumn {
  items: PortfolioItem[];
}

export interface PortfolioHeaderProps {
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

export interface PortfolioCardProps {
  item: PortfolioItem;
  className?: string;
}

export interface PortfolioGridProps {
  columns: PortfolioColumn[];
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  viewAllText?: string;
  viewAllLink?: string;
  className?: string;
}

export interface PortfolioLayoutProps {
  children: ReactNode;
  className?: string;
  background?: string;
  maxWidth?: string;
  showHeader?: boolean;
  headerClassName?: string;
  contentClassName?: string;
  headerContent?: ReactNode;
}
