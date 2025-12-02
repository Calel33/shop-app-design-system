# Background Components

**Domain:** Interactive Backgrounds & Cursor Effects  
**Status:** ✅ Production Ready  
**Version:** 1.0.0

## Overview

The Background component library provides animated grid backgrounds, smooth cursor-following glow effects, and interactive buttons with rotating border animations. Designed for modern landing pages with dark themes and glassmorphic UI elements.

## Components

### 1. AnimatedGridBackground

Interactive grid background that reveals cells on hover with smooth transitions.

**Features:**
- Configurable grid layout (responsive: 4 cols → 2 cols → 1 col)
- Hover reveal animation
- GPU-accelerated transforms
- Customizable colors and cell count

**Props:**
```typescript
interface GridBackgroundProps {
  cellCount?: number;           // Default: 12
  baseColor?: string;           // Default: '#111'
  highlightColor?: string;      // Default: 'transparent'
  enableHover?: boolean;        // Default: true
  columns?: {
    desktop?: string;           // Default: '1fr 1fr 1fr 1fr'
    tablet?: string;            // Default: '1fr 1fr'
    mobile?: string;            // Default: '1fr'
  };
  className?: string;
}
```

**Usage:**
```tsx
import { AnimatedGridBackground } from '@/ui/components/background';

<AnimatedGridBackground
  cellCount={12}
  baseColor="#111"
  highlightColor="transparent"
  enableHover={true}
/>
```

---

### 2. CursorGlow

Smooth-following radial gradient glow that tracks mouse position with interpolation.

**Features:**
- Smooth interpolation (configurable speed)
- Automatic touch device detection (disabled on mobile)
- GPU-accelerated transforms
- Customizable glow size, color, and blur

**Props:**
```typescript
interface CursorGlowProps {
  glowSize?: number;            // Default: 400 (px)
  glowColor?: string;           // Default: 'rgba(187, 187, 187, 0.3)'
  followSpeed?: number;         // Default: 0.1 (0-1 range)
  blurAmount?: number;          // Default: 70 (px)
  enabled?: boolean;            // Default: true
  className?: string;
}
```

**Usage:**
```tsx
import { CursorGlow } from '@/ui/components/background';

<CursorGlow
  glowSize={400}
  glowColor="rgba(187, 187, 187, 0.3)"
  followSpeed={0.1}
  blurAmount={70}
/>
```

---

### 3. AnimatedButton

Button with rotating border animation and smooth hover effects.

**Features:**
- Rotating border animation (2s loop)
- Gradient hover overlay
- Supports button and anchor rendering
- Three sizes: sm, md, lg
- Glassmorphic styling

**Props:**
```typescript
interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;                // Renders as <a> if provided
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';   // Default: 'md'
  disabled?: boolean;
  className?: string;
}
```

**Usage:**
```tsx
import { AnimatedButton } from '@/ui/components/background';

<AnimatedButton
  size="lg"
  onClick={() => console.log('Clicked')}
>
  Join Our Beta
</AnimatedButton>

// As a link
<AnimatedButton href="/signup" size="md">
  Get Started
</AnimatedButton>
```

---

## Companion Components (Web3 Domain)

### 4. GridHero

Hero section designed for grid background layouts with badge, heading, description, and CTA.

**Usage:**
```tsx
import { GridHero } from '@/ui/components/web3';
import { Sparkles } from 'lucide-react';

<GridHero
  badge="28k+ Members Community"
  badgeIcon={<Sparkles className="w-4 h-4" />}
  heading={<>Your Personal<br />Blockchain Navigator</>}
  description="Find everything you need to start exploring..."
  ctaText="Join Our Beta"
  onCtaClick={() => console.log('CTA')}
  sideCards={<>...info cards...</>}
/>
```

---

### 5. InfoCard

Glassmorphic card for displaying steps (timeline) or categories (list).

**Variants:**
- `steps`: Timeline with icons, titles, descriptions, and optional additional content
- `categories`: List with icons, names, descriptions, and counts

