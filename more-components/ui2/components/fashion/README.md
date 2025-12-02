# Fashion Studio Landing Page

Production-ready React components for a luxury fashion studio landing page featuring glassmorphism, scroll animations, and masonry layouts.

## Components

### FashionLanding
Main container component that orchestrates the entire landing page.

```tsx
import { FashionLanding } from '@/ui/components/fashion';

<FashionLanding
  collections={collectionItems}
  timeline={timelineSteps}
  team={teamMembers}
  testimonials={clientTestimonials}
  services={serviceOfferings}
  onBookConsultation={() => console.log('Book consultation')}
  onExploreCollections={() => console.log('Explore collections')}
/>
```

### FloatingNav
Glassmorphic sticky navigation bar with mobile menu support.

```tsx
<FloatingNav
  links={[
    { label: 'Collections', href: '#collections' },
    { label: 'Studio', href: '#studio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ]}
/>
```

### FashionHero
Full-screen hero section with animated elements and gradient text.

```tsx
<FashionHero
  onExplore={() => navigate('/collections')}
  onBookConsultation={() => navigate('/book')}
/>
```

### StatsSection
Animated counter statistics with scroll-triggered animations.

```tsx
<StatsSection
  stats={[
    { value: 500, label: 'Happy Clients', suffix: '+' },
    { value: 15, label: 'Years Experience' },
    { value: 98, label: 'Satisfaction %', suffix: '%' },
  ]}
/>
```

### AboutStudio
Two-column layout with text content and hoverable image.

```tsx
<AboutStudio
  imageUrl="/images/studio.jpg"
  onLearnMore={() => navigate('/about')}
/>
```

### CollectionGrid
Responsive masonry grid layout for collection items.

```tsx
<CollectionGrid
  items={[
    {
      id: '1',
      title: 'Midnight Garden',
      category: 'Evening Collection',
      description: 'Flowing silhouettes in midnight silk',
      imageUrl: '/images/collection-1.jpg',
      featured: true,
      height: 480,
    },
    // ... more items
  ]}
/>
```

### TimelineSection
Animated process timeline with progress indicator.

```tsx
<TimelineSection
  steps={[
    {
      id: '1',
      number: '01',
      title: 'Initial Consultation',
      description: 'We begin with a detailed conversation...',
      duration: '60-90 minutes',
    },
    // ... more steps
  ]}
/>
```

### ServiceCards
Interactive service offering cards with hover effects.

```tsx
<ServiceCards
  services={[
    {
      id: '1',
      title: 'Personal Styling',
      description: 'Transform your wardrobe...',
      features: ['Wardrobe audit', 'Style guide', 'Shopping tips'],
      price: '$399',
      priceNote: '/ 2 hour session',
      badge: 'Popular',
      popular: false,
    },
    // ... more services
  ]}
  onBookService={(id) => console.log('Book service:', id)}
/>
```

### TeamSection
Grid layout showcasing team members with images.

```tsx
<TeamSection
  team={[
    {
      id: '1',
      name: 'Sophia Laurent',
      role: 'Creative Director',
      description: 'Leading our design vision...',
      imageUrl: '/images/team-1.jpg',
    },
    // ... more members
  ]}
/>
```

### TestimonialGrid
Client testimonial cards with hover animations.

```tsx
<TestimonialGrid
  testimonials={[
    {
      id: '1',
      quote: 'The experience was truly exceptional...',
      author: 'Sarah Williams',
      role: 'Bride & CEO',
      avatar: '/images/client-1.jpg',
    },
    // ... more testimonials
  ]}
/>
```

### CTASection
Newsletter subscription section with glassmorphism.

```tsx
<CTASection
  backgroundImage="/images/cta-bg.jpg"
  onSubscribe={(email) => console.log('Subscribe:', email)}
/>
```

## Features

### Design Elements
- **Glassmorphism**: Backdrop blur with translucent backgrounds
- **Gradient Text**: Smooth color transitions on headings
- **Masonry Layout**: CSS columns-based responsive grid
- **Hover Effects**: Lift, scale, and rotate animations
- **Floating Elements**: Animated decorative blobs

### Animations
- **Scroll Reveal**: Fade in + translate Y on scroll into view
- **Counter Animation**: Smooth count-up for statistics (2s duration)
- **Timeline Progress**: Animated line grows from 0% to 100%
- **Floating**: Gentle up/down motion (6s infinite)
- **Staggered Delays**: Sequential reveals for multiple elements

### Responsive Design
- **Mobile (<768px)**: Single column, simplified navigation
- **Tablet (768px-1024px)**: Two-column grids
- **Desktop (>1024px)**: Three-column grids, full timeline

### Accessibility
- Semantic HTML structure (header, main, section, footer)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Sufficient color contrast (4.5:1 minimum)

## Type Definitions

All TypeScript interfaces are defined in `ui/components/types/fashion.types.ts`:

- `FashionLandingProps`: Main component props
- `CollectionItem`: Collection grid item
- `TimelineStep`: Process timeline step
- `TeamMember`: Team member card
- `Testimonial`: Client testimonial
- `ServiceOffering`: Service card
- `StatsCounter`: Statistic counter
- `FloatingNavProps`: Navigation props
- `FashionHeroProps`: Hero section props

## Styling

Uses Tailwind CSS utility classes with custom design tokens:
- Colors: slate palette (50-900)
- Fonts: Inter (body), serif (headings)
- Spacing: Standard Tailwind scale
- Shadows: Subtle elevation system
- Borders: Rounded corners (xl, 2xl, 3xl)

### Custom Animations

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## Performance Optimizations

- Lazy loading images with loading="lazy"
- IntersectionObserver for scroll animations
- CSS transforms for GPU acceleration
- Debounced scroll listeners
- Image loading states with placeholders
- Reduced motion support

## Installation

```bash
# Install peer dependencies
npm install react react-dom lucide-react
```

## Usage Example

```tsx
import { FashionLanding } from '@/ui/components/fashion';

const mockData = {
  collections: [...],
  timeline: [...],
  team: [...],
  testimonials: [...],
  services: [...],
};

function App() {
  return (
    <FashionLanding
      {...mockData}
      onBookConsultation={() => {
        // Handle booking
      }}
      onExploreCollections={() => {
        // Handle navigation
      }}
    />
  );
}
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with CSS backdrop-filter support

## Related Components

- `ui/components/footer`: Dark footer with contact form
- `ui/components/testimonials`: Alternative testimonial layouts
- `ui/components/portfolio`: Portfolio showcase variants

## License

Part of the project-componets library.
