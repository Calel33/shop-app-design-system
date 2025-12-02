# Product Feature Tabs Component

A sophisticated React component for displaying product features with interactive tabs, animated network diagrams, and comprehensive product information.

## Features

- **Tab Navigation**: Switch between Technology, Technical Specs, and Certifications
- **Animated Network Diagram**: Interactive nodes with hover effects and animations
- **Counter Animations**: Smooth animated counters for ratings and statistics
- **Responsive Design**: Adapts beautifully to all screen sizes
- **TypeScript Support**: Fully typed with comprehensive interfaces
- **Design System Compliant**: Uses design tokens from the project's design system

## Components

### ProductFeatureTabs
Main container component that orchestrates all features.

```tsx
import { ProductFeatureTabs } from '@/ui/components/product/ProductFeatureTabs';

<ProductFeatureTabs
  tabs={tabs}
  specs={specs}
  certifications={certifications}
  rating={4.8}
  totalReviews="22k+"
  recommendPercent={94}
  backgroundImage="https://example.com/image.jpg"
/>
```

### DiagramWithNodes
Animated network visualization with interactive nodes.

```tsx
import { DiagramWithNodes } from '@/ui/components/product/DiagramWithNodes';

<DiagramWithNodes
  nodes={nodes}
  backgroundImage="https://example.com/image.jpg"
/>
```

### SpecList
Technical specifications list with hover effects.

```tsx
import { SpecList } from '@/ui/components/product/SpecList';

<SpecList
  specs={[
    { label: 'Spectral Range', value: '380-780 nm' },
    { label: 'Accuracy', value: '±0.03 ΔE*ab' }
  ]}
/>
```

### CertificationGrid
Grid of certification badges.

```tsx
import { CertificationGrid } from '@/ui/components/product/CertificationGrid';

<CertificationGrid
  certifications={[
    { title: 'ISO 11664', subtitle: 'Colorimetry Standards' },
    { title: 'CIE Standard', subtitle: 'Illuminant D65' }
  ]}
/>
```

## Props

### ProductFeatureTabsProps

| Prop | Type | Description |
|------|------|-------------|
| `tabs` | `TabItem[]` | Array of tab objects with id, label, and content |
| `specs` | `SpecItem[]` | Technical specifications list |
| `certifications` | `CertificationBadge[]` | Certification badges array |
| `rating` | `number` | Product rating (0-5) |
| `totalReviews` | `string` | Number of reviews text |
| `recommendPercent` | `number` | Recommendation percentage |
| `diagramNodes` | `DiagramNode[]` | Optional custom nodes for diagram |
| `backgroundImage` | `string` | Optional background image URL |
| `className` | `string` | Additional CSS classes |

### TabItem

```tsx
interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}
```

### SpecItem

```tsx
interface SpecItem {
  label: string;
  value: string;
}
```

### CertificationBadge

```tsx
interface CertificationBadge {
  title: string;
  subtitle: string;
}
```

### DiagramNode

```tsx
interface DiagramNode {
  id: string;
  position: 'left' | 'right' | 'top' | 'bottom';
  icon?: React.ReactNode;
  text?: string;
  value?: string;
  label: string;
}
```

## Hooks

### useCounterAnimation

Custom hook for animating number counters with easing.

```tsx
import { useCounterAnimation } from '@/ui/hooks/useCounterAnimation';

const { count } = useCounterAnimation({
  end: 4.8,
  duration: 2000,
  decimals: 1
});
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `end` | `number` | - | Target value |
| `duration` | `number` | `2000` | Animation duration in ms |
| `start` | `number` | `0` | Starting value |
| `decimals` | `number` | `0` | Decimal places |
| `prefix` | `string` | `''` | Text prefix |
| `suffix` | `string` | `''` | Text suffix |

## Examples

### Basic Usage

```tsx
import { ProductFeatureTabs } from '@/ui/components/product/ProductFeatureTabs';

const App = () => {
  const tabs = [
    {
      id: 'technology',
      label: 'Technology',
      content: <div>Your technology content here</div>
    },
    {
      id: 'specs',
      label: 'Technical Specs',
      content: <div>Your specs content here</div>
    }
  ];

  return (
    <ProductFeatureTabs
      tabs={tabs}
      specs={[
        { label: 'Spectral Range', value: '380-780 nm' },
        { label: 'Accuracy', value: '±0.03 ΔE*ab' }
      ]}
      certifications={[
        { title: 'ISO 11664', subtitle: 'Colorimetry Standards' }
      ]}
      rating={4.8}
      totalReviews="22k+"
      recommendPercent={94}
    />
  );
};
```

### Custom Diagram Nodes

```tsx
import { Target, Shield } from 'lucide-react';

const customNodes = [
  {
    id: 'precision',
    position: 'left' as const,
    icon: <Target className="w-6 h-6" />,
    label: '1.5 mm Precision'
  },
  {
    id: 'spectral',
    position: 'right' as const,
    value: '45',
    label: 'Spectral bands'
  }
];

<ProductFeatureTabs
  // ... other props
  diagramNodes={customNodes}
/>
```

## Styling

The component uses Tailwind CSS classes and follows the project's design system:

- Colors from design tokens (emerald, cyan for primary actions)
- Responsive grid layouts
- Hover states and transitions
- Dark mode support

## Dependencies

- React 18+
- Lucide React (for icons)
- TypeScript (for type safety)

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- High contrast ratios for text
