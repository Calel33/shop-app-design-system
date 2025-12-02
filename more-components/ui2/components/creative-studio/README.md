# Creative Studio Landing Page Components

A comprehensive creative studio landing page component suite built with React, TypeScript, and Tailwind CSS. Features a modern design with 3D background integration, smooth animations, and responsive layouts.

## Components

### Core Components

- **`CreativeStudioLanding`** - Main landing page composition
- **`CreativeStudioHero`** - Hero section with three-column layout  
- **`SplineBackground`** - 3D background integration with graceful fallback
- **`ProjectCard`** - Reusable project showcase card with hover effects
- **`TeamCollage`** - Team photo collage display component
- **`ProcessSteps`** - Creative process section with numbered steps
- **`TestimonialsCarousel`** - Interactive testimonials slider with navigation
- **`PricingTiers`** - Pricing packages display with billing toggle
- **`CreativeStudioFooter`** - Footer with social links and contact info

## Features

✅ **3D Background Integration** - Spline iframe with fallback gradient  
✅ **Responsive Design** - Mobile, tablet, and desktop optimized  
✅ **Smooth Animations** - Intersection Observer scroll animations  
✅ **Interactive Elements** - Testimonials carousel, pricing toggles  
✅ **Design System Integration** - Uses project design tokens  
✅ **TypeScript Support** - Fully typed with comprehensive interfaces  
✅ **Accessibility** - WCAG 2.1 AA compliant  
✅ **Performance Optimized** - Lazy loading and error boundaries  

## Installation

```bash
npm install
```

## Usage

### Basic Implementation

```tsx
import { CreativeStudioLanding } from '@/ui/components/creative-studio';

export default function Page() {
  return <CreativeStudioLanding />;
}
```

### Individual Components

```tsx
import { 
  CreativeStudioHero,
  ProjectCard,
  TestimonialsCarousel,
  PricingTiers 
} from '@/ui/components/creative-studio';

// Hero section
<CreativeStudioHero 
  title={{
    line1: "CREATIVE DESIGN",
    line2: "VISUAL STUDIO"  
  }}
  projectCount={200}
  teamCount={25}
/>

// Project showcase
<ProjectCard
  title="Brand Identity"
  description="Complete visual identity for tech startup"
  image="/project-image.jpg"
  category="Visual Identity"
  onClick={() => console.log('Project clicked')}
/>

// Testimonials
<TestimonialsCarousel
  testimonials={testimonialData}
  title="Creative partnerships that inspire"
/>

// Pricing
<PricingTiers
  title="Creative Services Packages"
  tiers={pricingData}
  billingToggle={{
    monthly: "Monthly",
    yearly: "Yearly", 
    savings: "Save 20% annually"
  }}
/>
```

### 3D Background Integration

```tsx
import { SplineBackground } from '@/ui/components/creative-studio';

// Custom Spline scene
<SplineBackground 
  src="https://my.spline.design/your-scene-id"
  className="fixed inset-0 -z-10"
  fallbackClassName="bg-gradient-to-br from-background to-muted"
/>
```

## Component Props

### CreativeStudioLanding

```tsx
interface CreativeStudioLandingProps {
  className?: string;
}
```

### CreativeStudioHero

```tsx
interface CreativeStudioHeroProps {
  title?: {
    line1: string;
    line2: string;
  };
  subtitle?: string;
  projectCount?: number;
  teamCount?: number;
  className?: string;
}
```

### ProjectCard

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  className?: string;
  onClick?: () => void;
}
```

### TestimonialsCarousel

```tsx
interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  className?: string;
}

interface Testimonial {
  quote: string;
  author: string;
  avatar: string;
  nextName: string;
  nextAvatar: string;
}
```

### PricingTiers

```tsx
interface PricingTiersProps {
  title: string;
  subtitle?: string;
  tiers: PricingTier[];
  billingToggle?: {
    monthly: string;
    yearly: string;
    savings?: string;
  };
  className?: string;
}
```

## Design System Integration

The components use design system tokens from `design-system/design.md`:

- **Colors**: `hsl(var(--foreground))`, `hsl(var(--background))`, etc.
- **Spacing**: Consistent spacing units via Tailwind
- **Typography**: Font scales and weights from design system
- **Borders**: Standard border radius tokens
- **Shadows**: Elevation system for depth

### Color Mapping

Original coral colors are mapped to design system tokens:
- `coral-50` → `hsl(var(--accent))/10` 
- `coral-500` → `hsl(var(--accent))`
- `coral-600` → `hsl(var(--accent))/90`

## Animations

Scroll-triggered animations using Intersection Observer:

- **fade-in-up** - Element slides up and fades in
- **fade-in-left** - Element slides from left and fades in  
- **fade-in-right** - Element slides from right and fades in
- **stagger-{n}** - Delayed animations for grid items

Animations respect `prefers-reduced-motion` accessibility preference.

## Browser Support

- **Modern Browsers**: Chrome 91+, Firefox 90+, Safari 14+, Edge 91+
- **Responsive**: Mobile-first responsive design
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for Lighthouse scores

## Dependencies

- **React** 18+
- **TypeScript** 5+
- **Tailwind CSS** 3+
- **Lucide React** (icons)
- **Design System** tokens

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build

# Type checking
npm run type-check
```

## Integration Examples

### With Next.js App Router

```tsx
// app/page.tsx
import { CreativeStudioLanding } from '@/ui/components/creative-studio';

export default function HomePage() {
  return (
    <main>
      <CreativeStudioLanding />
    </main>
  );
}
```

### With Custom Data

```tsx
import { PricingTiers, TestimonialsCarousel } from '@/ui/components/creative-studio';
import { customPricingData, customTestimonials } from '@/data';

export default function CustomPage() {
  return (
    <div>
      <TestimonialsCarousel 
        testimonials={customTestimonials}
        title="Client Success Stories"
      />
      <PricingTiers 
        title="Our Packages"
        tiers={customPricingData}
      />
    </div>
  );
}
```

## Accessibility Features

- **Semantic HTML** structure with proper headings
- **ARIA labels** for interactive elements  
- **Keyboard navigation** support for carousel and buttons
- **Focus management** with visible focus indicators
- **Alt text** for all images
- **Color contrast** compliance  
- **Screen reader** friendly content structure

## Performance Optimizations

- **Lazy loading** for images and heavy components
- **Error boundaries** for 3D background integration
- **Intersection Observer** for efficient scroll animations
- **Code splitting** compatible component structure
- **Optimized images** with proper sizing and formats

## Troubleshooting

### Spline Background Issues

If the 3D background doesn't load:
1. Check the Spline URL is accessible
2. Verify CORS settings for the Spline scene
3. The component will show a gradient fallback automatically

### Animation Performance

For better animation performance:
1. Enable hardware acceleration in browser
2. Reduce motion in accessibility settings is respected
3. Use `will-change` CSS property sparingly

### TypeScript Errors

Ensure all prop interfaces are properly imported:

```tsx
import type { 
  CreativeStudioLandingProps,
  ProjectCardProps 
} from '@/ui/components/creative-studio/types';
```

## Contributing

1. Follow the existing code patterns and TypeScript interfaces
2. Maintain responsive design principles  
3. Test accessibility features
4. Update documentation for new props or components
5. Ensure design system token usage

## License

Part of the project-components library. See main project license.