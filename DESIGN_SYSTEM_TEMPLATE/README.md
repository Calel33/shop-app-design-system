# Design System Template - Quick Start Guide

## 🚀 Overview

This is a complete, production-ready design system template with:
- ✅ Light/Dark theme support with smooth transitions
- ✅ 11 semantic color categories
- ✅ Theme toggle component (2 variants)
- ✅ Component showcase page
- ✅ Theme preview (side-by-side comparison)
- ✅ Complete accessibility support
- ✅ localStorage persistence
- ✅ System preference detection
- ✅ Comprehensive documentation

## 📋 Quick Start

### 1. Copy Template Files

```bash
# Copy the entire DESIGN_SYSTEM_TEMPLATE directory to your new project
cp -r DESIGN_SYSTEM_TEMPLATE my-new-design-system
cd my-new-design-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Customize Your Brand

Edit `src/index.css` to change colors:

```css
:root {
  /* Primary Colors - Change these to your brand colors */
  --primary: 243 67% 59%;  /* Your primary brand color */
  --primary-foreground: 0 0% 100%;
  
  /* Secondary Colors */
  --secondary: 173 80% 40%;  /* Your secondary color */
  --secondary-foreground: 0 0% 100%;
  
  /* Accent Colors */
  --accent: 32 95% 50%;  /* Your accent color */
  --accent-foreground: 0 0% 0%;
}
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. View Your Design System

Open http://localhost:5173/ and navigate to:
- **Component Showcase** - See all components
- **Theme Showcase** - See components in both themes

## 📁 What's Included

### Core Components
- Button (5 variants, 3 sizes)
- Card (with header, content, footer)
- Input (text, email, password, etc.)
- Select (dropdown)
- Checkbox
- Badge (7 variants)
- Alert (3 variants)
- Avatar (3 sizes)
- Skeleton (loading states)
- FilterChip
- Pagination
- ThemeToggle (2 variants)
- ThemePreview (side-by-side comparison)

### Pages
- ComponentsPage - Showcase all components
- ThemeShowcasePage - Side-by-side theme comparison
- HomePage - Landing page template

### Theme System
- ThemeContext - Global theme management
- ThemeProvider - React context provider
- ThemeToggle - Toggle button component
- ThemePreview - Preview components in both themes
- Complete light/dark theme definitions

### Configuration
- `tailwind.config.js` - Tailwind with theme support
- `style.json` - Semantic color structure
- `src/index.css` - CSS variables (HSL format)
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite build configuration

### Documentation
- Component documentation
- Theme system guide
- Color system reference
- Quick reference guide
- Best practices

## 🎨 Customization Guide

### Change Brand Colors

1. **Choose Your Colors**
   - Pick your primary, secondary, and accent colors
   - Use a tool like https://hslpicker.com/ to get HSL values

2. **Update Light Theme** (`src/index.css`)
   ```css
   :root {
     --primary: [H] [S%] [L%];
     --secondary: [H] [S%] [L%];
     --accent: [H] [S%] [L%];
   }
   ```

3. **Update Dark Theme** (`src/index.css`)
   ```css
   .dark {
     --primary: [H] [S%] [L%];  /* Usually lighter version */
     --secondary: [H] [S%] [L%];
     --accent: [H] [S%] [L%];
   }
   ```

4. **Update style.json**
   - Convert HSL to RGB for style.json
   - Update both light and dark theme sections

### Add New Components

1. Create component file: `src/components/ui/MyComponent.tsx`
2. Add to ComponentsPage showcase
3. Add to ThemeShowcasePage for theme testing
4. Document usage and props

### Customize Typography

Edit `src/index.css`:
```css
@layer base {
  .text-h1 { font-size: 2rem; }  /* Change sizes */
  .text-h2 { font-size: 1.5rem; }
  .text-body { font-size: 1rem; }
}
```

### Change Fonts

1. Import fonts in `src/index.css`
2. Update CSS variables:
   ```css
   :root {
     --font-sans: 'Your Font', sans-serif;
   }
   ```

## 📖 Documentation Structure

```
docs/
├── SETUP.md                    - Setup instructions
├── COMPONENTS.md               - Component documentation
├── THEME_SYSTEM.md            - Theme system guide
├── COLOR_SYSTEM.md            - Color reference
├── CUSTOMIZATION.md           - Customization guide
├── BEST_PRACTICES.md          - Best practices
└── QUICK_REFERENCE.md         - Quick reference
```

## 🎯 File Structure

```
my-design-system/
├── src/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── ThemePreview.tsx
│   │   │   └── ...
│   │   └── layout/             # Layout components
│   │       ├── Header.tsx
│   │       ├── Sidebar.tsx
│   │       └── Layout.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx   # Theme management
│   ├── pages/
│   │   ├── ComponentsPage.tsx
│   │   ├── ThemeShowcasePage.tsx
│   │   └── HomePage.tsx
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Global styles + CSS variables
├── public/
├── docs/                       # Documentation
├── style.json                  # Design tokens
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json
├── vite.config.ts
└── package.json
```

## ✅ Checklist for New Project

- [ ] Copy template files
- [ ] Install dependencies (`npm install`)
- [ ] Update brand colors in `src/index.css`
- [ ] Update colors in `style.json`
- [ ] Change project name in `package.json`
- [ ] Update fonts if needed
- [ ] Customize typography sizes
- [ ] Test theme toggle
- [ ] View Component Showcase
- [ ] View Theme Showcase
- [ ] Add your custom components
- [ ] Update documentation
- [ ] Test in both light and dark modes
- [ ] Test accessibility (keyboard, screen reader)
- [ ] Build for production (`npm run build`)

## 🚀 Next Steps

1. **Explore the Components**
   - Navigate to Component Showcase
   - See all available components
   - Copy code examples

2. **Test Theme System**
   - Navigate to Theme Showcase
   - Toggle between light/dark modes
   - Verify all colors look good

3. **Customize Colors**
   - Edit `src/index.css`
   - Update your brand colors
   - Test in both themes

4. **Add Your Components**
   - Create new components in `src/components/ui/`
   - Add to showcase pages
   - Document usage

5. **Deploy**
   - Build: `npm run build`
   - Deploy `dist/` folder to your hosting

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)
- [HSL Color Picker](https://hslpicker.com/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## 🆘 Troubleshooting

### Theme not switching
- Check if ThemeProvider wraps your app
- Verify .dark class is applied to <html>
- Check browser console for errors

### Colors not updating
- Clear browser cache (Ctrl+Shift+R)
- Rebuild: `npm run build && npm run dev`
- Check CSS variable format (HSL)

### Components not showing
- Verify imports are correct
- Check component is exported
- Look for TypeScript errors

## 💡 Tips

- Use semantic color names (primary, secondary) not specific colors (blue, red)
- Always test components in both light and dark themes
- Use ThemePreview component for documentation
- Keep CSS variables organized by category
- Document all component props
- Follow accessibility best practices

---

**Ready to build amazing design systems!** 🎨

For detailed documentation, see the `docs/` folder.

