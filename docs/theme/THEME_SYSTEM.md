# Theme System Documentation

## Overview

The design system includes a comprehensive theme management system that supports light and dark modes with smooth transitions, localStorage persistence, and system preference detection.

## Features

✅ **Implemented Features:**
1. ✨ Toggle between light and dark themes
2. 💾 Persist theme preference in localStorage
3. 🖥️ Detect and respect system color scheme preference
4. 🎨 Smooth transitions between themes
5. ♿ Accessible with ARIA labels and keyboard support
6. 🔄 Automatic theme synchronization across tabs
7. 📱 Responsive theme toggle UI

## Architecture

### ThemeContext

The theme system is built on React Context API, providing global theme state management.

**Location:** `src/contexts/ThemeContext.tsx`

**Key Features:**
- Initializes theme from localStorage or system preference
- Applies theme class to document root (`<html>`)
- Saves theme preference to localStorage
- Listens for system theme changes
- Prevents flash of unstyled content (FOUC)

**API:**
```tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
```

**Usage:**
```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={() => setTheme('dark')}>Force Dark</button>
    </div>
  );
}
```

### ThemeToggle Component

A reusable component for toggling themes with multiple variants.

**Location:** `src/components/ui/ThemeToggle.tsx`

**Props:**
```tsx
interface ThemeToggleProps {
  variant?: 'switch' | 'button';  // Default: 'switch'
  showLabel?: boolean;             // Default: false
  className?: string;
}
```

**Variants:**

1. **Switch Variant** - Toggle switch UI with animated slider
   ```tsx
   <ThemeToggle variant="switch" />
   <ThemeToggle variant="switch" showLabel />
   ```

2. **Button Variant** - Button with icon and optional label
   ```tsx
   <ThemeToggle variant="button" />
   <ThemeToggle variant="button" showLabel />
   ```

## Theme Initialization

The theme is initialized in the following priority order:

1. **localStorage** - Previously saved user preference
2. **System Preference** - `prefers-color-scheme` media query
3. **Default** - Falls back to 'light' theme

```tsx
function getInitialTheme(): Theme {
  // 1. Check localStorage
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // 2. Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  // 3. Default to light
  return 'light';
}
```

## Theme Transitions

Smooth transitions are applied globally via CSS:

**Location:** `src/index.css`

```css
/* Smooth theme transitions */
html {
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Disable transitions for specific elements */
*:where([data-no-transition], [data-no-transition] *) {
  transition: none !important;
}

/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Theme Colors

Colors are defined using CSS custom properties that change based on the theme class.

**Location:** `src/index.css`

### Light Theme
```css
:root {
  --background: 247 249 243;
  --foreground: 0 0 0;
  --primary: 79 70 229;
  --secondary: 20 184 166;
  --accent: 245 158 11;
  --destructive: 239 68 68;
  /* ... more colors */
}
```

### Dark Theme
```css
.dark {
  --background: 0 0 0;
  --foreground: 255 255 255;
  --primary: 129 140 248;
  --secondary: 45 212 191;
  --accent: 252 211 77;
  --destructive: 248 113 113;
  /* ... more colors */
}
```

## Tailwind Configuration

The theme system uses Tailwind's `darkMode: 'class'` strategy.

**Location:** `tailwind.config.js`

```js
export default {
  darkMode: 'class',
  // ...
}
```

This allows toggling dark mode by adding/removing the `dark` class on the `<html>` element.

## System Preference Detection

The theme system automatically detects and responds to system theme changes:

```tsx
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  const handleChange = (e: MediaQueryListEvent) => {
    // Only update if user hasn't set a preference
    const stored = localStorage.getItem('theme');
    if (!stored) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  };

  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

## Accessibility

The theme toggle components include proper accessibility features:

- **ARIA Labels:** Descriptive labels for screen readers
- **Role Attributes:** `role="switch"` for toggle switches
- **Keyboard Support:** Full keyboard navigation support
- **Focus Indicators:** Visible focus rings for keyboard users
- **Motion Preferences:** Respects `prefers-reduced-motion`

```tsx
<button
  role="switch"
  aria-checked={isDark}
  aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
  onClick={toggleTheme}
>
  {/* ... */}
</button>
```

## Best Practices

### 1. Use Theme-Aware Colors
Always use design system color tokens instead of hardcoded colors:

```tsx
// ✅ Good - Uses theme-aware colors
<div className="bg-background text-foreground">

// ❌ Bad - Hardcoded colors
<div className="bg-white text-black">
```

### 2. Test Both Themes
Always test your components in both light and dark themes to ensure proper contrast and readability.

### 3. Disable Transitions When Needed
For elements that shouldn't animate during theme changes:

```tsx
<div data-no-transition>
  {/* Content that shouldn't transition */}
</div>
```

### 4. Respect User Preferences
The system automatically respects:
- Saved user preferences (localStorage)
- System color scheme preferences
- Motion preferences (prefers-reduced-motion)

## Integration Example

Here's how the theme system is integrated in the application:

**App.tsx:**
```tsx
import { ThemeProvider } from '@/contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

**Header.tsx:**
```tsx
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  return (
    <header>
      <ThemeToggle variant="button" showLabel />
    </header>
  );
}
```

## Troubleshooting

### Flash of Unstyled Content (FOUC)

The ThemeProvider includes a `mounted` state to prevent FOUC:

```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return null;
}
```

### Theme Not Persisting

Ensure localStorage is available and not blocked:

```tsx
// Check if localStorage is available
if (typeof window !== 'undefined' && window.localStorage) {
  localStorage.setItem('theme', theme);
}
```

### Colors Not Updating

Make sure you're using CSS custom properties correctly:

```css
/* ✅ Correct */
background-color: rgb(var(--background));

/* ❌ Incorrect */
background-color: var(--background);
```

## Future Enhancements

Potential improvements for the theme system:

- [ ] Multiple theme options (not just light/dark)
- [ ] Custom theme builder
- [ ] Theme preview mode
- [ ] Scheduled theme switching (e.g., auto dark mode at night)
- [ ] Per-component theme overrides
- [ ] Theme export/import functionality

## Related Files

- `src/contexts/ThemeContext.tsx` - Theme context and provider
- `src/components/ui/ThemeToggle.tsx` - Theme toggle component
- `src/components/layout/Header.tsx` - Header with theme toggle
- `src/index.css` - Theme colors and transitions
- `tailwind.config.js` - Tailwind dark mode configuration
- `style.json` - Design system theme definitions

