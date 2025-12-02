# Design System Generator Plan

## 1. Goal

Create a **repeatable, extensible “design system generator”** that:

- Uses **all existing UI components**:
  - `src/components/ui` (core primitives)
  - `src/components/business`, `src/components/layout`, etc. (domain/layout components)
  - `more-components/ui2` (new/additional components)
- Normalizes and indexes these components for reuse.
- Lets users add **fonts** and **themes** through a simple workflow or CLI.
- Generates a **ready-to-use design system package** (library and/or starter) on demand.

---

## 2. High-Level Architecture

Introduce a tooling folder in the repo with a small Node/TypeScript library + optional CLI:

```text
ds-gen/
  src/
    scanner/        # Scans src + ui2 components
    normalizer/     # Normalizes -> ComponentMeta
    fonts/          # Font scanning + @font-face generation
    themes/         # Theme ingestion + normalization
    generators/     # Emits design-system package, tokens, CSS
    config.ts       # Shared configuration helpers
    index.ts        # Programmatic entrypoint
  bin/
    cli.ts          # CLI wrapper (ds-gen)
config/
  design-system.config.json
  components.index.json
  fonts.index.json
  themes.index.json
```

- `design-system.config.json` is the **single source of truth** for:
  - Component roots
  - Font root
  - Theme root
  - Index file locations
  - Defaults for generation.

---

## 3. Component Sources & Configuration

### 3.1. Component roots

Configure multiple component roots in `config/design-system.config.json`:

```json
{
  "paths": {
    "componentRoots": [
      { "id": "core-ui", "path": "./src/components/ui" },
      { "id": "biz-ui",  "path": "./src/components/business" },
      { "id": "layout",  "path": "./src/components/layout" },
      { "id": "ui2",     "path": "./more-components/ui2" }
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
    "fontSans": "anek-latin",
    "fontHeading": "anek-latin",
    "themes": ["light", "dark"]
  }
}
```

- All components under these roots are considered candidates for the design system.
- Each component entry will record the `rootId` (`core-ui`, `biz-ui`, `layout`, `ui2`, etc.) so we can filter later.

---

## 4. Component Scanning

### 4.1. Conventions

- Components live in `*.tsx` files.
- Prefer **named exports** (e.g. `export function Button` or `export const Button`).
- Optionally support JSDoc metadata:

```ts
/**
 * @dsCategory "primitive"
 * @dsStatus "stable"
 * @dsVariants ["primary", "secondary", "ghost"]
 */
export function Button() { ... }
```

- If metadata is absent, use folder/name heuristics to determine category and tags.

### 4.2. Scanner behavior

Implement a `scanComponents` function that:

- Accepts a list of `ComponentRoot`:

```ts
type ComponentRoot = {
  id: string;   // 'core-ui' | 'biz-ui' | 'layout' | 'ui2'
  path: string; // path relative to project root
};
```

- For each root:
  - Glob `**/*.tsx`.
  - Parse each file with `ts-morph` or the TypeScript compiler API.
  - Identify exported React components.
  - Extract:
    - component name
    - export name
    - props type (if easily resolvable)
    - JSDoc tags (`@dsCategory`, `@dsStatus`, `@dsVariants`, etc.).
- Attach a `rootId` to each component.

### 4.3. Component meta model

Normalized component shape:

```ts
type ComponentMeta = {
  id: string;                // slug: 'button', 'listing-card'
  name: string;              // 'Button'
  filePath: string;          // relative path from repo root
  exportName: string;        // 'Button'
  category: string;          // 'primitive' | 'layout' | 'domain-business' | etc.
  tags: string[];            // ['button', 'action']
  status: 'experimental' | 'stable' | 'deprecated';
  variants?: string[];       // ['primary', 'secondary']
  rootId: string;            // 'core-ui' | 'biz-ui' | 'layout' | 'ui2'
};
```

The scanner writes all `ComponentMeta` entries to `config/components.index.json`.

---

## 5. Normalization & Categorization

