# Restaurant Components

Authentic Italian restaurant landing page components featuring elegant typography, chef showcase, menu display, and reservation functionality.

## Overview

This domain provides production-ready components for restaurant landing pages with:
- Hero section with frosted glass navbar
- Chef team showcase with decorative grid
- Menu showcase with dish cards
- Feature grid (bento-style layout)
- Reservation form with validation
- Footer with integrated booking

## Components

### RestaurantHero
Hero section with inline images in headline, feature badges, and CTAs.

```tsx
import { RestaurantHero } from '@/ui/components/restaurant';

<RestaurantHero
  brandName="NONNA'S TABLE"
  headline="Benvenuti a [IMG:0] Nonna's Table, [IMG:1] where tradition meets taste"
  description="Four generations of authentic Italian recipes..."
  heroImages={[
    { src: '/pasta.jpg', alt: 'Fresh pasta' },
    { src: '/chef.jpg', alt: 'Italian chef' },
  ]}
  badges={[
    { icon: '<svg>...</svg>', label: 'Fresh Daily' },
    { icon: '<svg>...</svg>', label: 'Wood-fired Oven' },
  ]}
  primaryCTA={{ label: 'Book a table', href: '#contact' }}
  secondaryCTA={{ label: 'View menu', href: '#menu' }}
  navLinks={[
    { label: 'Menu', href: '#menu' },
    { label: 'Our Story', href: '#story' },
  ]}
/>
```

**Features:**
- Frosted glass navbar with responsive mobile menu
- Inline images in headline (use `[IMG:0]`, `[IMG:1]` placeholders)
- Feature badge system
- Dual CTA buttons
- Playfair Display font for elegance

### ChefTeamSection
Dark section with chef grid and decorative background elements.

```tsx
import { ChefTeamSection } from '@/ui/components/restaurant';

<ChefTeamSection
  title="Meet our culinary family."
  subtitle="Traditional Italian Experience"
  description="Experience the passion and tradition..."
  chefs={[
    {
      name: 'Marco Romano',
      role: 'Head Chef',
      image: '/chef1.jpg',
      icon: 'chef-hat',
    },
  ]}
  features={['Authentic Recipes', 'Fresh Ingredients', 'Warm Hospitality']}
  ctaText="Our Story"
  sectionCopy={{
    title: 'A legacy of flavor',
    description: 'From our famiglia to yours...',
  }}
  rightCopy="Our master chefs bring decades of expertise..."
/>
```

**Features:**
- 2x2 chef card grid
- Decorative background grid lines
- Icon variants: 'chef-hat', 'utensils', 'wheat', 'pizza'
- Hover scale effects on cards
- Feature markers with divider

### MenuShowcase
Three-column dish grid with hover effects.

```tsx
import { MenuShowcase } from '@/ui/components/restaurant';

<MenuShowcase
  title="Signature dishes we're passionate about."
  subtitle="(01) La Carta"
  dishes={[
    {
      name: 'Risotto alla Milanese',
      category: 'Primo',
      subcategory: 'Risotto',
      image: '/risotto.jpg',
    },
  ]}
  ctaText="View complete menu"
/>
```

**Features:**
- 3-column responsive grid
- Gradient overlay on hover
- Image zoom effects
- Category labels
- Centered bottom CTA

### FeatureGrid
Bento-style feature grid with mixed card sizes.

```tsx
import { FeatureGrid } from '@/ui/components/restaurant';

<FeatureGrid
  title="Authentic Italian dining experience"
  subtitle="What makes us special"
  features={[
    {
      title: 'Rooftop dining',
      description: 'Stunning 360-degree views...',
      image: '/rooftop.jpg',
      badge: 'ROOFTOP',
      badgeColor: 'amber',
      size: 'large',
      ctas: [
        { label: 'View menu', href: '#menu', variant: 'secondary' },
        { label: 'Reserve table', href: '#contact', variant: 'primary' },
      ],
    },
    {
      title: 'Wood-fired pizza',
      description: 'Authentic Neapolitan...',
      image: '/pizza.jpg',
      badge: 'TRADITIONAL',
      badgeColor: 'orange',
      size: 'small',
    },
  ]}
/>
```

**Features:**
- Large feature card (2x2 grid span) with CTAs
- Small feature cards (1x1 grid span)
- Badge color variants: amber, orange, purple, green, blue
- Hover scale and background color transitions
- Fade-in-up animations with staggered delays

### ReservationForm
Reservation form with party size, date/time, and special requests.

