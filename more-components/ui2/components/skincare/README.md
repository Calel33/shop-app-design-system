# Skincare Component Domain

Production-ready React components for natural skincare landing pages, featuring the Auré Natural Skincare design system.

## Overview

This domain provides a complete, customizable skincare e-commerce landing page with:
- ✨ Sophisticated scroll animations with Intersection Observer
- 🛒 Full shopping cart functionality
- 🌙 Dark mode support with theme persistence
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ WCAG 2.1 AA accessibility compliant
- 🎨 Design token system integration
- ⚡ React 19 optimized with TypeScript 5

## Components

### Layout Components

#### `<SkincareLayout />`
Main orchestrator component that composes all sections.

```tsx
import { SkincareLayout } from '@/ui/components/skincare';

<SkincareLayout
  announcement={{ messages: ['Free shipping over $60'] }}
  header={{ brandName: 'Auré', navLinks: [...] }}
  hero={{ backgroundImage: '...', heading: '...', ... }}
  collections={{ collections: [...] }}
  products={{ title: '...', products: [...] }}
  philosophy={{ heading: '...', features: [...] }}
  footer={{ newsletter: {...}, sections: [...] }}
/>
```

### Section Components

#### `<SkincareAnnouncement />`
Top announcement bar with rotating messages (hidden on mobile).

```tsx
<SkincareAnnouncement
  messages={['Message 1', 'Message 2']}
/>
```

#### `<SkincareHeader />`
Sticky navigation with collections dropdown, cart, theme toggle.

```tsx
<SkincareHeader
  brandName="Auré"
  navLinks={[
    { label: 'Shop', href: '#shop' },
    { label: 'Collections', href: '#collections' }
  ]}
  collectionsMenu={collections}
  cartCount={3}
  onCartToggle={() => {}}
  onThemeToggle={() => {}}
/>
```

#### `<SkincareHero />`
Full-height hero section with parallax background effect.

```tsx
<SkincareHero
  backgroundImage="https://..."
  tagline="Botanical · Clinical · Kind"
  heading="Natural Skincare"
  description="Awaken your skin..."
  primaryCTA={{ label: 'Shop Now', href: '#shop' }}
  secondaryCTA={{ label: 'Learn More', href: '#about' }}
  parallax={true}
/>
```

#### `<SkincareTrustBar />`
Tagline section with inline product images.

```tsx
<SkincareTrustBar
  text={['Refresh your skin,', 'love yourself,']}
  inlineImages={[
    { src: '...', alt: '...', rotation: -6, position: 0 }
  ]}
/>
```

#### `<SkincareCollectionsGrid />`
Expandable collection cards that grow on hover.

```tsx
<SkincareCollectionsGrid
  title="Explore Collections"
  subtitle="Targeted routines for every skin goal"
  collections={[
    {
      id: '1',
      name: 'Hydrate & Restore',
      description: 'Moisture-rich serums',
      category: 'Essential Hydration',
      backgroundImage: '...'
    }
  ]}
/>
```

#### `<SkincareProductGrid />`
Featured products section with cards.

```tsx
<SkincareProductGrid
  title="Featured Products"
  subtitle="Thoughtful formulas"
  products={products}
  onAddToCart={(product) => {}}
/>
```

#### `<SkincareProductCard />`
Individual product card with ratings, badges, wishlist.

```tsx
<SkincareProductCard
  product={{
    id: '1',
    name: 'Barrier Repair Serum',
    description: 'Ceramides + Niacinamide',
    price: 42,
    image: '...',
    badge: 'New',
    rating: 4,
    reviewCount: 162
  }}
  onAddToCart={(product) => {}}
  onToggleWishlist={(id) => {}}
/>
```

#### `<SkincarePhilosophy />`
About section with background image overlay.

```tsx
<SkincarePhilosophy
  backgroundImage="..."
  heading="Our Philosophy"
  description="We believe skincare should be simple..."
  features={['Clinically proven', 'pH-balanced']}
  cta={{ label: 'Learn More', href: '#about' }}
/>
```

#### `<SkincareFooter />`
Multi-column footer with newsletter signup.

```tsx
<SkincareFooter
  newsletter={{
    title: 'Join Our Newsletter',
    subtitle: 'Get skincare tips',
    placeholder: 'Enter your email',
    onSubmit: (email) => {}
  }}
  sections={[
    { title: 'Shop', links: [...] }
  ]}
  socialLinks={socialIcons}
  paymentIcons={paymentIcons}
  copyright="© 2025 Auré"
/>
```

### Interactive Components

#### `<SkincareCart />`
Sliding cart drawer with quantity controls.

```tsx
<SkincareCart
  isOpen={true}
  items={cartItems}
  onClose={() => {}}
  onUpdateQuantity={(id, qty) => {}}
  onRemoveItem={(id) => {}}
  onCheckout={() => {}}
/>
```

#### `<SkincareToast />`
Toast notification for cart updates.

```tsx
<SkincareToast
  message="Product added to cart"
  type="success"
  duration={3000}
  onClose={() => {}}
/>
```

