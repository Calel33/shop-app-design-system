# Design System Template - Template Files

## 📋 Core Template Files to Copy

This document lists all the essential files you need to copy from the current project to create your design system template.

## 🎯 Files to Copy

### 1. Configuration Files (Root Directory)

```bash
# Copy these files from root
cp package.json DESIGN_SYSTEM_TEMPLATE/
cp tailwind.config.js DESIGN_SYSTEM_TEMPLATE/
cp tsconfig.json DESIGN_SYSTEM_TEMPLATE/
cp tsconfig.node.json DESIGN_SYSTEM_TEMPLATE/
cp vite.config.ts DESIGN_SYSTEM_TEMPLATE/
cp postcss.config.js DESIGN_SYSTEM_TEMPLATE/
cp index.html DESIGN_SYSTEM_TEMPLATE/
cp style.json DESIGN_SYSTEM_TEMPLATE/
cp .gitignore DESIGN_SYSTEM_TEMPLATE/
```

### 2. Source Files

```bash
# Create directory structure
mkdir -p DESIGN_SYSTEM_TEMPLATE/src/{components/{ui,layout},contexts,pages,lib}

# Copy main files
cp src/main.tsx DESIGN_SYSTEM_TEMPLATE/src/
cp src/App.tsx DESIGN_SYSTEM_TEMPLATE/src/
cp src/index.css DESIGN_SYSTEM_TEMPLATE/src/
cp src/vite-env.d.ts DESIGN_SYSTEM_TEMPLATE/src/

# Copy utility files
cp src/lib/utils.ts DESIGN_SYSTEM_TEMPLATE/src/lib/
```

### 3. UI Components

```bash
# Copy all UI components
cp src/components/ui/Alert.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Avatar.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Badge.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Button.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Card.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Checkbox.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/FilterChip.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Input.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Pagination.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Select.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/Skeleton.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/ThemeToggle.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
cp src/components/ui/ThemePreview.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/
```

### 4. Layout Components

```bash
# Copy layout components
cp src/components/layout/Header.tsx DESIGN_SYSTEM_TEMPLATE/src/components/layout/
cp src/components/layout/Sidebar.tsx DESIGN_SYSTEM_TEMPLATE/src/components/layout/
```

### 5. Contexts

```bash
# Copy theme context
cp src/contexts/ThemeContext.tsx DESIGN_SYSTEM_TEMPLATE/src/contexts/
```

### 6. Pages

```bash
# Copy page templates
cp src/pages/ComponentsPage.tsx DESIGN_SYSTEM_TEMPLATE/src/pages/
cp src/pages/ThemeShowcasePage.tsx DESIGN_SYSTEM_TEMPLATE/src/pages/
```

### 7. Documentation

```bash
# Documentation is already created in DESIGN_SYSTEM_TEMPLATE/docs/
# Additional docs to create:
# - COMPONENTS.md
# - THEME_SYSTEM.md
# - COLOR_SYSTEM.md
# - CUSTOMIZATION.md
# - BEST_PRACTICES.md
# - QUICK_REFERENCE.md
```

## 📝 Files to Modify for Template

### 1. `package.json`
Remove project-specific details:
```json
{
  "name": "design-system-template",
  "version": "1.0.0",
  "description": "A complete design system template with theme support",
  "author": "Your Name",
  "license": "MIT"
}
```

### 2. `src/App.tsx`
Simplify to basic routing:
```tsx
// Remove project-specific pages
// Keep only: HomePage, ComponentsPage, ThemeShowcasePage
```

### 3. `src/components/layout/Sidebar.tsx`
Generic navigation items:
```tsx
const navigation = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'components', label: 'Components', icon: Layout },
  { id: 'theme-showcase', label: 'Theme Showcase', icon: Palette },
]
```

### 4. `src/pages/HomePage.tsx`
Create a generic welcome page:
```tsx
export function HomePage() {
  return (
    <div>
      <h1>Welcome to Your Design System</h1>
      <p>Get started by customizing your brand colors...</p>
    </div>
  )
}
```

## 🎨 Template Customization Points

Mark these areas for easy customization:

### In `src/index.css`:
```css
:root {
  /* 🎨 CUSTOMIZE: Your brand colors */
  --primary: 243 67% 59%;  /* <-- Change this */
  --secondary: 173 80% 40%;  /* <-- Change this */
  --accent: 32 95% 50%;  /* <-- Change this */
}
```