### 5.1. Category rules

Define category and tag rules via config:

```json
{
  "categoryByDir": {
    "src/components/ui": "primitive",
    "src/components/business": "domain-business",
    "src/components/layout": "layout",
    "more-components/ui2/forms": "form",
    "more-components/ui2/feedback": "feedback"
  },
  "categoryByName": {
    "Button": "primitive",
    "Input": "primitive",
    "Card": "layout",
    "ListingCard": "domain-business"
  }
}
```

Normalization pipeline:

1. Prefer explicit JSDoc `@dsCategory`.
2. Otherwise, check folder path via `categoryByDir`.
3. Otherwise, use `categoryByName` heuristics.
4. Generate `id` as a slug (`Button` → `button`, `ListingCard` → `listing-card`), deduplicating as needed.
5. Derive default `status` = `stable` unless overridden by `@dsStatus`.

### 5.2. Metadata persistence

Optional: store extra metadata in:

- Per-component `.meta.json` files, or
- A central `components.meta.json` keyed by `filePath`.

CLI can prompt on first discovery of a component missing key metadata and persist the answers.

---

## 6. Component Workflows

### 6.1. Adding/updating components

Workflow for any component under `src` or `more-components/ui2`:

1. Developer creates or modifies components in:
   - `src/components/ui`
   - `src/components/business`
   - `src/components/layout`
   - `more-components/ui2`
2. Run:

```bash
ds-gen scan-components
```

3. Scanner:
   - Traverses all configured roots.
   - Updates `config/components.index.json` with new/changed entries.

### 6.2. CLI support

CLI commands for components:

- `ds-gen scan-components`
  - Scan all roots from config.
- `ds-gen scan-components --root core-ui`
  - Only scan `src/components/ui`.
- Future: `ds-gen edit-meta <componentId>`
  - Open an interactive prompt to edit category, tags, status, etc.

---

## 7. Font Management

### 7.1. Font structure

Create a standard font structure, e.g.:

```text
assets/fonts/
  AnekLatin/
    AnekLatin-Regular.woff2
    AnekLatin-Medium.woff2
    font.config.json
  MyCustomSans/
    MyCustomSans-Regular.woff2
    MyCustomSans-Bold.woff2
    font.config.json
```

`font.config.json` example:

```json
{
  "family": "My Custom Sans",
  "display": "swap",
  "weights": ["400", "700"],
  "style": "normal"
}
```

Users can **drop new fonts** into `assets/fonts` and optionally provide a `font.config.json`. The CLI can also generate a default config.

### 7.2. Font meta model

```ts
type FontFileMeta = {
  path: string;
  weight: string;                 // "400", "700"
  style: 'normal' | 'italic';
  format: 'woff2' | 'woff' | 'ttf';
};

type FontMeta = {
  id: string;                     // 'anek-latin', 'my-custom-sans'
  family: string;                 // 'Anek Latin'
  files: FontFileMeta[];
  display: 'auto' | 'swap' | 'block' | 'fallback' | 'optional';
};
```

All fonts are written to `config/fonts.index.json`.

### 7.3. @font-face generation

The `FontManager`:

- Scans `assets/fonts`.
- Builds `FontMeta` entries.
- Emits:
  - `generated/fonts.css` with `@font-face` rules:

    ```css
    @font-face {
      font-family: "My Custom Sans";
      src: url("/fonts/MyCustomSans/MyCustomSans-Regular.woff2") format("woff2");
      font-weight: 400;
      font-style: normal;
      font-display: swap;
    }
    ```

  - Optional Tailwind extension fragment:

    ```js
    // generated/tailwind.fonts.extend.js
    module.exports = {
      fontFamily: {
        sans: ['var(--ds-font-sans, "Anek Latin")', 'system-ui', 'sans-serif'],
        heading: ['var(--ds-font-heading, "Anek Latin")', 'system-ui', 'sans-serif']
      }
    };
    ```

- The main Tailwind config can then import and spread this fragment.

### 7.4. Font selection in generated design systems

