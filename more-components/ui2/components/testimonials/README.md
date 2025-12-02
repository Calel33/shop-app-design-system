# Testimonials Components

A collection of responsive testimonials components with animated meteor effects and glassmorphic design.

## Features

- ✨ Animated meteor backgrounds with customizable timing
- 🎨 Glassmorphic card design with backdrop blur effects
- 📱 Fully responsive grid layout (1-4 columns)
- 🌙 Dark/light mode support using design system tokens
- 🖼️ Avatar support with automatic fallback to initials
- ♿ Accessible with proper ARIA labels and semantic HTML
- 🎯 TypeScript support with comprehensive type definitions

## Components

### TestimonialsGrid

Main container component that displays testimonials in a responsive grid.

```tsx
import { TestimonialsGrid } from '@/ui/components/testimonials';

const testimonials = [
  {
    id: '1',
    quote: 'Amazing product that transformed our business.',
    author: {
      name: 'John Doe',
      role: 'CEO',
      company: 'Tech Corp',
      avatar: '/path/to/avatar.jpg'
    }
  }
];

<TestimonialsGrid
  title="What Our Clients Say"
  description="Real feedback from real customers"
  testimonials={testimonials}
  columns={2}
  showMeteors={true}
/>
```

### TestimonialCard

Individual testimonial card with meteor animation support.

```tsx
import { TestimonialCard } from '@/ui/components/testimonials';

<TestimonialCard
  testimonial={testimonial}
  hasMeteor={true}
  meteorDelay={1}
/>
```

### MeteorBackground

Standalone meteor animation component for custom layouts.

```tsx
import { MeteorBackground } from '@/ui/components/testimonials';

<div className="relative">
  <MeteorBackground delay={2} />
  <div>Your content here</div>
</div>
```

## Props

### TestimonialsGridProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sectionLabel` | `string` | `'TESTIMONIALS'` | Small badge label above title |
| `title` | `string` | *required* | Main heading text |
| `description` | `string` | - | Optional description text |
| `testimonials` | `Testimonial[]` | *required* | Array of testimonial data |
| `columns` | `1 \| 2 \| 3 \| 4` | `2` | Grid column count |
| `showMeteors` | `boolean` | `true` | Enable/disable meteor animations |
| `className` | `string` | `''` | Additional CSS classes |

### Testimonial

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `quote` | `string` | Testimonial text |
| `author` | `TestimonialAuthor` | Author information |
| `hasMeteor` | `boolean` | Enable meteor for this card |
| `meteorDelay` | `number` | Animation delay in seconds |

### TestimonialAuthor

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Author's full name |
| `role` | `string` | Job title or position |
| `company` | `string` | Company name (optional) |
| `avatar` | `string` | Avatar image URL (optional) |
| `avatarAlt` | `string` | Alt text for avatar |

## Styling

The component uses design system tokens and supports both light and dark modes:

- **Dark Mode**: Default styling with `bg-gray-950` background
- **Light Mode**: Automatic adaptation with `.dark` class variants
- **Colors**: Uses `indigo` accent colors from the design system
- **Animation**: Smooth meteor effects with CSS keyframes

## Accessibility

- Uses semantic HTML (`blockquote`, `cite`, `footer`)
- Proper ARIA labels for images and interactive elements
- Keyboard navigation support
- Screen reader friendly structure
- High contrast ratios for text readability

## Animation Details

Meteor animations use CSS keyframes with:
- 5-second duration (4s on mobile)
- Linear timing function
- 215-degree rotation for diagonal trajectory
- Customizable delays for staggered effects
- Responsive width adjustments

## Browser Support

- Modern browsers with CSS Grid support
- CSS custom properties support required
- Backdrop-filter support for glassmorphic effects

## Examples

### Basic Usage

```tsx
const basicTestimonials = [
  {
    id: '1',
    quote: 'Great service and support!',
    author: {
      name: 'Jane Smith',
      role: 'Marketing Director'
    }
  }
];

<TestimonialsGrid
  title="Customer Feedback"
  testimonials={basicTestimonials}
/>
```

### With Custom Settings

```tsx
<TestimonialsGrid
  sectionLabel="REVIEWS"
  title="Why Clients Choose Us"
  description="Trusted by companies worldwide"
  testimonials={testimonials}
  columns={3}
  showMeteors={false}
  className="py-20"
/>
```

### Individual Card

```tsx
<TestimonialCard
  testimonial={{
    id: '1',
    quote: 'Exceptional quality and service.',
    author: {
      name: 'Alex Johnson',
      role: 'Product Manager',
      company: 'InnovateCorp'
    }
  }}
  hasMeteor={true}
  meteorDelay={1.5}
/>
```

## Testimonials Masonry Layout

The `TestimonialsMasonry` component provides a Pinterest-style masonry layout with responsive columns, staggered animations, and particle background effects.

### Features

- **Responsive Masonry Layout**: 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop+)
- **CSS Column-based Implementation**: Uses CSS columns with `break-inside: avoid` for optimal performance
- **Staggered Animations**: Sequential fade-up animation with customizable delays
- **Particle Background**: Interactive particle system with mouse repulsion effects
- **Card Variants**: Support for different testimonial card types and heights
- **Glassmorphism Effects**: Backdrop blur and transparent borders for modern aesthetics
- **Performance Optimized**: Respects `prefers-reduced-motion` and includes print styles

### Usage

```tsx
import { TestimonialsMasonry } from '@/ui/components/testimonials';

<TestimonialsMasonry
  title="Loved by teams worldwide"
  subtitle="We partner with forward-thinking companies to craft digital products."
  testimonials={testimonials}
  showParticles={true}
  showCTA={true}
  staggerAnimation={true}
/>
```

