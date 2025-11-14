# Design System Template - Best Practices

## 🎯 Core Principles

### 1. Consistency
- Use semantic color names (primary, secondary) not specific colors (blue, red)
- Follow established patterns for new components
- Maintain consistent spacing and sizing
- Use design tokens from style.json

### 2. Accessibility
- Ensure proper color contrast (WCAG AA minimum)
- Include ARIA labels for interactive elements
- Support keyboard navigation
- Test with screen readers
- Respect user's motion preferences

### 3. Maintainability
- Keep components small and focused
- Document all props and usage
- Write self-documenting code
- Follow TypeScript best practices
- Keep files under 300 lines

### 4. Performance
- Lazy load components when possible
- Optimize images and assets
- Minimize bundle size
- Use CSS variables for theming
- Avoid unnecessary re-renders

## 🎨 Color System Best Practices

### ✅ DO

```tsx
// Use semantic color tokens
<Button className="bg-primary text-primary-foreground">
<div className="bg-card text-card-foreground">
<p className="text-muted-foreground">

// Use theme-aware colors
<div className="bg-background text-foreground">

// Use proper foreground/background pairs
<div className="bg-destructive text-destructive-foreground">
```

### ❌ DON'T

```tsx
// Don't hardcode colors
<Button className="bg-blue-500 text-white">
<div className="bg-gray-100 text-black">

// Don't use non-semantic names
<div className="bg-[#4F46E5]">

// Don't mix incompatible pairs
<div className="bg-primary text-secondary-foreground">  // Wrong!
```

### Color Naming Convention

**Pattern**: `{purpose}-{variant}`

```
primary              // Main brand color
primary-foreground   // Text on primary background
secondary            // Supporting color
secondary-foreground // Text on secondary background
```

### Testing Colors

Always test in both themes:
1. Navigate to Theme Showcase
2. Verify contrast ratios
3. Check readability
4. Test with color blindness simulators

## 🧩 Component Best Practices

### Component Structure

```tsx
import React from 'react';
import { cn } from '@/lib/utils';

// 1. Define props interface
interface ComponentProps {
  variant?: 'default' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

// 2. Component with default props
export function Component({ 
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}: ComponentProps) {
  // 3. Use cn() for className merging
  return (
    <div 
      className={cn(
        'base-styles',
        variant === 'default' && 'variant-styles',
        size === 'sm' && 'size-styles',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
```

### Variant Patterns

```tsx
// ✅ Good: Clear variant mapping
const variantStyles = {
  primary: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  destructive: 'bg-destructive text-destructive-foreground',
};

<button className={cn('base-styles', variantStyles[variant])}>

// ❌ Bad: Inline conditionals
<button className={cn(
  variant === 'primary' ? 'bg-primary text-primary-foreground' :
  variant === 'secondary' ? 'bg-secondary text-secondary-foreground' :
  'bg-destructive text-destructive-foreground'
)}>
```

### Size Patterns

```tsx
const sizeStyles = {
  sm: 'px-3 py-1.5 text-small',
  md: 'px-4 py-2 text-body',
  lg: 'px-6 py-3 text-body',
};
```

### Props Best Practices

```tsx
// ✅ Good: Optional props with defaults
interface ButtonProps {
  variant?: 'primary' | 'secondary';  // Optional with union type
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;  // Required
  className?: string;  // Always optional
  onClick?: () => void;
}

// ❌ Bad: Required props that should be optional
interface ButtonProps {
  variant: string;  // Should be optional with union type
  size: string;     // Should be optional with union type
}
```

## 📝 Documentation Best Practices

### Component Documentation

```tsx
/**
 * Button Component
 * 
 * A versatile button component with multiple variants and sizes.
 * 
 * @param variant - Button style variant (default: 'primary')
 * @param size - Button size (default: 'md')
 * @param disabled - Whether button is disabled
 * @param children - Button content
 * @param className - Additional CSS classes
 * 
 * @example
 * // Primary button
 * <Button variant="primary">Click me</Button>
 * 
 * // Small secondary button
 * <Button variant="secondary" size="sm">Small</Button>
 * 
 * // Disabled button
 * <Button disabled>Disabled</Button>
 */
export function Button({ ... }) { ... }
```

### Usage Examples

Always include:
1. Basic usage
2. All variants
3. All sizes
4. Edge cases (disabled, loading, etc.)
5. Common combinations

## 🎭 Theme Best Practices

### Theme Context Usage

```tsx
// ✅ Good: Use theme context
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

// ❌ Bad: Direct localStorage access
function MyComponent() {
  const theme = localStorage.getItem('theme');  // Don't do this
}
```

### Theme-Aware Styling