- Fonts are listed in `fonts.index.json`:

  ```json
  [
    { "id": "anek-latin", "family": "Anek Latin", "display": "swap", "files": [/* ... */] },
    { "id": "my-custom-sans", "family": "My Custom Sans", "display": "swap", "files": [/* ... */] }
  ]
  ```

- During system generation, user can choose:

  ```bash
  ds-gen generate --font-sans my-custom-sans --font-heading anek-latin
  ```

- Generator:
  - Emits CSS variables like `--ds-font-sans` and `--ds-font-heading`.
  - Exports a `fonts` token file mapping font ids to usable configs.

---

## 8. Theme Management

### 8.1. Supported input formats

Allow themes to be provided in various formats:

1. **Token JSON (nested)**:

   ```json
   {
     "color": {
       "primary": { "value": "#4F46E5" },
       "primary-foreground": { "value": "#FFFFFF" }
     }
   }
   ```

2. **Flat JSON**:

   ```json
   {
     "primary": "#4F46E5",
     "primaryForeground": "#FFFFFF"
   }
   ```

3. **CSS variables (string or file)**:

   ```css
   :root {
     --color-primary: #4F46E5;
     --color-primary-foreground: #ffffff;
   }
   ```

### 8.2. Canonical theme model

Internal normalized representation:

```ts
type ThemeTokens = {
  colors: Record<string, string>;
  radius?: Record<string, string>;
  spacing?: Record<string, string>;
  // Extendable to typography, shadows, etc.
};

type Theme = {
  id: string;               // 'light', 'dark', 'belize-sunset'
  label: string;            // 'Light', 'Belize Sunset'
  type: 'light' | 'dark' | 'custom';
  tokens: ThemeTokens;
};
```

### 8.3. Theme normalizer

`ThemeNormalizer`:

- Detects input format (JSON tokens, flat JSON, CSS string).
- Extracts colors and other tokens into `Theme.tokens`.
- Maps keys to the project’s token naming scheme (mirroring `style.json` where reasonable).

All themes are stored in `config/themes.index.json`.

### 8.4. Theme output

When generating the design system, the generator:

- Emits `generated/themes.css`:

  ```css
  :root[data-theme="light"] {
    --color-primary: #4F46E5;
    --color-primary-foreground: #ffffff;
    /* ... */
  }

  :root[data-theme="dark"] {
    --color-primary: #818CF8;
    --color-primary-foreground: #0f172a;
    /* ... */
  }
  ```

- Emits `src/tokens/themes.ts` (or `.json`) in the generated package:

  ```ts
  export const themes = {
    light: { /* tokens */ },
    dark: { /* tokens */ }
  };
  ```

- Provides an optional `ThemeProvider` snippet for apps to toggle themes.

---

## 9. Design System Generation

### 9.1. Target output

**Initial target**: a **design-system library package** that:

- Re-exports components from `src/components/ui`, `more-components/ui2`, and optionally domain/layout components.
- Exposes token files for fonts and themes.
- Can be imported into any React app.

Optional future target: a **Vite starter** using this library + tokens.

### 9.2. Generation pipeline

`generateDesignSystem(options)` workflow:

Inputs:

- `components: ComponentMeta[]` (from `components.index.json`)
- `fonts: FontMeta[]` (from `fonts.index.json`)
- `themes: Theme[]` (from `themes.index.json`)
- `options`:
  - `includeRoots`: `string[]` (e.g. `['core-ui', 'ui2']`)
  - `excludeRoots`: `string[]`
  - `includeCategories`: `string[]`
  - `excludeCategories`: `string[]`
  - `selectedFonts`: `{ sans?: string; heading?: string; }`
  - `selectedThemes`: `string[]` (IDs)
  - `outDir`: string (`./generated/design-system`)

Steps:

1. **Filter components** based on roots/categories/status/tags.
2. Create output structure:

   ```text
   generated/design-system/
     src/
       components/
         index.ts
       tokens/
         themes.ts
         fonts.ts
       theme/
         ThemeProvider.tsx (optional simple implementation)
     package.json
     tsconfig.json
   ```

