 # AGENTS · `src/components/layout` (Layout & Navigation)

 ## 1. Package Identity

 - **Purpose:** Global layout and navigation components (Sidebar, Header, NavMenu, and related scaffolding).
 - **Tech:** React + TypeScript, composing UI primitives and icons.

 ---

 ## 2. Setup & Run

 From the repo root:

 ```bash
 npm install
 npm run dev        # Use sidebar to navigate between pages
 npm run build
 npm run lint
 ```

 ---

 ## 3. Patterns & Conventions

 ### 3.1 File Organization

 - `Sidebar.tsx` – vertical navigation; manages active state and triggers `onNavigate(pageKey)`.
 - `Header.tsx` – top bar with title, actions, theme toggle; toggles `sidebarOpen`.
 - `NavMenu.tsx` – reusable navigation menu used by `Sidebar` (and possibly other surfaces).

 ### 3.2 Layout Rules

 - ✅ **DO:** Focus on structure and wiring: accept props like `currentPage`, `onNavigate`, `isOpen`.
 - ✅ **DO:** Use UI primitives (`Button`, `Avatar`, etc.) and `lucide-react` icons.
 - ❌ **DON'T:** Embed business/admin logic; that belongs in pages or domain components.

 ### 3.3 Navigation Pattern

 - `Sidebar` renders navigation items for `home`, `search`, `map`, `restaurants`, `owner-dashboard`, `create-listing`, `admin-*`, `components`, `theme-showcase`, and calls `onNavigate()`.
 - `Header` shows app title/context, includes `ThemeToggle`, and controls `sidebarOpen`.

 ---

 ## 4. Touch Points / Key Files

 - Sidebar: `src/components/layout/Sidebar.tsx`.
 - Header: `src/components/layout/Header.tsx`.
 - NavMenu: `src/components/layout/NavMenu.tsx`.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # Find navigation items
 rg -n "onNavigate" src/components/layout/Sidebar.tsx
 rg -n "currentPage" src/components/layout

 # Find theme toggle in header
 rg -n "ThemeToggle" src/components/layout/Header.tsx

 # Find icon usage
 rg -n "lucide-react" src/components/layout
 ```

 ---

 ## 6. Common Gotchas

 - When adding a new page, update nav items in `Sidebar.tsx` **and** wire the page in `src/App.tsx`.
 - Keep layout components dumb; they shouldn’t fetch data or own domain logic.

 ---

 ## 7. Pre-PR Checks

 ```bash
 npm run lint && npm run build
 # Manually click through nav (desktop + mobile) to verify behavior.
 ```
