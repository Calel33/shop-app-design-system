# Portfolio Grid Components

## Overview

A modern, responsive portfolio grid component with masonry layout, hover effects, and gradient overlays. Built with React 19, TypeScript, and Tailwind CSS.

## Features

- ✅ **Masonry Grid Layout** with 3-column responsive design
- ✅ **Hover Scale Animation** on images (scale-105)
- ✅ **Gradient Overlays** on portfolio cards
- ✅ **Lucide React Icons** (ArrowUpRight, ArrowRight)
- ✅ **Design System Compliant** using design tokens
- ✅ **TypeScript** with full type safety
- ✅ **Responsive Design** (mobile → tablet → desktop)
- ✅ **Accessibility** compliant (ARIA labels, semantic HTML)
- ✅ **Lazy Loading** for images

## Installation

### Prerequisites

```bash
npm install lucide-react
# or
yarn add lucide-react
```

import { PortfolioGrid, PortfolioLayout } from '@/componets/portfolio';
// or
import PortfolioGrid from '@/componets/portfolio/PortfolioGrid';
import { PortfolioLayout } from '@/componets/portfolio/PortfolioLayout';

## Component Structure

alimonyapp/componets/
├── portfolio/
│   ├── PortfolioGrid.tsx          # Main container component
│   ├── PortfolioCard.tsx           # Individual portfolio card
│   ├── PortfolioHeader.tsx         # Section header
│   ├── PortfolioLayout.tsx         # Reusable layout wrapper
│   ├── types.ts                    # Type re-exports
│   ├── index.ts                    # Barrel export
│   ├── LAYOUT_EXAMPLES.tsx         # Layout usage examples
│   ├── README.md                   # This file
│   ├── INSTALLATION.md             # Setup instructions
│   └── USAGE_EXAMPLE.tsx           # Implementation example
└── types/
    └── portfolio.types.ts          # TypeScript type definitions

### Using PortfolioLayout (Recommended)

```tsx
import { PortfolioLayout, PortfolioGrid } from '@/componets/portfolio';

export default function PortfolioPage() {
  return (
    <PortfolioLayout>
      <PortfolioGrid
        columns={portfolioData.columns}
        title="My Portfolio"
        sectionLabel="(01) Projects"
      />
    </PortfolioLayout>
  );
}
```

### Layout with Header

```tsx
import { PortfolioLayout, PortfolioGrid } from '@/componets/portfolio';

export default function PortfolioPage() {
  return (
    <PortfolioLayout
      showHeader={true}
      headerContent={
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <nav className="flex gap-6">
            <a href="#work">Work</a>
            <a href="#about">About</a>
          </nav>
        </div>
      }
    >
      <PortfolioGrid
        columns={portfolioData.columns}
        title="Featured Projects"
      />
    </PortfolioLayout>
  );
}
```

### Individual Components

```tsx
import { PortfolioHeader, PortfolioCard } from '@/componets/portfolio';

{{ ... }}
export default function CustomLayout() {
  return (
    <div>
      <PortfolioHeader
        sectionLabel="(01) My Work"
        title="Featured Projects"
        ctaText="See More"
        ctaLink="/portfolio"
      />
      
      <PortfolioCard
        item={{
          id: '1',
          image: '/images/project.jpg',
          alt: 'Project description',
          category: 'Web • Design',
          title: 'Project Name',
          link: '/projects/1',
          height: 'h-64',
        }}
      />
    </div>
  );
}
```

## Component Props

### PortfolioGrid

```tsx
interface PortfolioGridProps {
  columns: PortfolioColumn[];        // Array of column data
  sectionLabel?: string;             // Optional section label (default: "(03) Selected Work")
  title: string;                     // Main heading
  subtitle?: string;                 // Optional subtitle
  ctaText?: string;                  // Header CTA text (default: "View Portfolio")
  ctaLink?: string;                  // Header CTA link (default: "#work")
  viewAllText?: string;              // Footer CTA text (default: "View All Work")
  viewAllLink?: string;              // Footer CTA link (default: "#work")
  className?: string;                // Additional CSS classes
}
```

### PortfolioCard

```tsx
interface PortfolioCardProps {
  item: PortfolioItem;               // Portfolio item data
  className?: string;                // Additional CSS classes
}

interface PortfolioItem {
  id: string;                        // Unique identifier
  image: string;                     // Image URL
  alt: string;                       // Image alt text
  category: string;                  // Category label (e.g., "SaaS • Product")
  title: string;                     // Project title
  link: string;                      // Project link
  height: PortfolioCardHeight;       // Card height variant
}

type PortfolioCardHeight = 'h-48' | 'h-56' | 'h-64' | 'h-72';
```

