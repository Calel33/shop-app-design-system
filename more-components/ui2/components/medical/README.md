# Medical Landing Page Components

## Overview

A modern, responsive medical healthcare landing page built with React 19, TypeScript, and Tailwind CSS. Features scroll-triggered animations, glass-effect styling, and a bento grid layout.

## Features

- ✅ **Fixed Navigation** with glass-effect backdrop blur
- ✅ **Hero Section** with certification badges and patient ratings
- ✅ **Bento Grid Layout** showcasing medical services
- ✅ **Patient Testimonials** with 5-star ratings
- ✅ **Emergency Services** information card
- ✅ **Technology Statistics** display
- ✅ **Call-to-Action** section for appointments
- ✅ **Scroll-triggered Animations** using Intersection Observer
- ✅ **Responsive Design** (mobile 375px, tablet 768px, desktop 1440px)
- ✅ **Accessibility** compliant (ARIA labels, semantic HTML)

## Installation

### Prerequisites

```bash
npm install lucide-react
# or
yarn add lucide-react
```

### Import Component

```tsx
import { MedicalLanding } from '@/componets/medical';
// or
import MedicalLanding from '@/componets/medical/MedicalLanding';
```

### Import CSS Animations

Make sure to import the CSS file in your main app or layout:

```tsx
import '@/componets/medical/medical-animations.css';
```

## Component Structure

```
alimonyapp/componets/medical/
├── MedicalLanding.tsx       # Main landing page component
├── MedicalLayout.tsx        # Reusable layout wrapper
├── Navigation.tsx           # Fixed navigation bar
├── HeroSection.tsx          # Hero with title and stats
├── BentoGrid.tsx            # Grid layout with cards
├── BentoCard.tsx            # Reusable card wrapper
├── CTASection.tsx           # Call-to-action section
├── hooks/
│   └── useScrollAnimation.ts # Scroll animation hook
├── medical-animations.css   # Custom animations
├── index.ts                 # Barrel exports
├── LAYOUT_EXAMPLES.tsx      # Layout usage examples
└── README.md                # This file

alimonyapp/componets/types/
└── medical.types.ts         # TypeScript definitions
```

## Usage

### Basic Usage

```tsx
import MedicalLanding from '@/componets/medical';

export default function Page() {
  return <MedicalLanding />;
}
```

### Using MedicalLayout (Recommended)

```tsx
import { MedicalLayout } from '@/componets/medical';

export default function AboutPage() {
  return (
    <MedicalLayout>
      <h1 className="text-4xl font-bold">About Our Medical Center</h1>
      <p className="mt-4 text-gray-600">
        Learn more about our world-class healthcare facility...
      </p>
    </MedicalLayout>
  );
}
```

### Individual Components

```tsx
import { Navigation, HeroSection, BentoGrid, CTASection } from '@/componets/medical';

export default function CustomLayout() {
  return (
    <div>
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 pt-20">
        <HeroSection />
        <BentoGrid />
        <CTASection />
      </main>
    </div>
  );
}
```

### Using the Scroll Animation Hook

```tsx
import { useScrollAnimation } from '@/componets/medical';

function MyComponent() {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={isVisible ? 'animate-fade-in' : 'opacity-0'}
    >
      Content appears when scrolled into view
    </div>
  );
}
```

## Component Props

### Navigation

```tsx
interface NavigationProps {
  className?: string;
}
```

### HeroSection

```tsx
interface HeroSectionProps {
  className?: string;
}
```

### BentoCard

```tsx
interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  animationDelay?: number; // in milliseconds (200, 400, 600, etc.)
  animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'scale-in';
}
```

### BentoGrid

```tsx
interface BentoGridProps {
  className?: string;
}
```

### CTASection

```tsx
interface CTASectionProps {
  className?: string;
}
```

### MedicalLayout

```tsx
interface MedicalLayoutProps {
  children: React.ReactNode;
  className?: string;
  background?: string;           // Tailwind gradient class
  maxWidth?: string;             // Tailwind max-width class
  showNavigation?: boolean;      // default: true
  navigationClassName?: string;  // Custom nav styles
  contentClassName?: string;     // Custom content styles
}
```

**Example:**
```tsx
<MedicalLayout
  background="gradient-to-br from-blue-50 to-white"
  maxWidth="max-w-6xl"
  showNavigation={true}
  contentClassName="py-32"
>
  <YourContent />
</MedicalLayout>
```

See `LAYOUT_EXAMPLES.tsx` for 10+ usage examples.

### useScrollAnimation Hook

```tsx
interface UseScrollAnimationOptions {
  threshold?: number;        // 0-1, default: 0.1
  rootMargin?: string;       // CSS margin, default: '0px 0px -50px 0px'
  triggerOnce?: boolean;     // default: true
}

// Returns
{
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
}
```

## Animation Classes

The following animation classes are available:

- `animate-fade-in` - Fade in with slight upward movement
- `animate-slide-up` - Slide up from below
- `animate-slide-left` - Slide in from right
- `animate-scale-in` - Scale up from 90%

### Animation Delays

- `animate-delay-200` - 0.2s delay
- `animate-delay-400` - 0.4s delay
- `animate-delay-600` - 0.6s delay
- `animate-delay-800` - 0.8s delay
- `animate-delay-1000` - 1s delay
- `animate-delay-1200` - 1.2s delay

## Customization

### Colors

The components use Tailwind CSS classes. To customize colors, update your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#your-color',
          700: '#your-color',
        },
      },
    },
  },
};
```

### Animations

Modify `medical-animations.css` to adjust animation timing and effects:

```css
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards; /* Change duration */
}
```

### Layout

The bento grid uses CSS Grid with responsive columns:

- Mobile: 2 columns
- Tablet (md): 4 columns
- Desktop (lg): 6 columns

Adjust in `BentoGrid.tsx`:

```tsx
className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
```

## Responsive Breakpoints

- **Mobile**: < 768px (2-column grid)
- **Tablet**: 768px - 1024px (4-column grid)
- **Desktop**: > 1024px (6-column grid)

## Accessibility

All components follow WCAG 2.1 AA standards:

- Semantic HTML elements (`<nav>`, `<main>`, `<section>`)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation support
- Focus states on interactive elements
- Sufficient color contrast ratios

## Performance

- **React.memo** not needed for these components (minimal re-renders)
- **Images** should be optimized with Next.js Image component in production
- **Intersection Observer** efficiently handles scroll animations
- **CSS animations** use GPU-accelerated properties (transform, opacity)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Testing

### Manual Testing Checklist

- [ ] Navigation is fixed at top on scroll
- [ ] All animations trigger when scrolling into view
- [ ] Hover effects work on cards
- [ ] Responsive layout on mobile (375px)
- [ ] Responsive layout on tablet (768px)
- [ ] Responsive layout on desktop (1440px)
- [ ] Images load properly
- [ ] Buttons are clickable
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility

### Test Commands

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build test
npm run build
```

## Troubleshooting

### Animations not working

1. Ensure `medical-animations.css` is imported
2. Check that elements have the correct animation classes
3. Verify Intersection Observer is supported in your browser

### Images not loading

1. Check image URLs are accessible
2. Consider using Next.js Image component for optimization
3. Add proper CORS headers if loading from external sources

### TypeScript errors

1. Ensure `lucide-react` is installed
2. Check that all imports are correct
3. Verify TypeScript version is 4.5+

## License

Part of the Medical Healthcare Website project.

## Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Last Updated**: 2025-09-29  
**Version**: 1.0.0  
**Maintainer**: Development Team
