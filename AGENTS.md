 # AGENTS · Root Guide (Belize Directory Design System)

 ## 1. Project Snapshot

 - **Repo type:** Single-project Vite + React app (no workspaces, no backend here).
 - **Stack:** React 18, TypeScript (strict), Tailwind CSS v3, Vite, custom design system.
 - **Scope:** Frontend-only design system showcase for a Belize local business directory.
 - **Hierarchy:** This root file is lightweight; **see sub-folder AGENTS.md** files for detailed rules.

 ---

 ## 2. Root Setup Commands

 Run these from the project root:

 ```bash
 # Install dependencies
 npm install

 # Dev server
 npm run dev

 # Build (TypeScript + Vite)
 npm run build

 # Lint (ESLint + TypeScript rules)
 npm run lint
 ```

 > Note: There is **no automated test suite** configured yet (`npm test` does not exist).

 ---

 ## 3. Universal Conventions

 - **Language & Style**
   - TypeScript with `strict` compiler options.
   - React function components only; no class components.
   - Tailwind CSS utilities + design tokens from `style.json` / `tailwind.config.js`; **no hard-coded colors/spacing/typography**.
   - ESLint enforced via `npm run lint`; fix all errors before committing.

 - **Git & PRs**
   - Prefer clear, action-oriented commit messages (e.g., `feat: add listing card filters`).
   - Small, focused PRs; keep diffs around a single concept.
   - Before opening a PR: ensure `npm run build` and `npm run lint` pass **without errors**.

 ---

 ## 4. Security & Secrets

 - **Never** commit API keys, tokens, or credentials (even in examples).
 - If adding configuration, use environment variables (e.g., `.env.local`) and **never** commit `.env*` files.
 - This project currently uses **mock data only**; do not introduce real user PII or production data into the repo.

 ---

 ## 5. JIT Index (what to open, not what to paste)

 ### Package / Area Structure

 - **App code & design system:** `src/`  
   → See `src/AGENTS.md` for component/page patterns.
 - **Documentation & master prompts:** `docs/`  
   → See `docs/AGENTS.md` for doc structure and which files to read.
 - **Design system template for reuse:** `DESIGN_SYSTEM_TEMPLATE/`  
   → See `DESIGN_SYSTEM_TEMPLATE/AGENTS.md` for template usage.
 - **HTML mockups / reference:**  
   - Admin dashboard HTML: `admindash/admindash1.html`  
   - Gym listing HTML: `gymlisting/gymlisting.html`  
   - Generic directory HTML + screenshot: `a_business_directory_for_various_types_of_businesses/code.html`, `screen.png`

 ### Quick Find Commands (CLI examples)

 Use ripgrep-style patterns when searching:

 ```bash
 # Find a component by name
 rg -n "function HomePage" src/pages
 rg -n "export function Button" src/components/ui

 # Find usage of a UI primitive
 rg -n "<Button" src

 # Find theme-related code
 rg -n "ThemeProvider" src
 rg -n "ThemeContext" src/contexts

 # Find where mock data is used
 rg -n "mock" src/data src/pages
 ```

 ---

 ## 6. Definition of Done (Root)

 Before considering a change "done" and PR-ready:

 - ✅ `npm run lint` passes with **no errors** (warnings should be understood and deliberate).  
 - ✅ `npm run build` succeeds.  
 - ✅ Relevant parts of the app are manually tested in the browser (especially affected pages/components).  
 - ✅ Code follows design system rules (tokens only, no inline styles, idiomatic React + TypeScript).  
 - ✅ Any new patterns are reflected in the appropriate sub-folder `AGENTS.md` if they should be reused.
