## Belize Directory Design System d Stack Diffs Plan (Graphite Workflow)
# Ensure working tree is clean
# Initialize Graphite in this repo (one-time)
# Create a feature branch for the BizListing integration work
# After making the changes for a stack
# Submit the stack to remote
```bash
```bash
```bash
git checkout master
git pull
```bash
git checkout master
git pull
## Stacked Diff Workflow Plan – BizListingUI HTML Integration

This plan describes a Graphite stacked diff workflow to integrate the BizListing UI HTML mockup
(`BizListingUI/BizListingUI.html`) into the Belize Directory React + TypeScript design system.

### Pre-Stack Analysis & Planning Tasks (No Diffs)

These are **tasks you do before creating branches**, not separate Graphite diffs:

- Open `BizListingUI/BizListingUI.html` and identify all distinct UI elements and patterns.
- Map each HTML region (sidebar, header, tabs, form, photo upload, status card, preview card, bottom bar)
  to either existing design-system components or new components you will create.
- Decide approximate file locations and names (e.g. which pieces belong in `src/components/ui` vs
  `src/components/business` vs `src/pages/BizListingPage.tsx`).
- Confirm which existing tokens (colors, spacing, typography) will be reused and where you might
  need new token entries later.

Once this analysis is done, start the stack at **Order 1** below.

### Overview of Mockup Components

- Navigation / Layout
  - Sidebar dashboard navigation (logo + nav items, active state)
  - Top header with title and primary/secondary action buttons
  - Split layout: edit form (left) + live preview (right)
- Form & Interaction
  - Tabbed form header: Basic Info, Hours, Photos, Contact Details
  - Form fields: text inputs, select, textarea, tags input
  - Photo upload dropzone (drag-and-drop + click to upload)
  - Hours scheduler grid (day rows, time inputs, closed toggle) – implied from CSS
- Display / Feedback
  - Status card: Pending Approval with icon and message
  - Business listing preview card (hero image area, details list)
  - Bottom action bar with version info and action buttons

---

### Stacked Diff Plan Table

Only diffs that change code or configuration are represented as branches. Analysis and planning
remain offline tasks, not separate diffs.

| Order | Depends On | Scope / Task                                                                                 | Suggested Branch Name                                   | Example Graphite CLI Flow (per diff)                                                                 |
|-------|------------|-----------------------------------------------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 1     | –          | Implement new **core UI primitives** needed (tabs, dropzone, status card variant if needed) | `feat/bizlistingui-core-ui`                             | On `master` (or feature base): `gt create -am "feat: add core UI for BizListingUI"`; add `ui` components; `gt modify -a`.   |
| 2     | 1          | Extend existing **button, card, layout** components to match BizListing actions/visuals      | `feat/bizlistingui-extend-ui`                           | From 1: `gt create -am "feat: extend UI components for BizListingUI"`; tweak props/variants; `gt modify -a`.                |
| 3     | 1,2        | Build **BizListing form & layout components** (sidebar, header, split layout, form section)  | `feat/bizlistingui-layout-and-form-components`          | From 2: `gt create -am "feat: add BizListing layout and form components"`; add domain components; `gt modify -a`.           |
| 4     | 1,2,3      | Implement **BizListing preview components** (status card, business preview card section)     | `feat/bizlistingui-preview-components`                  | From 3: `gt create -am "feat: add BizListing preview components"`; wire to mock data where needed; `gt modify -a`.         |
| 5     | 3,4        | Create **BizListing page** (e.g. `BizListingPage`) and wire into app navigation/sidebar      | `feat/bizlistingui-page-integration`                    | From 4: `gt create -am "feat: add BizListing page and navigation"`; update `App.tsx` / routes; `gt modify -a`.              |
| 6     | 1–5        | Update **ComponentsPage showcase** with new primitives (tabs, dropzone, status card, etc.)   | `feat/bizlistingui-components-showcase`                 | From 5: `gt create -am "feat: showcase BizListing components"`; extend `ComponentsPage.tsx`; `gt modify -a`.                |
| 7     | 1–6        | Adjust **design tokens / Tailwind config** if needed to map HTML styles to tokens           | `chore/bizlistingui-token-alignment`                    | From 6: `gt create -am "chore: align tokens for BizListingUI"`; tweak `style.json`/`tailwind.config`; `gt modify -a`.       |
| 8     | 1–7        | Final polish: accessibility, responsiveness, lint/build, minor UX tweaks                    | `chore/bizlistingui-polish-and-qa`                      | From 7: `gt create -am "chore: polish BizListingUI integration"`; run `npm run lint && npm run build`; `gt modify -a`.      |

---

### Per-Diff Command Pattern

For each diff in the stack, use this general pattern:

```bash
# Starting from the previous branch in the stack
gt create -am "<type: concise summary>"

# After making code changes on that diff
git status
npm run lint
# (optionally) npm run build
gt modify -a

# When the diff is review-ready
gt submit             # or from the top: gt submit --stack
```

Navigation & maintenance helpers:

```bash
gt log short   # visualize stacked diffs
gt up          # move to parent diff
gt down        # move to child diff
gt sync        # sync stack with trunk (master) as needed
```

This plan should remain the single source of truth for how BizListingUI HTML is integrated via
Graphite stacked diffs. Update it if scope or component mapping changes.

- **Vertical Slice Orientation:** Each stack aims to represent a coherent vertical slice (from mockup to page integration) rather than horizontal layers scattered across the codebase.
