/**
 * Type definitions for WebGL Shader components
 * @module webgl.types
 */

import { ReactNode } from 'react';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkColor?: string;
  animationDelay?: string;
}

export interface GlassCardProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  floating?: boolean;
  animationDelay?: string;
}

export interface NavigationProps {
  links?: Array<{ label: string; href: string }>;
  ctaText?: string;
  onCtaClick?: () => void;
}

export interface StatCardProps {
  value: string;
  label: string;
}