```tsx
// ✅ Good: Use CSS variables
<div className="bg-background text-foreground">

// ✅ Good: Conditional classes based on theme
const { theme } = useTheme();
<div className={theme === 'dark' ? 'special-dark-style' : 'special-light-style'}>

// ❌ Bad: Hardcoded theme-specific colors
<div className="bg-white dark:bg-black">  // Use bg-background instead
```

### Testing Themes

```tsx
// Use ThemePreview for component documentation
import { ThemePreview } from '@/components/ui/ThemePreview';

<ThemePreview>
  <MyComponent />
</ThemePreview>
```

## 🔧 TypeScript Best Practices

### Type Definitions

```tsx
// ✅ Good: Explicit types
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// ❌ Bad: Any types
interface ButtonProps {
  variant?: any;
  onClick?: any;
}
```

### Extending HTML Elements

```tsx
// ✅ Good: Extend native element props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant, ...props }: ButtonProps) {
  return <button {...props} />;
}
```

### Generic Components

```tsx
// ✅ Good: Generic type for flexible components
interface SelectProps<T> {
  options: T[];
  value: T;
  onChange: (value: T) => void;
  getLabel: (option: T) => string;
}

export function Select<T>({ options, value, onChange, getLabel }: SelectProps<T>) {
  // Implementation
}
```

## 📦 File Organization Best Practices

### Component Files

```
Button.tsx              // ✅ One component per file
Button/                 // ❌ Don't create folder for simple components
  index.tsx
  Button.tsx
  Button.styles.ts
```

### Import Organization

```tsx
// ✅ Good: Organized imports
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party imports
import { cn } from '@/lib/utils';
import { Icon } from 'lucide-react';

// 3. Local imports
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/Button';

// 4. Types
import type { ComponentProps } from './types';
```

### Path Aliases

```tsx
// ✅ Good: Use @ alias
import { Button } from '@/components/ui/Button';
import { useTheme } from '@/contexts/ThemeContext';

// ❌ Bad: Relative paths
import { Button } from '../../components/ui/Button';
import { useTheme } from '../../../contexts/ThemeContext';
```

## ♿ Accessibility Best Practices

### ARIA Labels

```tsx
// ✅ Good: Descriptive ARIA labels
<button 
  aria-label="Toggle dark mode"
  onClick={toggleTheme}
>
  <Moon />
</button>

// ❌ Bad: Missing ARIA labels
<button onClick={toggleTheme}>
  <Moon />  // Screen readers can't understand this
</button>
```

### Keyboard Navigation

```tsx
// ✅ Good: Keyboard support
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</div>
```

### Focus Indicators

```css
/* ✅ Good: Visible focus indicators */
.button {
  @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring;
}

/* ❌ Bad: Removing focus indicators */
.button {
  outline: none;  /* Don't do this */
}
```

### Color Contrast

```tsx
// ✅ Good: Proper foreground/background pairs
<div className="bg-primary text-primary-foreground">  // High contrast

// ❌ Bad: Poor contrast
<div className="bg-primary text-secondary">  // May have poor contrast
```

## 🚀 Performance Best Practices

### Avoid Unnecessary Re-renders

```tsx
// ✅ Good: Memoize expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// ✅ Good: Memoize callbacks
const handleClick = useCallback(() => {
  doSomething();
}, []);
```

### Lazy Loading

```tsx
// ✅ Good: Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Skeleton />}>
  <HeavyComponent />
</Suspense>
```

### CSS Variables vs Inline Styles

```tsx
// ✅ Good: Use CSS variables
<div className="bg-primary">

// ❌ Bad: Inline styles (harder to theme)
<div style={{ backgroundColor: '#4F46E5' }}>
```

## 📊 Testing Best Practices

### Component Testing

```tsx
// Test all variants
describe('Button', () => {
  it('renders primary variant', () => {
    render(<Button variant="primary">Click</Button>);
  });
  
  it('renders secondary variant', () => {
    render(<Button variant="secondary">Click</Button>);
  });
  
  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    // Test click
  });
});
```

### Theme Testing

```tsx
// Test in both themes
describe('Component in themes', () => {
  it('renders correctly in light theme', () => {
    // Test light theme
  });
  
  it('renders correctly in dark theme', () => {
    // Test dark theme
  });
});
```

## ✅ Checklist for New Components

- [ ] Component follows naming conventions
- [ ] Props interface defined with TypeScript
- [ ] Default props provided
- [ ] Uses semantic color tokens
- [ ] Includes all necessary variants
- [ ] Supports all sizes (if applicable)
- [ ] Accessible (ARIA, keyboard, focus)
- [ ] Documented with JSDoc comments
- [ ] Usage examples provided
- [ ] Added to ComponentsPage
- [ ] Added to ThemeShowcasePage
- [ ] Tested in both themes
- [ ] Tested for accessibility
- [ ] No TypeScript errors
- [ ] No console warnings

---

**Follow these best practices for a maintainable, accessible design system!** ✨

