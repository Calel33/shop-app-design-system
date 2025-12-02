export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  images: ProductImage[];
  variants: ProductVariant[];
  features: string[];
  ingredients?: string[];
  stock: StockInfo;
  badges?: ProductBadge[];
  specifications?: ProductSpecification[];
  howToUse?: string[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  thumbnail: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  description?: string;
  color?: string;
  inStock: boolean;
  price?: number;
}

export interface ProductBadge {
  label: string;
  type: 'bestseller' | 'new' | 'limited' | 'sale' | 'favorite';
}

export interface ProductSpecification {
  label: string;
  value: string;
  icon?: string;
}

export interface StockInfo {
  inStock: boolean;
  quantity?: number;
  lowStockThreshold?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
  helpful?: number;
  skinType?: string;
  ageRange?: string;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: RatingBreakdown;
  recommendations?: number;
}

export interface RatingBreakdown {
  5: number;
  4: number;
  3: number;
  2: number;
  1: number;
}

export interface BrandInfo {
  name: string;
  description?: string;
  logo?: string;
  rating?: number;
  ratingCount?: number;
  badges?: string[];
}

export interface DeliveryOption {
  id: string;
  type: 'standard' | 'express' | 'pickup' | 'same-day';
  label: string;
  description?: string;
  timeframe: string;
  cost: number;
  available: boolean;
}

export interface TabConfig {
  id: string;
  label: string;
  icon?: string;
  content: React.ReactNode;
}

export interface ProductGalleryProps {
  images: ProductImage[];
  badges?: ProductBadge[];
  productInfo?: {
    longWear?: string;
    coverage?: string;
  };
  onImageChange?: (imageId: string) => void;
}

export interface ProductInfoProps {
  product: Product;
  brandInfo?: BrandInfo;
  deliveryOptions?: DeliveryOption[];
  onAddToCart?: (quantity: number, variantId: string) => void;
  onAddToWishlist?: () => void;
  onShare?: () => void;
  onBuyNow?: () => void;
}

export interface ProductTabsProps {
  tabs: TabConfig[];
  defaultTab?: string;
}

export interface ReviewCardProps {
  review: Review;
  onHelpful?: (reviewId: string) => void;
}

export interface DeliveryOptionsProps {
  options: DeliveryOption[];
  onCheckLocations?: () => void;
}

export interface BrandCardProps {
  brand: BrandInfo;
  onShopBrand?: () => void;
}

export interface QuantitySelectorProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export interface ColorSelectorProps {
  variants: ProductVariant[];
  selectedId: string;
  onSelect: (variantId: string) => void;
}

export interface ProductDetailPageProps {
  product: Product;
  reviews?: Review[];
  reviewStats?: ReviewStats;
  brandInfo?: BrandInfo;
  deliveryOptions?: DeliveryOption[];
  onAddToCart?: (quantity: number, variantId: string) => void;
  onAddToWishlist?: () => void;
  onShare?: () => void;
  onBuyNow?: () => void;
}

// Apparel landing specific
export interface ApparelHeroProps {
  leftImage: string;
  rightImage: string;
  brandName: string;
  leftCta: { label: string; href: string };
  rightCta: { label: string; href: string };
}
