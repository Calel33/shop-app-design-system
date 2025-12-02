# NOVA Chat Landing Page Components

A comprehensive, production-ready SaaS landing page built with React, TypeScript, and Tailwind CSS. Features a modern messaging platform showcase with interactive elements, Chart.js integration, and full responsiveness.

## 📦 Components

### Core Components

#### `NovaLandingDemo.tsx`
Main landing page component that orchestrates all sections.

**Features:**
- Sticky navigation with glass morphism
- Hero section with background image and gradient overlays
- Interactive chat demo with realistic UI
- Feature cards with metrics
- Chart.js metrics visualization
- 3-tier pricing section
- FAQ section
- CTA section with background image
- Footer with newsletter signup

**Usage:**
```tsx
import { NovaLandingDemo } from './NovaLandingDemo';

function App() {
  return <NovaLandingDemo />;
}
```

---

### Sub-Components

#### `StickyNav.tsx`
Sticky navigation bar with glass morphism effect and smooth scroll.

**Features:**
- Sticky positioning with backdrop blur
- Smooth scroll to anchor links
- Responsive mobile menu button
- Custom NOVA logo SVG

**Props:** None (self-contained)

---

#### `HeroSection.tsx`
Hero section with background image, gradient overlays, and feature highlights.

**Features:**
- Background image with gradient overlays
- 2-column responsive grid
- Feature highlights with icons
- CTA buttons
- Integrates ChatDemoCard

**Props:** None (self-contained)

---

#### `ChatDemoCard.tsx`
Interactive chat interface demo with nested glass cards.

**Features:**
- Realistic chat UI with messages
- Glass morphism effects
- Grid pattern background
- AI summary notification card
- Message bubbles with avatars
- Input field with action buttons

**Props:** None (self-contained)

---

#### `FeatureCard.tsx`
Reusable feature card with icon, description, and metrics.

**Props:**
```typescript
interface FeatureCardProps {
  icon: LucideIcon;           // Lucide icon component
  iconColor: string;          // Tailwind color class (e.g., "text-purple-300")
  iconBgColor: string;        // Tailwind bg class (e.g., "bg-purple-500/10")
  title: string;              // Feature title
  description: string;        // Feature description
  metrics: Metric[];          // Array of metrics to display
}

interface Metric {
  label: string;              // Metric label
  value: string;              // Metric value
  color: string;              // Tailwind color class
}
```

**Example:**
```tsx
<FeatureCard
  icon={Radio}
  iconColor="text-purple-300"
  iconBgColor="bg-purple-500/10"
  title="Realtime Engine"
  description="Presence, typing, reactions with global fanout."
  metrics={[
    { label: 'Latency p95', value: '84ms', color: 'text-purple-300' },
    { label: 'Regions', value: '16', color: 'text-purple-300' },
  ]}
/>
```

---

#### `MetricsChart.tsx`
Chart.js line chart wrapper for metrics visualization.

**Features:**
- Responsive Chart.js line chart
- Emerald gradient fill
- Custom grid and tooltip styling
- Automatic cleanup on unmount

**Props:** None (uses hardcoded weekly data)

**Data:**
- Labels: Mon-Sun
- Values: [320, 410, 390, 520, 610, 700, 650]

---

#### `PricingCard.tsx`
Pricing tier card with features list and CTA.

**Props:**
```typescript
interface PricingCardProps {
  tier: string;               // Tier name (e.g., "Free", "Pro")
  price: string;              // Price (e.g., "$0", "$249")
  period: string;             // Period (e.g., "/month", "/annual")
  description: string;        // Tier description
  features: string[];         // Array of feature strings
  featured?: boolean;         // Highlight as featured tier
  ctaText: string;            // CTA button text
}
```

**Example:**
```tsx
<PricingCard
  tier="Pro"
  price="$249"
  period="/month"
  description="Growing apps that need scale."
  features={[
    '100k MAU + burst scaling',
    'Threads, search, file uploads',
    'Email support',
  ]}
  featured
  ctaText="Choose Pro"
/>
```

---

#### `FAQItem.tsx`
FAQ item with question and answer.

