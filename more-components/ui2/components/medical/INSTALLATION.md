# Medical Landing Page - Installation Guide

## Prerequisites

Ensure your project has the following setup:

- **React**: 18.0.0 or higher (React 19 recommended)
- **TypeScript**: 4.5.0 or higher
- **Tailwind CSS**: 3.0.0 or higher
- **Node.js**: 16.0.0 or higher

## Step 1: Install Dependencies

### Required Dependencies

```bash
npm install lucide-react
# or
yarn add lucide-react
# or
pnpm add lucide-react
```

### Peer Dependencies (if not already installed)

```bash
npm install react react-dom
npm install --save-dev typescript @types/react @types/react-dom
```

## Step 2: Tailwind CSS Configuration

Ensure Tailwind CSS is configured in your project. If not already set up:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Update `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './alimonyapp/**/*.{js,ts,jsx,tsx,mdx}', // Add this line
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
```

### Update `globals.css` or main CSS file

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Import medical animations */
@import './alimonyapp/componets/medical/medical-animations.css';
```

## Step 3: TypeScript Configuration

Ensure your `tsconfig.json` includes the component paths:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./*"],
      "@/componets/*": ["./alimonyapp/componets/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## Step 4: Next.js Configuration (if using Next.js)

### For Next.js 13+ (App Router)

Create or update `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'], // For external images
  },
  experimental: {
    optimizeCss: true, // Optional: CSS optimization
  },
};

module.exports = nextConfig;
```

### Create a page using the component

**`app/medical/page.tsx`**

```tsx
import MedicalLanding from '@/alimonyapp/componets/medical';
import '@/alimonyapp/componets/medical/medical-animations.css';

export default function MedicalPage() {
  return <MedicalLanding />;
}
```

### For Next.js Pages Router

**`pages/medical.tsx`**

```tsx
import MedicalLanding from '@/alimonyapp/componets/medical';
import '@/alimonyapp/componets/medical/medical-animations.css';

export default function MedicalPage() {
  return <MedicalLanding />;
}
```

## Step 5: Vite Configuration (if using Vite)

### Update `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@/componets': path.resolve(__dirname, './alimonyapp/componets'),
    },
  },
});
```

### Create entry point

**`src/main.tsx`**

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MedicalLanding from '@/alimonyapp/componets/medical';
import '@/alimonyapp/componets/medical/medical-animations.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MedicalLanding />
  </React.StrictMode>
);
```

## Step 6: Verify Installation

### Check Component Files

Ensure all files are in place:

```
alimonyapp/componets/
├── medical/
│   ├── MedicalLanding.tsx
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── BentoGrid.tsx
│   ├── BentoCard.tsx
│   ├── CTASection.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── medical-animations.css
│   ├── index.ts
│   ├── README.md
│   ├── USAGE_EXAMPLE.tsx
│   └── INSTALLATION.md
└── types/
    └── medical.types.ts
```

### Run Type Check

```bash
npx tsc --noEmit
```

### Start Development Server

```bash
# Next.js
npm run dev

# Vite
npm run dev

# Create React App
npm start
```

## Step 7: Test the Component

Visit your application and verify:

1. ✅ Navigation bar is fixed at top
2. ✅ Hero section displays correctly
3. ✅ Bento grid cards are visible
4. ✅ Scroll animations trigger
5. ✅ Hover effects work
6. ✅ Responsive on mobile/tablet/desktop
7. ✅ No console errors

## Troubleshooting

### Issue: "Module not found: Can't resolve 'lucide-react'"

**Solution:**
```bash
npm install lucide-react
```

### Issue: "Cannot find module '@/componets/medical'"

**Solution:** Check your `tsconfig.json` paths configuration and ensure the alias is correct.

### Issue: Animations not working

**Solution:** Ensure `medical-animations.css` is imported in your main CSS file or component.

### Issue: Tailwind classes not applying

**Solution:** 
1. Check `tailwind.config.js` content paths include your component directory
2. Restart your development server
3. Clear build cache: `rm -rf .next` (Next.js) or `rm -rf dist` (Vite)

### Issue: TypeScript errors with React types

**Solution:**
```bash
npm install --save-dev @types/react @types/react-dom
```

### Issue: Images not loading from Unsplash

**Solution:** 
1. Add Unsplash domain to Next.js config (see Step 4)
2. Or replace with local images
3. Check network connectivity

## Optional Enhancements

### Add Framer Motion (for advanced animations)

```bash
npm install framer-motion
```

Then update components to use Framer Motion instead of CSS animations.

### Add React Error Boundary

```bash
npm install react-error-boundary
```

Wrap the component:

```tsx
import { ErrorBoundary } from 'react-error-boundary';
import MedicalLanding from '@/componets/medical';

function ErrorFallback({ error }) {
  return <div>Something went wrong: {error.message}</div>;
}

export default function Page() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MedicalLanding />
    </ErrorBoundary>
  );
}
```

### Optimize Images with Next.js Image

Replace `<img>` tags with Next.js `<Image>` component for better performance:

```tsx
import Image from 'next/image';

<Image
  src="https://images.unsplash.com/photo-..."
  alt="Medical professionals"
  width={1080}
  height={720}
  className="w-full h-full object-cover"
/>
```

## Package.json Reference

Add these to your `package.json`:

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

## Support

For issues or questions:
1. Check the [README.md](./README.md) for component documentation
2. Review [USAGE_EXAMPLE.tsx](./USAGE_EXAMPLE.tsx) for implementation examples
3. Verify all dependencies are installed correctly
4. Check browser console for errors

---

**Installation Guide Version**: 1.0.0  
**Last Updated**: 2025-09-29  
**Compatible with**: React 18+, Next.js 13+, Vite 4+
