#!/bin/bash

# Design System Template - Package Creation Script
# This script creates a complete, ready-to-use design system template package

echo "🎨 Creating Design System Template Package..."
echo ""

# Set colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Define source and destination
SOURCE_DIR="."
TEMPLATE_DIR="DESIGN_SYSTEM_TEMPLATE"

# Create directory structure
echo "${BLUE}📁 Creating directory structure...${NC}"
mkdir -p ${TEMPLATE_DIR}/{src/{components/{ui,layout},contexts,pages,lib},docs,public}

# Copy configuration files
echo "${BLUE}📄 Copying configuration files...${NC}"
cp package.json ${TEMPLATE_DIR}/
cp tailwind.config.js ${TEMPLATE_DIR}/
cp tsconfig.json ${TEMPLATE_DIR}/
cp tsconfig.node.json ${TEMPLATE_DIR}/
cp vite.config.ts ${TEMPLATE_DIR}/
cp postcss.config.js ${TEMPLATE_DIR}/
cp index.html ${TEMPLATE_DIR}/
cp style.json ${TEMPLATE_DIR}/

# Create .gitignore
cat > ${TEMPLATE_DIR}/.gitignore << 'EOF'
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
EOF

# Copy source files
echo "${BLUE}📦 Copying source files...${NC}"
cp src/main.tsx ${TEMPLATE_DIR}/src/
cp src/App.tsx ${TEMPLATE_DIR}/src/
cp src/index.css ${TEMPLATE_DIR}/src/
cp src/vite-env.d.ts ${TEMPLATE_DIR}/src/

# Copy lib
cp src/lib/utils.ts ${TEMPLATE_DIR}/src/lib/

# Copy UI components
echo "${BLUE}🧩 Copying UI components...${NC}"
cp src/components/ui/Alert.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Alert.tsx not found"
cp src/components/ui/Avatar.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Avatar.tsx not found"
cp src/components/ui/Badge.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Badge.tsx not found"
cp src/components/ui/Button.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Button.tsx not found"
cp src/components/ui/Card.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Card.tsx not found"
cp src/components/ui/Checkbox.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Checkbox.tsx not found"
cp src/components/ui/FilterChip.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  FilterChip.tsx not found"
cp src/components/ui/Input.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Input.tsx not found"
cp src/components/ui/Pagination.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Pagination.tsx not found"
cp src/components/ui/Select.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Select.tsx not found"
cp src/components/ui/Skeleton.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  Skeleton.tsx not found"
cp src/components/ui/ThemeToggle.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  ThemeToggle.tsx not found"
cp src/components/ui/ThemePreview.tsx ${TEMPLATE_DIR}/src/components/ui/ 2>/dev/null || echo "  ⚠️  ThemePreview.tsx not found"

# Copy layout components
echo "${BLUE}📐 Copying layout components...${NC}"
cp src/components/layout/Header.tsx ${TEMPLATE_DIR}/src/components/layout/ 2>/dev/null || echo "  ⚠️  Header.tsx not found"
cp src/components/layout/Sidebar.tsx ${TEMPLATE_DIR}/src/components/layout/ 2>/dev/null || echo "  ⚠️  Sidebar.tsx not found"

# Copy contexts
echo "${BLUE}🔄 Copying contexts...${NC}"
cp src/contexts/ThemeContext.tsx ${TEMPLATE_DIR}/src/contexts/ 2>/dev/null || echo "  ⚠️  ThemeContext.tsx not found"

# Copy pages
echo "${BLUE}📄 Copying pages...${NC}"
cp src/pages/ComponentsPage.tsx ${TEMPLATE_DIR}/src/pages/ 2>/dev/null || echo "  ⚠️  ComponentsPage.tsx not found"
cp src/pages/ThemeShowcasePage.tsx ${TEMPLATE_DIR}/src/pages/ 2>/dev/null || echo "  ⚠️  ThemeShowcasePage.tsx not found"

# Create generic HomePage
echo "${BLUE}🏠 Creating generic HomePage...${NC}"
cat > ${TEMPLATE_DIR}/src/pages/HomePage.tsx << 'EOF'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

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
            <ol className="list-decimal list-inside space-y-2 text-body">
              <li>Customize brand colors in <code className="text-small bg-muted px-1 rounded">src/index.css</code></li>
              <li>Update <code className="text-small bg-muted px-1 rounded">style.json</code> with your colors</li>
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
            <ul className="list-disc list-inside space-y-2 text-body">
              <li>Light/Dark theme support</li>
              <li>11 semantic color categories</li>
              <li>Complete component library</li>
              <li>Full accessibility support</li>
              <li>TypeScript & Tailwind CSS</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-body">
            Start customizing your design system by editing the colors in <code className="text-small bg-muted px-1 rounded">src/index.css</code>.
            See the documentation in the <code className="text-small bg-muted px-1 rounded">docs/</code> folder for detailed guides.
          </p>
          <div className="flex gap-3">
            <Button variant="primary">View Components</Button>
            <Button variant="outline">Read Docs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
