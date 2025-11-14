# Color System Documentation

## 🎨 Semantic Color Structure

The design system uses a semantic color structure organized into clear categories:

### Primary Colors
Used for main actions, primary buttons, and key interactive elements.

**Light Theme:**
- `--primary`: `79 70 229` (Indigo)
- `--primary-foreground`: `255 255 255` (White)

**Dark Theme:**
- `--primary`: `129 140 248` (Light Indigo)
- `--primary-foreground`: `0 0 0` (Black)

**Usage:**
```tsx
<Button variant="primary">Primary Action</Button>
// Uses: bg-primary text-primary-foreground
```

---

### Secondary Colors
Used for secondary actions and supporting elements.

**Light Theme:**
- `--secondary`: `20 184 166` (Teal)
- `--secondary-foreground`: `255 255 255` (White)

**Dark Theme:**
- `--secondary`: `45 212 191` (Light Teal)
- `--secondary-foreground`: `0 0 0` (Black)

**Usage:**
```tsx
<Button variant="secondary">Secondary Action</Button>
// Uses: bg-secondary text-secondary-foreground
```

---

### Accent Colors
Used for highlights, badges, and accent elements.

**Light Theme:**
- `--accent`: `245 158 11` (Amber)
- `--accent-foreground`: `0 0 0` (Black)

**Dark Theme:**
- `--accent`: `252 211 77` (Light Amber)
- `--accent-foreground`: `0 0 0` (Black)

**Usage:**
```tsx
<Badge variant="submitted">Submitted</Badge>
// Uses: bg-accent text-accent-foreground
```

---

### Base Colors
Foundation colors for backgrounds and text.

**Light Theme:**
- `--background`: `247 249 243` (Off-white)
- `--foreground`: `0 0 0` (Black)

**Dark Theme:**
- `--background`: `0 0 0` (Black)
- `--foreground`: `255 255 255` (White)

**Usage:**
```tsx
<div className="bg-background text-foreground">
  Main content area
</div>
```

---

### Card Colors
Used for card components and elevated surfaces.

**Light Theme:**
- `--card`: `255 255 255` (White)
- `--card-foreground`: `0 0 0` (Black)

**Dark Theme:**
- `--card`: `26 33 43` (Dark Blue-Gray)
- `--card-foreground`: `255 255 255` (White)

**Usage:**
```tsx
<Card className="bg-card text-card-foreground">
  Card content
</Card>
```

---

### Popover Colors
Used for popovers, dropdowns, and floating elements.

**Light Theme:**
- `--popover`: `255 255 255` (White)
- `--popover-foreground`: `0 0 0` (Black)

**Dark Theme:**
- `--popover`: `26 33 43` (Dark Blue-Gray)
- `--popover-foreground`: `255 255 255` (White)

**Usage:**
```tsx
<div className="bg-popover text-popover-foreground">
  Dropdown menu
</div>
```

---

### Muted Colors
Used for subtle backgrounds and secondary text.

**Light Theme:**
- `--muted`: `240 240 240` (Light Gray)
- `--muted-foreground`: `51 51 51` (Dark Gray)

**Dark Theme:**
- `--muted`: `51 51 51` (Dark Gray)
- `--muted-foreground`: `204 204 204` (Light Gray)

**Usage:**
```tsx
<p className="text-muted-foreground">
  Secondary text
</p>
<div className="bg-muted">
  Subtle background
</div>
```

---

### Destructive Colors
Used for destructive actions, errors, and warnings.

**Light Theme:**
- `--destructive`: `239 68 68` (Red)
- `--destructive-foreground`: `255 255 255` (White)

**Dark Theme:**
- `--destructive`: `248 113 113` (Light Red)
- `--destructive-foreground`: `0 0 0` (Black)

**Usage:**
```tsx
<Button variant="destructive">Delete</Button>
<Alert variant="destructive">Error message</Alert>
```

---

### Border & Input Colors
Used for borders, inputs, and focus rings.

**Light Theme:**
- `--border`: `0 0 0` (Black)
- `--input`: `115 115 115` (Gray)
- `--ring`: `165 180 252` (Light Indigo)

**Dark Theme:**
- `--border`: `84 84 84` (Gray)
- `--input`: `255 255 255` (White)
- `--ring`: `129 140 248` (Light Indigo)

**Usage:**
```tsx
<Input className="border-border focus:ring-ring" />
<div className="border border-border">
  Bordered element
</div>
```

