# FeatureGrid Component

A flexible, responsive feature grid component built with React 19, TypeScript, and Tailwind CSS. Perfect for showcasing product features, benefits, or services in a modern bento-style layout.

## Features

- 🎨 **Bento-style grid layout** with mixed card sizes (hero, standard, compact)
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- 🎯 **TypeScript** with complete type safety
- 🎨 **Tailwind CSS** styling with design system integration
- 🔄 **Flexible configuration** with props-based customization
- 🏷️ **Badge system** (new, featured, popular)
- 🖼️ **Image lazy loading** with gradient overlays
- 🎭 **Button variants** (primary, secondary, ghost)
- ♿ **Accessible** with semantic HTML and ARIA support

## Installation

The component is located in `ui/components/feature-grid/`. Make sure you have the required dependencies:

```bash
npm install lucide-react react react-dom
npm install -D tailwindcss typescript @types/react @types/react-dom
```

## Usage

### Basic Example

```tsx
import { FeatureGrid } from './ui/components/feature-grid';
import { FileText, Send } from 'lucide-react';

const features = [
  {
    id: '1',
    title: 'Launch experiments, not guesses',
    description: 'Submit unlimited test ideas and creative requests.',
    image: '/path/to/image.jpg',
    imageAlt: 'Feature image',
    size: 'hero',
    badge: { label: 'NEW', variant: 'new' },
    buttons: [
      { label: 'Learn more', icon: FileText, variant: 'secondary' },
      { label: 'Get started', icon: Send, variant: 'primary' }
    ]
  },
  // ... more features
];

<FeatureGrid
  sectionLabel="What you get"
  title="Features built for efficient growth"
  description="Our features help you scale with confidence."
  features={features}
  columns={3}
/>
```

## Props

### FeatureGridProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Main heading for the feature grid section |
| `features` | `FeatureItem[]` | Yes | - | Array of feature items to display |
| `sectionLabel` | `string` | No | - | Small label above the title |
| `description` | `string` | No | - | Description text below the title |
| `columns` | `2 \| 3 \| 4` | No | `3` | Number of columns in the grid |
| `className` | `string` | No | `''` | Additional CSS classes |

### FeatureItem

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier |
| `title` | `string` | Yes | Feature title |
| `description` | `string` | Yes | Feature description |
| `image` | `string` | Yes | Image URL |
| `imageAlt` | `string` | Yes | Image alt text |
| `size` | `'hero' \| 'standard' \| 'compact'` | No | Card size variant |
| `badge` | `{ label: string, variant?: 'new' \| 'featured' \| 'popular' }` | No | Badge configuration |
| `metadata` | `string` | No | Additional metadata text |
| `buttons` | `ButtonConfig[]` | No | Array of action buttons |
| `hasGradientOverlay` | `boolean` | No | Add gradient overlay to hero images |

### ButtonConfig

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Button text |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | Yes | Button style variant |
| `icon` | `LucideIcon` | No | Icon component from lucide-react |
| `onClick` | `() => void` | No | Click handler function |
| `href` | `string` | No | Link URL (renders as anchor tag) |

## Size Variants

- **`hero`**: Large card spanning 2 columns and 2 rows (on desktop), image displayed on top
- **`standard`**: Regular card, image displayed at bottom
- **`compact`**: Regular card, image displayed at bottom

## Badge Variants

- **`new`**: Emerald green badge
- **`featured`**: Blue badge
- **`popular`**: Purple badge

## Button Variants

- **`primary`**: Emerald background with black text
- **`secondary`**: Glass-morphism style with white text
- **`ghost`**: Text-only button

## Responsive Behavior

- **Mobile (< 768px)**: Single column layout
- **Tablet (768px - 1024px)**: 2-column layout
- **Desktop (> 1024px)**: Configurable columns (2, 3, or 4)

## Customization

### Colors

The component uses Tailwind CSS utility classes. Key colors:
- Borders: `border-white/10`
- Backgrounds: `bg-white/5`
- Text: `text-white/70`, `text-white/90`
- Accent: `bg-emerald-500`

To customize, modify the classes in `FeatureGrid.tsx` or use your design system tokens.

### Typography

The component uses the `font-geist` font family. Update your `tailwind.config.js`:

```js
fontFamily: {
  geist: ['Geist', 'sans-serif'],
}
```

## Accessibility

- Semantic HTML structure (section, h2, h3)
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigable buttons
- Sufficient color contrast

## Examples

See `USAGE_EXAMPLE.tsx` for a complete working example with sample data.

### FeaturesGridLayout (Bento/Uniform)

A simpler, token-compliant features grid extracted from the reference HTML (ideas/Features Grid Layout.html). Supports a bento-style first row and uniform grid variant.

```tsx
import { FeaturesGridLayout } from '@/ui/components/feature-grid';
import type { FeatureCardProps } from '@/ui/components/feature-grid';
import { Bolt, Shield, Bell, Globe, UserRound, BarChart } from 'lucide-react';

const features: FeatureCardProps[] = [
  { icon: <Bolt className="w-8 h-8" />, title: 'Always On', description: 'Reliable uptime 99.99% for all users.', iconColor: 'text-indigo-400' },
  { icon: <BarChart className="w-8 h-8" />, title: 'Advanced Analytics', description: 'Powerful insights help you understand your users…', variant: 'highlight', badge: 'New', iconColor: 'text-blue-400' },
  { icon: <Shield className="w-8 h-8" />, title: 'Secure Data', description: 'AES-256 encryption by default.', iconColor: 'text-red-400' },
  { icon: <Bell className="w-8 h-8" />, title: '24/7 Support', description: 'Always here for you.', iconColor: 'text-yellow-300' },
  { icon: <Shield className="w-8 h-8" />, title: 'Easy Integrations', description: 'Works with your tools.', iconColor: 'text-green-400' },
  { icon: <Globe className="w-8 h-8" />, title: 'Global Reach', description: 'Worldwide infrastructure.', iconColor: 'text-blue-300' },
  { icon: <UserRound className="w-8 h-8" />, title: 'User Friendly', description: 'Simple to get started.', iconColor: 'text-pink-300' },
];

export default function Demo() {
  return (
    <div className="py-12">
      <FeaturesGridLayout features={features} gridStyle="bento" />
    </div>
  );
}
```

## File Structure

```
feature-grid/
├── FeatureGrid.tsx         # Main component
├── FeaturesGridLayout.tsx  # Bento/uniform layout variant
├── FeatureCard.tsx         # Card primitive used by layout
├── types.ts                # TypeScript Interfaces
├── index.ts                # Exports
├── USAGE_EXAMPLE.tsx       # Example implementation
└── README.md               # Documentation
```

## Browser Support

Modern browsers with CSS Grid support:
- Chrome/Edge 88+
- Firefox 89+
- Safari 14+

## License

Part of the project-componets component library.