3. Emit `tokens/themes.ts` and `tokens/fonts.ts` from indexes and selection.
4. Emit component barrel:

   ```ts
   // src/components/index.ts
   export { Button } from "../../../src/components/ui/Button";
   export { Input } from "../../../src/components/ui/Input";
   export { FilterChip } from "../../../more-components/ui2/FilterChip";
   export { ListingCard } from "../../../src/components/business/ListingCard"; // if included
   ```

5. Emit optional `ThemeProvider` wiring to CSS variables/themes.
6. Emit `package.json` for the design system library with appropriate entrypoints.

---

## 10. CLI Design

### 10.1. Commands

Provide a `ds-gen` CLI (Node-based) with commands:

- `ds-gen init`
  - Create a starter `config/design-system.config.json`.
  - Optionally scaffold `config/` and `assets/fonts/` directories.

- `ds-gen scan-components`
  - Scan all roots defined in config.
  - Flags:
    - `--root core-ui` (scan only one root).

- `ds-gen add-font <fontDir>`
  - Register a new font directory under `assets/fonts`.
  - Generate or update `font.config.json` if missing.
  - Regenerate `fonts.index.json` and `generated/fonts.css`.

- `ds-gen add-theme <pathOrStdin>`
  - Ingest a theme file (JSON or CSS).
  - Normalize to `Theme`.
  - Update `themes.index.json`.

- `ds-gen generate`
  - Generate a design system library into default or specified `--out` directory.
  - Key flags:
    - `--include-roots core-ui,ui2`
    - `--include-categories primitive,layout`
    - `--font-sans my-custom-sans`
    - `--font-heading anek-latin`
    - `--themes light,dark,belize-sunset`

### 10.2. Implementation notes

- Use a light CLI framework (e.g. `commander` or minimal custom parsing).
- Resolve paths relative to project root.
- All operations are **idempotent**: re-running should update, not duplicate.

---

## 11. Phased Implementation Plan

### Phase 1 – Foundations & Multi-Root Scanner

- Create `ds-gen/` structure and `config/design-system.config.json`.
- Implement:
  - `ComponentRoot` configuration.
  - `scanComponents(roots)` across:
    - `src/components/ui`
    - `src/components/business`
    - `src/components/layout`
    - `more-components/ui2`
  - Normalization → `ComponentMeta[]` with `rootId`, `category`, `tags`.
  - Write `config/components.index.json`.
- Implement `ds-gen scan-components` CLI command.

### Phase 2 – Fonts & Themes

- Implement `FontManager`:
  - Scan `assets/fonts`.
  - Build `fonts.index.json`.
  - Generate `generated/fonts.css` and Tailwind extension fragment.
- Implement `ThemeNormalizer`:
  - Accept JSON/CSS.
  - Normalize to `Theme`.
  - Build `themes.index.json`.
- Implement CLI:
  - `ds-gen add-font`
  - `ds-gen add-theme`.

### Phase 3 – Design System Generator

- Implement `generateDesignSystem`:
  - Read components/fonts/themes indexes.
  - Apply selection filters.
  - Emit `generated/design-system` package.
- Implement CLI:
  - `ds-gen generate` with the key flags.

### Phase 4 – UX & Extensibility

- Add interactive prompts for missing component metadata.
- Add optional presets (`--preset primitives-only`, `--preset full`).
- Add basic verification (e.g., run `tsc` or `npm run lint` in the generated package).

---

## 12. Outcome

When this plan is implemented, you will have:

- A **single, scriptable system** that:
  - Knows about your existing components in `src/components/*` and `more-components/ui2`.
  - Can be extended with new components over time.
  - Supports **plug-in fonts** and **multi-theme** support from various input formats.
- A **CLI or programmatic API** that can:
  - Scan and normalize components.
  - Register fonts and themes.
  - Generate a **design system package** on demand, ready to consume in any React app or starter.
