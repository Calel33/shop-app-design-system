export interface FAQCategory {
  id: string;
  name: string;
  color: FAQCategoryColor;
  icon: string;
}

export type FAQCategoryColor = 
  | 'red'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange'
  | 'emerald';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featured?: boolean;
}

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqs: FAQItem[];
  categories?: FAQCategory[];
  onReadMore?: (faqId: string) => void;
  onBrowseAll?: () => void;
  onAskExperts?: () => void;
  showCTA?: boolean;
  animateOnScroll?: boolean;
}

export interface FAQCardProps {
  faq: FAQItem;
  onReadMore?: (faqId: string) => void;
  animationDelay?: number;
  animated?: boolean;
}

export interface FAQHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  animated?: boolean;
}

export interface FAQGridProps {
  faqs: FAQItem[];
  onReadMore?: (faqId: string) => void;
  animateOnScroll?: boolean;
}

export interface FAQCategoryBadgeProps {
  category: FAQCategory;
  size?: 'sm' | 'md' | 'lg';
}

export interface FAQCTASectionProps {
  onBrowseAll?: () => void;
  onAskExperts?: () => void;
  totalCount?: number;
  animated?: boolean;
}

export interface FAQCornerIconsProps {
  icons?: string[];
  color: FAQCategoryColor;
}
