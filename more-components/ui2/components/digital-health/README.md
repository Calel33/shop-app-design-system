# Digital Health Dashboard Components

A comprehensive suite of health monitoring UI components featuring a modern bento grid layout, real-time data visualization with Chart.js, and dark theme design optimized for healthcare applications.

## Overview

**PulseSync Digital Health Dashboard** provides production-ready React components for building healthcare dashboards, patient monitoring interfaces, and telemedicine platforms. Built with React 19, TypeScript, and Tailwind CSS.

## Features

- **Dark theme optimized** for healthcare professional workflows
- **Responsive bento grid layout** adapts to all screen sizes
- **Smooth fade-up animations** with staggered delays
- **Chart.js integration** for glucose monitoring and health metrics
- **Accessibility compliant** (WCAG 2.1 AA)
- **Type-safe** with comprehensive TypeScript definitions
- **Design system aligned** using centralized tokens

## Components

### HealthDashboardGrid
Main container with responsive bento grid layout.

```tsx
import { HealthDashboardGrid } from '@/ui/components/digital-health';

<HealthDashboardGrid animationEnabled={true}>
  {/* Your cards here */}
</HealthDashboardGrid>
```

### DoctorCard
Doctor portrait with overlay caption.

```tsx
<DoctorCard
  name="Dr. Vanessa Blake"
  specialty="Endocrinologist"
  image="https://example.com/doctor.jpg"
/>
```

### ConsultationCard
Upcoming appointment card with patient message and countdown badge.

```tsx
<ConsultationCard
  patient={{
    name: "Aria Lambert",
    condition: "Type 1 Diabetes",
    message: "Hey Dr. Blake—quick heads up that my glucose is running a bit low this morning."
  }}
  time={{ day: "Thu", hour: "14:30" }}
  countdown="Begins in 2 h"
  onChatClick={() => console.log('Chat clicked')}
/>
```

### AppPreviewCard
Dashboard screenshot preview with header icons.

```tsx
<AppPreviewCard
  appName="PulseSync"
  screenshot="https://example.com/dashboard.png"
/>
```

### BrandCard
Logo emblem with tagline and background image.

```tsx
<BrandCard
  logo={{ text: "PulseSync" }}
  tagline="Data-driven care that fits your life."
  backgroundImage="https://example.com/texture.jpg"
/>
```

### MobileAppCard
Mobile mockup with CTA overlay (spans 2 columns on tablet, 1 on desktop).

```tsx
<MobileAppCard
  title="Daily Symptom Check-in"
  mockupImage="https://example.com/mobile.jpg"
  cta={{
    label: "Start now",
    onClick: () => console.log('CTA clicked')
  }}
/>
```

### StyleGuideCard
Typography and color palette showcase.

```tsx
<StyleGuideCard
  typography={{
    primary: "Inter UI",
    secondary: "Instrument Serif"
  }}
  palette={['#10b981', '#059669', '#d97706', '#e5e5e5']}
/>
```

### ChatTeaserCard
Conversational interface preview (spans 2 columns).

```tsx
<ChatTeaserCard
  title="Stay in sync with your care team—anytime, anywhere."
  messages={[
    {
      id: '1',
      text: 'Good morning, Ethan. How did you sleep?',
      sender: 'coach'
    },
    {
      id: '2',
      text: 'Pretty well, around 7 hrs. My back pain is mild today.',
      sender: 'patient'
    }
  ]}
  avatar={{
    src: "https://example.com/avatar.jpg",
    name: "PulseSync Coach"
  }}
/>
```

### GlucoseChartCard
Health metrics with Chart.js line graph.

```tsx
<GlucoseChartCard
  title="Weekly Glucose Trend"
  data={[
    { day: 'Mon', value: 112 },
    { day: 'Tue', value: 125 },
    { day: 'Wed', value: 118 },
    // ...
  ]}
  targetRange={{
    min: 80,
    max: 130,
    description: 'Target range: 80-130 mg/dL before meals.'
  }}
  onRefresh={() => console.log('Refresh clicked')}
/>
```

### MessageBubble
Chat message component (used within ChatTeaserCard).

```tsx
<MessageBubble text="Hello!" variant="sent" />
<MessageBubble text="Hi there!" variant="received" />
```

### CountdownBadge
Time countdown badge with variant styles.

```tsx
<CountdownBadge label="Begins in 2 h" variant="warning" />
```

## Responsive Grid Behavior

The bento grid adapts across breakpoints:

- **Mobile** (< 640px): 1 column
- **Tablet** (≥ 640px): 2 columns
- **Desktop** (≥ 1024px): 3 columns
- **Large** (≥ 1280px): 4 columns

### Column Spanning

- **MobileAppCard**: `sm:col-span-2 lg:col-span-1` (2 cols tablet, 1 col desktop)
- **ChatTeaserCard**: `sm:col-span-2` (2 cols on tablet+)
- **GlucoseChartCard**: `sm:col-span-2 lg:col-span-1` (2 cols tablet, 1 col desktop)

## Animations

All cards use fade-up animation with staggered delays:

- **DoctorCard**: 0.15s
- **ConsultationCard**: 0.25s
- **AppPreviewCard**: 0.35s
- **BrandCard**: 0.45s
- **MobileAppCard**: 0.55s
- **StyleGuideCard**: 0.65s
- **ChatTeaserCard**: 0.75s
- **GlucoseChartCard**: 0.85s

Animation is defined in Tailwind config as `animate-fade-in-up`.

## Design System Integration

All components use design system tokens:

### Colors
- Background: `hsl(var(--background))`
- Card: `hsl(var(--card))`
- Foreground: `hsl(var(--foreground))`
- Muted: `hsl(var(--muted))`
- Emerald accent: `hsl(var(--chart-5))`
- Amber warning: `bg-amber-950 text-amber-400`

### Typography
- Sans-serif: Design system default
- Serif: `font-playfair` (for headings and large text)

### Spacing
- Standard padding: `p-4`, `p-6`, `p-10`
- Gap: `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`

## Accessibility

- **Semantic HTML**: `<figure>`, `<figcaption>`, `<button>`
- **ARIA labels**: Icon buttons and charts have descriptive labels
- **Keyboard navigation**: All interactive elements focusable
- **Focus states**: `focus-visible:ring` on buttons
- **Alt text**: All images have descriptive alternatives
- **Color contrast**: Meets WCAG 2.1 AA standards

## Chart.js Configuration

The glucose chart uses:

- **Dark theme defaults**: White text on dark background
- **Emerald line color**: `#10b981`
- **Responsive**: `maintainAspectRatio: false`
- **Smooth curves**: `tension: 0.4`
- **Interactive tooltips**: Hover to see exact values
- **Auto cleanup**: Chart instance destroyed on unmount

## Performance

- **Lazy loading**: Images use `loading="lazy"`
- **Chart optimization**: Single Chart.js instance per card
- **Animation performance**: CSS keyframes with GPU acceleration
- **Hover effects**: CSS transitions for smooth scaling

## Integration Example

See `USAGE_EXAMPLE.tsx` for complete demo implementation with sample data.

## Related Documentation

- [Installation Guide](./INSTALLATION.md)
- [Integration Summary](./INTEGRATION_SUMMARY.md)
- [Type Definitions](../types/digital-health.types.ts)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Dependencies

- React 19
- Chart.js 4.5.0
- Lucide React 0.344.0
- Tailwind CSS 3.4.1