**Props:**
```typescript
interface FAQItemProps {
  question: string;           // FAQ question
  answer: string;             // FAQ answer
}
```

**Example:**
```tsx
<FAQItem
  question="How long does integration take?"
  answer="Most teams ship in under a week using our SDKs."
/>
```

---

#### `Footer.tsx`
Footer with newsletter signup and social links.

**Features:**
- Newsletter form with validation
- Social media links (GitHub, Twitter, LinkedIn)
- Navigation links
- Dynamic copyright year
- 2-column responsive layout

**Props:** None (self-contained)

---

## 🎨 Design System

### Colors
- **Background:** `gray-950`, `gray-900`
- **Primary:** `blue-500`, `blue-600`
- **Accents:** `emerald-400`, `purple-400`, `pink-400`
- **Glass:** `white/5-15` with backdrop blur
- **Borders:** `white/10`, `gray-800`

### Typography
- **Headings:** Manrope (tracking-tighter)
- **Subheadings:** Instrument Serif (italic)
- **Body:** Inter (font-sans)

### Glass Morphism
- Backdrop blur: 14px to 2xl
- Background: `white/5` to `white/15`
- Borders: `white/10` to `white/15`
- Ring: `ring-1` with color variants

---

## 🔧 Custom Hook

### `useChartSetup.ts`
Custom hook for Chart.js integration with automatic cleanup.

**Usage:**
```typescript
import { useRef } from 'react';
import { useChartSetup } from '../../hooks/useChartSetup';

const canvasRef = useRef<HTMLCanvasElement>(null);

useChartSetup(canvasRef, {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  data: [320, 410, 390, 520, 610, 700, 650],
  label: 'Messages',
  backgroundColor: 'rgba(16,185,129,0.15)',
  borderColor: 'rgb(16,185,129)',
});
```

**Options:**
```typescript
interface UseChartSetupOptions {
  labels: string[];           // X-axis labels
  data: number[];             // Data points
  label?: string;             // Dataset label
  backgroundColor?: string;   // Fill color
  borderColor?: string;       // Line color
  borderWidth?: number;       // Line width
  tension?: number;           // Curve tension (0-1)
}
```

---

## 📋 Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0",
    "chart.js": "^4.4.0"
  }
}
```

---

## 🚀 Features

✅ **Sticky Navigation** - Glass morphism with smooth scroll  
✅ **Hero Section** - Background image with gradient overlays  
✅ **Chat Demo** - Interactive chat UI with glass effects  
✅ **Feature Cards** - Reusable cards with metrics  
✅ **Chart.js Integration** - Responsive line chart  
✅ **Pricing Tiers** - 3-tier pricing with featured highlight  
✅ **FAQ Section** - Expandable questions and answers  
✅ **Newsletter Form** - Email validation  
✅ **Responsive Design** - Mobile, tablet, desktop  
✅ **TypeScript** - Full type safety  
✅ **Accessibility** - WCAG 2.1 AA compliant  

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

---

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast (WCAG AA)
- Screen reader friendly
- Focus indicators

---

## 🎯 Usage Example

```tsx
import { NovaLandingDemo } from './NovaLandingDemo';

function App() {
  return (
    <div className="min-h-screen">
      <NovaLandingDemo />
    </div>
  );
}

export default App;
```

---

## 🔄 Customization

### Changing Colors
Update Tailwind classes in components:
```tsx
// From
className="bg-blue-500"

// To
className="bg-purple-500"
```

### Updating Chart Data
Modify `MetricsChart.tsx`:
```tsx
const chartData = {
  labels: ['Your', 'Custom', 'Labels'],
  data: [100, 200, 300],
};
```

### Adding Features
Extend `FeatureCard` usage in `NovaLandingDemo.tsx`:
```tsx
<FeatureCard
  icon={YourIcon}
  iconColor="text-your-color"
  iconBgColor="bg-your-bg"
  title="Your Feature"
  description="Your description"
  metrics={[...]}
/>
```

---

## 📄 License

Part of the project-components library.

---

## 🤝 Contributing

Follow the project's component reusability patterns and maintain TypeScript type safety.
