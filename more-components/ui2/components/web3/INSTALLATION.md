# Installation Guide - Aura Web3 Components

Complete setup instructions for integrating the Aura Web3 landing page components into your project.

## Prerequisites

- Node.js 16+ or 18+
- React 18+ or 19+
- TypeScript 5+
- Tailwind CSS 3+

## Step 1: Verify Dependencies

Check your `package.json` includes these dependencies:

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "typescript": "^5.2.2",
    "tailwindcss": "^3.4.1",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38"
  }
}
```

If `lucide-react` is missing, install it:

```bash
npm install lucide-react
```

## Step 2: Configure Tailwind CSS

Update your `tailwind.config.js` to include custom animations:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./alimonyapp/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'delay-100': 'fadeInUp 0.8s ease-out 0.1s forwards',
        'delay-200': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'delay-300': 'fadeInUp 0.8s ease-out 0.3s forwards',
        'delay-500': 'fadeInUp 0.8s ease-out 0.5s forwards',
        'delay-700': 'fadeInUp 0.8s ease-out 0.7s forwards',
      },
    },
  },
  plugins: [],
}
```

## Step 3: Add Geist Font

Add the Geist font to your `index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App</title>
    
    <!-- Add these lines -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Step 4: Component Structure

Ensure your component files are organized as follows:

```
alimonyapp/
├── componets/
│   ├── web3/
│   │   ├── AuraLanding.tsx
│   │   ├── AuraHeader.tsx
│   │   ├── AuraHero.tsx
│   │   ├── NetworksSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── AuraFooter.tsx
│   │   ├── types.ts
│   │   ├── index.ts
│   │   ├── README.md
│   │   ├── INSTALLATION.md
│   │   ├── USAGE_EXAMPLE.tsx
│   │   └── LAYOUT_EXAMPLES.tsx
│   └── types/
│       └── web3.types.ts
```

## Step 5: Import and Use

### Option A: Use the Complete Landing Page

```tsx
import { AuraLanding } from './alimonyapp/componets/web3';

function App() {
  return (
    <AuraLanding
      header={{ navigation: [...] }}
      hero={{ headline: '...', ... }}
      networks={{ title: '...', ... }}
      pricing={{ plans: [...] }}
      testimonials={{ testimonials: [...] }}
      faq={{ faqs: [...] }}
      footer={{ socialLinks: [...] }}
    />
  );
}
```

### Option B: Use Individual Components

```tsx
import { 
  AuraHeader, 
  AuraHero, 
  NetworksSection,
  AuraFooter 
} from './alimonyapp/componets/web3';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AuraHeader navigation={[...]} />
      <AuraHero headline="..." description="..." stats={[...]} />
      <NetworksSection networks={[...]} />
      <AuraFooter socialLinks={[...]} />
    </div>
  );
}
```

## Step 6: TypeScript Configuration

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

## Step 7: Optional - Add Spline 3D Background

If you want to use the Spline 3D background:

```tsx
<AuraLanding
  splineBackground="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx"
  // ... other props
/>
```

Or disable it:

```tsx
<AuraLanding
  splineBackground={undefined}
  // ... other props
/>
```

## Step 8: Development Server

Start your development server:

```bash
npm run dev
```

Visit `http://localhost:5173` (or your configured port) to see the components in action.

## Troubleshooting

### Issue: Animations not working

**Solution**: Ensure Tailwind config includes custom keyframes and animations. Run:

```bash
npm run dev
```

Restart the dev server after updating `tailwind.config.js`.

### Issue: Font not loading

**Solution**: Check that `index.html` includes Geist font links and they load correctly in Network tab.

### Issue: TypeScript errors

**Solution**: Ensure all type imports reference the correct path:

```tsx
import type { AuraLandingProps } from './alimonyapp/componets/types/web3.types';
```

### Issue: Lucide icons not displaying

**Solution**: Verify `lucide-react` is installed:

```bash
npm install lucide-react
```

### Issue: Mobile menu not toggling

**Solution**: Ensure React state hooks are working. Check browser console for errors.

## Next Steps

- See `USAGE_EXAMPLE.tsx` for complete implementation examples
- See `LAYOUT_EXAMPLES.tsx` for layout variations
- See `README.md` for component documentation

## Support

For issues or questions, refer to the project documentation or create an issue in the repository.
