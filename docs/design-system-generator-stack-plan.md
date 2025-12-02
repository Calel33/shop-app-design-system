# Design System Generator – Graphite Stack Diff Workflow Plan

> Note: **Only coding tasks** are represented as diffs. Non-coding steps (decisions, docs, naming, etc.) are embedded as context within the relevant diffs.

---

## Stack Overview

A proposed **Graphite stack** of small, focused diffs to implement the design system generator. All diffs branch off `master` and build on each other:

1. **Diff 1:** Tooling skeleton & base config
2. **Diff 2:** Multi-root component scanner & index
3. **Diff 3:** Component normalization & categorization
4. **Diff 4:** Font manager (scan + @font-face generation)
5. **Diff 5:** Theme manager (ingest + normalize multi-format themes)
6. **Diff 6:** Core design-system generator (library output)
7. **Diff 7:** CLI wrapper & user workflows

Each diff should be ~single-responsibility and independently reviewable.

---

## Diff 1 – Tooling Skeleton & Base Config

**Goal:** Establish the minimal `ds-gen` tooling structure and configuration files, without implementing real logic yet.

**Coding tasks (this diff only):**

- Add `ds-gen/` directory with minimal TypeScript project setup:
  - `ds-gen/src/index.ts` – placeholder exports.
  - `ds-gen/tsconfig.json` – TS config (ESM/CJS choice aligned with repo).
- Add base config and index files under `config/`:
  - `config/design-system.config.json`
    - Includes `paths.componentRoots`, `fontsRoot`, `themesRoot`, and `indexes`.
  - Empty JSON arrays for:
    - `config/components.index.json`
    - `config/fonts.index.json`
    - `config/themes.index.json`
- Wire up basic npm scripts in root `package.json` (if appropriate):
  - `"ds-gen:build"`, `"ds-gen:dev"` (optional).
- Ensure path resolution is Windows-friendly and Vite/TS toolchain stays untouched.

_No business logic yet; just structure and configuration._

---

## Diff 2 – Multi-Root Component Scanner & Raw Index

**Goal:** Implement a **read-only scanner** that walks multiple component roots (`src/components/*`, `more-components/ui2`) and produces a raw component index.

**Coding tasks:**

- Implement a `ComponentRoot` model and config loader:
  - `ds-gen/src/config.ts`
    - Reads `config/design-system.config.json`.
    - Resolves absolute paths for `componentRoots`.
- Implement `ComponentScanner`:
  - `ds-gen/src/scanner/ComponentScanner.ts`
  - Responsibilities:
    - For each root:
      - Glob `**/*.tsx` (using `fast-glob` or similar).
      - For each file:
        - Parse using TypeScript/`ts-morph` to find exported React components.
    - Produce a **raw** `ComponentMeta` (without category/tags) with fields:
      - `name`, `exportName`, `filePath`, `rootId`, and placeholder fields for category/tags/status.
- Implement serialization to `config/components.index.json`:
  - `scanComponents()` that:
    - Loads config.
    - Scans roots.
    - Writes raw index JSON.
- Keep categories/tags/status mostly placeholder/default in this diff (normalization comes next).
- Add one small entry point:
  - `ds-gen/src/index.ts` exports `scanComponents`.

---

## Diff 3 – Component Normalization & Categorization

**Goal:** Enhance the raw scanner index with **normalized** categories, IDs, tags, and status, while still only reading existing components.

**Coding tasks:**

- Define `ComponentMeta` normalized type:
  - `ds-gen/src/types/ComponentMeta.ts`
  - Fields:
    - `id`, `name`, `filePath`, `exportName`, `category`, `tags`, `status`, `variants?`, `rootId`.
- Implement category + tag normalization:
  - `ds-gen/src/normalizer/ComponentNormalizer.ts`
  - Responsibilities:
    - Take raw scan results.
    - Apply configurable rules:
      - From `categoryByDir` and `categoryByName` (either from config JSON or a TypeScript map).
      - JSDoc overrides: `@dsCategory`, `@dsStatus`, `@dsVariants`.
    - Generate unique `id` slugs (with collision avoidance).
    - Derive default tags from name/path.
- Update scanner pipeline:
  - `scanComponents()` now:
    - Produces raw entries.
    - Runs them through `ComponentNormalizer`.
    - Writes **normalized** entries to `config/components.index.json`.
- Keep this diff focused on **components only** – no fonts/themes yet.

---

## Diff 4 – Font Manager (Scan + @font-face)

**Goal:** Implement a font management layer that scans a fonts directory, builds a font index, and emits `@font-face` CSS and Tailwind extension fragments.

**Coding tasks:**

- Add `FontMeta` and related types:
  - `ds-gen/src/types/FontMeta.ts`
- Implement `FontManager`:
  - `ds-gen/src/fonts/FontManager.ts`
  - Responsibilities:
    - Read `paths.fontsRoot` from config.
    - Walk subdirectories (each per font family).
    - Read `font.config.json` when present, or infer defaults.
    - Build `FontMeta[]`:
      - `id`, `family`, `files[]`, `display`, etc.
    - Serialize to `config/fonts.index.json`.
