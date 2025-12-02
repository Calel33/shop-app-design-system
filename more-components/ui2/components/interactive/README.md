# Interactive Components

Expandable cards and interactive selectors for engaging user experiences with smooth animations and responsive layouts.

## Components

### ExperienceSelector

Container component that displays a set of expandable camping experience cards with smooth transitions and click handling.

**Features:**
- ✅ Smooth flex-grow animations (cubic-bezier easing)
- ✅ Background images with gradient overlays
- ✅ Glassmorphic icon circles
- ✅ Staggered entrance animations (180ms delay)
- ✅ Click to expand/collapse with transitions
- ✅ Responsive layout (hides cards on smaller screens)
- ✅ Optional heading and subheading
- ✅ Callback on selection

### ExperienceCard

Individual expandable card component with background image, icon, title, and subtitle.

**Features:**
- ✅ Smooth expansion animation (800ms cubic-bezier)
- ✅ Background size/position transitions
- ✅ Label opacity/transform on expand
- ✅ Glassmorphic icon with border highlight
- ✅ Gradient shadow overlay
- ✅ Slide-fade entrance animation

## Installation

The components are part of the `ui/components/interactive` module.

```tsx
import { ExperienceSelector } from '@/ui/components/interactive';
import type { CampingExperienceProps } from '@/ui/components/interactive';
```

## Usage

### Basic Example

```tsx
import { ExperienceSelector } from '@/ui/components/interactive';
import { Tent, Flame, Waves, Sparkles, Mountain } from 'lucide-react';

const experiences = [
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    icon: <Tent />,
    title: 'Luxury Tent',
    subtitle: 'Cozy glamping under the stars',
    defaultActive: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
    icon: <Flame />,
    title: 'Campfire Feast',
    subtitle: "Gourmet s'mores & stories",
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    icon: <Waves />,
    title: 'Lakeside Retreat',
    subtitle: 'Private dock & canoe rides',
  },
  {
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
    icon: <Sparkles />,
    title: 'Mountain Spa',
    subtitle: 'Outdoor sauna & hot tub',
  },
  {
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    icon: <Mountain />,
    title: 'Guided Adventure',
    subtitle: 'Expert-led nature tours',
  },
];

function App() {
  return (
    <ExperienceSelector
      experiences={experiences}
      heading="Escape in Style"
      subheading="Discover luxurious camping experiences in nature's most breathtaking spots."
      onSelect={(index) => console.log('Selected:', index)}
    />
  );
}
```

### With Custom Icons

```tsx
import { ExperienceSelector } from '@/ui/components/interactive';

const experiences = [
  {
    image: '/images/tent.jpg',
    icon: <svg>...</svg>, // Custom SVG icon
    title: 'Custom Experience',
    subtitle: 'Your own adventure',
  },
];

<ExperienceSelector experiences={experiences} />
```

### Without Heading

```tsx
<ExperienceSelector
  experiences={experiences}
  onSelect={(index) => {
    // Handle selection
    console.log('User selected experience:', index);
  }}
/>
```

### Standalone Card

```tsx
import { ExperienceCard } from '@/ui/components/interactive';
import { Tent } from 'lucide-react';

<ExperienceCard
  image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  icon={<Tent />}
  title="Luxury Tent"
  subtitle="Cozy glamping under the stars"
  isActive={true}
  onClick={() => console.log('Card clicked')}
  animationDelay={0}
/>
```

## Props

### ExperienceSelectorProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `experiences` | `CampingExperienceProps[]` | **required** | Array of camping experiences to display |
| `onSelect` | `(index: number) => void` | `undefined` | Callback when an experience is selected |
| `className` | `string` | `''` | Optional CSS class name |
| `heading` | `string` | `undefined` | Optional heading text |
| `subheading` | `string` | `undefined` | Optional subheading text |

### CampingExperienceProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | **required** | Background image URL for the card |
| `icon` | `ReactNode` | **required** | Icon element (Lucide React icon or custom) |
| `title` | `string` | **required** | Main title of the experience |
| `subtitle` | `string` | **required** | Subtitle or description |
| `defaultActive` | `boolean` | `false` | Whether this card should be active by default |

### ExperienceCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `image` | `string` | **required** | Background image URL |
| `icon` | `ReactNode` | **required** | Icon element |
| `title` | `string` | **required** | Card title |
| `subtitle` | `string` | **required** | Card subtitle |
| `isActive` | `boolean` | **required** | Whether this card is currently active/expanded |
| `onClick` | `() => void` | **required** | Click handler for the card |
| `animationDelay` | `number` | **required** | Animation delay for entrance animation (in ms) |

## Animations

### Entrance Animation
- **Type**: Slide-fade from left
- **Duration**: 700ms
- **Easing**: cubic-bezier(0.23, 1, 0.32, 1)
- **Stagger**: 180ms between cards

### Expansion Animation
- **Type**: Flex-grow with background size/position
- **Duration**: 800ms
- **Easing**: cubic-bezier(0.23, 1, 0.32, 1)
- **Active flex-grow**: 7
- **Inactive flex-grow**: 1

### Label Animation
- **Type**: Opacity + translateX
- **Duration**: 800ms
- **Easing**: cubic-bezier(0.23, 1, 0.32, 1)
- **Inactive state**: opacity 0, translateX(25px)
- **Active state**: opacity 1, translateX(0)

## Responsive Behavior

The component automatically hides cards on smaller screens:

- **< 900px**: Hides 5th card (4 cards visible)
- **< 820px**: Hides 4th card (3 cards visible)
- **< 740px**: Hides 3rd card (2 cards visible)
- **< 660px**: Hides 2nd card (1 card visible)

## Styling

### Design Tokens Used

- **Background**: `#222` (dark gray)
- **Card border (inactive)**: `#292929`
- **Card border (active)**: `white`
- **Icon background**: `rgba(32, 32, 32, 0.85)` with backdrop-blur
- **Icon border (inactive)**: `#444`
- **Icon border (active)**: `white`
- **Text**: `white` (title), `gray-300` (subtitle)
- **Shadows**: 
  - Inactive: `0 10px 30px rgba(0,0,0,0.3)`
  - Active: `0 20px 60px rgba(0,0,0,0.5)`

### Custom Styling

You can customize the appearance by passing a `className` prop:

```tsx
<ExperienceSelector
  experiences={experiences}
  className="bg-gradient-to-br from-purple-900 to-blue-900"
/>
```

## Accessibility

- **Keyboard Navigation**: Cards are clickable and focusable
- **Semantic HTML**: Uses proper div structure with ARIA-friendly patterns
- **Visual Feedback**: Clear active state with border and shadow changes
- **Contrast**: High contrast text on dark backgrounds

## Performance

- **Will-change**: Applied to animated properties for GPU acceleration
- **Backface-visibility**: Hidden to prevent flickering
- **Transition optimization**: Uses transform and opacity for smooth 60fps animations
- **Staggered loading**: Prevents layout shift with entrance animations

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Requires support for CSS backdrop-filter for glassmorphic effects.

## Examples

See `src/CampingExperienceDemo.tsx` for a complete working example.

## Related Components

- **Feature Grid** - Grid-based feature showcases
- **Background Components** - Animated backgrounds and effects
- **Web3 Components** - Hero sections with grid backgrounds

## Integration Notes

This component follows the project's design system principles:
- Uses Tailwind CSS utilities
- Type-safe with TypeScript
- Responsive and accessible
- Performance-optimized animations
- Clean, maintainable code structure

## Troubleshooting

### Cards not animating on entrance
- Ensure the component is mounted in the DOM
- Check that JavaScript is enabled
- Verify animation delays are being applied

### Images not loading
- Verify image URLs are accessible
- Check CORS settings for external images
- Use proper image formats (jpg, png, webp)

### Layout issues on mobile
- Ensure parent container has proper width constraints
- Check viewport meta tag in HTML
- Verify responsive breakpoints match your design

## License

Part of the project-componets library. See main project LICENSE for details.
