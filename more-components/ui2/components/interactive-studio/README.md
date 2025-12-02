# Interactive Studio Components

3D Interactive Design Studio UI components featuring glassmorphism, Spline 3D backgrounds, and modern hero sections.

## Overview

This domain provides components for creating immersive, interactive landing pages with:
- **3D Spline backgrounds** with reactive orb animations
- **Glassmorphism UI** with backdrop blur and transparency effects
- **Floating navigation** with glass effect
- **Hero sections** optimized for showcasing 3D content
- **Technology badges** and CTA buttons

## Components

### `SplineBackground`
3D background iframe wrapper with loading states and fallback gradients.

```tsx
import { SplineBackground } from '@/ui/components/interactive-studio';

<SplineBackground 
  splineUrl="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs/"
  fallbackGradient="bg-gradient-to-br from-black via-gray-900 to-black"
/>
```

**Props:**
- `splineUrl` (string, required) - URL to the Spline 3D scene
- `fallbackGradient` (string, optional) - Tailwind gradient classes for fallback
- `className` (string, optional) - Additional CSS classes

**Features:**
- Lazy loading with loading spinner
- Error handling with gradient fallback
- Full-screen fixed positioning

---

### `FloatingNavbar`
Glass-effect floating navigation bar with logo, links, and CTAs.

```tsx
import { FloatingNavbar } from '@/ui/components/interactive-studio';

<FloatingNavbar
  logo={<YourLogoSVG />}
  brandName="InteractiveLab"
  links={[
    { label: 'Portfolio', href: '#portfolio' },
    { label: '3D Design', href: '#design' },
  ]}
  authLinks={[
    { label: 'Login', href: '#login', variant: 'text' },
  ]}
  ctaButton={{
    label: 'Start Project',
    href: '#start',
  }}
/>
```

**Props:**
- `logo` (React.ReactNode, required) - Logo icon or image
- `brandName` (string, required) - Brand name text
- `links` (NavLink[], required) - Navigation links
- `authLinks` (AuthLink[], optional) - Authentication links
- `ctaButton` (CTAButton, optional) - Call-to-action button

**Features:**
- Fixed top-center positioning
- Responsive (hides links on mobile)
- Glass effect with backdrop blur
- Rounded-full design

---

### `InteractiveStudioHero`
Hero section with title, description, CTAs, and technology badges.

```tsx
import { InteractiveStudioHero } from '@/ui/components/interactive-studio';

<InteractiveStudioHero
  badge="Interactive Design Studio"
  title="Reactive"
  highlightedTitle="Dimensional Experiences"
  description="We create immersive digital worlds..."
  primaryCTA={{
    label: 'Explore Interactive Demo',
    href: '#demo',
  }}
  secondaryCTA={{
    label: 'View Portfolio',
    href: '#portfolio',
  }}
  technologies={['WebGL', 'Three.js', 'Spline', 'GSAP']}
/>
```

**Props:**
- `badge` (string, optional) - Top badge label
- `title` (string, required) - Main heading text
- `highlightedTitle` (string, optional) - Secondary heading (dimmed)
- `description` (string, required) - Hero description
- `primaryCTA` (CTAButton, required) - Primary call-to-action
- `secondaryCTA` (CTAButton, optional) - Secondary call-to-action
- `technologies` (string[], required) - Technology badges

**Features:**
- Two-column grid (content left, empty right for 3D)
- Responsive single-column on mobile
- Typography scaling for headings
- Technology badge grid

---

### `GlassButton`
Reusable button with solid or glass variants.

```tsx
import { GlassButton } from '@/ui/components/interactive-studio';

<GlassButton variant="solid" size="lg" href="#demo">
  Explore Demo
</GlassButton>

<GlassButton variant="glass" size="md" onClick={handleClick}>
  View More
</GlassButton>
```

**Props:**
- `children` (React.ReactNode, required) - Button content
- `variant` ('solid' | 'glass', optional) - Visual style
- `size` ('sm' | 'md' | 'lg', optional) - Button size
- `onClick` (function, optional) - Click handler
- `href` (string, optional) - Link URL (renders as anchor)
- `className` (string, optional) - Additional CSS classes

**Variants:**
- **solid**: White background, black text, shadow effects
- **glass**: Transparent with backdrop blur, border, hover opacity

---

### `GlassBadge`
Small pill-shaped badge with glass effect.

```tsx
import { GlassBadge } from '@/ui/components/interactive-studio';

<GlassBadge variant="subtle">WebGL</GlassBadge>
<GlassBadge variant="medium">Three.js</GlassBadge>
```

**Props:**
- `children` (React.ReactNode, required) - Badge content
- `variant` ('subtle' | 'medium' | 'strong', optional) - Glass intensity
- `className` (string, optional) - Additional CSS classes

**Variants:**
- **subtle**: 5% opacity, sm blur
- **medium**: 10% opacity, md blur
- **strong**: 20% opacity, lg blur

---

### `GlassCard`
Reusable glassmorphism card container.

```tsx
import { GlassCard } from '@/ui/components/interactive-studio';

<GlassCard variant="medium" className="p-6 rounded-2xl">
  <h3>Card Title</h3>
  <p>Card content...</p>
</GlassCard>
```

**Props:**
- `children` (React.ReactNode, required) - Card content
- `variant` ('subtle' | 'medium' | 'strong', optional) - Glass intensity
- `className` (string, optional) - Additional CSS classes

---

## Complete Example

```tsx
import React from 'react';
import {
  InteractiveStudioHero,
  FloatingNavbar,
  SplineBackground,
} from '@/ui/components/interactive-studio';

export const MyLandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <SplineBackground 
        splineUrl="https://my.spline.design/your-scene/" 
      />
      
      <FloatingNavbar
        logo={<svg>...</svg>}
        brandName="Your Brand"
        links={[
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'About', href: '#about' },
        ]}
        ctaButton={{ label: 'Get Started', href: '#start' }}
      />
      
      <InteractiveStudioHero
        badge="Design Studio"
        title="Your"
        highlightedTitle="Creative Vision"
        description="Transform ideas into reality..."
        primaryCTA={{ label: 'Explore', href: '#explore' }}
        technologies={['React', 'Three.js', 'WebGL']}
      />
    </div>
  );
};
```

## Styling

All components use:
- **Tailwind CSS** for styling
- **Design system tokens** (no hard-coded values)
- **Glassmorphism** with backdrop-blur utilities
- **Responsive breakpoints** (mobile-first)

## Accessibility

- ✅ Semantic HTML (`nav`, `main`, `section`, `h1`)
- ✅ ARIA labels for navigation
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ Color contrast meets WCAG 2.1 AA
- ✅ Alt text for iframe (3D background)

## Performance

- Lazy loading for Spline iframe
- Loading states with spinners
- Error boundaries with fallback gradients
- Optimized component rendering

## TypeScript

All components are fully typed with centralized type definitions in `ui/components/types/interactive-studio.types.ts`.

## Demo

See `src/InteractiveStudioDemo.tsx` for a complete working example.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Spline 3D requires WebGL support. Fallback gradients display if WebGL is unavailable.
