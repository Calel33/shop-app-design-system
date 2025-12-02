# Hero Components

Responsive full-screen hero with floating navigation, glassmorphism styling, and accessible mobile menu.

Usage:

```tsx
import { FullScreenHero } from '@/ui/components/hero';

<FullScreenHero
  backgroundImage="/hero.jpg"
  navigation={{
    logo: 'Veilhaven',
    navItems: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'About', href: '#about' },
    ],
    ctaButton: { label: 'Get Started', href: '#get-started' },
  }}
  content={{
    badge: { icon: '✨', text: 'Now Available' },
    title: 'Atmospheric UI for Modern Apps',
    subtitle: 'Build immersive layouts with speed and fidelity using our React + Tailwind components.',
    primaryCta: { label: 'Explore', href: '#explore' },
    secondaryCta: { label: 'Watch Demo', icon: '▶️' },
  }}
  enableAnimations
/>
```
