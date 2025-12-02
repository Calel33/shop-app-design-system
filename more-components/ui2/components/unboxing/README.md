# Unboxing Components

Premium product unboxing experience components for showcasing products with feature highlights, interactive elements, and professional layout.

## Overview

This domain provides components for creating high-end product unboxing experiences featuring:
- **Multi-column feature highlights** with background images
- **Premium brand presentation** with utility icons
- **Product cards** with badge notifications
- **Interactive CTAs** and hover effects
- **Responsive grid layouts** (3-column desktop, stacked mobile)

## Components

### `UnboxingLayout`
Main container orchestrating the complete unboxing experience layout.

```tsx
import { UnboxingLayout } from '@/ui/components/unboxing';
import { Share2, ShieldCheck, Wifi } from 'lucide-react';

<UnboxingLayout
  brandName="VisionPro"
  features={[
    {
      title: 'Crystal Clear Vision.',
      description: 'Professional-grade F1.4 aperture lens...',
      backgroundImage: 'https://example.com/camera.jpg',
    },
    {
      title: 'SmartMute Technology™',
      description: 'Intelligent capacitive touch sensor...',
      backgroundImage: 'https://example.com/cable.jpg',
    },
  ]}
  mainContent={{
    backgroundColor: 'bg-yellow-400',
    heading: 'Everything you need',
    headingHighlight: 'in the box.',
    description: 'Designed for creators...',
    utilityIcons: [
      { icon: <Share2 />, ariaLabel: 'Share', onClick: () => {} },
      { icon: <ShieldCheck />, ariaLabel: 'Shield', onClick: () => {} },
    ],
    productCard: {
      icon: <MonitorPlay />,
      badgeCount: 1,
      title: 'VisionPro Studio Suite',
      description: 'Exclusive access to...',
    },
  }}
  footer={{
    title: 'Premium Wrist Strap.',
    description: 'Hand-crafted leather strap...',
    features: [
      { icon: <Package />, label: 'Free shipping' },
      { icon: <Shield />, label: '2-year warranty' },
    ],
  }}
  ctaButton={{
    label: 'Get Started',
    onClick: () => console.log('CTA clicked'),
  }}
/>
```

**Props:**
- `brandName` (string, required) - Brand name displayed in header
- `brandLogo` (ReactNode, optional) - Custom logo (defaults to Video icon)
- `features` (UnboxingFeatureProps[], required) - Feature columns (2-3 recommended)
- `mainContent` (UnboxingMainContentProps, required) - Main content area config
- `footer` (UnboxingFooterProps, required) - Footer section config
- `ctaButton` (UnboxingCTAProps, optional) - Floating CTA button
- `className` (string, optional) - Additional CSS classes

**Features:**
- Responsive 3-column grid (stacks on mobile)
- Decorative background orbs
- Floating CTA button (bottom-right)
- Customizable brand colors

---

### `UnboxingFeatureColumn`
Individual feature column with background image and text overlay.

```tsx
import { UnboxingFeatureColumn } from '@/ui/components/unboxing';

<UnboxingFeatureColumn
  title="Crystal Clear Vision."
  description="Professional-grade F1.4 aperture lens..."
  backgroundImage="https://example.com/image.jpg"
  imageAlt="Camera feature"
/>
```

**Props:**
- `title` (string, required) - Feature heading (uppercase)
- `description` (string, required) - Feature description
- `backgroundImage` (string, required) - Background image URL
- `imageAlt` (string, optional) - Alt text for accessibility

**Features:**
- Responsive padding
- Border-right on desktop (removed on mobile)
- Min height 400px on mobile

---

### `UnboxingHeader`
Brand header with logo and utility icons.

```tsx
import { UnboxingHeader } from '@/ui/components/unboxing';
import { Share2, ShieldCheck, Wifi } from 'lucide-react';

<UnboxingHeader
  brandName="VisionPro"
  utilityIcons={[
    { icon: <Share2 />, ariaLabel: 'Share', onClick: handleShare },
    { icon: <ShieldCheck />, ariaLabel: 'Shield', onClick: handleShield },
    { icon: <Wifi />, ariaLabel: 'WiFi', onClick: handleWifi },
  ]}
/>
```

**Props:**
- `brandName` (string, required) - Brand name text
- `brandLogo` (ReactNode, optional) - Custom logo component
- `utilityIcons` (UnboxingIconProps[], optional) - Icon buttons array

**Features:**
- Hover effects on icon buttons (black/10 overlay)
- Responsive padding
- Flex layout with space-between

---

### `UnboxingProductCard`
Product showcase card with icon, badge notification, and description.

```tsx
import { UnboxingProductCard } from '@/ui/components/unboxing';
import { MonitorPlay } from 'lucide-react';

<UnboxingProductCard
  icon={<MonitorPlay className="w-6 h-6" />}
  badgeCount={1}
  badgeColor="bg-orange-500"
  title="VisionPro Studio Suite"
  description="Exclusive access to our professional editing suite..."
/>
```

**Props:**
- `icon` (ReactNode, required) - Card icon
- `badgeCount` (number, optional) - Notification badge number
- `badgeColor` (string, optional) - Badge background color (default: `bg-orange-500`)
- `title` (string, required) - Card title
- `description` (string, required) - Card description

**Features:**
- Badge notification system
- Dark rounded container (gray-900)
- Shadow effects
- Responsive sizing

---

### `UnboxingFooter`
Bottom section with product details and feature highlights.

