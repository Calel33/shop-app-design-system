// skincare.types.ts - TypeScript definitions for Skincare component domain

export interface SkincareLayoutProps {
  announcement?: SkincareAnnouncementProps;
  header: SkincareHeaderProps;
  hero: SkincareHeroProps;
  trustBar?: SkincareTrustBarProps;
  collections: SkincareCollectionsGridProps;
  products: SkincareProductGridProps;
  philosophy: SkincarePhilosophyProps;
  footer: SkincareFooterProps;
  className?: string;
}

export interface SkincareAnnouncementProps {
  messages: string[];
  darkMode?: boolean;
  className?: string;
}

export interface SkincareHeaderProps {
  brandName: string;
  brandLogo?: React.ReactNode;
  navLinks: NavLink[];
  collectionsMenu?: SkincareCollection[];
  showUtilityIcons?: boolean;
  cartCount?: number;
  onCartToggle?: () => void;
  onThemeToggle?: () => void;
  onSearch?: () => void;
  className?: string;
}

export interface SkincareHeroProps {
  backgroundImage: string;
  tagline: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  parallax?: boolean;
  className?: string;
}

export interface SkincareTrustBarProps {
  text: string[];
  inlineImages: TrustBarImage[];
  className?: string;
}

export interface TrustBarImage {
  src: string;
  alt: string;
  rotation?: number;
  position: number;
}

export interface SkincareCollectionsGridProps {
  title?: string;
  subtitle?: string;
  collections: SkincareCollection[];
  className?: string;
}

export interface SkincareCollection {
  id: string;
  name: string;
  description: string;
  category: string;
  backgroundImage: string;
  link?: string;
}

export interface SkincareProductGridProps {
  title: string;
  subtitle: string;
  products: SkincareProduct[];
  onAddToCart?: (product: SkincareProduct) => void;
  className?: string;
}

export interface SkincareProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
}

export interface SkincarePhilosophyProps {
  backgroundImage: string;
  heading: string;
  description: string;
  features: string[];
  cta?: CTAButton;
  className?: string;
}

export interface SkincareFooterProps {
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    onSubmit?: (email: string) => void;
  };
  sections: FooterSection[];
  socialLinks: SocialLink[];
  paymentIcons: React.ReactNode[];
  copyright: string;
  className?: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface NavLink {
  label: string;
  href: string;
  onClick?: () => void;
}

export interface CTAButton {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  icon: React.ReactNode;
  url: string;
}

// Cart types
export interface CartItem {
  product: SkincareProduct;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
}

export interface SkincareCartProps {
  isOpen: boolean;
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout?: () => void;
  className?: string;
}

// Toast types
export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export interface ToastNotification extends ToastProps {
  id: string;
}

// Mobile menu types
export interface SkincareMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  onSearch?: () => void;
  className?: string;
}

// Animation types
export type AnimationType =
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
  | 'scale-in'
  | 'blur-in'
  | 'rotate-in';

export interface AnimationConfig {
  type: AnimationType;
  delay?: number;
  threshold?: number;
  duration?: number;
}

// Collections dropdown types
export interface SkincareCollectionsDropdownProps {
  collections: SkincareCollection[];
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

// Product card types
export interface SkincareProductCardProps {
  product: SkincareProduct;
  onAddToCart?: (product: SkincareProduct) => void;
  onToggleWishlist?: (productId: string) => void;
  isInWishlist?: boolean;
  className?: string;
}

// Theme types
export type Theme = 'light' | 'dark';

export interface UseThemeReturn {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Cart hook types
export interface UseCartReturn {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
  itemCount: number;
  addItem: (product: SkincareProduct) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

// Scroll animation hook types
export interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  isVisible: boolean;
}

// Parallax hook types
export interface UseParallaxOptions {
  intensity?: number;
  disabled?: boolean;
}

export interface UseParallaxReturn {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
}