```tsx
import { ReservationForm } from '@/ui/components/restaurant';

<ReservationForm
  onSubmit={(data) => console.log(data)}
  phoneNumber="+1 (234) 567-8900"
  features={[
    'Tables for 2-12 guests available daily',
    'Private dining rooms for special occasions',
  ]}
/>
```

**Features:**
- Name, phone, party size, date/time inputs
- Special requests textarea
- Feature list with checkmarks
- Click-to-call phone link
- Form validation
- Animated "Now accepting reservations" badge

### RestaurantFooter
Footer with integrated reservation form and restaurant info.

```tsx
import { RestaurantFooter } from '@/ui/components/restaurant';

<RestaurantFooter
  brandName="Nonna's Table"
  description="Experience the warmth of Italian hospitality..."
  address="Via Roma 123, Milano"
  hours="Open daily 5:30 PM - 10:30 PM"
  phoneNumber="+1 (234) 567-8900"
  onReservationSubmit={(data) => console.log(data)}
/>
```

**Features:**
- Full-width dark section
- Integrated reservation form
- Brand info and description
- Address and hours display
- Copyright notice

## Utility Components

### RestaurantBadge
Reusable badge component for features.

```tsx
import { RestaurantBadge } from '@/ui/components/restaurant';

<RestaurantBadge
  item={{
    icon: '<svg>...</svg>',
    label: 'Fresh Daily',
  }}
/>
```

### ChefCard
Individual chef profile card.

```tsx
import { ChefCard } from '@/ui/components/restaurant';

<ChefCard
  name="Marco Romano"
  role="Head Chef"
  image="/chef.jpg"
  icon="chef-hat"
/>
```

### DishCard
Menu dish card with gradient overlay.

```tsx
import { DishCard } from '@/ui/components/restaurant';

<DishCard
  name="Risotto alla Milanese"
  category="Primo"
  subcategory="Risotto"
  image="/dish.jpg"
  onClick={() => console.log('Dish clicked')}
/>
```

### FeatureCard
Feature card for bento grid (small or large).

```tsx
import { FeatureCard } from '@/ui/components/restaurant';

<FeatureCard
  title="Rooftop dining"
  description="Stunning views..."
  image="/rooftop.jpg"
  badge="ROOFTOP"
  badgeColor="amber"
  size="large"
/>
```

## Typography

This domain uses **Playfair Display** font for headings and brand elements:
- Font weights: 400, 500, 600, 700, 900
- Applied via `font-playfair` Tailwind class
- Loaded via Google Fonts CDN
- Fallback: serif system fonts

## Design Tokens

All components use design system tokens:
- **Colors**: neutral-50, neutral-900, zinc-900, white
- **Radius**: rounded-xl, rounded-2xl, rounded-3xl, rounded-full
- **Shadows**: shadow-sm, shadow-lg, custom shadows
- **Spacing**: Standard Tailwind spacing scale

## Animations

### Fade-in-up
Components use `animate-fade-in-up` with staggered delays:
```tsx
className="opacity-0 animate-fade-in-up"
style={{ animationDelay: '0.2s' }}
```

Defined in tailwind.config.js:
```js
animation: {
  'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
}
```

## Accessibility

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Form labels properly associated
- Keyboard navigation support
- Focus visible states
- Alt text for all images
- Sufficient color contrast (WCAG 2.1 AA)

## Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Single-column cards on small screens
- 2-column chef grid on tablet+
- 3-column menu grid on desktop
- Bento grid adapts to viewport

## Usage Example

See `src/ItalianRestaurantDemo.tsx` for complete implementation.

## Integration Checklist

- [x] All components created
- [x] Types centralized
- [x] Design tokens used
- [x] Playfair Display font integrated
- [x] Responsive design implemented
- [x] Animations configured
- [x] Accessibility compliant
- [x] Demo file created
- [x] Documentation complete

## Dependencies

- React 19
- TypeScript 5
- Tailwind CSS 3
- Lucide React (icons)
- Playfair Display (Google Fonts)

## Files

```
ui/components/restaurant/
├── types.ts                    # Type re-exports
├── index.ts                    # Public API
├── README.md                   # This file
├── RestaurantHero.tsx          # Hero section
├── ChefTeamSection.tsx         # Chef showcase
├── ChefCard.tsx                # Chef profile card
├── MenuShowcase.tsx            # Menu section
├── DishCard.tsx                # Dish card
├── FeatureGrid.tsx             # Bento feature grid
├── FeatureCard.tsx             # Feature card
├── ReservationForm.tsx         # Booking form
├── RestaurantFooter.tsx        # Footer with form
└── RestaurantBadge.tsx         # Badge utility
```

## License

Part of project-components library. Follow project constitution guidelines.