### PortfolioHeader

```tsx
interface PortfolioHeaderProps {
  sectionLabel?: string;             // Section label (default: "(03) Selected Work")
  title: string;                     // Main heading
  subtitle?: string;                 // Optional subtitle
  ctaText?: string;                  // CTA button text (default: "View Portfolio")
  ctaLink?: string;                  // CTA button link (default: "#work")
  className?: string;                // Additional CSS classes
}
```

## Data Structure Example

```tsx
const portfolioData = {
  columns: [
    {
      items: [
        {
          id: '1',
          image: 'https://example.com/image1.jpg',
          alt: 'Cloud Analytics dashboard project',
          category: 'SaaS • Product',
          title: 'Cloud Analytics',
          link: '#work',
          height: 'h-56',
        },
        {
          id: '2',
          image: 'https://example.com/image2.jpg',
          alt: 'E-commerce platform',
          category: 'E-commerce • Platform',
          title: 'Shop Pro',
          link: '#work',
          height: 'h-72',
        },
      ],
    },
    {
      items: [
        // Column 2 items
      ],
    },
    {
      items: [
        // Column 3 items
      ],
    },
  ],
};
```

## Customization

### Card Heights

Available height variants for masonry layout:
- `h-48` - 12rem (192px)
- `h-56` - 14rem (224px)
- `h-64` - 16rem (256px)
- `h-72` - 18rem (288px)

### Colors

The components use design system tokens. Customize in your Tailwind config:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: {
          200: '#e5e5e5',
          500: '#737373',
          700: '#404040',
          900: '#171717',
        },
      },
    },
  },
};
```

### Animations

Hover effects use Tailwind's built-in transitions:
- `transition-transform duration-500` - Image scale animation
- `group-hover:scale-105` - Scale on hover
- `hover:shadow` - Shadow on button hover

## Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet/Desktop**: ≥ 768px (3 columns)

Adjust breakpoints in `PortfolioGrid.tsx`:

```tsx
className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
```

## Accessibility

All components follow WCAG 2.1 AA standards:

- Semantic HTML elements (`<section>`, `<a>`, `<h3>`, `<h4>`)
- Proper heading hierarchy
- Alt text for all images
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on links and buttons
- Sufficient color contrast ratios

## Performance

- **Lazy Loading**: Images use `loading="lazy"` attribute
- **GPU Acceleration**: Animations use `transform` and `opacity`
- **Optimized Rendering**: Functional components with minimal re-renders
- **Image Optimization**: Consider using Next.js Image component in production

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## Testing

### Manual Testing Checklist

- [ ] Grid displays correctly on mobile (1 column)
- [ ] Grid displays correctly on desktop (3 columns)
- [ ] Hover effects work on cards
- [ ] Images scale on hover
- [ ] All links are clickable
- [ ] Images load with lazy loading
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Gradient overlays display correctly
- [ ] Icons render properly

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

### Images not loading

1. Check image URLs are accessible
2. Verify CORS headers if loading from external sources
3. Consider using Next.js Image component for optimization

### Hover effects not working

1. Ensure Tailwind CSS is properly configured
2. Check that `group` class is on parent element
3. Verify `group-hover:` variants are enabled in Tailwind config

### TypeScript errors

1. Ensure `lucide-react` is installed
2. Check that all imports are correct
3. Verify TypeScript version is 4.5+

### Layout issues

1. Verify Tailwind CSS is loaded
2. Check that parent container has proper width
3. Ensure responsive classes are correct

## Design System Compliance

This component uses design system tokens:
- **Colors**: neutral-50 through neutral-900, white
- **Typography**: text-xs, text-sm, text-base, text-lg, text-2xl, text-3xl
- **Spacing**: gap-4, gap-5, p-5, mt-2, mb-6, mb-8
- **Radius**: rounded-3xl, rounded-full
- **Shadows**: shadow-sm, hover:shadow
- **Transitions**: duration-500, transition-transform

## License

Part of the Portfolio Components project.

## Support

For issues or questions, please refer to the project documentation or contact the development team.

---

**Last Updated**: 2025-09-29  
**Version**: 1.0.0  
**Maintainer**: Development Team
