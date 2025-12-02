# Portfolio Grid Components - Installation Guide

## Prerequisites

Before installing the Portfolio Grid components, ensure you have the following:

### Required Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "lucide-react": "^0.344.0"
}
```

### Required Dev Dependencies

```json
{
  "typescript": "^5.2.2",
  "tailwindcss": "^3.4.1",
  "autoprefixer": "^10.4.19",
  "postcss": "^8.4.38"
}
```

## Step 1: Install Dependencies

### Using npm

```bash
npm install lucide-react
```

### Using yarn

```bash
yarn add lucide-react
```

### Using pnpm

```bash
pnpm add lucide-react
```

## Step 2: Configure Tailwind CSS

Ensure your `tailwind.config.js` includes the portfolio component paths:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./alimonyapp/componets/**/*.{js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  plugins: [],
};
```

## Step 3: Copy Component Files

Copy the portfolio component files to your project:

```
alimonyapp/componets/portfolio/
├── PortfolioGrid.tsx
├── PortfolioCard.tsx
├── PortfolioHeader.tsx
├── types.ts
└── index.ts
```

## Step 4: Verify TypeScript Configuration

Ensure your `tsconfig.json` has proper path aliases (optional but recommended):

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
      "@/*": ["./src/*"],
      "@/componets/*": ["./alimonyapp/componets/*"]
    }
  },
  "include": ["src", "alimonyapp"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Step 5: Import and Use

### Basic Import

```tsx
import { PortfolioGrid } from '@/componets/portfolio';
// or
import PortfolioGrid from './alimonyapp/componets/portfolio';
```

### Test Installation

Create a test file to verify the installation:

```tsx
// src/test/PortfolioTest.tsx
import { PortfolioGrid } from '@/componets/portfolio';

const testData = {
  columns: [
    {
      items: [
        {
          id: '1',
          image: 'https://via.placeholder.com/800x600',
          alt: 'Test Project',
          category: 'Test • Category',
          title: 'Test Project',
          link: '#',
          height: 'h-56' as const,
        },
      ],
    },
  ],
};

export default function PortfolioTest() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <PortfolioGrid
        columns={testData.columns}
        title="Test Portfolio"
        sectionLabel="(01) Test"
      />
    </div>
  );
}
```

## Step 6: Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit `http://localhost:5173` (or your configured port) to see the component in action.

## Troubleshooting

### Issue: Module not found

**Solution**: Check your import paths and ensure the component files are in the correct directory.

```tsx
// Try absolute import
import { PortfolioGrid } from '@/componets/portfolio';

// Or relative import
import { PortfolioGrid } from '../alimonyapp/componets/portfolio';
```

### Issue: Tailwind classes not working

**Solution**: Ensure Tailwind CSS is properly configured and the content paths include the component directory.

```bash
# Rebuild Tailwind
npm run build
```

### Issue: TypeScript errors

**Solution**: Run type checking to identify issues:

```bash
npx tsc --noEmit
```

Common fixes:
- Ensure `lucide-react` types are installed
- Check that all imports have correct paths
- Verify TypeScript version is 4.5+

### Issue: Icons not rendering

**Solution**: Verify `lucide-react` is installed:

```bash
npm list lucide-react
```

If not installed:

```bash
npm install lucide-react
```

## Verification Checklist

After installation, verify the following:

- [ ] All dependencies installed successfully
- [ ] Tailwind CSS configured with component paths
- [ ] TypeScript compiles without errors
- [ ] Component imports work correctly
- [ ] Icons from lucide-react render properly
- [ ] Hover effects work on cards
- [ ] Responsive layout works (mobile → desktop)
- [ ] Images load correctly
- [ ] Links are clickable

## Next Steps

1. Read the [README.md](./README.md) for usage examples
2. Check [USAGE_EXAMPLE.tsx](./USAGE_EXAMPLE.tsx) for implementation patterns
3. Customize the component to match your design system
4. Add your portfolio data

## Additional Configuration

### For Next.js Projects

If using Next.js, consider these additional steps:

1. **Use Next.js Image Component**:

```tsx
// Modify PortfolioCard.tsx
import Image from 'next/image';

// Replace <img> with:
<Image
  src={item.image}
  alt={item.alt}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

2. **Use Next.js Link Component**:

```tsx
// Modify PortfolioCard.tsx and PortfolioHeader.tsx
import Link from 'next/link';

// Replace <a> with:
<Link href={item.link}>
  {/* content */}
</Link>
```

### For Vite Projects

Already configured! The components work out of the box with Vite.

### For Create React App

1. Install CRACO for Tailwind CSS support
2. Configure path aliases in `craco.config.js`

## Support

For installation issues:
1. Check the [README.md](./README.md) troubleshooting section
2. Verify all dependencies are installed
3. Ensure Tailwind CSS is properly configured
4. Check the browser console for errors

---

**Installation Guide Version**: 1.0.0  
**Last Updated**: 2025-09-29  
**Maintainer**: Development Team
