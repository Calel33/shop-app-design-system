# Installation Guide - Bubble Childcare Components

Complete setup instructions for integrating the Bubble Childcare landing page components into your React project.

## 📋 Prerequisites

- Node.js 16+ and npm/yarn
- React 18.3.1+
- TypeScript 5.2.2+ (recommended)
- Tailwind CSS 3.4.1+

## 🚀 Installation Steps

### 1. Install Dependencies

```bash
npm install react react-dom lucide-react
npm install -D typescript @types/react @types/react-dom tailwindcss postcss autoprefixer
```

### 2. Setup Tailwind CSS

If you haven't already set up Tailwind CSS:

```bash
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./alimonyapp/componets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### 3. Add Nunito Font

#### Option A: Google Fonts CDN

Add to your `index.html`:

```html
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
```

#### Option B: Self-hosted (Recommended for Production)

```bash
npm install @fontsource/nunito
```

Then import in your main CSS or entry file:

```js
import '@fontsource/nunito/300.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/500.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
```

### 4. Add Tailwind Directives

Create or update `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Ensure Nunito is applied globally if needed */
body {
  font-family: 'Nunito', ui-sans-serif, system-ui, -apple-system, sans-serif;
}
```

### 5. Copy Component Files

Copy the entire `childcare` folder to your project:

```
your-project/
├── alimonyapp/
│   └── componets/
│       ├── childcare/
│       │   ├── BubbleLanding.tsx
│       │   ├── BubbleHeader.tsx
│       │   ├── BubbleHero.tsx
│       │   ├── FeatureHighlights.tsx
│       │   ├── ProgramsSection.tsx
│       │   ├── PromiseSection.tsx
│       │   ├── TestimonialsSection.tsx
│       │   ├── VisitCTA.tsx
│       │   ├── BubbleFooter.tsx
│       │   ├── types.ts
│       │   └── index.ts
│       └── types/
│           └── childcare.types.ts
```

### 6. TypeScript Configuration

Ensure your `tsconfig.json` includes:

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
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "alimonyapp"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## 🎨 Styling Configuration

### Custom CSS (Optional)

If you need custom animations or styles, create `childcare-animations.css`:

```css
/* Video hover transition */
.group:hover video {
  opacity: 1;
}

/* Image scale on hover */
.group:hover img {
  transform: scale(1.03);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
```

Import in your component or main CSS file:

```js
import './childcare-animations.css';
```

## 🔧 Vite Configuration

If using Vite, ensure `vite.config.ts` is properly configured:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/alimonyapp/componets',
    },
  },
})
```

## 📦 Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

## ✅ Verification

Test your installation:

```bash
npm run dev
```

Create a test file `src/App.tsx`:

```tsx
import { BubbleLanding } from '../alimonyapp/componets/childcare';
import { Baby } from 'lucide-react';

function App() {
  return (
    <BubbleLanding
      header={{
        logoUrl: 'https://via.placeholder.com/140x40',
      }}
      hero={{
        backgroundImage: 'https://via.placeholder.com/1920x1080',
        title: 'Test Installation',
        description: 'If you see this, installation was successful!',
      }}
      features={[
        {
          icon: <Baby className="h-5 w-5" />,
          title: 'Test Feature',
          description: 'This is a test feature.',
        },
      ]}
      programs={{
        programs: [],
      }}
      promise={{
        title: 'Test',
        description: 'Test',
        benefits: [],
        stats: [],
        image: 'https://via.placeholder.com/800x600',
        imageAlt: 'Test',
      }}
      testimonials={{
        testimonials: [],
      }}
      visitCTA={{
        title: 'Test CTA',
        description: 'Test description',
        image: 'https://via.placeholder.com/800x600',
        imageAlt: 'Test',
      }}
      footer={{
        logoUrl: 'https://via.placeholder.com/140x40',
      }}
    />
  );
}

export default App;
```

## 🐛 Troubleshooting

### Font Not Loading

**Issue**: Nunito font not displaying correctly.

**Solution**: 
- Check that the font link is in your HTML `<head>`
- Verify `font-nunito` class is in Tailwind config
- Clear browser cache and rebuild

### TypeScript Errors

**Issue**: Type errors when importing components.

**Solution**:
- Ensure `tsconfig.json` includes the `alimonyapp` folder
- Run `npm install` to ensure all type definitions are installed
- Restart your TypeScript server

### Tailwind Classes Not Working

**Issue**: Styles not applying correctly.

**Solution**:
- Verify `tailwind.config.js` content paths include component files
- Ensure Tailwind directives are in your CSS
- Rebuild your project

### Video Not Playing on Hover

**Issue**: Hero video doesn't play on hover.

**Solution**:
- Check browser console for video loading errors
- Ensure video URL is accessible
- Verify video format is supported (MP4 recommended)
- Check that video has `muted` attribute (required for autoplay)

### Mobile Menu Not Working

**Issue**: Mobile menu doesn't toggle.

**Solution**:
- Check browser console for JavaScript errors
- Ensure React state is working correctly
- Verify responsive breakpoints in Tailwind config

## 📚 Next Steps

- Review [USAGE_EXAMPLE.tsx](./USAGE_EXAMPLE.tsx) for implementation patterns
- Check [LAYOUT_EXAMPLES.tsx](./LAYOUT_EXAMPLES.tsx) for layout variations
- Read [README.md](./README.md) for component documentation

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section above
2. Review the example files
3. Check browser console for errors
4. Verify all dependencies are installed
5. Open an issue on the repository

## 📝 Notes

- This component library requires React 18.3.1+ for optimal performance
- Tailwind CSS 3.4.1+ is required for all utility classes
- lucide-react is used for all icons (20+ icons)
- The components are fully typed with TypeScript
- Mobile-first responsive design is built-in
