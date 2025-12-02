# Design System Generator - Complete Guide

A comprehensive tooling solution for scanning, organizing, and generating reusable design system libraries from multi-root component sources with support for themes, fonts, and advanced filtering.

**Table of Contents**
- [Overview](#overview)
- [Quick Start](#quick-start)
- [CLI Commands](#cli-commands)
- [Configuration](#configuration)
- [Workflows](#workflows)
- [Components](#components)
- [Themes & Colors](#themes--colors)
- [Fonts](#fonts)
- [Library Generation](#library-generation)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

The Design System Generator is a 7-layer tooling stack that automates the management and distribution of design systems:

1. **Tooling Skeleton** – Base TypeScript project structure
2. **Component Scanner** – Discovers and catalogs components from multiple roots
3. **Component Normalizer** – Categorizes and tags components with metadata
4. **Font Manager** – Scans and generates @font-face CSS for custom fonts
5. **Theme Manager** – Ingests multi-format themes (JSON, CSS) and normalizes them
6. **Library Generator** – Creates filtered, reusable design system packages
7. **CLI Wrapper** – Command-line interface for all workflows

### What You Can Do

✅ Scan components across multiple directories  
✅ Automatically extract and normalize component metadata  
✅ Organize components by category and tags  
✅ Manage and switch between multiple themes  
✅ Handle custom fonts with automatic weight/style inference  
✅ Generate reusable design system libraries  
✅ Filter by roots, categories, fonts, and themes  
✅ Generate TypeScript exports and CSS variable blocks  

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
npm run build
```

### 2. Initialize Configuration

```bash
npx ds-gen init
```

This creates:
- `config/design-system.config.json` – Main configuration
- `config/components.index.json` – Component registry (empty)
- `config/fonts.index.json` – Font registry (empty)
- `config/themes.index.json` – Theme registry (empty)

### 3. Scan Your Components

```bash
npx ds-gen scan-components
```

Scans configured component roots and generates `config/components.index.json` with metadata.

### 4. Add Themes (Optional)

Create theme files in `config/themes/`:

**`config/themes/light.json`**
```json
{
  "colors": {
    "primary": "#007AFF",
    "background": "#FFFFFF",
    "text": "#000000"
  }
}
```

Then index them:
```bash
npx ds-gen add-theme ./config/themes
```

### 5. Generate Library

```bash
npx ds-gen generate --out ./my-design-system
```

Your design system library is ready at `./my-design-system/`!

---

## CLI Commands

### `ds-gen init`

Initialize design system configuration and empty indexes.

```bash
npx ds-gen init
```

**Output:**
```
✓ Initialized design system config at ./config
✓ Created config/design-system.config.json
✓ Created empty index files
```

**Creates:**
- `config/design-system.config.json` with default paths
- Empty index JSON files for components, fonts, themes

---

### `ds-gen scan-components`

Scan component roots and build the component index.

```bash
npx ds-gen scan-components [options]
```

**Options:**
- `--root <id>` – Scan specific root only (future enhancement)
- `--config <path>` – Config file path (default: `./config/design-system.config.json`)

**Example:**
```bash
npx ds-gen scan-components --config ./config/design-system.config.json
```

**What it does:**
1. Reads all configured component roots
2. Globs for `**/*.tsx` files
3. Parses TypeScript AST to find exported React components
4. Extracts JSDoc metadata (`@dsCategory`, `@dsStatus`, `@dsVariants`)
5. Generates unique IDs with collision avoidance
6. Writes `config/components.index.json`

**Component Metadata:**
```json
{
  "id": "button-primary",
  "name": "Button",
  "exportName": "Button",
  "filePath": "src/components/ui/Button.tsx",
  "category": "primitive",
  "tags": ["button", "cta"],
  "status": "stable",
  "rootId": "core-ui"
}
```

---

### `ds-gen add-font <fontDir>`

Scan and index font files.

```bash
npx ds-gen add-font ./fonts [options]
```

**Options:**
- `--config <path>` – Config file path (default: `./config/design-system.config.json`)

**Example:**
```bash
npx ds-gen add-font ./my-fonts
```

**What it does:**
1. Ensures `assets/fonts` directory exists
2. Scans for `.ttf`, `.woff`, `.woff2` files
3. Infers font weight and style from filenames
4. Reads optional `font.config.json` per family
5. Generates `config/fonts.index.json`
6. Creates `generated/fonts.css` with `@font-face` rules
7. Creates `generated/tailwind.fonts.extend.js` for Tailwind integration

**Filename Convention:**
- `Inter-Regular.ttf` → weight: 400, style: normal
- `Inter-Bold.ttf` → weight: 700, style: normal
- `Inter-Italic.ttf` → weight: 400, style: italic
- `Inter-BoldItalic.ttf` → weight: 700, style: italic

**Generated CSS:**
```css
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

---

### `ds-gen add-theme <themePath>`

Ingest and index theme files.

```bash
npx ds-gen add-theme ./themes [options]
```

**Options:**
- `--config <path>` – Config file path (default: `./config/design-system.config.json`)

**Example:**
```bash
npx ds-gen add-theme ./config/themes
```

**Supported Formats:**

**Structured JSON:**
```json
{
  "colors": { "primary": "#007AFF" },
  "spacing": { "md": "1rem" }
}
```

**Flat JSON:**
```json
{
  "color.primary": "#007AFF",
  "spacing.md": "1rem"
}
```

**CSS Variables:**
```css
--color-primary: #007AFF;
--spacing-md: 1rem;
```

**What it does:**
1. Ensures `config/themes` directory exists
2. Scans for `.json` and `.css` files
3. Auto-detects format (JSON, flat JSON, or CSS)
4. Normalizes to canonical `ThemeTokens` structure
5. Generates `config/themes.index.json`
6. Creates `generated/themes.css` with `[data-theme="..."]` blocks
7. Creates `generated/themes.ts` with TypeScript exports

**Generated Output:**

`generated/themes.css`:
```css
[data-theme="light"] {
  --color-primary: #007AFF;
  --color-background: #FFFFFF;
  --color-text: #000000;
}
```

`generated/themes.ts`:
```typescript
export const themes = {
  light: {
    name: "light",
    tokens: { colors: {...} }
  }
} as const;

export type ThemeId = keyof typeof themes;
```

---

### `ds-gen generate`

Generate a reusable design system library package.

```bash
npx ds-gen generate [options]
```

**Options:**
- `--out <dir>` – Output directory (default: `./generated-ds-lib`)
- `--roots <roots...>` – Include specific roots (default: core-ui biz-ui layout ui2)
- `--categories <categories...>` – Filter by component category
- `--fonts <fonts...>` – Include specific fonts
- `--themes <themes...>` – Include specific themes
- `--name <name>` – Library name (default: `design-system`)
- `--version <version>` – Library version (default: `1.0.0`)
- `--config <path>` – Config path (default: `./config/design-system.config.json`)

**Examples:**

**Generate everything:**
```bash
npx ds-gen generate --out ./my-ds --name @myorg/design-system --version 1.0.0
```

**Generate specific roots only:**
```bash
npx ds-gen generate --roots core-ui ui2 --out ./ds-core
```

**Generate by category:**
```bash
npx ds-gen generate --categories primitive layout --out ./ds-primitives
```

**Generate with selected fonts and themes:**
```bash
npx ds-gen generate \
  --fonts inter roboto \
  --themes light dark \
  --out ./ds-themed
```

**Output Structure:**
```
my-ds-lib/
├── src/
│   ├── components/
│   │   └── index.ts              # Re-exported components
│   ├── tokens/
│   │   ├── themes.ts             # Theme token exports
│   │   └── fonts.ts              # Font token exports
│   ├── theme/
│   │   └── ThemeProvider.tsx      # React theme provider
│   └── index.ts                  # Main entry point
├── dist/                         # (build output)
├── package.json                  # Library metadata
├── tsconfig.json                 # TypeScript config
└── README.md                     # (auto-generated)
```

**Generated `src/components/index.ts`:**
```typescript
// core-ui
export { Button, Card, Input } from '../../../src/components/ui';

// biz-ui
export { BusinessCard, ListingHeader } from '../../../src/components/business';
```

---

## Configuration

### `config/design-system.config.json`

Main configuration file for the design system generator.

```json
{
  "paths": {
    "componentRoots": [
      {
        "id": "core-ui",
        "path": "./src/components/ui"
      },
      {
        "id": "biz-ui",
        "path": "./src/components/business"
      },
      {
        "id": "layout",
        "path": "./src/components/layout"
      },
      {
        "id": "ui2",
        "path": "./more-components/ui2"
      }
    ],
    "fontsRoot": "./assets/fonts",
    "themesRoot": "./config/themes"
  },
  "indexes": {
    "components": "./config/components.index.json",
    "fonts": "./config/fonts.index.json",
    "themes": "./config/themes.index.json"
  },
  "defaults": {
    "fontSans": "inter",
    "fontHeading": "inter",
    "themes": ["light", "dark"]
  }
}
```

**Key Fields:**

| Field | Purpose |
|-------|---------|
| `paths.componentRoots` | Array of component source directories with IDs |
| `paths.fontsRoot` | Directory containing font files |
| `paths.themesRoot` | Directory containing theme files |
| `indexes` | Output paths for generated index files |
| `defaults` | Default font and theme preferences |

### Component Root Format

```json
{
  "id": "core-ui",
  "path": "./src/components/ui"
}
```

- `id`: Unique identifier (used in filtering and generation)
- `path`: Relative path from project root to component directory

---

## Workflows

### Workflow 1: Initialize & Scan

Get a baseline design system inventory.

```bash
# 1. Initialize
npx ds-gen init

# 2. Scan components
npx ds-gen scan-components

# 3. Inspect results
cat config/components.index.json
```

### Workflow 2: Add Themes & Generate Library

Create a complete design system package.

```bash
# 1. Create theme files in config/themes/
mkdir -p config/themes
cat > config/themes/custom.json << 'EOF'
{
  "colors": {
    "primary": "#007AFF",
    "background": "#FFFFFF",
    "text": "#000000"
  }
}
EOF

# 2. Index themes
npx ds-gen add-theme ./config/themes

# 3. Generate library
npx ds-gen generate \
  --out ./my-design-system \
  --name @myorg/design-system \
  --version 1.0.0

# 4. Verify output
ls -la ./my-design-system/src/
```

### Workflow 3: Selective Generation

Generate focused libraries for different use cases.

```bash
# Core UI library only
npx ds-gen generate \
  --roots core-ui \
  --out ./ds-core

# Business components library
npx ds-gen generate \
  --roots biz-ui \
  --categories business \
  --out ./ds-business

# Primitives only
npx ds-gen generate \
  --categories primitive layout \
  --out ./ds-primitives

# Themed variants
npx ds-gen generate \
  --themes light dark high-contrast \
  --fonts inter roboto \
  --out ./ds-complete
```

### Workflow 4: Update & Regenerate

Keep libraries in sync as your design system evolves.

```bash
# 1. Update components
# (edit src/components/ui/Button.tsx, add new components, etc.)

# 2. Rescan
npx ds-gen scan-components

# 3. Regenerate library
npx ds-gen generate --out ./my-design-system

# 4. Test & publish
cd ./my-design-system
npm run build
npm publish
```

---

## Components

### Scanning Components

Components are discovered automatically from configured roots.

**Requirements:**
- `.tsx` or `.ts` files
- Export a React component (function or class)
- Optional: JSDoc tags for metadata

**Example Component:**

```tsx
/**
 * Primary action button for forms and CTAs
 * @dsCategory primitive
 * @dsStatus stable
 * @dsVariants size:sm|md|lg; variant:primary|secondary
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

### Component Metadata

Each scanned component is indexed with:

```json
{
  "id": "button-primary",
  "name": "Button",
  "exportName": "Button",
  "filePath": "src/components/ui/Button.tsx",
  "category": "primitive",
  "tags": ["button", "cta", "action"],
  "status": "stable",
  "variants": "size:sm|md|lg; variant:primary|secondary",
  "rootId": "core-ui"
}
```

### Categorization Rules

Categories are applied in this order (first match wins):

1. **JSDoc Tag** – `@dsCategory` in component comment
2. **Directory Name** – Based on parent directory
3. **File Name Pattern** – Heuristic from filename
4. **Default** – "uncategorized"

**Common Categories:**
- `primitive` – Button, Input, Card
- `layout` – Grid, Sidebar, Header
- `business` – BusinessCard, ListingHeader
- `form` – FormField, Select, Checkbox
- `overlay` – Modal, Popover, Tooltip

---

## Themes & Colors

### Adding New Themes

1. **Create a theme file** in `config/themes/`:

**JSON Format:**
```json
{
  "colors": {
    "primary": "#007AFF",
    "secondary": "#5AC8FA",
    "background": "#FFFFFF",
    "text": "#000000",
    "border": "#E0E0E0"
  },
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem"
  },
  "borderRadius": {
    "sm": "0.25rem",
    "md": "0.5rem",
    "lg": "1rem"
  }
}
```

**CSS Format:**
```css
--color-primary: #007AFF;
--color-secondary: #5AC8FA;
--color-background: #FFFFFF;
--color-text: #000000;
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--radius-sm: 0.25rem;
```

2. **Index the theme:**
```bash
npx ds-gen add-theme ./config/themes
```

3. **Use in your app:**

**With CSS Variables:**
```tsx
// Set theme on root element
document.documentElement.setAttribute('data-theme', 'dark');

// Use in CSS
.button {
  background: var(--color-primary);
  color: var(--color-text);
  padding: var(--spacing-md);
}
```

**With React Theme Provider:**
```tsx
import { ThemeProvider } from './generated/themes';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Button>Click me</Button>
    </ThemeProvider>
  );
}
```

### Theme Token Structure

Themes support these token categories:

| Category | Purpose | Example |
|----------|---------|---------|
| `colors` | Brand and semantic colors | primary, error, background |
| `spacing` | Margin/padding scale | xs, sm, md, lg, xl |
| `borderRadius` | Border radius values | sm, md, lg |
| `fontSize` | Typography sizes | sm, base, lg, xl |
| `fontWeight` | Font weights | 400, 700 |
| `lineHeight` | Line heights | tight, normal, relaxed |
| `shadows` | Box shadow values | sm, md, lg |

### Pre-Built Themes

Your project includes 3 sample themes:

1. **Light** (`config/themes/light.json`)
2. **Dark** (`config/themes/dark.json`)
3. **High Contrast** (`config/themes/high-contrast.css`)

Edit these anytime and rescan:
```bash
npx ds-gen add-theme ./config/themes
```

---

## Fonts

### Adding Custom Fonts

1. **Create `assets/fonts/` directory:**
```bash
mkdir -p assets/fonts
```

2. **Add font files** with descriptive names:
```
assets/fonts/
├── Inter-Regular.ttf
├── Inter-Bold.ttf
├── Inter-Italic.ttf
├── Inter-BoldItalic.ttf
├── Roboto-Regular.ttf
└── Roboto-Bold.ttf
```

3. **Index fonts:**
```bash
npx ds-gen add-font ./assets/fonts
```

4. **Use in your app:**

**Import CSS:**
```tsx
import '../generated/fonts.css';
```

**Apply in CSS:**
```css
body {
  font-family: 'Inter', sans-serif;
}

h1 {
  font-family: 'Roboto', sans-serif;
}
```

**Use Tailwind Extension:**
```tsx
// In tailwind.config.js
const fontExtension = require('./generated/tailwind.fonts.extend.js');

module.exports = {
  theme: {
    extend: {
      fontFamily: fontExtension,
    },
  },
};

// In component
<h1 className="font-inter">Heading</h1>
<p className="font-roboto">Paragraph</p>
```

### Font Naming Convention

Filenames are parsed to infer weight and style:

| Pattern | Weight | Style |
|---------|--------|-------|
| `Name-Regular.ttf` | 400 | normal |
| `Name-Bold.ttf` | 700 | normal |
| `Name-Italic.ttf` | 400 | italic |
| `Name-BoldItalic.ttf` | 700 | italic |
| `Name-Light.ttf` | 300 | normal |
| `Name-ExtraBold.ttf` | 800 | normal |

### Font Config (Advanced)

Create `assets/fonts/font-config.json` to override inference:

```json
{
  "inter": {
    "family": "Inter",
    "display": "swap"
  },
  "roboto": {
    "family": "Roboto",
    "display": "swap"
  }
}
```

---

## Library Generation

### Generate a Design System Package

The `generate` command creates a complete, reusable design system package.

```bash
npx ds-gen generate \
  --out ./dist/my-design-system \
  --name @myorg/design-system \
  --version 1.0.0 \
  --roots core-ui biz-ui \
  --themes light dark
```

### Output Structure

```
dist/my-design-system/
├── src/
│   ├── components/
│   │   ├── index.ts              # All selected components
│   │   ├── primitives/           # (optional subdirs)
│   │   └── business/
│   ├── tokens/
│   │   ├── themes.ts             # Theme token exports
│   │   ├── fonts.ts              # Font token exports
│   │   └── index.ts
│   ├── theme/
│   │   ├── ThemeProvider.tsx      # Theme context provider
│   │   └── index.ts
│   └── index.ts                  # Main entry point
├── dist/
│   ├── index.js
│   ├── index.d.ts
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

### Generated Files

**`src/components/index.ts`** – Component re-exports
```typescript
// core-ui
export { Button, Card, Input } from '../../../src/components/ui';
export { BusinessCard } from '../../../src/components/business';
```

**`src/tokens/themes.ts`** – Theme exports
```typescript
export const themes = {
  light: {
    name: "light",
    id: "light",
    tokens: {
      colors: { primary: "#007AFF", ... }
    }
  }
} as const;

export type ThemeId = keyof typeof themes;
```

**`src/tokens/fonts.ts`** – Font exports
```typescript
export const fonts = {
  inter: { family: "Inter", id: "inter" },
  roboto: { family: "Roboto", id: "roboto" }
} as const;

export type FontId = keyof typeof fonts;
```

**`src/theme/ThemeProvider.tsx`** – React provider
```typescript
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
}) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  // ...
};
```

### Usage in Downstream Projects

```typescript
import {
  Button,
  Card,
  themes,
  ThemeProvider,
} from '@myorg/design-system';

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Card>
        <Button>Hello Design System</Button>
      </Card>
    </ThemeProvider>
  );
}
```

---

## Best Practices

### Component Organization

✅ **Do:**
- Organize components by category (primitives, layout, business)
- Use consistent naming (PascalCase for components)
- Document with JSDoc tags
- Group related components in folders
- Export from index files

❌ **Don't:**
- Mix multiple components in one file
- Use inconsistent naming conventions
- Skip metadata tags
- Create deeply nested folder structures

### Theme Design

✅ **Do:**
- Create semantic color categories (primary, secondary, success, error)
- Use CSS variables for all theme values
- Test contrast ratios for accessibility
- Document color purposes
- Version your themes

❌ **Don't:**
- Use hard-coded hex values in components
- Create infinite color variations
- Mix light and dark mode logic in components
- Forget accessibility standards

### Library Generation

✅ **Do:**
- Start with selective generation (single root or category)
- Use meaningful library names and versions
- Generate filtered packages for specific use cases
- Test generated libraries before publishing
- Update regularly as components evolve

❌ **Don't:**
- Generate everything at once (too large)
- Forget to rescan after component updates
- Skip peer dependency declarations
- Publish broken or incomplete packages

### Workflow

✅ **Do:**
```bash
# 1. Scan frequently
npx ds-gen scan-components

# 2. Generate targeted libraries
npx ds-gen generate --roots core-ui --out ./ds-core

# 3. Test & iterate
cd ./ds-core
npm run build
npm test

# 4. Rescan when components change
npx ds-gen scan-components
```

❌ **Don't:**
```bash
# Don't forget to rescan before regenerating
npx ds-gen generate  # Old data!

# Don't generate monolithic packages
npx ds-gen generate --out ./everything  # 50MB+

# Don't skip building/testing
npx ds-gen generate && npm publish  # Untested!
```

---

## Troubleshooting

### Issue: "Config not found"

**Solution:**
```bash
npx ds-gen init
# Creates ./config/design-system.config.json
```

### Issue: "No components scanned"

**Solution:**
1. Verify paths in `config/design-system.config.json`
2. Check that `.tsx` files exist in component roots
3. Ensure components are exported

```bash
# Debug
cat config/design-system.config.json | grep componentRoots
ls -R ./src/components/ui/*.tsx
```

### Issue: "Theme format not recognized"

**Solution:**
- Use one of these formats:
  - Structured JSON: `{ "colors": { "primary": "#..." } }`
  - Flat JSON: `{ "color.primary": "#..." }`
  - CSS: `--color-primary: #...;`

### Issue: "Fonts not appearing"

**Solution:**
1. Check font files are in `assets/fonts/`
2. Verify filenames follow convention
3. Rebuild and check `generated/fonts.css`

```bash
npx ds-gen add-font ./assets/fonts
cat generated/fonts.css
```

### Issue: "Generated library has broken imports"

**Solution:**
1. Verify component paths are correct
2. Run from project root
3. Check that referenced components exist

```bash
npx ds-gen scan-components
npx ds-gen generate --out ./test-lib
cat ./test-lib/src/components/index.ts
```

### Performance Issues

**If scanning is slow:**
- Check for large non-component files in roots
- Reduce number of component roots if unnecessary
- Run on SSD if possible

```bash
# Check what's being scanned
cat config/design-system.config.json
```

---

## Advanced Usage

### Custom Configuration

Use different configs for different scenarios:

```bash
# Development setup
npx ds-gen init --config ./config/ds.dev.json
npx ds-gen scan-components --config ./config/ds.dev.json

# Production setup
npx ds-gen generate \
  --config ./config/ds.prod.json \
  --out ./dist/design-system
```

### Scripted Generation

Add to `package.json`:

```json
{
  "scripts": {
    "ds:init": "ds-gen init",
    "ds:scan": "ds-gen scan-components",
    "ds:index": "ds-gen add-theme ./config/themes && ds-gen add-font ./assets/fonts",
    "ds:generate": "ds-gen generate --out ./dist/ds",
    "ds:build": "npm run ds:scan && npm run ds:index && npm run ds:generate"
  }
}
```

Then run:
```bash
npm run ds:build
```

### CI/CD Integration

**GitHub Actions Example:**

```yaml
name: Generate Design System

on:
  push:
    branches: [main]
    paths:
      - 'src/components/**'
      - 'config/**'

jobs:
  generate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npx ds-gen scan-components
      - run: npx ds-gen generate --out ./dist/design-system
      - run: npm publish ./dist/design-system
```

---

## Resources

- **Configuration Reference** – `config/design-system.config.json`
- **Component Examples** – `src/components/`
- **Theme Examples** – `config/themes/`
- **Generated Output** – `generated/` and `./dist/`

---

## Support

For issues or questions:
1. Check [Troubleshooting](#troubleshooting) section
2. Review [Workflows](#workflows) for your use case
3. Inspect generated indexes: `config/*.index.json`
4. Check CLI output for error messages

---

**Last Updated:** December 2, 2025  
**Version:** 1.0.0  
**Status:** Production Ready
