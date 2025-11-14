# Theme System - Quick Reference Guide

## 🎯 Quick Start

### View Components in Dark Mode

**Option 1: Toggle Global Theme**
- Click the Sun/Moon icon in the header (top-right)
- Entire app switches to dark mode

**Option 2: Theme Showcase Page** ⭐ Recommended
- Navigate to **"Theme Showcase"** in sidebar
- See all components in both themes side-by-side
- No toggling needed!

**Option 3: Theme Preview Component**
- Go to **"UI Components"** page
- Scroll to **"Theme Preview"** section
- See individual component comparisons

## 🔧 Using Theme in Your Code

### Toggle Theme Programmatically

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <div>
      <p>Current: {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
      <button onClick={() => setTheme('dark')}>Force Dark</button>
    </div>
  );
}
```

### Add Theme Toggle Button

```tsx
import { ThemeToggle } from '@/components/ui/ThemeToggle';

// Switch variant (animated toggle)
<ThemeToggle variant="switch" />
<ThemeToggle variant="switch" showLabel />

// Button variant (icon button)
<ThemeToggle variant="button" />
<ThemeToggle variant="button" showLabel />
```

### Preview Component in Both Themes

```tsx
import { ThemePreview, ThemeComparisonCard } from '@/components/ui/ThemePreview';

// Simple preview
<ThemePreview>
  <Button variant="primary">Click me</Button>
</ThemePreview>

// With title and description
<ThemeComparisonCard 
  title="My Component" 
  description="See it in both themes"
>
  <Button variant="primary">Click me</Button>
</ThemeComparisonCard>
```

## 🎨 Using Theme Colors

### Always Use Design Tokens

```tsx
// ✅ GOOD - Uses theme-aware colors
<div className="bg-background text-foreground">
<div className="bg-card text-card-foreground">
<div className="bg-primary text-primary-foreground">

// ❌ BAD - Hardcoded colors (won't change with theme)
<div className="bg-white text-black">
<div className="bg-gray-100 text-gray-900">
```

### Available Color Tokens

**Backgrounds:**
- `bg-background` - Main background
- `bg-card` - Card background
- `bg-muted` - Muted/subtle background
- `bg-popover` - Popover background

**Text:**
- `text-foreground` - Main text
- `text-muted-foreground` - Muted text
- `text-card-foreground` - Card text

**Semantic:**
- `bg-primary` / `text-primary-foreground` - Primary actions
- `bg-secondary` / `text-secondary-foreground` - Secondary actions
- `bg-destructive` / `text-destructive-foreground` - Destructive actions
- `bg-accent` / `text-accent-foreground` - Accent elements

**Borders:**
- `border-border` - Standard borders
- `border-input` - Input borders

## 🚀 Common Tasks

### Check if Component Works in Dark Mode

1. Navigate to **Theme Showcase** page
2. Find your component in the list
3. Verify it looks good in both themes
4. Check contrast and readability

### Add New Component to Theme Showcase

Edit `src/pages/ThemeShowcasePage.tsx`:

```tsx
<ThemeComparisonCard 
  title="My New Component" 
  description="Description here"
>
  <MyNewComponent />
</ThemeComparisonCard>
```

### Disable Transitions for Specific Elements

```tsx
// For elements that shouldn't animate during theme changes
<div data-no-transition>
  <img src="logo.png" alt="Logo" />
</div>
```

### Get Current Theme Value

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme } = useTheme();
  
  // Use theme value for conditional logic
  if (theme === 'dark') {
    // Do something specific for dark mode
  }
}
```

## 📍 Where to Find Things

### Files
- **Theme Context:** `src/contexts/ThemeContext.tsx`
- **Theme Toggle:** `src/components/ui/ThemeToggle.tsx`
- **Theme Preview:** `src/components/ui/ThemePreview.tsx`
- **Theme Colors:** `src/index.css`
- **Tailwind Config:** `tailwind.config.js`

### Pages
- **Theme Showcase:** Sidebar → Design System → Theme Showcase
- **UI Components:** Sidebar → Design System → UI Components
- **Theme Toggle Section:** UI Components page → Theme Toggle
- **Theme Preview Section:** UI Components page → Theme Preview

### Documentation
- **Complete Guide:** `THEME_SYSTEM.md`
- **Implementation Summary:** `THEME_IMPLEMENTATION_SUMMARY.md`
- **This Guide:** `THEME_QUICK_REFERENCE.md`

## 🎯 Best Practices

### ✅ DO

- Use design system color tokens (`bg-background`, `text-foreground`, etc.)
- Test components in both light and dark themes
- Use `ThemePreview` for component showcases
- Respect user's system preference
- Use semantic color names (`primary`, `destructive`, etc.)

### ❌ DON'T

- Hardcode colors (`bg-white`, `text-black`)
- Assume users will only use one theme
- Override theme colors with inline styles
- Forget to test in dark mode
- Use non-semantic color values

## 🔍 Troubleshooting

### Component Doesn't Change with Theme

**Problem:** Component colors don't update when theme changes

**Solution:** Make sure you're using design tokens:
```tsx
// Change this:
<div className="bg-white text-black">

// To this:
<div className="bg-background text-foreground">
```

### Theme Doesn't Persist

**Problem:** Theme resets to light on page reload

**Solution:** Check browser console for localStorage errors. The theme should automatically save to localStorage.

### Flash of Wrong Theme on Load

**Problem:** Brief flash of light theme before dark theme loads

**Solution:** This is already handled by the `mounted` state in ThemeContext. If you still see it, check that ThemeProvider wraps your entire app.

### Colors Look Wrong in Dark Mode

**Problem:** Poor contrast or unreadable text in dark mode

**Solution:** 
1. Use the Theme Showcase page to identify issues
2. Make sure you're using the correct foreground/background pairs
3. Check `src/index.css` for dark theme color definitions

## 📊 Theme Color Reference

### Light Theme
```
Background: rgb(247, 249, 243)
Foreground: rgb(0, 0, 0)
Primary: rgb(79, 70, 229)
Secondary: rgb(20, 184, 166)
Accent: rgb(245, 158, 11)
```

### Dark Theme
```
Background: rgb(0, 0, 0)
Foreground: rgb(255, 255, 255)
Primary: rgb(129, 140, 248)
Secondary: rgb(45, 212, 191)
Accent: rgb(252, 211, 77)
```

## 🎓 Learning Path

1. **Beginner:** Use the theme toggle in the header
2. **Intermediate:** Visit Theme Showcase page to see all components
3. **Advanced:** Use `useTheme()` hook in your components
4. **Expert:** Create custom theme-aware components with `ThemePreview`

## 💡 Pro Tips

- **Keyboard Shortcut:** Tab to theme toggle, press Enter/Space to toggle
- **System Sync:** Clear localStorage to test system preference detection
- **Quick Preview:** Use Theme Showcase page for fast visual checks
- **Component Testing:** Add your components to Theme Showcase for easy testing
- **Accessibility:** Theme system respects `prefers-reduced-motion`

## 🔗 Related Resources

- [Complete Theme Documentation](THEME_SYSTEM.md)
- [Implementation Summary](THEME_IMPLEMENTATION_SUMMARY.md)
- [Component Library](COMPONENT_LIBRARY.md)
- [Design System Overview](README.md)

---

**Need Help?** Check the full documentation in `THEME_SYSTEM.md` or the implementation summary in `THEME_IMPLEMENTATION_SUMMARY.md`.

