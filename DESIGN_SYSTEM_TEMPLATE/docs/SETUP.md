# Design System Template - Setup Guide

## 📦 Prerequisites

Before you begin, ensure you have:
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)
- Basic knowledge of React and TypeScript

## 🚀 Step-by-Step Setup

### Step 1: Create New Project from Template

```bash
# Option 1: Copy template directory
cp -r DESIGN_SYSTEM_TEMPLATE my-design-system
cd my-design-system

# Option 2: Clone from repository (if using Git)
git clone <your-template-repo> my-design-system
cd my-design-system
```

### Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

**Core Dependencies:**
- `react` - UI library
- `react-dom` - React DOM renderer
- `typescript` - Type safety
- `tailwindcss` - Utility-first CSS
- `vite` - Build tool
- `lucide-react` - Icon library
- `clsx` - Conditional classnames
- `tailwind-merge` - Merge Tailwind classes

### Step 3: Configure Project Name

Edit `package.json`:
```json
{
  "name": "my-design-system",
  "version": "1.0.0",
  "description": "My custom design system",
  "author": "Your Name"
}
```

### Step 4: Customize Brand Colors

#### 4.1 Choose Your Colors

Pick your brand colors and convert to HSL:
- **Primary**: Main brand color (buttons, links, active states)
- **Secondary**: Supporting color (secondary actions)
- **Accent**: Highlight color (badges, notifications)

Use https://hslpicker.com/ to get HSL values.

#### 4.2 Update `src/index.css`

**Light Theme:**
```css
:root {
  /* Primary Colors - YOUR BRAND COLOR */
  --primary: 243 67% 59%;  /* Replace with your HSL */
  --primary-foreground: 0 0% 100%;

  /* Secondary Colors */
  --secondary: 173 80% 40%;  /* Replace with your HSL */
  --secondary-foreground: 0 0% 100%;

  /* Accent Colors */
  --accent: 32 95% 50%;  /* Replace with your HSL */
  --accent-foreground: 0 0% 0%;

  /* Base Colors - Usually keep these */
  --background: 90 33% 97%;
  --foreground: 0 0% 0%;

  /* Card Colors */
  --card: 0 0% 100%;
  --card-foreground: 0 0% 0%;

  /* Muted Colors */
  --muted: 0 0% 94%;
  --muted-foreground: 0 0% 20%;

  /* Destructive Colors - Usually keep red */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  /* Border & Input */
  --border: 0 0% 0%;
  --input: 0 0% 45%;
  --ring: 243 67% 82%;  /* Usually matches primary */
}
```

**Dark Theme:**
```css
.dark {
  /* Primary Colors - Lighter version for dark mode */
  --primary: 243 75% 74%;  /* Lighter than light mode */
  --primary-foreground: 0 0% 0%;

  /* Secondary Colors */
  --secondary: 173 80% 50%;
  --secondary-foreground: 0 0% 0%;

  /* Accent Colors */
  --accent: 43 96% 65%;
  --accent-foreground: 0 0% 0%;

  /* Base Colors */
  --background: 0 0% 0%;
  --foreground: 0 0% 100%;

  /* Card Colors */
  --card: 210 24% 13%;
  --card-foreground: 0 0% 100%;

  /* Muted Colors */
  --muted: 0 0% 20%;
  --muted-foreground: 0 0% 80%;

  /* Destructive Colors */
  --destructive: 0 91% 71%;
  --destructive-foreground: 0 0% 0%;

  /* Border & Input */
  --border: 0 0% 33%;
  --input: 0 0% 100%;
  --ring: 243 75% 74%;
}
```

#### 4.3 Update `style.json`

Convert your HSL colors to RGB for style.json:

```json
{
  "themes": {
    "light": {
      "primary": {
        "DEFAULT": "rgb(79, 70, 229)",  // Your color in RGB
        "foreground": "rgb(255, 255, 255)"
      }
    },
    "dark": {
      "primary": {
        "DEFAULT": "rgb(129, 140, 248)",  // Lighter version
        "foreground": "rgb(0, 0, 0)"
      }
    }
  }
}
```

**HSL to RGB Conversion:**
Use https://www.rapidtables.com/convert/color/hsl-to-rgb.html

### Step 5: Customize Typography (Optional)

#### 5.1 Change Font Families