#### `<SkincareMobileMenu />`
Mobile drawer navigation menu.

```tsx
<SkincareMobileMenu
  isOpen={true}
  onClose={() => {}}
  navLinks={navLinks}
  onSearch={() => {}}
/>
```

#### `<SkincareCollectionsDropdown />`
Collections dropdown menu for desktop nav.

```tsx
<SkincareCollectionsDropdown
  collections={collections}
  isOpen={true}
  onClose={() => {}}
/>
```

## Custom Hooks

### `useCart()`
Shopping cart state management.

```tsx
const {
  items,
  isOpen,
  subtotal,
  itemCount,
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart
} = useCart();
```

### `useTheme()`
Dark mode management with localStorage persistence.

```tsx
const { theme, toggleTheme, setTheme } = useTheme();
```

### `useScrollAnimation(options)`
Intersection Observer-based scroll animations.

```tsx
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: true
});

<div ref={ref} className={isVisible ? 'animate' : ''}>
  Content
</div>
```

### `useParallax(options)`
Parallax effect for hero backgrounds.

```tsx
const { ref, style } = useParallax({
  intensity: 20,
  disabled: false
});

<div ref={ref} style={style}>
  Background
</div>
```

## Animation System

### CSS Classes

The components use a sophisticated animation system with:

- `fade-in` - Fade in with vertical slide
- `slide-left` - Slide in from left
- `slide-right` - Slide in from right
- `slide-up` - Slide up from bottom
- `scale-in` - Scale and fade in
- `blur-in` - Blur to focus transition
- `rotate-in` - Rotate and scale in

### Staggered Delays

Use `stagger-1` through `stagger-8` for sequential animations:

```tsx
<div className="animate-on-scroll fade-in stagger-1">First</div>
<div className="animate-on-scroll fade-in stagger-2">Second</div>
```

## TypeScript Types

All types are centralized in `ui/components/types/skincare.types.ts`:

```tsx
import type {
  SkincareLayoutProps,
  SkincareProduct,
  CartItem,
  UseCartReturn
} from '@/ui/components/skincare/types';
```

## Usage Example

```tsx
import { SkincareLayout } from '@/ui/components/skincare';
import { Facebook, Instagram } from 'lucide-react';

export default function MySkincareStore() {
  return (
    <SkincareLayout
      announcement={{
        messages: ['Free shipping', 'New arrivals']
      }}
      header={{
        brandName: 'Your Brand',
        navLinks: [
          { label: 'Shop', href: '#shop' },
          { label: 'About', href: '#about' }
        ],
        showUtilityIcons: true
      }}
      hero={{
        backgroundImage: '/hero.jpg',
        tagline: 'Natural · Effective · Kind',
        heading: 'Your Skincare Journey',
        description: 'Discover products that work',
        primaryCTA: { label: 'Shop Now', href: '#shop' },
        parallax: true
      }}
      collections={{
        collections: [/* collection data */]
      }}
      products={{
        title: 'Featured',
        subtitle: 'Our best sellers',
        products: [/* product data */]
      }}
      philosophy={{
        backgroundImage: '/about.jpg',
        heading: 'Our Story',
        description: 'Our mission...',
        features: ['Feature 1', 'Feature 2']
      }}
      footer={{
        newsletter: {
          title: 'Newsletter',
          subtitle: 'Stay updated',
          placeholder: 'Your email'
        },
        sections: [/* footer sections */],
        socialLinks: [
          { platform: 'Facebook', icon: <Facebook />, url: '#' }
        ],
        paymentIcons: [],
        copyright: '© 2025 Brand'
      }}
    />
  );
}
```

## Accessibility Features

✅ Semantic HTML5 elements  
✅ ARIA labels on all interactive elements  
✅ Keyboard navigation (Tab, Enter, Escape)  
✅ Focus visible states  
✅ WCAG 2.1 AA color contrast  
✅ Alt text on all images  
✅ Screen reader announcements  
✅ Proper heading hierarchy  

## Responsive Breakpoints

- **Mobile**: < 768px - Single column, hamburger menu
- **Tablet**: 768px - 1024px - 2-column grids
- **Desktop**: > 1024px - Full navigation, 3-column products

## Performance Optimizations

- Intersection Observer for scroll animations
- CSS transforms over position changes
- React 19 compiler optimizations
- Lazy loading images
- RequestAnimationFrame for parallax

## Design Token Integration

All colors, spacing, typography, shadows use design system tokens:

```tsx
// ❌ Hard-coded (don't do this)
<div className="bg-[#f5f5f5] px-[24px]" />

// ✅ Design tokens (correct)
<div className="bg-neutral-50 px-6" />
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## Dependencies

- React 19+
- TypeScript 5+
- Tailwind CSS 3+
- lucide-react (icons)

## Future Enhancements

- Product image gallery/zoom
- Product filtering and search
- Wishlist persistence
- User reviews/ratings UI
- Related products recommendations
- Multi-currency support
- Internationalization (i18n)
- Storybook integration

## License

Part of the project-components library.
