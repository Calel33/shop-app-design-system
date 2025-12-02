export interface UnboxingLayoutProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  features: UnboxingFeatureProps[];
  mainContent: UnboxingMainContentProps;
  footer: UnboxingFooterProps;
  ctaButton?: UnboxingCTAProps;
  className?: string;
}

export interface UnboxingFeatureProps {
  title: string;
  description: string;
  backgroundImage: string;
  imageAlt?: string;
}

export interface UnboxingMainContentProps {
  backgroundColor?: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  secondaryDescription?: string;
  utilityIcons?: UnboxingIconProps[];
  productCard?: UnboxingProductCardProps;
}

export interface UnboxingProductCardProps {
  icon: React.ReactNode;
  badgeCount?: number;
  badgeColor?: string;
  title: string;
  description: string;
}

export interface UnboxingFooterProps {
  title: string;
  description: string;
  features: UnboxingFooterFeatureProps[];
}

export interface UnboxingFooterFeatureProps {
  icon: React.ReactNode;
  label: string;
}

export interface UnboxingCTAProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  className?: string;
}

export interface UnboxingIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
  ariaLabel: string;
}

export interface UnboxingHeaderProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  utilityIcons?: UnboxingIconProps[];
}
