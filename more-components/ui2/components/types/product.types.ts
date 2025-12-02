import { ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface CertificationBadge {
  title: string;
  subtitle: string;
}

export interface DiagramNode {
  id: string;
  position: 'left' | 'right' | 'top' | 'bottom';
  icon?: ReactNode;
  text?: string;
  value?: string;
  label: string;
}

export interface ProductFeatureTabsProps {
  tabs: TabItem[];
  specs: SpecItem[];
  certifications: CertificationBadge[];
  rating: number;
  totalReviews: string;
  recommendPercent: number;
  diagramNodes?: DiagramNode[];
  backgroundImage?: string;
  className?: string;
}

export interface DiagramWithNodesProps {
  nodes: DiagramNode[];
  backgroundImage?: string;
  className?: string;
}

export interface SpecListProps {
  specs: SpecItem[];
  className?: string;
}

export interface CertificationGridProps {
  certifications: CertificationBadge[];
  className?: string;
}