### In `style.json`:
```json
{
  "themes": {
    "light": {
      "primary": {
        "DEFAULT": "rgb(79, 70, 229)",  // 🎨 CUSTOMIZE
        "foreground": "rgb(255, 255, 255)"
      }
    }
  }
}
```

### In `package.json`:
```json
{
  "name": "my-design-system",  // 🎨 CUSTOMIZE
  "description": "My custom design system"  // 🎨 CUSTOMIZE
}
```

## 📦 Complete Copy Script

Create a script to copy all files:

```bash
#!/bin/bash
# copy-template.sh

# Create directory structure
mkdir -p DESIGN_SYSTEM_TEMPLATE/{src/{components/{ui,layout},contexts,pages,lib},docs,public}

# Copy configuration files
cp package.json tailwind.config.js tsconfig.json tsconfig.node.json \
   vite.config.ts postcss.config.js index.html style.json .gitignore \
   DESIGN_SYSTEM_TEMPLATE/

# Copy source files
cp src/main.tsx src/App.tsx src/index.css src/vite-env.d.ts \
   DESIGN_SYSTEM_TEMPLATE/src/

# Copy lib
cp src/lib/utils.ts DESIGN_SYSTEM_TEMPLATE/src/lib/

# Copy UI components
cp src/components/ui/*.tsx DESIGN_SYSTEM_TEMPLATE/src/components/ui/

# Copy layout components
cp src/components/layout/*.tsx DESIGN_SYSTEM_TEMPLATE/src/components/layout/

# Copy contexts
cp src/contexts/*.tsx DESIGN_SYSTEM_TEMPLATE/src/contexts/

# Copy pages
cp src/pages/ComponentsPage.tsx \
   src/pages/ThemeShowcasePage.tsx \
   DESIGN_SYSTEM_TEMPLATE/src/pages/

# Create generic HomePage
cat > DESIGN_SYSTEM_TEMPLATE/src/pages/HomePage.tsx << 'EOF'
export function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-h1 font-bold">Welcome to Your Design System</h1>
      <p className="text-body text-muted-foreground">
        Get started by customizing your brand colors in src/index.css
      </p>
    </div>
  )
}
EOF

echo "Template files copied successfully!"
```

Make it executable:
```bash
chmod +x copy-template.sh
./copy-template.sh
```

## ✅ Verification Checklist

After copying files, verify:

- [ ] All configuration files present
- [ ] All UI components copied
- [ ] Layout components copied
- [ ] ThemeContext copied
- [ ] Pages copied (ComponentsPage, ThemeShowcasePage)
- [ ] Utility files copied
- [ ] Documentation created
- [ ] package.json updated with generic info
- [ ] README.md created
- [ ] .gitignore present
- [ ] No project-specific code remains

## 🔄 Template Update Process

When updating the template:

1. Make changes in your main project
2. Test thoroughly
3. Run copy script to update template
4. Update documentation
5. Version the template
6. Test template in new project

## 📚 Additional Files to Create

### Generic HomePage
```tsx
// DESIGN_SYSTEM_TEMPLATE/src/pages/HomePage.tsx
export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-h1 font-bold mb-4">
          Welcome to Your Design System
        </h1>
        <p className="text-body text-muted-foreground">
          A complete, production-ready design system template with theme support.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>Customize brand colors in src/index.css</li>
              <li>Update style.json with your colors</li>
              <li>Explore components in Component Showcase</li>
              <li>Test themes in Theme Showcase</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Light/Dark theme support</li>
              <li>11 semantic color categories</li>
              <li>Complete component library</li>
              <li>Full accessibility support</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

### Template README
```markdown
# Design System Template

A complete, production-ready design system template.

## Quick Start

1. Install dependencies: `npm install`
2. Customize colors in `src/index.css`
3. Run dev server: `npm run dev`
4. View at http://localhost:5173/

## Documentation

See `docs/` folder for complete documentation.

## Features

- ✅ Light/Dark theme support
- ✅ 11 semantic color categories
- ✅ Complete component library
- ✅ Theme showcase page
- ✅ Full accessibility

## License

MIT
```

---

**Use this guide to create your reusable template!** 📦

