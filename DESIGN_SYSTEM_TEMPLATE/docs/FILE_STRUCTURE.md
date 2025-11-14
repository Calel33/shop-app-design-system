# Design System Template - File Structure

## 📁 Complete Directory Structure

```
my-design-system/
├── public/                          # Static assets
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Alert.tsx           # Alert component (3 variants)
│   │   │   ├── Avatar.tsx          # Avatar component (3 sizes)
│   │   │   ├── Badge.tsx           # Badge component (7 variants)
│   │   │   ├── Button.tsx          # Button component (5 variants, 3 sizes)
│   │   │   ├── Card.tsx            # Card with header, content, footer
│   │   │   ├── Checkbox.tsx        # Checkbox input
│   │   │   ├── FilterChip.tsx      # Filter chip component
│   │   │   ├── Input.tsx           # Text input component
│   │   │   ├── Pagination.tsx      # Pagination component
│   │   │   ├── Select.tsx          # Select dropdown
│   │   │   ├── Skeleton.tsx        # Loading skeleton
│   │   │   ├── ThemeToggle.tsx     # Theme toggle (2 variants)
│   │   │   └── ThemePreview.tsx    # Side-by-side theme preview
│   │   │
│   │   └── layout/                  # Layout components
│   │       ├── Header.tsx          # App header with theme toggle
│   │       ├── Sidebar.tsx         # Navigation sidebar
│   │       └── Layout.tsx          # Main layout wrapper
│   │
│   ├── contexts/
│   │   └── ThemeContext.tsx        # Theme management context
│   │
│   ├── pages/
│   │   ├── HomePage.tsx            # Landing page
│   │   ├── ComponentsPage.tsx      # Component showcase
│   │   └── ThemeShowcasePage.tsx   # Theme comparison page
│   │
│   ├── lib/
│   │   └── utils.ts                # Utility functions (cn, etc.)
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # App entry point
│   ├── index.css                    # Global styles + CSS variables
│   └── vite-env.d.ts               # Vite type definitions
│
├── docs/                            # Documentation
│   ├── SETUP.md                    # Setup instructions
│   ├── FILE_STRUCTURE.md           # This file
│   ├── COMPONENTS.md               # Component documentation
│   ├── THEME_SYSTEM.md            # Theme system guide
│   ├── COLOR_SYSTEM.md            # Color reference
│   ├── CUSTOMIZATION.md           # Customization guide
│   ├── BEST_PRACTICES.md          # Best practices
│   └── QUICK_REFERENCE.md         # Quick reference
│
├── .gitignore                       # Git ignore file
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── style.json                       # Design tokens
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.node.json              # TypeScript config for Node
├── vite.config.ts                  # Vite build configuration
└── README.md                        # Project README
```

## 📄 File Descriptions

### Root Files

#### `package.json`
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
  }
}
```
**Purpose**: Defines project dependencies, scripts, and metadata.

#### `tailwind.config.js`
```javascript
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
      }
    }
  }
}
```
**Purpose**: Configures Tailwind CSS with theme support.

#### `style.json`
```json
{
  "themes": {
    "light": { /* colors */ },
    "dark": { /* colors */ }
  },
  "typography": { /* font settings */ },
  "spacing": { /* spacing scale */ }
}
```
**Purpose**: Design tokens in JSON format.

#### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  }
})
```
**Purpose**: Vite build configuration with path aliases.

### Source Files

#### `src/main.tsx`
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```
**Purpose**: Application entry point with ThemeProvider.

#### `src/App.tsx`
```tsx
import { useState } from 'react'
import { Layout } from './components/layout/Layout'
import { HomePage } from './pages/HomePage'
import { ComponentsPage } from './pages/ComponentsPage'
import { ThemeShowcasePage } from './pages/ThemeShowcasePage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  
  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {/* Page routing */}
    </Layout>
  )
}
```
**Purpose**: Main app component with routing logic.

#### `src/index.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Light theme CSS variables */
  }
  
  .dark {
    /* Dark theme CSS variables */
  }
}

/* Typography classes */
/* Smooth theme transitions */
```
**Purpose**: Global styles, CSS variables, and Tailwind directives.

### Component Files

#### `src/components/ui/Button.tsx`
```tsx
import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  // ... other props
}

