 # AGENTS · `src/components/ui` (Design System Primitives)

 ## 1. Package Identity

 - **Purpose:** Token-driven, reusable UI primitives (buttons, cards, inputs, alerts, avatar, filters, pagination, etc.).
 - **Tech:** React + TypeScript + Tailwind CSS, aligned with design tokens in `style.json` and `tailwind.config.js`.

 ---

 ## 2. Setup & Run

 From the repo root:

 ```bash
 npm install
 npm run dev        # View primitives via ComponentsPage and ThemeShowcasePage
 npm run build
 npm run lint
 ```

 ---

 ## 3. Patterns & Conventions

 ### 3.1 File Organization

 - One primitive per file:
   - `Button.tsx`, `Card.tsx`, `Input.tsx`, `Select.tsx`, `Checkbox.tsx`, `Alert.tsx`, `Skeleton.tsx`.
   - `Avatar.tsx`, `FilterChip.tsx`, `Pagination.tsx`, `Badge.tsx`, `MetaItem.tsx`, `SidePanel.tsx`, `ThemePreview.tsx`, `ThemeToggle.tsx`.
 - Props are typed via interfaces/types in the same file.

 ### 3.2 Styling Rules

 - ✅ **DO:** Use Tailwind classes and theme tokens only; colors/spacing/typography must map to `tailwind.config.js` / `style.json`.
 - ❌ **DON'T:** Use inline styles or raw hex/rgb values.

 ### 3.3 Component Patterns

 - ✅ **DO:** Use functional components with typed props.
   ```ts
   export function Button({ variant = "primary", size = "md", ...props }: ButtonProps) {
     // ...
   }
   ```

 - ✅ **DO:** Export a single main component per file and support `className` overrides via `clsx`.
 - ✅ **DO:** Keep components stateless or with minimal UI state.
 - ❌ **DON'T:** Introduce business-specific copy or behavior; keep these generic.

 ---

 ## 4. Touch Points / Key Files

 - Buttons: `src/components/ui/Button.tsx`.
 - Cards: `src/components/ui/Card.tsx`.
 - Forms: `Input.tsx`, `Select.tsx`, `Checkbox.tsx`.
 - Feedback: `Alert.tsx`, `Skeleton.tsx`, `Badge.tsx`.
 - Advanced UI: `Avatar.tsx`, `FilterChip.tsx`, `Pagination.tsx`, `SidePanel.tsx`, `MetaItem.tsx`.
 - Theme helpers: `ThemePreview.tsx`, `ThemeToggle.tsx`.

 Examples of usage: `src/pages/ComponentsPage.tsx`, `src/pages/ThemeShowcasePage.tsx`, and other `src/pages/*` files.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # List all primitives
 rg -n "export function" src/components/ui

 # Find props for a primitive
 rg -n "ButtonProps" src/components/ui/Button.tsx
 rg -n "PaginationProps" src/components/ui/Pagination.tsx

 # Find primitive usage
 rg -n "<Button" src
 rg -n "<FilterChip" src
 rg -n "<Avatar" src
 ```

 ---

 ## 6. Common Gotchas

 - Keep primitives generic; do not import from `src/pages` or domain components.
 - When adding props, update usage examples in `ComponentsPage.tsx`.
 - Avoid side effects (no `localStorage`/network calls here).

 ---

 ## 7. Pre-PR Checks

 ```bash
 npm run lint && npm run build
 # Manually verify ComponentsPage and ThemeShowcasePage render correctly.
 ```