EOF

# Update package.json with generic info
echo "${BLUE}📝 Updating package.json...${NC}"
cat > ${TEMPLATE_DIR}/package.json << 'EOF'
{
  "name": "design-system-template",
  "private": true,
  "version": "1.0.0",
  "description": "A complete design system template with theme support",
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
EOF

# Documentation files are already created in DESIGN_SYSTEM_TEMPLATE/docs/
echo "${BLUE}📚 Documentation files already in place${NC}"

# Create template README
echo "${BLUE}📖 Creating template README...${NC}"
cat > ${TEMPLATE_DIR}/README.md << 'EOF'
# Design System Template

A complete, production-ready design system template with light/dark theme support.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## ✨ Features

- ✅ Light/Dark theme support with smooth transitions
- ✅ 11 semantic color categories
- ✅ Complete component library (Button, Card, Input, etc.)
- ✅ Theme showcase page (side-by-side comparison)
- ✅ Component showcase page
- ✅ Full accessibility support
- ✅ TypeScript & Tailwind CSS
- ✅ localStorage persistence
- ✅ System preference detection

## 🎨 Customization

1. **Update brand colors** in `src/index.css`
2. **Update colors** in `style.json`
3. **Customize fonts** in `src/index.css`
4. **Adjust typography** sizes as needed

See `docs/CUSTOMIZATION.md` for detailed customization guide.

## 📚 Documentation

- [Setup Guide](docs/SETUP.md) - Step-by-step setup instructions
- [File Structure](docs/FILE_STRUCTURE.md) - Complete file structure
- [Customization](docs/CUSTOMIZATION.md) - Customization guide
- [Best Practices](docs/BEST_PRACTICES.md) - Best practices
- [Quick Reference](docs/QUICK_REFERENCE.md) - Quick reference

## 🧩 Components

- Button (5 variants, 3 sizes)
- Card (with header, content, footer)
- Input, Select, Checkbox
- Badge (7 variants)
- Alert (3 variants)
- Avatar, Skeleton, Pagination
- ThemeToggle, ThemePreview
- And more...

## 📄 License

MIT

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
EOF

# Create a summary file
echo "${BLUE}📋 Creating package summary...${NC}"
cat > ${TEMPLATE_DIR}/PACKAGE_CONTENTS.md << 'EOF'
# Design System Template - Package Contents

## 📦 What's Included

### Configuration Files
- package.json - Dependencies and scripts
- tailwind.config.js - Tailwind configuration
- tsconfig.json - TypeScript configuration
- vite.config.ts - Vite build configuration
- postcss.config.js - PostCSS configuration
- style.json - Design tokens
- index.html - HTML entry point
- .gitignore - Git ignore rules

### Source Files
- src/main.tsx - Application entry point
- src/App.tsx - Main app component
- src/index.css - Global styles + CSS variables
- src/lib/utils.ts - Utility functions

### UI Components (src/components/ui/)
- Alert.tsx - Alert component
- Avatar.tsx - Avatar component
- Badge.tsx - Badge component
- Button.tsx - Button component
- Card.tsx - Card component
- Checkbox.tsx - Checkbox component
- FilterChip.tsx - Filter chip component
- Input.tsx - Input component
- Pagination.tsx - Pagination component
- Select.tsx - Select component
- Skeleton.tsx - Skeleton loader
- ThemeToggle.tsx - Theme toggle button
- ThemePreview.tsx - Side-by-side theme preview

### Layout Components (src/components/layout/)
- Header.tsx - App header
- Sidebar.tsx - Navigation sidebar

### Contexts (src/contexts/)
- ThemeContext.tsx - Theme management

### Pages (src/pages/)
- HomePage.tsx - Landing page
- ComponentsPage.tsx - Component showcase
- ThemeShowcasePage.tsx - Theme comparison

### Documentation (docs/)
- SETUP.md - Setup instructions
- FILE_STRUCTURE.md - File structure guide
- CUSTOMIZATION.md - Customization guide
- BEST_PRACTICES.md - Best practices
- QUICK_REFERENCE.md - Quick reference

## 🎯 Ready to Use

This package is ready to use out of the box:
1. Copy to your project directory
2. Run `npm install`
3. Run `npm run dev`
4. Start customizing!

## 📝 Next Steps

1. Read docs/SETUP.md for setup instructions
2. Customize colors in src/index.css
3. Update style.json with your colors
4. Explore components in Component Showcase
5. Test themes in Theme Showcase

---

**Everything you need to build a design system!** 🎨
EOF

echo ""
echo "${GREEN}✅ Template package created successfully!${NC}"
echo ""
echo "${YELLOW}📦 Package location: ${TEMPLATE_DIR}/${NC}"
echo ""
echo "${BLUE}Next steps:${NC}"
echo "  1. cd ${TEMPLATE_DIR}"
echo "  2. npm install"
echo "  3. npm run dev"
echo "  4. Customize your brand colors"
echo ""
echo "${GREEN}🎉 Happy building!${NC}"

