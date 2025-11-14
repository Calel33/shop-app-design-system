# Design System Template - Customization Guide

## 🎨 Customizing Your Design System

This guide covers all aspects of customizing the design system template for your brand.

## 1. Brand Colors

### Step 1: Choose Your Colors

Pick your brand colors:
- **Primary**: Main brand color (buttons, links, active states)
- **Secondary**: Supporting color (secondary actions)
- **Accent**: Highlight color (badges, notifications, special elements)

**Tools to help:**
- [HSL Color Picker](https://hslpicker.com/)
- [Coolors](https://coolors.co/) - Color palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel

### Step 2: Convert to HSL

Use https://hslpicker.com/ to get HSL values from your hex/RGB colors.

**Example:**
- Hex: `#4F46E5`
- RGB: `rgb(79, 70, 229)`
- HSL: `hsl(243, 67%, 59%)` → `243 67% 59%` (space-separated)

### Step 3: Update Light Theme

Edit `src/index.css`:

```css
:root {
  /* Primary Colors - YOUR BRAND */
  --primary: 243 67% 59%;           /* Change to your HSL */
  --primary-foreground: 0 0% 100%;  /* Usually white */

  /* Secondary Colors */
  --secondary: 173 80% 40%;         /* Change to your HSL */
  --secondary-foreground: 0 0% 100%;

  /* Accent Colors */
  --accent: 32 95% 50%;             /* Change to your HSL */
  --accent-foreground: 0 0% 0%;     /* Usually black */

  /* Base Colors - Usually keep these */
  --background: 90 33% 97%;         /* Off-white background */
  --foreground: 0 0% 0%;            /* Black text */

  /* Card Colors */
  --card: 0 0% 100%;                /* White cards */
  --card-foreground: 0 0% 0%;

  /* Muted Colors */
  --muted: 0 0% 94%;                /* Light gray */
  --muted-foreground: 0 0% 20%;     /* Dark gray */

  /* Destructive Colors - Usually keep red */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  /* Border & Input */
  --border: 0 0% 0%;                /* Black borders */
  --input: 0 0% 45%;                /* Gray input text */
  --ring: 243 67% 82%;              /* Focus ring - matches primary */
}
```

### Step 4: Update Dark Theme

For dark mode, use **lighter versions** of your colors:

```css
.dark {
  /* Primary Colors - LIGHTER than light mode */
  --primary: 243 75% 74%;           /* Lighter version */
  --primary-foreground: 0 0% 0%;    /* Black text on light bg */

  /* Secondary Colors */
  --secondary: 173 80% 50%;         /* Lighter version */
  --secondary-foreground: 0 0% 0%;

  /* Accent Colors */
  --accent: 43 96% 65%;             /* Lighter version */
  --accent-foreground: 0 0% 0%;

  /* Base Colors */
  --background: 0 0% 0%;            /* Black background */
  --foreground: 0 0% 100%;          /* White text */

  /* Card Colors */
  --card: 210 24% 13%;              /* Dark blue-gray */
  --card-foreground: 0 0% 100%;

  /* Muted Colors */
  --muted: 0 0% 20%;                /* Dark gray */
  --muted-foreground: 0 0% 80%;     /* Light gray */

  /* Destructive Colors */
  --destructive: 0 91% 71%;         /* Lighter red */
  --destructive-foreground: 0 0% 0%;

  /* Border & Input */
  --border: 0 0% 33%;               /* Gray borders */
  --input: 0 0% 100%;               /* White input text */
  --ring: 243 75% 74%;              /* Matches primary */
}
```

### Step 5: Update style.json

Convert your HSL colors to RGB for `style.json`:

```json
{
  "themes": {
    "light": {
      "primary": {
        "DEFAULT": "rgb(79, 70, 229)",      // Your color in RGB
        "foreground": "rgb(255, 255, 255)"
      },
      "secondary": {
        "DEFAULT": "rgb(20, 184, 166)",
        "foreground": "rgb(255, 255, 255)"
      },
      "accent": {
        "DEFAULT": "rgb(245, 158, 11)",
        "foreground": "rgb(0, 0, 0)"
      }
    },
    "dark": {
      "primary": {
        "DEFAULT": "rgb(129, 140, 248)",    // Lighter version
        "foreground": "rgb(0, 0, 0)"
      },
      "secondary": {
        "DEFAULT": "rgb(45, 212, 191)",
        "foreground": "rgb(0, 0, 0)"
      },
      "accent": {
        "DEFAULT": "rgb(252, 211, 77)",
        "foreground": "rgb(0, 0, 0)"
      }
    }
  }
}
```

**Conversion tool:** https://www.rapidtables.com/convert/color/hsl-to-rgb.html

### Step 6: Test Your Colors

1. Run `npm run dev`
2. Navigate to **Theme Showcase** page
3. Verify colors in both light and dark modes
4. Check contrast ratios (use browser DevTools)
5. Test with color blindness simulators

## 2. Typography

### Change Font Families

**Step 1: Import Fonts**

Edit `src/index.css`:

```css
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

/* Or use local fonts */
@font-face {
  font-family: 'MyCustomFont';
  src: url('/fonts/MyCustomFont.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

**Step 2: Update CSS Variables**

```css
:root {
  --font-sans: 'Inter', ui-sans-serif, sans-serif, system-ui;
  --font-serif: 'Georgia', ui-serif, serif;
  --font-mono: 'Fira Code', ui-monospace, monospace;
}
```

**Step 3: Update Tailwind Config**

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
}
```

### Change Font Sizes

Edit `src/index.css`:

```css
@layer base {
  .text-h1 {
    font-size: 2rem;        /* 32px - Change as needed */
    line-height: 2.5rem;    /* 40px */
    font-weight: 700;
  }
  
  .text-h2 {
    font-size: 1.5rem;      /* 24px */
    line-height: 2rem;      /* 32px */
    font-weight: 700;
  }
  
  .text-h3 {
    font-size: 1.125rem;    /* 18px */
    line-height: 1.75rem;   /* 28px */
    font-weight: 600;
  }
  
  .text-body {
    font-size: 1rem;        /* 16px */
    line-height: 1.5rem;    /* 24px */
  }
  
  .text-small {
    font-size: 0.875rem;    /* 14px */
    line-height: 1.25rem;   /* 20px */
  }
}
```

### Change Font Weights

```css
@layer base {
  .text-h1 {
    font-weight: 800;  /* Extra bold */
  }
  
  .text-h2 {
    font-weight: 700;  /* Bold */
  }
  
  .text-h3 {
    font-weight: 600;  /* Semi-bold */
  }
}
```

## 3. Spacing & Layout

### Change Border Radius

Edit `src/index.css`:

```css
:root {
  --radius: 1rem;      /* 16px - Default */
  --radius: 0.5rem;    /* 8px - Smaller */
  --radius: 0.25rem;   /* 4px - Minimal */
  --radius: 1.5rem;    /* 24px - Larger */
}
```

This affects:
- `rounded-lg` → `var(--radius)`
- `rounded-md` → `calc(var(--radius) - 2px)`
- `rounded-sm` → `calc(var(--radius) - 4px)`

### Change Spacing Scale

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',   // Add custom spacing
        '88': '22rem',
      },
    },
  },
}
```

## 4. Shadows

### Customize Shadow Colors

Edit `src/index.css`:

```css
:root {
  --shadow-color: #1a1a1a;  /* Change shadow color */
}