Edit `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  --font-sans: 'Inter', ui-sans-serif, sans-serif;
  --font-serif: 'Georgia', ui-serif, serif;
  --font-mono: 'Fira Code', ui-monospace, monospace;
}
```

#### 5.2 Adjust Font Sizes

Edit `src/index.css`:
```css
@layer base {
  .text-h1 {
    font-size: 2rem;      /* 32px - Adjust as needed */
    line-height: 2.5rem;
    font-weight: 700;
  }
  
  .text-h2 {
    font-size: 1.5rem;    /* 24px */
    line-height: 2rem;
    font-weight: 700;
  }
  
  .text-h3 {
    font-size: 1.125rem;  /* 18px */
    line-height: 1.75rem;
    font-weight: 600;
  }
  
  .text-body {
    font-size: 1rem;      /* 16px */
    line-height: 1.5rem;
  }
  
  .text-small {
    font-size: 0.875rem;  /* 14px */
    line-height: 1.25rem;
  }
}
```

### Step 6: Run Development Server

```bash
npm run dev
```

Open http://localhost:5173/ in your browser.

### Step 7: Verify Setup

1. **Check Theme Toggle**
   - Click Sun/Moon icon in header
   - Verify theme switches
   - Check localStorage saves preference

2. **View Component Showcase**
   - Navigate to "UI Components" page
   - Verify all components render
   - Check colors match your brand

3. **View Theme Showcase**
   - Navigate to "Theme Showcase" page
   - Verify side-by-side comparison works
   - Check colors in both themes

4. **Test Accessibility**
   - Tab through components
   - Verify focus indicators
   - Test with screen reader

### Step 8: Customize Components (Optional)

Add your own components:

```tsx
// src/components/ui/MyComponent.tsx
import React from 'react';
import { cn } from '@/lib/utils';

interface MyComponentProps {
  variant?: 'default' | 'custom';
  className?: string;
}

export function MyComponent({ 
  variant = 'default', 
  className 
}: MyComponentProps) {
  return (
    <div className={cn(
      'p-4 rounded-lg',
      variant === 'default' && 'bg-primary text-primary-foreground',
      variant === 'custom' && 'bg-secondary text-secondary-foreground',
      className
    )}>
      My Component
    </div>
  );
}
```

Add to ComponentsPage:
```tsx
// src/pages/ComponentsPage.tsx
import { MyComponent } from '@/components/ui/MyComponent';

// In the component showcase section:
<MyComponent variant="default" />
<MyComponent variant="custom" />
```

### Step 9: Build for Production

```bash
# Build
npm run build

# Preview build
npm run preview
```

The build output will be in the `dist/` folder.

### Step 10: Deploy

Deploy the `dist/` folder to your hosting provider:

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 🔧 Configuration Files

### `package.json`
```json
{
  "name": "my-design-system",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1",
    "clsx": "^2.0.0",
    "tailwind-merge": "^1.14.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## ✅ Setup Checklist

- [ ] Node.js 18+ installed
- [ ] Template files copied
- [ ] Dependencies installed
- [ ] Project name updated in package.json
- [ ] Brand colors updated in src/index.css
- [ ] Colors updated in style.json
- [ ] Fonts customized (if needed)
- [ ] Typography sizes adjusted (if needed)
- [ ] Dev server running
- [ ] Theme toggle working
- [ ] Component Showcase visible
- [ ] Theme Showcase working
- [ ] Colors correct in both themes
- [ ] Accessibility tested
- [ ] Production build successful

## 🆘 Common Issues

### Port already in use
```bash
# Change port in vite.config.ts
export default defineConfig({
  server: {
    port: 3000  // Change to any available port
  }
})
```

### Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check tsconfig.json paths are correct
# Verify all imports use @ alias correctly
```

### Theme not switching
- Verify ThemeProvider wraps App in main.tsx
- Check .dark class applied to <html>
- Clear browser cache

## 📚 Next Steps

1. Read [COMPONENTS.md](./COMPONENTS.md) for component documentation
2. Read [THEME_SYSTEM.md](./THEME_SYSTEM.md) for theme details
3. Read [CUSTOMIZATION.md](./CUSTOMIZATION.md) for advanced customization
4. Read [BEST_PRACTICES.md](./BEST_PRACTICES.md) for guidelines

---

**Setup complete! Start building your design system!** 🎨

