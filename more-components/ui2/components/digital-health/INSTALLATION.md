# Installation Guide

## Prerequisites

- Node.js 18+ 
- npm 9+ or yarn 1.22+
- React 19
- TypeScript 5.2+
- Tailwind CSS 3.4+

## Dependencies

The digital health dashboard requires the following packages (already included in `package.json`):

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "chart.js": "^4.5.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2"
  }
}
```

## Setup Steps

### 1. Verify Dependencies

All required dependencies should already be installed. Verify with:

```bash
npm list chart.js lucide-react
```

If missing, install them:

```bash
npm install chart.js lucide-react
```

### 2. Tailwind Configuration

Ensure your `tailwind.config.js` includes the fade-up animation:

```js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(24px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
    },
  },
};
```

### 3. Design System Configuration

The components use design system tokens. Ensure your `src/index.css` includes:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 0%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 0%;
    --muted: 0 0% 94%;
    --muted-foreground: 0 0% 40%;
    --border: 0 0% 89%;
    --ring: 240 78% 82%;
    --chart-5: 142 71% 45%;
    /* ... other tokens */
  }

  .dark {
    --background: 0 0% 0%;
    --foreground: 0 0% 100%;
    --card: 215 28% 17%;
    --card-foreground: 0 0% 100%;
    --muted: 0 0% 20%;
    --muted-foreground: 0 0% 80%;
    --border: 0 0% 33%;
    --ring: 240 74% 73%;
    --chart-5: 142 69% 58%;
    /* ... other dark tokens */
  }
}
```

### 4. Import Components

Components are available from the digital-health domain:

```tsx
import {
  HealthDashboardGrid,
  DoctorCard,
  ConsultationCard,
  GlucoseChartCard,
  // ... other components
} from '@/ui/components/digital-health';
```

Or import individually:

```tsx
import { DoctorCard } from '@/ui/components/digital-health/DoctorCard';
```

### 5. TypeScript Configuration

Ensure your `tsconfig.json` has path aliases configured:

```json
{
  "compilerOptions": {
    "paths": {
      "@/ui/*": ["./ui/*"],
      "@/src/*": ["./src/*"]
    }
  }
}
```

And in `vite.config.ts`:

```ts
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

## Verification

To verify the installation, create a simple test component:

```tsx
import { HealthDashboardGrid, DoctorCard } from '@/ui/components/digital-health';

export const Test = () => (
  <HealthDashboardGrid>
    <DoctorCard
      name="Dr. Test"
      specialty="Testing"
      image="https://via.placeholder.com/400"
    />
  </HealthDashboardGrid>
);
```

## Build and Run

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

### Chart.js Errors

If you see Chart.js errors, ensure you're importing from `chart.js/auto`:

```tsx
import { Chart } from 'chart.js/auto';
```

### Animation Not Working

Check that the animation is defined in `tailwind.config.js` and that your build process includes it.

### Type Errors

Ensure all types are imported from the correct location:

```tsx
import type { DoctorCardProps } from '@/ui/components/digital-health';
```

### Dark Theme Not Applied

Add `dark` class to a parent element (usually `<html>` or `<body>`):

```tsx
<html className="dark">
```

## Next Steps

- See [README.md](./README.md) for component API documentation
- Check [USAGE_EXAMPLE.tsx](./USAGE_EXAMPLE.tsx) for implementation examples
- Review [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md) for architectural details
