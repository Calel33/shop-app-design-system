/**
 * Background Component Types
 * Type definitions for animated grid backgrounds and cursor effects
 */

import { ReactNode } from 'react';

/**
 * Props for the AnimatedGridBackground component
 * Creates an interactive grid that reveals cells on hover
 */
export interface GridBackgroundProps {
  /** Number of grid cells (default: 12) */
  cellCount?: number;
  /** Base background color for cells */
  baseColor?: string;
  /** Highlight color shown on hover */
  highlightColor?: string;
  /** Enable/disable hover reveal effect */
  enableHover?: boolean;
  /** Grid template columns (responsive) */
  columns?: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for the CursorGlow component
 * Creates a smooth-following glow effect that tracks mouse position
 */
export interface CursorGlowProps {
  /** Size of the glow circle in pixels (default: 400) */
  glowSize?: number;
  /** CSS color for the glow gradient */
  glowColor?: string;
  /** Interpolation speed for smooth following (0-1, default: 0.1) */
  followSpeed?: number;
  /** Blur amount in pixels (default: 70) */
  blurAmount?: number;
  /** Enable/disable the glow effect */
  enabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for the AnimatedButton component
 * Button with rotating border animation and hover effects
 */
export interface AnimatedButtonProps {
  /** Button content */
  children: ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Link href (renders as anchor if provided) */
  href?: string;
  /** Visual variant */
  variant?: 'primary' | 'secondary';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Step item for InfoCard
 */
export interface InfoCardStep {
  /** Icon component or element */
  icon: ReactNode;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
  /** Optional highlight state */
  highlighted?: boolean;
  /** Optional additional content (e.g., avatars) */
  additionalContent?: ReactNode;
}

/**
 * Category item for InfoCard
 */
export interface InfoCardCategory {
  /** Category icon */
  icon: ReactNode;
  /** Category name */
  name: string;
  /** Category description */
  description: string;
  /** Number of items in category */
  count: number;
  /** Active/highlighted state */
  active?: boolean;
}

/**
 * Props for the InfoCard component
 * Glassmorphic card with steps or categories
 */
export interface InfoCardProps {
  /** Card title */
  title: string;
  /** Title icon */
  icon?: ReactNode;
  /** List of steps (for "How to Join" style cards) */
  steps?: InfoCardStep[];
  /** List of categories (for "Categories" style cards) */
  categories?: InfoCardCategory[];
  /** Enable glassmorphism effect */
  glassmorphism?: boolean;
  /** Card variant */
  variant?: 'steps' | 'categories';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for the GridHero component
 * Hero section with badge, heading, description, and CTA
 */
export interface GridHeroProps {
  /** Badge text */
  badge?: string;
  /** Badge icon */
  badgeIcon?: ReactNode;
  /** Main heading (supports JSX for line breaks) */
  heading: ReactNode;
  /** Description text */
  description: string;
  /** CTA button text */
  ctaText?: string;
  /** CTA button click handler */
  onCtaClick?: () => void;
  /** CTA button href */
  ctaHref?: string;
  /** Side cards to display */
  sideCards?: ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Mouse position coordinates
 */
export interface MousePosition {
  x: number;
  y: number;
}
