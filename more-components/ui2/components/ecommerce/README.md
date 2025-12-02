# E-Commerce Product Detail Components

Production-ready React components for displaying product detail pages with image galleries, variant selection, reviews, and checkout functionality.

## Components

### ProductDetailPage
Main container component that orchestrates the entire product detail page experience.

**Features:**
- Responsive product gallery with zoom
- Product information with pricing and variants
- Quantity selection
- Add to cart/wishlist/share functionality
- Tabbed content sections (Details, Ingredients, Reviews, How to Use)
- Brand information card
- Delivery options
- Breadcrumb navigation

**Usage:**
```tsx
import { ProductDetailPage } from '@/ui/components/ecommerce';
import type { Product, Review, ReviewStats, BrandInfo, DeliveryOption } from '@/ui/components/ecommerce';

const product: Product = {
  id: '1',
  name: 'Product Name',
  brand: 'Brand Name',
  description: 'Product description',
  price: 23,
  originalPrice: 26,
  rating: 4.6,
  reviewCount: 8247,
  images: [...],
  variants: [...],
  features: [...],
  stock: { inStock: true },
};

<ProductDetailPage
  product={product}
  reviews={reviews}
  reviewStats={reviewStats}
  brandInfo={brandInfo}
  deliveryOptions={deliveryOptions}
  onAddToCart={(quantity, variantId) => console.log('Add to cart', quantity, variantId)}
  onAddToWishlist={() => console.log('Add to wishlist')}
  onShare={() => console.log('Share')}
  onBuyNow={() => console.log('Buy now')}
/>
```

### ProductGallery
Image gallery component with thumbnail navigation and zoom functionality.

**Props:**
- `images` - Array of product images with URLs and thumbnails
- `badges` - Optional product badges (bestseller, new, etc.)
- `productInfo` - Optional display info (coverage, long-wear, etc.)
- `onImageChange` - Callback when image changes

**Usage:**
```tsx
import { ProductGallery } from '@/ui/components/ecommerce';

<ProductGallery
  images={product.images}
  badges={[{ label: 'Bestseller', type: 'bestseller' }]}
  productInfo={{
    coverage: 'Buildable Coverage',
    longWear: '12 hours',
  }}
  onImageChange={(imageId) => console.log('Image changed', imageId)}
/>
```

### ProductInfo
Product details, pricing, variant selection, and purchase actions.

**Props:**
- `product` - Product data
- `brandInfo` - Brand information
- `deliveryOptions` - Available delivery methods
- `onAddToCart`, `onAddToWishlist`, `onShare`, `onBuyNow` - Action callbacks

**Features:**
- Star rating display
- Pricing with discounts
- Variant/color selection
- Quantity selector
- Stock status
- Key features list
- Action buttons (Add to cart, Wishlist, Share)

### ProductTabs
Tabbed content sections for product details, ingredients, reviews, and usage instructions.

**Props:**
- `tabs` - Array of tab configurations with content
- `defaultTab` - Initially active tab ID

**Usage:**
```tsx
import { ProductTabs } from '@/ui/components/ecommerce';

const tabs = [
  {
    id: 'overview',
    label: 'Details',
    icon: 'info',
    content: <div>Product details content</div>,
  },
  {
    id: 'reviews',
    label: 'Reviews',
    icon: 'star',
    content: <div>Reviews content</div>,
  },
];

<ProductTabs tabs={tabs} defaultTab="overview" />
```

### ReviewCard
Individual customer review display.

**Props:**
- `review` - Review data (author, rating, content, etc.)
- `onHelpful` - Callback when "helpful" button clicked

**Features:**
- Star rating
- Verified purchase badge
- User metadata (skin type, age range)
- Helpful votes

### ColorSelector
Variant/shade selection with visual feedback.

**Props:**
- `variants` - Array of product variants
- `selectedId` - Currently selected variant ID
- `onSelect` - Selection callback

### QuantitySelector
Increment/decrement quantity control.

**Props:**
- `value` - Current quantity
- `min`, `max` - Min/max bounds
- `onChange` - Change callback
- `disabled` - Disabled state

### BrandCard
Brand information display with rating and badges.

**Props:**
- `brand` - Brand data (name, rating, badges)
- `onShopBrand` - Callback for "Shop Brand" button

### DeliveryOptions
Delivery and pickup options display.

**Props:**
- `options` - Array of delivery options
- `onCheckLocations` - Callback for location check

## Type Definitions

All TypeScript types are exported from `ui/components/types/ecommerce.types.ts`:

```tsx
import type {
  Product,
  ProductImage,
  ProductVariant,
  Review,
  ReviewStats,
  BrandInfo,
  DeliveryOption,
  // ... and more
} from '@/ui/components/ecommerce';
```

## Design Features

- **Animations**: Fade-in, slide-up, and blur-in animations for smooth page load
- **Responsive**: Mobile-first design with tablet and desktop layouts
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- **Design System**: Uses project design tokens for colors, spacing, and typography
- **Glassmorphism**: Backdrop blur effects for modern UI elements
- **Hover Effects**: Smooth transitions and transform effects

## Styling

Components use Tailwind CSS with design system tokens:
- Colors from design system
- Consistent spacing scale
- Typography from design tokens
- Border radius and shadows from tokens

**Custom Animations:**
The components use three main animations defined in `src/animations.css`:
- `fadeIn` - Simple opacity fade
- `slideInUp` - Slide up with fade
- `blurIn` - Blur to clear with fade

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- Backdrop filter support for glassmorphism
- ES2020+ JavaScript features

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for all images
- Sufficient color contrast (4.5:1 minimum)
- Screen reader friendly

## Performance Optimizations

- Lazy loading for images
- React 19 automatic optimizations
- Minimal re-renders
- Smooth CSS transitions
- Optimized animations

## Integration Checklist

- [x] All dependent systems updated
- [x] Types defined and exported
- [x] Documentation complete
- [x] Examples provided
- [x] Design system tokens used
- [x] No hard-coded styles
- [x] Responsive design
- [x] Accessibility compliant
- [x] TypeScript type safety
- [x] React 19 patterns

## Examples

See `src/EcommerceProductDemo.tsx` for a complete working example with sample data.

## Related Components

- Uses Lucide icons for consistent iconography
- Compatible with all project components
- Follows vertical slice architecture
- Maintains design system compliance
