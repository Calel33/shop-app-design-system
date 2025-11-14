 # Project Context – Belize Directory Design System

 ## 1. Executive Summary

 Belize Directory Design System is a Vite + React + TypeScript frontend project that showcases a complete design system and UI implementation for a local business directory application (public, owner, and admin flows). It focuses on reusable UI primitives, thematic styling with Tailwind CSS tokens, and feature pages that demonstrate how to assemble components into real product surfaces. The project is documentation-heavy and optimized as a reference implementation and playground for building similar directory-style applications.

 ## 2. Project Structure

 ```text
root/
  src/
    App.tsx              # App shell, navigation state, ThemeProvider
    main.tsx             # Vite + React entry point
    index.css            # Global styles + Tailwind layers
    components/
      ui/                # Design-system primitives (button, card, input, badge, alert, avatar, etc.)
      business/          # Business directory components (listing cards, hero/featured blocks)
      home/              # Homepage-specific layout and hero components
      layout/            # Sidebar, Header, NavMenu, layout scaffolding
      admin/             # Admin dashboard widgets and panels
    pages/               # Page-level feature surfaces (home, search, map, owner/admin flows, components gallery)
    contexts/
      ThemeContext.tsx   # Theme provider and token-aware state
    data/                # Mock data for businesses, categories, metrics
    lib/                 # Shared utilities and helpers
  docs/
    core/                # Architecture, data model, product brief, guides
    Design-system/       # Design system specific docs
    ...                  # Session/memory/task docs (for AI workflows)
  DESIGN_SYSTEM_TEMPLATE/ # Template and prompts for reusing this system
  style.json             # Canonical design tokens (colors, typography, spacing, etc.)
  tailwind.config.js     # Tailwind setup + token mapping
  vite.config.ts         # Vite bundler config
  tsconfig*.json         # TypeScript configs
  package.json           # Scripts and dependencies
  INDEX.md, README.md    # Human-facing documentation index and overview
```

 ## 3. Tech Stack

 - **Frontend Framework:** React 18 + Vite
 - **Language:** TypeScript (strict mode, bundler module resolution)
 - **Styling:** Tailwind CSS v3 + custom design tokens from `style.json`
 - **Icons:** `lucide-react`
 - **Data Visualization:** `recharts`
 - **Routing / Navigation:** Primarily local state in `App.tsx` (page switcher); `react-router-dom` is installed for integration scenarios but not required for the core showcase.
 - **Tooling:** ESLint, TypeScript, PostCSS, Autoprefixer

 ## 4. Architecture

 - **Entry & Shell**
   - `main.tsx` mounts `<App />` into `index.html` using ReactDOM.
   - `App.tsx` is the single app shell that wraps children with `ThemeProvider`, renders `Sidebar` and `Header`, and switches between pages based on `currentPage` state.
 - **Design System Layer**
   - `components/ui/*` implements all token-driven primitives (buttons, inputs, cards, badges, alerts, avatar, filter chips, pagination, etc.).
   - Tailwind configuration and CSS custom properties map `style.json` tokens into utility classes.
 - **Feature Layers**
   - `components/business/*` and `components/admin/*` compose UI primitives into domain components (business cards, dashboard tiles, admin tables).
   - `pages/*` adds layout and data wiring to create full product surfaces (home, search, map, owner dashboard, admin flows, components gallery, theme showcase).
 - **State & Theme**
   - `ThemeContext` provides light/dark mode and theme tokens, persisted and read throughout the app.
   - `App.tsx` uses `useState` for `currentPage` and `sidebarOpen`, with `Sidebar` and `Header` driving navigation and layout changes.

 ## 5. Authentication & Authorization

 - No real authentication or role-based authorization is implemented in this design system project.
 - Owner/admin flows are represented as pages (OwnerDashboard, AdminDashboard, AdminQueue, AdminCategories) with mock data to demonstrate UI states.

 ## 6. Database Schema

 - There is **no backing database** in this project; all data is mock/demo data in `src/data/*`.
 - The related `DATA_MODEL.md` (Convex + Clerk billing) describes a different reference system and is not directly wired into this design system codebase.

 ## 7. Key Features

 - **Public Experience**
   - Homepage with hero search, featured categories, featured businesses, and map preview.
   - Search page with filters by category, location, and keyword.
   - Map view page for location-based exploration (with placeholders for real map integration).
   - Category-focused pages such as `RestaurantsPage` (HTML mockup integration example).
 - **Business Owner Experience**
   - Owner dashboard page for listing overview and status.
   - Create Listing page with multi-section forms (business info, location, contact, images, tags).
 - **Admin Experience**
   - Admin queue for approvals and rejections.
   - Admin categories page for managing taxonomy.
   - Admin dashboard page for high-level metrics and charts (via `recharts`).
 - **Design System Showcase**
   - Components page demonstrating component variants, states, and usage.
   - Theme showcase page visualizing color system, typography, and tokens.

 ## 8. Environment Variables

 - The core design system app does not require external environment variables.
 - Standard tooling variables (e.g., `NODE_ENV`) are handled by Vite and npm without additional configuration.

 ## 9. Development Workflow

 - **Install Dependencies**
   - `npm install`
 - **Run Dev Server**
   - `npm run dev` → opens `http://localhost:5173` by default.
 - **Build for Production**
   - `npm run build` → outputs optimized assets.
 - **Preview Production Build**
   - `npm run preview`
 - **Lint**
   - `npm run lint` (ESLint with TypeScript rules; current state may include some unused-variable issues in demo pages).

 ## 10. Code Guidelines

 - **Design Tokens Only:** Styling must use design tokens from `style.json`/Tailwind config; avoid hard-coded colors, spacing, and typography.
 - **Component-first:** Prefer small, reusable components in `components/ui` and domain-focused components in `components/business` and `components/admin`.
 - **One Responsibility per File:** Keep files focused and under ~500 lines where possible.
 - **Strict TypeScript:** Avoid `any`; leverage strict compiler options and clear prop types.
 - **KISS & YAGNI:** Implement only what is needed for the showcase; avoid premature abstractions.

 ## 11. Deployment Info

 - Designed to be deployed as a static SPA built by Vite.
 - Typical deployment targets include static hosting (e.g., Vercel static export, Netlify, GitHub Pages, or any static file server) serving the Vite build output.
 - No server-side runtime or backend dependencies are required.

 ## 12. Current Status

 - Core design system components, pages, and themes are implemented and wired into the app shell.
 - HTML mockup integration for the Restaurants page and related components is complete.
 - Extensive written documentation exists under `docs/` for design system, integration, and prompts.
 - Linting is configured but currently reports a few unused variables in some demo pages.

 ## 13. Risks & Decisions

 - **Mock Data Only:** All business, owner, and admin flows are powered by mock data, so behavior may differ from production systems.
 - **Navigation Model:** Navigation is handled via a `currentPage` state in `App.tsx` instead of full URL routing, which is simpler for a design system but less realistic for app navigation.
 - **Token-centric Design:** All styling assumes strict token usage; diverging from tokens can create inconsistencies.
 - **External Data/Backend:** Any future backend integration will require additional routing, API clients, and data model alignment beyond this project.

 ## 14. Quick Reference

 - **Run App:** `npm install && npm run dev`
 - **Key Docs:** `README.md`, `INDEX.md`, `docs/core/APP_ARCHITECTURE.md`, `COMPONENT_LIBRARY.md`, `HTML_INTEGRATION_SUMMARY.md`
 - **Design Tokens:** `style.json`, `tailwind.config.js`
 - **Entry Points:** `src/main.tsx`, `src/App.tsx`
 - **Primary UI Layer:** `src/components/ui/*`
 - **Pages:** `src/pages/*`

 ## 15. Contact & Questions

 - This project is optimized for AI-assisted development and documentation; there is no dedicated human support channel referenced in the repo.
 - For implementation questions, start with `INDEX.md`, `README.md`, and `COMPONENT_LIBRARY.md`, then inspect the relevant components/pages under `src/`.