---

### Chart Colors
Used for data visualization and charts.

**Light Theme:**
- `--chart-1`: `79 70 229` (Indigo)
- `--chart-2`: `20 184 166` (Teal)
- `--chart-3`: `245 158 11` (Amber)
- `--chart-4`: `236 72 153` (Pink)
- `--chart-5`: `34 197 94` (Green)

**Dark Theme:**
- `--chart-1`: `129 140 248` (Light Indigo)
- `--chart-2`: `45 212 191` (Light Teal)
- `--chart-3`: `252 211 77` (Light Amber)
- `--chart-4`: `244 114 182` (Light Pink)
- `--chart-5`: `74 222 128` (Light Green)

**Usage:**
```tsx
<div className="bg-chart-1">Chart segment 1</div>
<div className="bg-chart-2">Chart segment 2</div>
```

---

### Sidebar Colors
Used specifically for sidebar navigation.

**Light Theme:**
- `--sidebar`: `247 249 243` (Off-white)
- `--sidebar-foreground`: `0 0 0` (Black)
- `--sidebar-primary`: `79 70 229` (Indigo)
- `--sidebar-primary-foreground`: `255 255 255` (White)
- `--sidebar-accent`: `245 158 11` (Amber)
- `--sidebar-accent-foreground`: `0 0 0` (Black)
- `--sidebar-border`: `0 0 0` (Black)
- `--sidebar-ring`: `165 180 252` (Light Indigo)

**Dark Theme:**
- `--sidebar`: `0 0 0` (Black)
- `--sidebar-foreground`: `255 255 255` (White)
- `--sidebar-primary`: `129 140 248` (Light Indigo)
- `--sidebar-primary-foreground`: `0 0 0` (Black)
- `--sidebar-accent`: `252 211 77` (Light Amber)
- `--sidebar-accent-foreground`: `0 0 0` (Black)
- `--sidebar-border`: `255 255 255` (White)
- `--sidebar-ring`: `129 140 248` (Light Indigo)

**Usage:**
```tsx
<aside className="bg-sidebar text-sidebar-foreground">
  <button className="bg-sidebar-primary text-sidebar-primary-foreground">
    Active item
  </button>
</aside>
```

---

## 📋 Color Format

All colors are defined as **space-separated RGB values** to work with Tailwind's opacity modifiers:

```css
/* CSS Variable Format */
--primary: 79 70 229;  /* Space-separated RGB */

/* Tailwind Usage */
bg-primary      /* rgb(79 70 229) */
bg-primary/50   /* rgb(79 70 229 / 0.5) - 50% opacity */
bg-primary/90   /* rgb(79 70 229 / 0.9) - 90% opacity */
```

## 🎯 Usage Guidelines

### ✅ DO

```tsx
// Use semantic color tokens
<Button className="bg-primary text-primary-foreground">
<div className="bg-card text-card-foreground">
<p className="text-muted-foreground">

// Use opacity modifiers
<div className="bg-primary/10">  // 10% opacity
<div className="hover:bg-primary/90">  // 90% on hover
```

### ❌ DON'T

```tsx
// Don't use hardcoded colors
<Button className="bg-blue-500 text-white">
<div className="bg-gray-100 text-black">

// Don't use non-semantic names
<div className="bg-[#4F46E5]">
```

## 🔄 How Colors Change with Theme

When the theme toggles from light to dark:

1. The `.dark` class is added to the `<html>` element
2. All CSS variables are updated to their dark theme values
3. Components automatically use the new colors
4. Smooth transitions animate the color changes (200ms)

**Example:**
```tsx
// This button automatically changes colors with the theme
<Button variant="primary">Click me</Button>

// Light theme: bg is rgb(79 70 229), text is rgb(255 255 255)
// Dark theme: bg is rgb(129 140 248), text is rgb(0 0 0)
```

## 📁 File Locations

- **CSS Variables:** `src/index.css`
- **Tailwind Config:** `tailwind.config.js`
- **Theme Definitions:** `style.json`
- **Theme Context:** `src/contexts/ThemeContext.tsx`

## 🧪 Testing Colors

Use the **Theme Showcase** page to see all colors in both themes:

1. Navigate to **Sidebar → Design System → Theme Showcase**
2. See all components with their colors side-by-side
3. Verify contrast and readability in both themes

---

**For complete theme documentation, see `THEME_SYSTEM.md`**

