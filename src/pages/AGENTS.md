 # AGENTS · `src/pages` (Page-Level Views)

 ## 1. Package Identity

 - **Purpose:** Page-level React components that compose UI primitives and domain components into full screens.
 - **Tech:** React + TypeScript, driven by `currentPage` in `src/App.tsx`.

 ---

 ## 2. Setup & Run

 From the project root:

 ```bash
 npm install
 npm run dev        # Navigate via Sidebar through all pages
 npm run build
 npm run lint
 ```

 ---

 ## 3. Patterns & Conventions

 ### 3.1 File Organization

 Each page maps to a `currentPage` value in `App.tsx`:

 - `HomePage.tsx`
 - `SearchPage.tsx`
 - `MapViewPage.tsx`
 - `RestaurantsPage.tsx`
 - `OwnerDashboardPage.tsx`
 - `CreateListingPage.tsx`
 - `AdminQueuePage.tsx`
 - `AdminCategoriesPage.tsx`
 - `AdminDashboardPage.tsx`
 - `ComponentsPage.tsx`
 - `ThemeShowcasePage.tsx`

 Pages typically:

 - Import mock data from `src/data/*`.
 - Compose `src/components/ui`, `src/components/business`, `src/components/admin`, and `src/components/home` components.

 ### 3.2 Page Rules

 - ✅ **DO:** Keep pages as orchestrators: manage data (mock), compose components, wire events.
 - ✅ **DO:** Use explicit, typed props for child components.
 - ✅ **DO:** Factor large page sections into helper components if file size grows too much.

 - ❌ **DON'T:** Implement low-level primitives here; those belong in `components/ui`.
 - ❌ **DON'T:** Add global state; use `ThemeContext` or local page state only.

 ---

 ## 4. Touch Points / Key Files

 - Navigation source of truth: `src/App.tsx`.
 - Key pages to study:
   - Home: `src/pages/HomePage.tsx`.
   - Search: `src/pages/SearchPage.tsx`.
   - Map: `src/pages/MapViewPage.tsx`.
   - Owner dashboard: `src/pages/OwnerDashboardPage.tsx`.
   - Admin dashboard: `src/pages/AdminDashboardPage.tsx`.
   - Design system gallery: `src/pages/ComponentsPage.tsx`.
   - Theme showcase: `src/pages/ThemeShowcasePage.tsx`.
   - HTML mockup integration: `src/pages/RestaurantsPage.tsx`.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # List all pages
 rg -n "export function .*Page" src/pages

 # Find where a page is wired in
 rg -n "HomePage" src/App.tsx
 rg -n "AdminDashboardPage" src/App.tsx

 # Find mock data usages
 rg -n "mock" src/pages src/data

 # Find where specific components are used in pages
 rg -n "<ListingCard" src/pages
 rg -n "<Button" src/pages
 ```

 ---

 ## 6. Common Gotchas

 - When adding a new page:
   - Create `src/pages/MyNewPage.tsx`.
   - Import and add a case in `renderPage()` in `src/App.tsx`.
   - Add a nav entry in `src/components/layout/Sidebar.tsx`.

 - `npm run lint` is strict about unused imports/variables; remove or use anything you import.

 ---

 ## 7. Pre-PR Checks

 ```bash
 npm run lint && npm run build
 # Then run npm run dev and click through all affected pages.
 ```
