# KYRO Creative Technologist Portfolio

A modern, dark-themed portfolio landing page featuring 3D backgrounds, animated typography, and glassmorphic design elements.

## 🎨 Features

- ✅ **Live Clock**: Real-time clock that updates every second
- ✅ **Letter Animation**: Staggered slide-in animation for hero title
- ✅ **3D Background**: Embedded Spline 3D gradient with layered effects
- ✅ **Glassmorphic Design**: Backdrop blur and semi-transparent elements
- ✅ **Responsive Grid**: Adapts from mobile to desktop seamlessly
- ✅ **Work Showcase**: Portfolio grid with hover scale effects
- ✅ **Complex About Section**: 12-column grid with stat overlays
- ✅ **Services Section**: Detailed offerings with imagery and CTAs
- ✅ **Smooth Scroll**: Navigation to anchor sections
- ✅ **Accessibility**: WCAG 2.1 AA compliant with semantic HTML

## 📦 Components

### Main Component
- `KyroPortfolioLanding` - Full portfolio page composition

### Sub-Components
- `Header` - Live clock, menu, and contact CTA
- `HeroSection` - Animated "KYRO" title
- `InfoGrid` / `InfoCard` - Location, availability, role cards
- `WorkShowcase` / `WorkCard` - Portfolio project grid
- `AboutSection` - Bio, portrait, and statistics
- `ServicesSection` / `ServiceCard` - Service offerings
- `ContactFooter` - Email and messaging CTAs

### Hooks
- `useLiveClock` - Live clock with cleanup

## 🚀 Usage

### Basic Import
```tsx
import { KyroPortfolioLanding } from '@/ui/components/portfolio/kyro';

function App() {
  return <KyroPortfolioLanding />;
}
```

### Namespace Import
```tsx
import * as Portfolio from '@/ui/components/portfolio';

function App() {
  return <Portfolio.Kyro.KyroPortfolioLanding />;
}
```

### Custom Composition
```tsx
import {
  Header,
  HeroSection,
  InfoGrid,
  WorkShowcase,
  AboutSection
} from '@/ui/components/portfolio/kyro';

function CustomLayout() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <InfoGrid />
      <WorkShowcase />
      <AboutSection
        name="Your Name"
        role="Your Role"
        location="Your Location"
        portraitImage="/your-image.jpg"
        portraitAlt="Your portrait"
        bio="Your bio text..."
        stats={{
          projects: '50+',
          experience: '5+',
          languages: '2',
          awards: '3',
          clients: '20+',
        }}
      />
    </div>
  );
}
```

## 🎬 Animations

### Letter Slide-In
- **Duration**: 0.8s ease-out
- **Stagger**: 0.1s per letter
- **Effect**: translateY, opacity, clip-path

### Hover Effects
- Portfolio cards scale to 103%
- Buttons transition background opacity
- Icons translate on hover

## 📱 Responsive Breakpoints

- **Mobile**: Base (375px+)
- **Tablet**: sm: (640px+)
- **Desktop**: md: (768px+), lg: (1024px+), xl: (1280px+), 2xl: (1536px+)

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast text/background
- Focus states
- Alt text on all images

## 🎨 Design Tokens

### Colors
- Background: `bg-black`
- Text: `text-white`, `text-neutral-200`, `text-neutral-300`, `text-neutral-400`
- Accents: `text-emerald-400`, `text-cyan-400`, `text-indigo-400`
- Borders: `ring-white/10`, `border-white/10`

### Typography
- Font: Inter (implied)
- Tracking: `tracking-tight`
- Weights: `font-medium`, `font-semibold`, `font-extrabold`

### Spacing
- Gaps: `gap-2`, `gap-3`, `gap-6`, `gap-8`
- Padding: `p-4`, `p-5`, `p-6`, `p-8`
- Margins: `mt-6`, `mt-10`, `mt-14`, `mt-20`

### Borders & Radius
- Rings: `ring-1 ring-white/10`
- Radius: `rounded-xl`, `rounded-2xl`, `rounded-full`

## 🔧 Customization

### Change Content
Edit the data in `KyroPortfolioLanding.tsx`:
- Update work showcase items
- Modify about section stats
- Change service offerings
- Update contact email

### Modify Styles
Use Tailwind classes or extend with custom CSS:
- Adjust colors via className props
- Change spacing with Tailwind utilities
- Modify animations in HeroSection style block

### Replace 3D Background
Change the Spline iframe src in `KyroPortfolioLanding.tsx`:
```tsx
<iframe
  src="YOUR_SPLINE_URL_HERE"
  ...
/>
```

## 📚 Dependencies

- React 19
- TypeScript 5
- Tailwind CSS 3
- lucide-react (icons)

## 📄 License

Part of the Elite Component Library.  
See project LICENSE for details.

## 🤝 Contributing

Follow the project constitution and AGENTS.md guidelines:
- Max 500 lines per file
- TypeScript with no `any` types
- Design system tokens only
- WCAG 2.1 AA compliance
- Vertical slice organization

## 📖 Documentation

- [Integration Summary](./INTEGRATION_SUMMARY.md)
- [Type Definitions](../../types/kyro-portfolio.types.ts)
- [Integration Prompt](../../../../uidocs/kyro-portfolio-integration-prompt.md)
