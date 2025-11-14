# Design System Template - Quick Reference

## 🚀 Quick Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Classes

### Primary Colors
```tsx
bg-primary                    // Primary background
text-primary-foreground       // Text on primary background
hover:bg-primary/90          // Primary with 90% opacity on hover
```

### Secondary Colors
```tsx
bg-secondary
text-secondary-foreground
hover:bg-secondary/90
```

### Accent Colors
```tsx
bg-accent
text-accent-foreground
```

### Base Colors
```tsx
bg-background                 // Main background
text-foreground              // Main text color
```

### Card Colors
```tsx
bg-card
text-card-foreground
border-border
```

### Muted Colors
```tsx
bg-muted                     // Subtle background
text-muted-foreground        // Secondary text
```

### Destructive Colors
```tsx
bg-destructive               // Error/delete actions
text-destructive-foreground
```

## 🧩 Component Quick Reference

### Button
```tsx
import { Button } from '@/components/ui/Button';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, 
         CardContent, CardFooter } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input
```tsx
import { Input } from '@/components/ui/Input';

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />
```

### Select
```tsx
import { Select } from '@/components/ui/Select';

<Select>
  <option value="">Choose...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

### Checkbox
```tsx
import { Checkbox } from '@/components/ui/Checkbox';

<Checkbox id="terms" label="I agree to terms" />
<Checkbox id="newsletter" label="Subscribe" defaultChecked />
<Checkbox id="disabled" label="Disabled" disabled />
```

### Badge
```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="default">Default</Badge>
<Badge variant="draft">Draft</Badge>
<Badge variant="submitted">Submitted</Badge>
<Badge variant="approved">Approved</Badge>
<Badge variant="rejected">Rejected</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
```

### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

<Alert variant="default">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>Information message</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Success message</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Error message</AlertDescription>
</Alert>
```

### Avatar
```tsx
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';

// Single avatar
<Avatar size="sm" fallback="JD" />
<Avatar size="md" fallback="AB" src="/avatar.jpg" />
<Avatar size="lg" fallback="CD" />

// Avatar group
<AvatarGroup max={3}>
  <Avatar fallback="JD" />
  <Avatar fallback="AB" />
  <Avatar fallback="CD" />
  <Avatar fallback="EF" />
</AvatarGroup>
```

### Skeleton
```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<Skeleton className="h-4 w-full" />
<Skeleton className="h-4 w-3/4" />
<Skeleton className="h-4 w-1/2" />
```

### ThemeToggle
```tsx
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Switch variant
<ThemeToggle variant="switch" />
<ThemeToggle variant="switch" showLabel />

// Button variant
<ThemeToggle variant="button" />
<ThemeToggle variant="button" showLabel />
```

### ThemePreview
```tsx
import { ThemePreview, ThemeComparisonCard } from '@/components/ui/ThemePreview';

// Simple preview
<ThemePreview>
  <Button variant="primary">Test</Button>
</ThemePreview>

// With title
<ThemeComparisonCard 
  title="Button Component"
  description="Primary button in both themes"
>
  <Button variant="primary">Test</Button>
</ThemeComparisonCard>
```

## 🎭 Theme Hook

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}
```

## 📐 Typography Classes

```tsx
<h1 className="text-h1 font-bold">Heading 1 - 32px</h1>
<h2 className="text-h2 font-bold">Heading 2 - 24px</h2>
<h3 className="text-h3 font-semibold">Heading 3 - 18px</h3>
<p className="text-body">Body text - 16px</p>
<p className="text-small">Small text - 14px</p>
```

## 🎨 Customization Quick Guide

### Change Brand Colors

**1. Edit `src/index.css`:**
```css
:root {
  --primary: 243 67% 59%;  /* Your HSL color */
}

.dark {
  --primary: 243 75% 74%;  /* Lighter for dark mode */
}
```

**2. Edit `style.json`:**
```json
{
  "themes": {
    "light": {
      "primary": {
        "DEFAULT": "rgb(79, 70, 229)"  /* Your RGB color */
      }
    }
  }
}
```

### Change Fonts

**Edit `src/index.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
  --font-sans: 'Inter', sans-serif;
}
```

### Change Border Radius

**Edit `src/index.css`:**
```css
:root {
  --radius: 1rem;  /* Change this value */
}
```

## 🛠️ Utility Functions

### cn() - Merge Classes
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-class',
  condition && 'conditional-class',
  'another-class',
  className  // From props
)}>
```

## 📁 File Locations

```
Configuration:
├── tailwind.config.js      - Tailwind config
├── style.json              - Design tokens
└── src/index.css           - CSS variables

Components:
├── src/components/ui/      - UI components
├── src/components/layout/  - Layout components
└── src/contexts/           - React contexts

Pages:
├── src/pages/ComponentsPage.tsx      - Component showcase
└── src/pages/ThemeShowcasePage.tsx   - Theme comparison

Documentation:
└── docs/                   - All documentation
```

## 🔍 Common Tasks

### Add New Component
```bash
# 1. Create component file
touch src/components/ui/MyComponent.tsx

# 2. Add to ComponentsPage
# 3. Add to ThemeShowcasePage
# 4. Document in docs/COMPONENTS.md
```

### Change Theme
```tsx
// Programmatically
const { setTheme } = useTheme();
setTheme('dark');

// Toggle
const { toggleTheme } = useTheme();
toggleTheme();
```

### Test in Both Themes
```tsx
// Navigate to Theme Showcase page
// Or use ThemePreview component
<ThemePreview>
  <MyComponent />
</ThemePreview>
```

## 🎯 HSL Color Format

```
HSL: Hue Saturation Lightness
--primary: 243 67% 59%
           ↑   ↑   ↑
           H   S   L

H: 0-360 (color wheel degree)
S: 0-100% (color intensity)
L: 0-100% (lightness)
```

**Tools:**
- https://hslpicker.com/
- https://www.rapidtables.com/convert/color/hsl-to-rgb.html

## 📊 Semantic Color Usage

```tsx
// Primary - Main brand actions
<Button variant="primary">Save</Button>

// Secondary - Supporting actions
<Button variant="secondary">Cancel</Button>

// Accent - Highlights, badges
<Badge variant="submitted">New</Badge>

// Destructive - Errors, delete
<Button variant="destructive">Delete</Button>

// Muted - Secondary text
<p className="text-muted-foreground">Helper text</p>
```

## ⌨️ Keyboard Shortcuts

```
Tab         - Navigate between elements
Enter/Space - Activate buttons/links
Esc         - Close modals/dropdowns
```

## 🆘 Troubleshooting

### Theme not switching
```tsx
// Check ThemeProvider wraps app
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Colors not updating
```bash
# Clear cache and rebuild
npm run build
npm run dev
```

### TypeScript errors
```bash
# Check imports use @ alias
import { Button } from '@/components/ui/Button';
```

## 📚 Documentation Links

- [Setup Guide](./SETUP.md)
- [Components](./COMPONENTS.md)
- [Theme System](./THEME_SYSTEM.md)
- [Color System](./COLOR_SYSTEM.md)
- [Customization](./CUSTOMIZATION.md)
- [Best Practices](./BEST_PRACTICES.md)

---

**Quick reference for common tasks!** ⚡

