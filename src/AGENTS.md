 # AGENTS · `src/` (App & Design System Code)

 ## 1. Package Identity

 - **Purpose:** Core frontend app and design system for the Belize business directory.
 - **Tech:** React 18 + TypeScript + Tailwind CSS v3, bundled with Vite.

 ---

 ## 2. Setup & Run (from repo root)

 ```bash
 # Install once at root
 npm install

 # Dev server (serves code from src/)
 npm run dev

 # Build
 npm run build

 # Lint (focuses primarily on src/)
 npm run lint
 ```

 There is no separate `src`-only build; all commands are root-level.

 ---

 ## 3. Patterns & Conventions

 ### 3.1 File Organization

 - **Application shell & entry**
   - `src/main.tsx` → Bootstraps React and renders `<App />`.
   - `src/App.tsx` → App shell: ThemeProvider, Sidebar, Header, page switching.
 - **Themes & Context**
   - `src/contexts/ThemeContext.tsx` → Theme state and token-aware context.
 - **Components**
   - `src/components/ui/*` → Generic, reusable UI primitives.
   - `src/components/business/*` → Business-directory components.
   - `src/components/home/*` → Homepage hero + featured sections.
   - `src/components/layout/*` → Layout primitives (Sidebar, Header, NavMenu, SidePanel).
   - `src/components/admin/*` → Admin dashboard widgets/components.
 - **Pages**
   - `src/pages/*` → Page-level views, mapped from `currentPage` in `App.tsx`.
 - **Data & Utilities**
   - `src/data/*` → Mock data (businesses, categories, metrics).
   - `src/lib/*` → Shared utilities and helpers.

 ### 3.2 React & TS Patterns

 - ✅ **DO:** Use function components with typed props.  
   Example: `src/components/ui/Button.tsx`
   ```ts
   export function Button({ variant = "primary", ...props }: ButtonProps) {
     // ...
   }
   ```

 - ✅ **DO:** Use composition over inheritance.
 - ✅ **DO:** Co-locate related pieces: primitives in `components/ui`, domain wrappers in `components/business`, page wiring in `pages/*`.
 - ❌ **DON'T:** Introduce class components or `React.Component` subclasses.
 - ❌ **DON'T:** Add inline styles or hard-coded colors; use Tailwind + tokens.
 - ❌ **DON'T:** Fetch real data from APIs; keep this project mock-data-driven unless explicitly extended.

 ### 3.3 Navigation Pattern

 - `App.tsx` controls navigation with:
   - `const [currentPage, setCurrentPage] = useState("home");`
   - `<Sidebar currentPage={currentPage} onNavigate={setCurrentPage} />`
   - `renderPage()` switch that returns the appropriate `*Page` component.
 - ✅ **DO:** When adding a new page:
   1. Create `src/pages/MyNewPage.tsx`.
   2. Import it in `App.tsx`.
   3. Add a case to `renderPage()`.
   4. Add a nav entry in `src/components/layout/Sidebar.tsx`.

 ---

 ## 4. Touch Points / Key Files

 - **App shell & navigation:** `src/App.tsx`
 - **Entry point:** `src/main.tsx`
 - **Theme provider & tokens:** `src/contexts/ThemeContext.tsx`
 - **Core UI primitives:** `src/components/ui/*`
 - **Layout:** `src/components/layout/Sidebar.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/NavMenu.tsx`
 - **Example pages:** `src/pages/HomePage.tsx`, `src/pages/MapViewPage.tsx`, `src/pages/OwnerDashboardPage.tsx`, `src/pages/AdminDashboardPage.tsx`, `src/pages/ComponentsPage.tsx`, `src/pages/ThemeShowcasePage.tsx`.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # Find React components (function declarations)
 rg -n "export function .*Page" src/pages
 rg -n "export function " src/components

 # Find UI primitives in the design system
 rg -n "export function .*Button" src/components/ui
 rg -n "export function .*Card" src/components/ui

 # Find where ThemeContext is used
 rg -n "ThemeContext" src
 rg -n "ThemeProvider" src

 # Find navigation entries in Sidebar
 rg -n "onNavigate" src/components/layout/Sidebar.tsx

 # Find mock data usage
 rg -n "mock" src/data src/pages
 ```

 ---

 ## 6. Common Gotchas

 - `npm run lint` is strict about **unused imports and variables**; remove or use anything you import.
 - Keep component files under ~500 lines; if a page grows too large, factor sub-sections into helper components.
 - Ensure styling uses design tokens via Tailwind classes, not raw color/spacing values.

 ---

 ## 7. Pre-PR Checks (for src changes)

 ```bash
 npm run lint && npm run build
 # Then manually verify affected pages in the browser.
 ```