- Generate static assets:
  - `generated/fonts.css` with `@font-face` rules.
  - `generated/tailwind.fonts.extend.js` for Tailwind `fontFamily` extensions (optional but designed to import/spread into `tailwind.config.js`).
- Export a function:
  - `buildFonts()` from `ds-gen/src/index.ts` to run this pipeline.
- Do not modify existing Tailwind config automatically in this diff; just emit files.

---

## Diff 5 – Theme Manager (Multi-Format Ingestion & Normalization)

**Goal:** Create a theme system that can accept themes in various formats (JSON tokens, flat JSON, CSS vars) and normalize them into a canonical `Theme` model.

**Coding tasks:**

- Define `ThemeTokens` and `Theme` types:
  - `ds-gen/src/types/Theme.ts`
- Implement `ThemeNormalizer`:
  - `ds-gen/src/themes/ThemeNormalizer.ts`
  - Responsibilities:
    - Accept input:
      - JSON token object.
      - Flat JSON.
      - CSS string.
    - Detect format.
    - Extract colors / radius / spacing into `ThemeTokens`.
    - Map keys to a consistent naming scheme aligned with current `style.json` where practical.
- Implement a simple file ingestion flow:
  - `ds-gen/src/themes/ThemeManager.ts`
  - Responsibilities:
    - Read theme files from `paths.themesRoot`.
    - For each file, normalize into a `Theme`.
    - Build `Theme[]` and serialize to `config/themes.index.json`.
- Emit theme CSS:
  - `generated/themes.css` with `[data-theme="..."]` CSS variable blocks for each theme.
- Export a function:
  - `buildThemes()` from `ds-gen/src/index.ts` to run this pipeline.

---

## Diff 6 – Core Design System Generator (Library Output)

**Goal:** Implement the core **design-system library generator** that uses the component, font, and theme indexes to emit a reusable package.

**Coding tasks:**

- Define generation options type:
  - `ds-gen/src/types/GenerateOptions.ts`:
    - `includeRoots`, `excludeRoots`
    - `includeCategories`, `excludeCategories`
    - `selectedFonts`, `selectedThemes`
    - `outDir`
- Implement `DesignSystemGenerator`:
  - `ds-gen/src/generators/DesignSystemGenerator.ts`
  - Responsibilities:
    - Load:
      - `components.index.json`
      - `fonts.index.json`
      - `themes.index.json`
    - Apply filters:
      - Root-based (e.g., `core-ui` + `ui2` only).
      - Category-based (e.g., `primitive`, `layout`).
    - Create a folder structure at `outDir`, e.g.:

      ```text
      <outDir>/
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

    - Emit:
      - `src/components/index.ts` re-exporting selected components from `src/components/*` and `more-components/ui2`.
      - `src/tokens/themes.ts`, `src/tokens/fonts.ts` based on indexes and options.
      - `src/theme/ThemeProvider.tsx` skeleton using CSS variables (if included).
      - `package.json` for the generated library (basic fields, no publish logic).
- Export:
  - `generateDesignSystem(options)` from `ds-gen/src/index.ts`.

This diff is where the **core value** (generating the reusable DS package) is implemented.

---

## Diff 7 – CLI Wrapper & Workflows

**Goal:** Provide a `ds-gen` CLI that exposes the core functionality: scanning, fonts, themes, and generation.

**Coding tasks:**

- Implement CLI entry:
  - `ds-gen/bin/cli.ts` (Node ESM or CJS as appropriate).
  - Register it via `package.json` `bin` field, e.g.:

    ```json
    {
      "bin": {
        "ds-gen": "./ds-gen/bin/cli.js"
      }
    }
    ```

- Wire commands to library functions:
  - `ds-gen init`
    - Create a starter `config/design-system.config.json` if absent.
    - Seed empty index JSON files.
  - `ds-gen scan-components [--root <id>]`
    - Call `scanComponents()` (optionally scoped to a root).
  - `ds-gen add-font <fontDir>`
    - Register/copy font directory into `assets/fonts` if needed.
    - Call `buildFonts()`.
  - `ds-gen add-theme <path>`
    - Ingest a theme file and update `themes.index.json` via `ThemeManager`.
  - `ds-gen generate [options]`
    - Parse flags for roots/categories/fonts/themes/outDir.
    - Call `generateDesignSystem(options)`.
- Ensure CLI is **read-only on existing app code**, only writing to:
  - `config/` index files.
  - `generated/` artifacts.
  - (Optional) `assets/fonts/` for new fonts.

---

## Notes & Constraints

- Only **coding tasks** (new files, logic, CLI, generators) are split into these diffs.
- Non-coding aspects (naming decisions, docs, usage guides) should be handled outside this stack or within follow-up non-code diffs if needed.
- Each diff should:
  - Be small and independently testable.
  - Prefer **pure additions** and avoid refactoring existing app code unless strictly necessary.
- Before submitting the top-level diff:
  - Run `npm run lint` and `npm run build` at the repo root.
  - Optionally add targeted `tsc`/lint tasks for `ds-gen` itself.