**Usage:**
```tsx
import { InfoCard } from '@/ui/components/web3';
import { Activity, ListCheck } from 'lucide-react';

// Steps variant
<InfoCard
  title="How to join"
  icon={<Activity className="w-5 h-5" />}
  variant="steps"
  glassmorphism={true}
  steps={[
    {
      icon: <ListCheck className="w-4 h-4" />,
      title: 'Choose category',
      description: 'Our curated list of blockchain platforms...',
    },
    // ... more steps
  ]}
/>

// Categories variant
<InfoCard
  title="Categories"
  variant="categories"
  categories={[
    {
      icon: <Grid3x3 className="w-4 h-4" />,
      name: 'Investments',
      description: 'Explore asset management platforms...',
      count: 32,
      active: true,
    },
    // ... more categories
  ]}
/>
```

---

## Hooks

### useMousePosition

Custom hook for tracking mouse position with smooth interpolation.

**Usage:**
```tsx
import { useMousePosition } from '@/ui/hooks';

const position = useMousePosition(0.1, true);
// position: { x: number, y: number }
```

**Parameters:**
- `followSpeed` (number): Interpolation speed (0-1, default: 0.1)
- `enabled` (boolean): Enable/disable tracking (default: true)

---

## Complete Example

See `src/GridBackgroundDemo.tsx` for a full implementation:

```tsx
import { AnimatedGridBackground, CursorGlow } from '@/ui/components/background';
import { GridHero, InfoCard } from '@/ui/components/web3';

export default function Demo() {
  return (
    <div className="relative min-h-screen bg-[#222]">
      <AnimatedGridBackground />
      <CursorGlow />
      
      <div className="relative z-10">
        <GridHero
          badge="28k+ Members"
          heading={<>Your Platform<br />Navigator</>}
          description="Find everything you need..."
          ctaText="Get Started"
          sideCards={
            <>
              <InfoCard variant="steps" steps={[...]} />
              <InfoCard variant="categories" categories={[...]} />
            </>
          }
        />
      </div>
    </div>
  );
}
```

---

## Performance Considerations

1. **GPU Acceleration**: All animations use `transform: translate3d()` for hardware acceleration
2. **Touch Devices**: CursorGlow automatically disables on touch devices
3. **RequestAnimationFrame**: Smooth interpolation uses RAF for optimal performance
4. **Pointer Events**: Background elements use `pointer-events: none` to prevent interaction blocking

---

## Responsive Behavior

- **Desktop (>900px)**: 4-column grid, full cursor glow
- **Tablet (600-900px)**: 2-column grid, cursor glow enabled
- **Mobile (<600px)**: 1-column grid, cursor glow disabled

---

## Type Definitions

All types are exported from `ui/components/types/background.types.ts`:

```typescript
export type {
  GridBackgroundProps,
  CursorGlowProps,
  AnimatedButtonProps,
  InfoCardProps,
  InfoCardStep,
  InfoCardCategory,
  GridHeroProps,
  MousePosition,
} from '@/ui/components/types/background.types';
```

---

## Design Tokens

This component library uses hard-coded colors for the dark theme aesthetic:
- Background: `#222`
- Grid cells: `#111`
- Glow: `rgba(187, 187, 187, 0.3)`
- Text: `white` with opacity variants

For design system integration, replace these with Tailwind tokens from `design-system/`.

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (cursor glow auto-disabled)

---

## Integration Checklist

- [x] TypeScript types defined
- [x] Components implemented
- [x] Hooks created
- [x] Demo file created
- [x] README documentation
- [x] Responsive design
- [x] Performance optimizations
- [x] Touch device handling
- [x] Accessibility considerations

---

## Related Components

- **Web3 Domain**: `GridHero`, `InfoCard`
- **Hooks**: `useMousePosition`
- **Types**: `background.types.ts`

---

**Last Updated:** 2025-10-06  
**Maintainer:** Droid (Factory AI)
