# Dashboard with Sidebar Navigation

A comprehensive audio production studio dashboard featuring a collapsible sidebar, multiple Chart.js visualizations, and a responsive artist management table.

## Features

✅ **Collapsible Sidebar** - Mobile-responsive with hamburger menu and overlay  
✅ **Stats Cards** - 4 metric cards with icons and optional trends  
✅ **Chart.js Visualizations** - Line, doughnut, and bar charts with dark theme  
✅ **Artists Table** - Responsive table with status badges and avatar support  
✅ **Glass Morphism** - Modern backdrop blur and semi-transparent effects  
✅ **Dark Gradients** - Slate/blue gradient background  
✅ **TypeScript** - Fully typed with centralized type definitions  
✅ **Accessible** - WCAG 2.1 AA compliant with ARIA labels  

## Components

### Core Layout
- `DashboardLayout` - Main container with sidebar + content areas
- `Sidebar` - Navigation sidebar with logo, menu, and upgrade card
- `DashboardHeader` - Top bar with title, notifications, and user avatar

### Data Visualization
- `StatsCard` - Metric display with icon and optional trend
- `RevenueChart` - Line chart with dual datasets (revenue + target)
- `GenreChart` - Doughnut chart for genre distribution
- `UsageChart` - Bar chart for weekly usage
- `SpectrumChart` - Frequency spectrum bar chart with color coding

### Data Display
- `ArtistsTable` - Responsive table with avatars, status badges, and actions

## Installation

```bash
# Already included in project dependencies
npm install chart.js lucide-react
```

## Usage

```tsx
import React, { useState } from 'react';
import {
  Sidebar,
  DashboardHeader,
  DashboardLayout,
  StatsCard,
  RevenueChart,
  ArtistsTable,
} from '@/ui/components/dashboard-sidebar';

function MyDashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <DashboardLayout
      mobileMenuOpen={mobileMenuOpen}
      onMobileMenuToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      sidebar={
        <Sidebar
          logo={{ icon: 'waveform', text: 'SoundForge' }}
          newActionButton={{
            label: 'New Track',
            shortcut: '⌘N',
            onClick: () => console.log('New Track'),
          }}
          navItems={[
            { id: '1', label: 'Studio', icon: 'layout-dashboard', href: '#' },
            { id: '2', label: 'Artists', icon: 'users', href: '#', isActive: true },
          ]}
          upgradeCard={{
            description: 'Upgrade to Studio PRO',
            highlight: '100GB',
            ctaText: 'Go Premium',
            onUpgrade: () => console.log('Upgrade'),
          }}
          isMobileOpen={mobileMenuOpen}
        />
      }
      header={
        <DashboardHeader
          title="Studio Analytics"
          subtitle="12 active collaborators"
          notifications={3}
          userAvatar="https://example.com/avatar.jpg"
        />
      }
    >
      <StatsCard
        title="Total Tracks"
        value={247}
        icon="music"
        iconColor="blue"
      />
      
      <RevenueChart
        data={{
          labels: ['Jan', 'Feb', 'Mar'],
          revenue: [8500, 9200, 11800],
          target: [10000, 10500, 11000],
        }}
      />
    </DashboardLayout>
  );
}
```

## Props

### Sidebar Props
```typescript
interface SidebarProps {
  logo?: { icon: string; text: string };
  newActionButton?: {
    label: string;
    shortcut?: string;
    onClick: () => void;
  };
  navItems: SidebarNavItem[];
  upgradeCard?: {
    description: string;
    highlight?: string;
    ctaText: string;
    dismissText?: string;
    onUpgrade: () => void;
    onDismiss?: () => void;
  };
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}
```

### StatsCard Props
```typescript
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: string; // Lucide icon name
  iconColor: 'blue' | 'cyan' | 'green' | 'purple';
  trend?: {
    value: string;
    direction: 'up' | 'down' | 'neutral';
  };
}
```

### Chart Data Types
```typescript
interface RevenueChartData {
  labels: string[];
  revenue: number[];
  target?: number[];
}

interface GenreChartData {
  labels: string[];
  values: number[];
  colors?: string[];
}
```

## Responsive Behavior

- **Mobile (<640px)**: Stats cards stack, sidebar hidden with hamburger menu
- **Tablet (640-1024px)**: 2-column stats grid, charts stack
- **Desktop (>1024px)**: 4-column stats grid, sidebar always visible, charts side-by-side

## Accessibility

- ✅ Semantic HTML (`<aside>`, `<header>`, `<table>`)
- ✅ ARIA labels for icon-only buttons
- ✅ Keyboard navigation support
- ✅ Focus-visible states
- ✅ Screen reader friendly
- ✅ Chart canvas with aria-label attributes

## Customization

### Icon Support
Uses Lucide React icons. Supported icon names:
- `waveform`, `music`, `hard-drive`, `activity`, `dollar-sign`
- `layout-dashboard`, `radio`, `file-audio`, `users`, `sliders-horizontal`
- `bell`, `help-circle`, `plus`

### Color Schemes
Stats card icon colors map to Tailwind utilities:
- `blue`: Blue-600 background with blue-400 icon
- `cyan`: Cyan-600 background with cyan-400 icon
- `green`: Green-600 background with green-400 icon
- `purple`: Purple-600 background with purple-400 icon

## Demo

See `src/DashboardSidebarDemo.tsx` for a complete working example with sample data.

## Notes

- Chart.js instances are automatically cleaned up on unmount
- All charts use dark theme defaults
- Mobile overlay closes on click outside
- Table columns hide progressively on smaller screens
