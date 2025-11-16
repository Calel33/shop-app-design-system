# Food Listing HTML Integration — Stacked Diff Plan

This plan maps the integration of `foodlisting/foodlisting1.html` into the Belize Directory React + TypeScript design system into a sequence of small, dependent stacked diffs using Graphite CLI.

> Note: **Planning & analysis** happens as a separate task on `master` with no branch and no commits. Branches start only once code changes begin.

## Pre-Work (Task Only)

- **Activity:** Analyze `foodlisting1.html` and `MASTER_PROMPT_HTML_INTEGRATION.md` to inventory components, categorize them, and map HTML styles to existing design tokens/components.
- **Branch:** None (work on `master`, no commits required).
- **Graphite:** No `gt` commands used for this step.

## Stacked Diff Workflow

| Order | Depends On | Diff Task (Logical Unit of Work)                                             | Branch Name                               | Example Commands (from previous branch)                                                                                   |
|-------|------------|------------------------------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| 1     | Pre-Work   | Add/extend **UI primitives** in `src/components/ui` needed by this mockup   | `feat/html-foodlisting-ui-primitives`     | `# edit src/components/ui/*` → `git add src/components/ui` → `gt create -am "feat: add UI primitives for foodlisting"`   |
| 2     | 1          | Add **domain components** for restaurant/food listing (hero, info, sidebar) | `feat/html-foodlisting-domain-components` | `# add src/components/food/*` → `git add src/components/food` → `gt create -am "feat: add food listing domain components"` |
| 3     | 2          | Implement **Food Listing page layout** replicating the HTML mockup          | `feat/html-foodlisting-page-layout`       | `# add src/pages/FoodListingPage.tsx` → `git add src/pages/FoodListingPage.tsx` → `gt create -am "feat: add FoodListingPage layout"` |
| 4     | 3          | Wire **navigation/sidebar + mock data** for the new page                    | `feat/html-foodlisting-navigation-wiring` | `# update src/App.tsx, layout nav, data` → `git add src/App.tsx src/components/layout/* src/data/*` → `gt create -am "feat: wire food listing page"` |
| 5     | 4          | Extend **ComponentsPage** to showcase new primitives/domain components      | `feat/html-foodlisting-components-page`   | `# update src/pages/ComponentsPage.tsx` → `git add src/pages/ComponentsPage.tsx` → `gt create -am "feat: showcase food listing components"` |
| 6     | 5          | Optional **polish** (tokens, a11y, responsive tweaks)                        | `chore/html-foodlisting-polish`           | `# tweak classes/props across components/pages` → `git add src` → `gt create -am "chore: polish food listing experience"` |

## Submitting the Stack

From the **topmost branch** in this stack (e.g. `chore/html-foodlisting-polish` if used):

```bash
# Ensure you are on the top of the stack
gt top

# Submit all stacked diffs for review
gt submit --stack
```

Use `gt up`, `gt down`, `gt top`, and `gt bottom` to navigate the stack, and `gt modify -a` to update an existing diff after review feedback.