```tsx
import { UnboxingFooter } from '@/ui/components/unboxing';
import { Package, Shield } from 'lucide-react';

<UnboxingFooter
  title="Premium Wrist Strap."
  description="Hand-crafted leather strap with magnetic clasp..."
  features={[
    { icon: <Package className="w-4 h-4" />, label: 'Free shipping worldwide' },
    { icon: <Shield className="w-4 h-4" />, label: '2-year warranty' },
  ]}
/>
```

**Props:**
- `title` (string, required) - Footer heading (uppercase)
- `description` (string, required) - Footer description
- `features` (UnboxingFooterFeatureProps[], required) - Feature list with icons

**Features:**
- Responsive flex layout (column on mobile, row on desktop)
- Bullet separators between features
- Light background (gray-50)

---

## Complete Example

```tsx
import React from 'react';
import { UnboxingLayout } from '@/ui/components/unboxing';
import { 
  Share2, 
  ShieldCheck, 
  Wifi, 
  MonitorPlay, 
  Package, 
  Shield 
} from 'lucide-react';

export const ProductUnboxing = () => {
  return (
    <div className="bg-gray-100 p-4 lg:p-8">
      <UnboxingLayout
        brandName="YourBrand"
        features={[
          {
            title: 'Feature One.',
            description: 'Amazing feature description...',
            backgroundImage: '/images/feature1.jpg',
            imageAlt: 'Feature one image',
          },
          {
            title: 'Feature Two.',
            description: 'Another great feature...',
            backgroundImage: '/images/feature2.jpg',
            imageAlt: 'Feature two image',
          },
        ]}
        mainContent={{
          backgroundColor: 'bg-yellow-400',
          heading: 'Your Heading',
          headingHighlight: 'with highlight',
          description: 'Your product description...',
          utilityIcons: [
            { 
              icon: <Share2 className="w-5 h-5" />, 
              ariaLabel: 'Share',
              onClick: () => navigator.share({ title: 'Product' })
            },
            { 
              icon: <ShieldCheck className="w-5 h-5" />, 
              ariaLabel: 'Verified',
              onClick: () => console.log('Verified')
            },
          ],
          productCard: {
            icon: <MonitorPlay className="w-6 h-6" />,
            badgeCount: 3,
            badgeColor: 'bg-blue-500',
            title: 'Your Product Suite',
            description: 'Product features and benefits...',
          },
        }}
        footer={{
          title: 'Premium Accessory.',
          description: 'High-quality accessory description...',
          features: [
            { icon: <Package className="w-4 h-4" />, label: 'Free shipping' },
            { icon: <Shield className="w-4 h-4" />, label: 'Warranty' },
          ],
        }}
        ctaButton={{
          label: 'Buy Now',
          onClick: () => window.location.href = '/checkout',
        }}
      />
    </div>
  );
};
```

## Styling

### Brand Colors

Use Tailwind color classes or custom colors:
```tsx
mainContent={{
  backgroundColor: 'bg-yellow-400',  // Default VisionPro yellow
  // Or custom: 'bg-blue-500', 'bg-purple-600', etc.
}}
```

### Background Images

Provide high-quality images (recommended 2160px width):
```tsx
features={[
  {
    backgroundImage: 'https://images.unsplash.com/photo-xxx?w=2160&q=80',
    // Or local: '/images/product-feature.jpg'
  }
]}
```

### Icons

Use Lucide React icons (already installed):
```tsx
import { Video, Camera, Wifi, Shield } from 'lucide-react';

// Size icons appropriately:
<Video className="w-5 h-5" />  // Utility icons
<MonitorPlay className="w-6 h-6 lg:w-7 lg:h-7" />  // Product card
```

## Accessibility

- ✅ Semantic HTML (`<main>`, `<section>`, `<button>`)
- ✅ ARIA labels for all interactive elements
- ✅ Alt text for background images (via `aria-label`)
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ Color contrast meets WCAG 2.1 AA

## Responsive Behavior

### Mobile (< 768px)
- Single column stack
- Features display vertically
- CTA button remains fixed bottom-right
- Reduced padding and font sizes

### Tablet (768px - 1024px)
- Transitional layout
- Border adjustments
- Medium padding

### Desktop (> 1024px)
- 3-column grid layout
- Full padding and spacing
- Optimal text sizes

## Performance

- Lazy load background images using browser native lazy loading
- Optimize images before use (WebP format recommended)
- Component uses React.memo where beneficial
- Minimal re-renders with proper prop structure

## TypeScript

All components are fully typed with centralized definitions in `ui/components/types/unboxing.types.ts`.

```tsx
import type {
  UnboxingLayoutProps,
  UnboxingFeatureProps,
  UnboxingMainContentProps,
  UnboxingProductCardProps,
  UnboxingFooterProps,
  UnboxingCTAProps,
  UnboxingIconProps,
} from '@/ui/components/unboxing';
```

## Demo

See `src/UnboxingDemo.tsx` for a complete working example with sample data.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Use Cases

Perfect for:
- Product launch pages
- E-commerce unboxing experiences
- Premium product showcases
- Tech product presentations
- Subscription box reveals
- Hardware product pages

## Customization Tips

1. **Change Brand Colors:** Update `backgroundColor` prop
2. **Custom Icons:** Use any React icon library
3. **Different Layouts:** Adjust number of feature columns (2-3 works best)
4. **Badge Styles:** Customize `badgeColor` for different themes
5. **Remove CTA:** Omit `ctaButton` prop if not needed
6. **Custom Logo:** Provide `brandLogo` ReactNode

## Related Components

- **Interactive Studio** - For 3D interactive experiences
- **Payment** - For checkout and payment flows
- **Feature Grid** - For simpler feature showcases
