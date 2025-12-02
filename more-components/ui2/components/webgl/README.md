# WebGL Shader Background Components

Advanced React components featuring animated WebGL shader backgrounds with modern AI platform UI.

## 🎨 Features

- **WebGL Shader Animation**: Rotating circular patterns with color gradients
- **Glass Morphism Design**: Backdrop blur effects and transparency
- **Floating Animations**: Smooth 6s ease-in-out floating cards
- **Pulse Glow Effects**: Animated glow on CTA buttons
- **Custom Logo Animation**: Pulsing circle effect
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Performance Optimized**: 60fps WebGL rendering
- **TypeScript**: Fully typed components
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support

## 📦 Components

### Main Components
- **`WebGLShaderDemo`**: Complete demo page with all features
- **`ShaderBackground`**: WebGL canvas with animated shader
- **`Navigation`**: Glass effect navigation bar
- **`GlassCard`**: Reusable glass morphism card
- **`FeatureCard`**: Feature display card with icons
- **`StatCard`**: Statistics display card

### Custom Hook
- **`useWebGLShader`**: WebGL context management and rendering

## 🚀 Quick Start

```tsx
import { WebGLShaderDemo } from './components/webgl';

function App() {
  return <WebGLShaderDemo />;
}
```

## 📝 Component Usage

### ShaderBackground

```tsx
import { ShaderBackground } from './components/webgl';

<ShaderBackground />
```

### GlassCard

```tsx
import { GlassCard } from './components/webgl';

<GlassCard 
  gradient={true}
  floating={true}
  animationDelay="-2s"
>
  <p>Content here</p>
</GlassCard>
```

### FeatureCard

```tsx
import { FeatureCard } from './components/webgl';
import { Brain } from 'lucide-react';

<FeatureCard
  icon={<Brain className="w-6 h-6 text-blue-400" />}
  title="Advanced NLP"
  description="Process and understand human language..."
  linkColor="blue"
  animationDelay="-2s"
/>
```

### StatCard

```tsx
import { StatCard } from './components/webgl';

<StatCard value="10M+" label="API Calls Daily" />
```

### Navigation

```tsx
import { Navigation } from './components/webgl';

<Navigation
  links={[
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
  ]}
  ctaText="Get Started"
  onCtaClick={() => console.log('CTA clicked')}
/>
```

## 🎨 Styling

The components use:
- **Tailwind CSS** for utility classes
- **Custom CSS** for animations (webgl-shader.css)
- **Glass morphism**: `backdrop-blur-[14px]` and `backdrop-brightness-[0.91]`
- **Fonts**: Manrope (headings) and Inter (body)

### Key CSS Classes

```css
.floating-animation    /* 6s floating effect */
.pulse-glow           /* Pulsing glow animation */
.gradient-text        /* Gradient text clip */
.logo-circle          /* Animated logo circle */
```

## 🎯 Props Reference

### GlassCardProps
```typescript
{
  children: ReactNode;
  className?: string;
  gradient?: boolean;        // default: true
  floating?: boolean;        // default: false
  animationDelay?: string;   // e.g., "-2s"
}
```

### FeatureCardProps
```typescript
{
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;         // default: "Learn more"
  linkColor?: string;        // "blue" | "indigo" | "purple"
  animationDelay?: string;
}
```

### StatCardProps
```typescript
{
  value: string;
  label: string;
}
```

### NavigationProps
```typescript
{
  links?: Array<{ label: string; href: string }>;
  ctaText?: string;
  onCtaClick?: () => void;
}
```

## 🔧 WebGL Shader Details

The shader creates animated circular patterns with:
- **Rotation**: Time-based rotation using `iTime` uniform
- **Variation**: Sine wave distortion for organic movement
- **Colors**: RGB values based on rotated UV coordinates
- **Performance**: Optimized for 60fps on modern devices

### Shader Uniforms
- `iTime`: Animation time in seconds
- `iResolution`: Canvas resolution (width, height)

## 🎨 Color Palette

- **Background**: `#111`
- **Primary**: Blue-600 (`#3B82F6`)
- **Accent**: Indigo-400, Purple-400
- **Glass**: `rgba(255,255,255,0.05-0.15)`
- **Text**: White with varying opacity (60%, 70%, 100%)

## 🌐 Browser Support

- **Chrome**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Edge**: ✅ Full support
- **WebGL Required**: Components gracefully handle WebGL unavailability

## ♿ Accessibility

- **ARIA Labels**: All interactive elements labeled
- **Keyboard Navigation**: Full keyboard support
- **Reduced Motion**: Animations disabled when `prefers-reduced-motion` is set
- **Screen Readers**: Proper semantic HTML and ARIA attributes
- **Color Contrast**: WCAG AA compliant

## 🚀 Performance

- **WebGL Rendering**: 60fps target
- **Animations**: GPU-accelerated CSS transforms
- **Cleanup**: Proper WebGL context cleanup on unmount
- **Responsive**: Debounced window resize handling

## 📚 Dependencies

- **React** 18+ or 19+
- **TypeScript** 5+
- **Tailwind CSS** 3+
- **Lucide React** (for icons)

## 🔄 Integration

The components follow the existing project patterns and can be integrated into:
- Landing pages
- Product showcases
- AI/ML platform interfaces
- Modern web applications

## 📝 Notes

- WebGL canvas is fixed-position and covers the entire viewport
- All content is layered above the shader background (z-index management)
- Components are fully typed with TypeScript
- CSS animations support reduced motion preferences
- Font weights 200-700 require font support (Manrope, Inter)

## 🎯 Example Implementation

See `WebGLShaderDemo.tsx` for a complete implementation example showcasing all components together.

---

**Status:** Production Ready ✅  
**Performance:** Optimized for 60fps  
**Accessibility:** WCAG 2.1 AA Compliant  
**Browser Support:** Modern browsers with WebGL
