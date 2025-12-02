# Bubble Childcare Landing Page Components

A complete, modern childcare landing page built with React 19, TypeScript, and Tailwind CSS. Features glass-effect navigation, video hover effects, and a fully responsive design.

## 🎯 Overview

The Bubble Childcare landing page is a comprehensive component library designed for childcare centers, preschools, and early education facilities. It includes all essential sections for a professional childcare website.

## ✨ Features

- **Fixed Glass-Effect Header** - Backdrop blur navigation with mobile menu
- **Video Hover Hero** - Interactive hero section with video on hover/focus
- **Feature Highlights** - 4-card grid showcasing key benefits
- **Programs Section** - Detailed program cards with hover effects
- **Promise & Stats** - Trust-building section with metrics
- **Testimonials** - Parent stories in card format
- **Visit CTA** - Form submission with validation
- **Footer** - Comprehensive footer with links and social media

## 🎨 Design System

### Colors
- Primary: Black (#000000)
- Background: neutral-50 (#fafafa)
- Overlays: black/5, black/10, black/70, black/80, black/90
- Borders: black/10
- Text: black, black/80, black/70, black/60

### Typography
- Font Family: Nunito (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800
- Sizes: text-xs to text-7xl

### Effects
- Backdrop blur: backdrop-blur, backdrop-blur-xl
- Shadows: shadow-sm, shadow-xl, custom shadow
- Transitions: transition, duration-500
- Hover: hover:scale-[1.03], hover:bg-black/5, hover:bg-black/90

## 📦 Components

### Core Components

1. **BubbleLanding** - Main container component
2. **BubbleHeader** - Fixed navigation with glass effect
3. **BubbleHero** - Hero section with video hover
4. **FeatureHighlights** - Feature cards grid
5. **ProgramsSection** - Programs with image cards
6. **PromiseSection** - Promise with stats
7. **TestimonialsSection** - Parent testimonials
8. **VisitCTA** - Visit request form
9. **BubbleFooter** - Footer with links

## 🚀 Quick Start

```tsx
import { BubbleLanding } from './alimonyapp/componets/childcare';
import { Baby, GraduationCap, Shield, HeartHandshake } from 'lucide-react';

const App = () => {
  const landingData = {
    header: {
      logoUrl: 'https://example.com/logo.png',
      navLinks: [
        { label: 'Home', href: '#' },
        { label: 'Programs', href: '#programs' },
        { label: 'About', href: '#about' },
        { label: 'Stories', href: '#stories' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    hero: {
      backgroundImage: 'https://example.com/hero.jpg',
      backgroundVideo: 'https://example.com/hero.mp4',
      title: 'Warm, Trusted Care for Growing Minds',
      description: 'At Bubble, we create a calm, joyful place where children feel safe to explore.',
    },
    features: [
      {
        icon: <Baby className="h-5 w-5" />,
        title: 'Small Group Care',
        description: 'Intentional ratios so every child is seen, heard, and supported daily.',
      },
      // ... more features
    ],
    // ... rest of the data
  };

  return <BubbleLanding {...landingData} />;
};
```

## 📖 Documentation

- [Installation Guide](./INSTALLATION.md) - Setup instructions
- [Usage Examples](./USAGE_EXAMPLE.tsx) - Complete implementation examples
- [Layout Examples](./LAYOUT_EXAMPLES.tsx) - Different layout variations

## 🎯 Props Reference

### BubbleLandingProps

```typescript
interface BubbleLandingProps {
  header: BubbleHeaderProps;
  hero: BubbleHeroProps;
  features: FeatureCardProps[];
  programs: ProgramsSectionProps;
  promise: PromiseSectionProps;
  testimonials: TestimonialsSectionProps;
  visitCTA: VisitCTAProps;
  footer: BubbleFooterProps;
  className?: string;
}
```

See [types.ts](./types.ts) for complete type definitions.

## 🎨 Customization

### Custom Colors

The component uses Tailwind CSS classes. Customize by modifying your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
};
```

### Custom Fonts

Add Nunito font to your project:

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

Or install via npm:

```bash
npm install @fontsource/nunito
```

## ♿ Accessibility

- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus states on all focusable elements
- Alt text for all images
- Form labels and error messages
- Mobile menu aria-expanded state

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Mobile hamburger menu
- Responsive grid layouts
- Touch-friendly interactive elements

## 🧪 Testing Checklist

- [ ] Component renders without errors
- [ ] Mobile menu toggle works
- [ ] Video hover effect (play/pause)
- [ ] All hover effects work
- [ ] Form validation and submission
- [ ] Responsive behavior (mobile, tablet, desktop)
- [ ] Image loading and optimization
- [ ] TypeScript types are correct
- [ ] Accessibility (keyboard navigation, screen readers)
- [ ] Smooth scroll to sections
- [ ] All icons render correctly
- [ ] Glass-effect backdrop blur on header

## 🔧 Dependencies

- React 18.3.1+
- TypeScript 5.2.2+
- Tailwind CSS 3.4.1+
- lucide-react 0.344.0+

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please follow the existing code style and component patterns.

## 📞 Support

For issues or questions, please open an issue on the repository.
