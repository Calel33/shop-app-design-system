# FAQ Section Component

A modern, animated FAQ section with interactive cards, category badges, and gradient borders. Perfect for displaying frequently asked questions in a visually engaging way.

## Features

- 🎨 **Beautiful Design**: Gradient borders, corner icons, and smooth animations
- 📱 **Responsive**: Adapts from 1 to 3 columns based on screen size
- ♿ **Accessible**: WCAG 2.1 AA compliant with keyboard navigation
- 🎭 **Animated**: Scroll-triggered reveal animations with staggered timing
- 🎯 **Interactive**: Hover effects, click handlers, and keyboard support
- 🏷️ **Category System**: Color-coded badges for easy organization
- ⚡ **Performance**: Intersection Observer for efficient animations
- 🌗 **Dark Mode**: Optimized for dark backgrounds

## Components

### FAQSection

Main container component that orchestrates all FAQ elements.

```tsx
import { FAQSection } from '@/ui/components/faq';

<FAQSection
  title="QUESTIONS"
  subtitle="ANSWERS"
  description="Get instant answers to common questions..."
  faqs={faqData}
  onReadMore={(id) => console.log(id)}
  onBrowseAll={() => navigate('/faqs')}
  onAskExperts={() => navigate('/contact')}
  showCTA={true}
  animateOnScroll={true}
/>
```

### FAQCard

Individual FAQ card with gradient border and corner icons.

```tsx
import { FAQCard } from '@/ui/components/faq';

<FAQCard
  faq={faqItem}
  onReadMore={(id) => handleRead(id)}
  animationDelay={0.1}
  animated={true}
/>
```

### FAQCategoryBadge

Color-coded category indicator.

```tsx
import { FAQCategoryBadge } from '@/ui/components/faq';

<FAQCategoryBadge
  category={{
    id: 'ai',
    name: 'AI Development',
    color: 'red',
    icon: 'bot'
  }}
  size="md"
/>
```

## Data Structure

```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featured?: boolean;
}

interface FAQCategory {
  id: string;
  name: string;
  color: 'red' | 'blue' | 'green' | 'purple' | 'orange' | 'emerald';
  icon: string;
}
```

## Usage Example

```tsx
import React from 'react';
import { FAQSection } from '@/ui/components/faq';
import type { FAQItem } from '@/ui/components/faq';

const faqs: FAQItem[] = [
  {
    id: '1',
    question: 'How do I get started?',
    answer: 'Simply sign up for an account and follow our onboarding guide.',
    category: {
      id: 'getting-started',
      name: 'Getting Started',
      color: 'blue',
      icon: 'rocket',
    },
  },
  // More FAQs...
];

function FAQPage() {
  const handleReadMore = (faqId: string) => {
    // Navigate to detail page or open modal
    router.push(`/faq/${faqId}`);
  };

  return (
    <FAQSection
      faqs={faqs}
      onReadMore={handleReadMore}
      onBrowseAll={() => router.push('/faqs')}
      onAskExperts={() => router.push('/contact')}
    />
  );
}
```

## Props

### FAQSectionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"QUESTIONS"` | Main title text |
| `subtitle` | `string` | `"ANSWERS"` | Subtitle with gradient effect |
| `description` | `string` | - | Hero description text |
| `faqs` | `FAQItem[]` | **required** | Array of FAQ items |
| `onReadMore` | `(id: string) => void` | - | Callback when "Read More" is clicked |
| `onBrowseAll` | `() => void` | - | Callback for "Browse All" button |
| `onAskExperts` | `() => void` | - | Callback for "Ask Experts" button |
| `showCTA` | `boolean` | `true` | Show CTA section |
| `animateOnScroll` | `boolean` | `true` | Enable scroll animations |

### FAQCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `faq` | `FAQItem` | **required** | FAQ data object |
| `onReadMore` | `(id: string) => void` | - | Read more callback |
| `animationDelay` | `number` | `0` | Animation delay in seconds |
| `animated` | `boolean` | `true` | Enable animation |

## Styling

The component uses Tailwind CSS and respects your design system tokens. Dark mode is supported automatically.

### Customizing Colors

Category colors are mapped to Tailwind classes:

```typescript
const categoryColors = {
  red: 'bg-red-500/10 border-red-500/20 text-red-400',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
  green: 'bg-green-500/10 border-green-500/20 text-green-400',
  // etc...
};
```

### Gradient Borders

Cards use CSS mask for gradient border effects:

```css
.gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 1px;
  background: linear-gradient(135deg, ...);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
```

## Accessibility

- Semantic HTML (`<section>`, `<article>`)
- Proper heading hierarchy
- ARIA labels for all interactive elements
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators on cards and buttons
- Screen reader friendly badges
- Reduced motion support via `prefers-reduced-motion`

## Animations

- **Fade In**: Cards fade in on scroll (Intersection Observer)
- **Staggered Timing**: Each card has a progressive delay (0.1s, 0.2s, etc.)
- **Hover Effects**: Lift and shadow on hover
- **Button Animations**: Arrow icons translate on hover
- **Performance**: Uses `transform` and `opacity` for GPU acceleration

## Responsive Behavior

| Breakpoint | Layout | Grid Columns |
|------------|--------|--------------|
| Mobile (<768px) | Single column | 1 |
| Tablet (768px-1024px) | Two columns | 2 |
| Desktop (>1024px) | Three columns | 3 |

Featured items can span 2 columns on tablet and 1 on desktop.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

Requires Intersection Observer API support (available in all modern browsers).

## Dependencies

- React 19+
- lucide-react (icons)
- Tailwind CSS 3+

## License

Part of the project-componets library.
