/**
 * Type definitions for Nova Landing Page components
 * @module nova.types
 */

import { LucideIcon } from 'lucide-react';

export interface FAQItemProps {
  question: string;
  answer: string;
}

export interface Metric {
  label: string;
  value: string;
  color: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
  metrics: Metric[];
}

export interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaText: string;
}