export function Button({ variant, size, children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(/* variant styles */, className)} {...props}>
      {children}
    </button>
  )
}
```
**Purpose**: Reusable button component with variants.

#### `src/components/ui/ThemeToggle.tsx`
```tsx
import { useTheme } from '@/contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ variant = 'switch' }) {
  const { theme, toggleTheme } = useTheme()
  // Toggle UI implementation
}
```
**Purpose**: Theme toggle button component.

#### `src/components/ui/ThemePreview.tsx`
```tsx
export function ThemePreview({ children }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>{/* Light mode preview */}</div>
      <div className="dark">{/* Dark mode preview */}</div>
    </div>
  )
}
```
**Purpose**: Side-by-side theme comparison component.

### Context Files

#### `src/contexts/ThemeContext.tsx`
```tsx
import React, { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }) {
  // Theme management logic
  // localStorage persistence
  // System preference detection
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
```
**Purpose**: Global theme state management.

### Page Files

#### `src/pages/ComponentsPage.tsx`
```tsx
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
// ... other components

export function ComponentsPage() {
  return (
    <div className="space-y-8">
      <h1>UI Components</h1>
      
      {/* Button Section */}
      <section id="buttons">
        <h2>Buttons</h2>
        <Button variant="primary">Primary</Button>
        {/* More examples */}
      </section>
      
      {/* More sections */}
    </div>
  )
}
```
**Purpose**: Showcase all components with examples.

#### `src/pages/ThemeShowcasePage.tsx`
```tsx
import { ThemePreview } from '@/components/ui/ThemePreview'
import { Button } from '@/components/ui/Button'

export function ThemeShowcasePage() {
  return (
    <div className="space-y-8">
      <h1>Theme Showcase</h1>
      
      <ThemePreview>
        <Button variant="primary">Primary Button</Button>
      </ThemePreview>
      
      {/* More component previews */}
    </div>
  )
}
```
**Purpose**: Side-by-side theme comparison for all components.

### Utility Files

#### `src/lib/utils.ts`
```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
**Purpose**: Utility functions for className merging.

## 🎯 File Organization Principles

### 1. Component Organization
- **ui/**: Reusable, generic UI components
- **layout/**: Layout-specific components (Header, Sidebar)
- Each component in its own file
- Related components can be grouped in subdirectories

### 2. Naming Conventions
- **Components**: PascalCase (Button.tsx, ThemeToggle.tsx)
- **Utilities**: camelCase (utils.ts)
- **Pages**: PascalCase with "Page" suffix (HomePage.tsx)
- **Contexts**: PascalCase with "Context" suffix (ThemeContext.tsx)

### 3. Import Aliases
Use `@/` alias for cleaner imports:
```tsx
// Instead of: import { Button } from '../../components/ui/Button'
import { Button } from '@/components/ui/Button'
```

### 4. File Responsibilities
- **One component per file** (except small related components)
- **Colocate types** with components
- **Separate concerns**: UI, logic, state management
- **Keep files focused** and under 300 lines

## 📦 Adding New Files

### New Component
```bash
# Create component file
touch src/components/ui/MyComponent.tsx

# Add to ComponentsPage
# Add to ThemeShowcasePage
# Document in docs/COMPONENTS.md
```

### New Page
```bash
# Create page file
touch src/pages/MyPage.tsx

# Add route in App.tsx
# Add navigation in Sidebar.tsx
```

### New Context
```bash
# Create context file
touch src/contexts/MyContext.tsx

# Wrap in main.tsx or App.tsx
```

## 🔍 File Dependencies

```
main.tsx
  └── ThemeProvider (ThemeContext.tsx)
      └── App.tsx
          └── Layout.tsx
              ├── Header.tsx
              │   └── ThemeToggle.tsx
              ├── Sidebar.tsx
              └── Pages
                  ├── ComponentsPage.tsx
                  │   └── All UI Components
                  └── ThemeShowcasePage.tsx
                      ├── ThemePreview.tsx
                      └── All UI Components
```

## ✅ File Structure Checklist

- [ ] All component files in `src/components/ui/`
- [ ] Layout components in `src/components/layout/`
- [ ] Pages in `src/pages/`
- [ ] Contexts in `src/contexts/`
- [ ] Utilities in `src/lib/`
- [ ] Documentation in `docs/`
- [ ] Configuration files in root
- [ ] Path aliases configured (`@/`)
- [ ] Consistent naming conventions
- [ ] One component per file

---

**File structure is the foundation of a maintainable design system!** 📁

