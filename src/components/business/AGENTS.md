 # AGENTS · `src/components/business` (Business Directory Components)

 ## 1. Package Identity

 - **Purpose:** Domain-specific components for the business directory (e.g., listing cards, business summaries).
 - **Tech:** React + TypeScript, composed from `src/components/ui` primitives.

 ---

 ## 2. Setup & Run

 From the repo root:

 ```bash
 npm install
 npm run dev        # Explore HomePage, SearchPage, RestaurantsPage, OwnerDashboardPage
 npm run build
 npm run lint
 ```

 ---

 ## 3. Patterns & Conventions

 ### 3.1 File Organization

 - Each domain component lives here (e.g., `ListingCard.tsx`).
 - Components compose UI primitives (`Card`, `Badge`, `MetaItem`, `Avatar`, etc.) and render business-specific layout.

 ### 3.2 Component Rules

 - ✅ **DO:** Keep business-specific logic here (status badges, category labels, etc.).
 - ✅ **DO:** Accept data via typed props (e.g., `BusinessCardData`).
 - ✅ **DO:** Keep components presentation-focused; let pages own data loading/mocking.

 - ❌ **DON'T:** Hard-code design tokens; rely on primitives and Tailwind utilities.
 - ❌ **DON'T:** Introduce global state; use props from pages.
 - ❌ **DON'T:** Tie components to a single page; keep them reusable.

 ---

 ## 4. Touch Points / Key Files

 - Core listing presentation: `src/components/business/ListingCard.tsx` (check this directory for exact names).
 - Business meta & tags: components using `MetaItem` and `Badge` from `src/components/ui`.

 Used in `src/pages/HomePage.tsx`, `src/pages/SearchPage.tsx`, `src/pages/OwnerDashboardPage.tsx`, `src/pages/RestaurantsPage.tsx`.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # Find domain components
 rg -n "export function .*Card" src/components/business
 rg -n "export function" src/components/business

 # Find where business components are used
 rg -n "<ListingCard" src/pages
 rg -n "BusinessCardData" src

 # Find business-related mock data
 rg -n "business" src/data src/pages
 ```

 ---

 ## 6. Common Gotchas

 - When a component’s props change, update all pages that use it.
 - Prefer passing mock data from pages instead of importing `src/data` directly inside components.

 ---

 ## 7. Pre-PR Checks

 ```bash
 npm run lint && npm run build
 # Manually verify HomePage, SearchPage, RestaurantsPage, and OwnerDashboardPage.
 ```
