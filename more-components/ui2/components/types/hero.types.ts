import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export interface HeroNavProps {
  logo: string | React.ReactNode;
  navItems: NavItem[];
  ctaButton?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
}

export interface HeroContentProps {
  badge?: {
    icon: React.ReactNode;
    text: string;
  };
  title: string | React.ReactNode;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  secondaryCta?: {
    label: string;
    icon: React.ReactNode;
    onClick?: () => void;
  };
}

export interface FullScreenHeroProps {
  backgroundImage: string;
  navigation: HeroNavProps;
  content: HeroContentProps;
  enableAnimations?: boolean;
}