.dark {
  --shadow-color: #000000;  /* Darker shadows in dark mode */
}
```

### Customize Shadow Sizes

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
```

## 5. Component Customization

### Customize Button Styles

Edit `src/components/ui/Button.tsx`:

```tsx
const variantStyles = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
  // Add custom variant
  custom: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
};
```

### Customize Card Styles

Edit `src/components/ui/Card.tsx`:

```tsx
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground',
        'shadow-md',  // Add shadow
        'hover:shadow-lg transition-shadow',  // Add hover effect
        className
      )}
      {...props}
    />
  );
}
```

### Add New Component Variants

```tsx
// Add to existing component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'custom' | 'gradient';  // Add new
}

const variantStyles = {
  // ... existing variants
  gradient: 'bg-gradient-to-r from-primary to-secondary text-white',
};
```

## 6. Theme Customization

### Add Custom Theme Variables

Edit `src/index.css`:

```css
:root {
  /* Your custom variables */
  --success: 142 76% 45%;
  --success-foreground: 0 0% 100%;
  
  --warning: 32 95% 50%;
  --warning-foreground: 0 0% 0%;
  
  --info: 210 100% 50%;
  --info-foreground: 0 0% 100%;
}

.dark {
  --success: 142 76% 58%;
  --warning: 43 96% 65%;
  --info: 210 100% 60%;
}
```

### Add to Tailwind Config

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },
      },
    },
  },
}
```

### Use Custom Colors

```tsx
<Button className="bg-success text-success-foreground">
  Success
</Button>

<Alert className="bg-warning text-warning-foreground">
  Warning message
</Alert>
```

## 7. Animation & Transitions

### Customize Transition Duration

Edit `src/index.css`:

```css
@layer utilities {
  * {
    transition-duration: 200ms;  /* Change to 150ms, 300ms, etc. */
  }
}
```

### Add Custom Animations

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
}
```

## 8. Responsive Breakpoints

### Customize Breakpoints

Edit `tailwind.config.js`:

```javascript
export default {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Add custom breakpoints
      'tablet': '900px',
      'desktop': '1200px',
    },
  },
}
```

## 9. Project Metadata

### Update package.json

```json
{
  "name": "my-design-system",
  "version": "1.0.0",
  "description": "My custom design system",
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-design-system"
  }
}
```

### Update HTML Title

Edit `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Design System</title>
    <meta name="description" content="My custom design system" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## ✅ Customization Checklist

- [ ] Brand colors updated in `src/index.css`
- [ ] Colors updated in `style.json`
- [ ] Fonts imported and configured
- [ ] Typography sizes adjusted
- [ ] Border radius customized
- [ ] Shadows customized
- [ ] Component variants added/modified
- [ ] Custom theme variables added
- [ ] Animations customized
- [ ] Breakpoints adjusted
- [ ] Project metadata updated
- [ ] Tested in both themes
- [ ] Tested on all screen sizes
- [ ] Accessibility verified

---

**Customize every aspect of your design system!** 🎨

