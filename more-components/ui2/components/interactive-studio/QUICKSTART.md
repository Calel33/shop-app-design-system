# Interactive Studio - Quick Start Guide

Get up and running with the Interactive Studio components in 5 minutes.

---

## 🚀 Installation

The components are already integrated into the project. No additional installation needed!

---

## 📝 Basic Example (Copy & Paste)

### 1. Create a new demo file or use the existing one:

```tsx
// src/MyInteractivePage.tsx
import React from 'react';
import {
  InteractiveStudioHero,
  FloatingNavbar,
  SplineBackground,
} from '../ui/components/interactive-studio';

export const MyInteractivePage: React.FC = () => {
  // Logo SVG
  const logo = (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="3" fill="white" />
    </svg>
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* 3D Background */}
      <SplineBackground 
        splineUrl="https://my.spline.design/reactiveorb-s0GzgSco0uSVSXvwMHuJvPQs/"
      />
      
      {/* Navigation */}
      <FloatingNavbar
        logo={logo}
        brandName="InteractiveLab"
        links={[
          { label: 'Portfolio', href: '#portfolio' },
          { label: '3D Design', href: '#design' },
          { label: 'Animation', href: '#animation' },
        ]}
        ctaButton={{
          label: 'Start Project',
          href: '#start',
        }}
      />
      
      {/* Hero Section */}
      <InteractiveStudioHero
        badge="Interactive Design Studio"
        title="Reactive"
        highlightedTitle="Dimensional Experiences"
        description="We create immersive digital worlds that respond to user interaction. Every gesture, every movement becomes part of the experience."
        primaryCTA={{
          label: 'Explore Interactive Demo',
          href: '#demo',
        }}
        secondaryCTA={{
          label: 'View Portfolio',
          href: '#portfolio',
        }}
        technologies={['WebGL', 'Three.js', 'Spline', 'GSAP']}
      />
    </div>
  );
};

export default MyInteractivePage;
```

### 2. Update `src/main.tsx` to use your new page:

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyInteractivePage from './MyInteractivePage';  // ← Change this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyInteractivePage />  {/* ← Change this */}
  </React.StrictMode>
);
```

### 3. Run the dev server:

```bash
npm run dev
```

### 4. Open your browser:

```
http://localhost:5173
```

---

## 🎨 Customization Examples

### Change Colors

```tsx
<InteractiveStudioHero
  // ... other props
  badge="Your Custom Badge Text"
/>
```

### Use Your Own 3D Scene

```tsx
<SplineBackground 
  splineUrl="https://my.spline.design/YOUR-SCENE-URL/"
  fallbackGradient="bg-gradient-to-br from-purple-900 via-blue-900 to-black"
/>
```

### Different Button Styles

```tsx
import { GlassButton } from '@/ui/components/interactive-studio';

<GlassButton variant="solid" size="lg" href="#action">
  Solid Button
</GlassButton>

<GlassButton variant="glass" size="md" href="#action">
  Glass Button
</GlassButton>
```

### Add Custom Navigation Links

```tsx
<FloatingNavbar
  logo={logo}
  brandName="Your Brand"
  links={[
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ]}
  authLinks={[
    { label: 'Login', href: '/login', variant: 'text' },
  ]}
  ctaButton={{
    label: 'Get Started',
    href: '/signup',
  }}
/>
```

---

## 🎯 Component Variants

### Glass Badge Variants

```tsx
import { GlassBadge } from '@/ui/components/interactive-studio';

<GlassBadge variant="subtle">Subtle</GlassBadge>
<GlassBadge variant="medium">Medium</GlassBadge>
<GlassBadge variant="strong">Strong</GlassBadge>
```

### Button Sizes

```tsx
<GlassButton size="sm">Small</GlassButton>
<GlassButton size="md">Medium</GlassButton>
<GlassButton size="lg">Large</GlassButton>
```

---

## 📱 Responsive Tips

The components are responsive by default:

- **Mobile:** Navigation collapses, hero stacks vertically
- **Tablet:** Transitional layout
- **Desktop:** Full two-column grid with 3D interaction space

No additional configuration needed!

---

## ♿ Accessibility

All components include:
- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus states
- ✅ High contrast (white on black)

---

## 🐛 Troubleshooting

### Spline background not loading?

**Solution 1:** Check your internet connection (Spline requires external URL)

**Solution 2:** The fallback gradient will display automatically if Spline fails

**Solution 3:** Use a different Spline URL:

```tsx
<SplineBackground 
  splineUrl="https://prod.spline.design/YOUR-BACKUP-SCENE/"
/>
```

### Components not found?

Make sure you're importing from the correct path:

```tsx
// ✅ Correct
import { InteractiveStudioHero } from '../ui/components/interactive-studio';

// ✅ Also correct (with path alias)
import { InteractiveStudioHero } from '@/ui/components/interactive-studio';

// ❌ Wrong
import { InteractiveStudioHero } from '@/ui';  // Use namespace import instead
```

### TypeScript errors?

Make sure types are properly imported:

```tsx
import type { 
  InteractiveStudioHeroProps,
  NavLink,
  CTAButton 
} from '@/ui/components/interactive-studio';
```

---

## 📚 Next Steps

- **Full Documentation:** See `README.md` in this folder
- **Integration Details:** See `INTEGRATION_SUMMARY.md`
- **Test Reference:** Open `test/interactive-studio-test.html` in browser
- **Demo:** Check `src/InteractiveStudioDemo.tsx` for complete example

---

## 💡 Pro Tips

1. **Performance:** The 3D background lazy loads automatically
2. **Customization:** All components accept `className` prop for custom styling
3. **Reusability:** Mix and match components for different layouts
4. **Fallback:** Always provide a fallback gradient for Spline
5. **Mobile:** Consider hiding 3D on mobile for performance:

```tsx
<div className="hidden md:block">
  <SplineBackground splineUrl="..." />
</div>
<div className="md:hidden bg-gradient-to-br from-black to-gray-900" />
```

---

## ✅ Checklist

Before deploying, make sure:

- [ ] Spline URL is correct and accessible
- [ ] All links point to valid routes
- [ ] CTA buttons have proper handlers/links
- [ ] Tested on mobile, tablet, and desktop
- [ ] Keyboard navigation works
- [ ] Colors match your brand (if customized)
- [ ] Loading states display correctly

---

**Need help?** Check the full `README.md` or `INTEGRATION_SUMMARY.md` for detailed information.

**Happy building! 🚀**
