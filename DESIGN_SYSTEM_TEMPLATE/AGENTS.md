 # AGENTS · `DESIGN_SYSTEM_TEMPLATE/` (Design System Template)

 ## 1. Package Identity

 - **Purpose:** Reusable template and master prompts for generating new design systems based on the Belize Directory patterns.
 - **Contents:** Prompt scaffolds, example docs, and structure guidance for cloning this design system into other projects.

 ---

 ## 2. Usage & Run

 - This folder is **not a runnable app**; it contains template artifacts only.
 - Typical workflow:
   1. Read the template docs/prompts in this folder.
   2. Copy them into a new project.
   3. Adapt paths, names, and design tokens for the target app.

 ---

 ## 3. Patterns & Conventions

 - Templates should be generic but concrete:
   - Use placeholder names (`[PROJECT_NAME]`, `[PRIMARY_COLOR]`) where customization is expected.
   - Preserve structural patterns from this repo (e.g., `src/components/ui`, `src/pages`).

 - **Design system rules:**
   - Emphasize token-only styling in the template.
   - Promote functional React components and strict TypeScript.
   - Reference this repo’s files as examples, not as hard dependencies.

 - ✅ **DO:** Point template users to real examples in this repo:
   - Components: `src/components/ui/Button.tsx`, `src/components/ui/Card.tsx`.
   - Theme: `src/contexts/ThemeContext.tsx`, `style.json`, `tailwind.config.js`.
   - Pages: `src/pages/HomePage.tsx`, `src/pages/ComponentsPage.tsx`.

 - ❌ **DON'T:** Bake in this repo’s specific Belize business logic unless clearly marked as placeholder.

 ---

 ## 4. Touch Points / Key Files

 - Template index/readme (if present) in this folder.
 - Master prompt examples derived from `MASTER_PROMPT.md`.
 - Any sample `AGENTS.md` meant for downstream projects.

 ---

 ## 5. JIT Index Hints (Search Patterns)

 ```bash
 # Find all template prompt files
 rg -n "MASTER_PROMPT" DESIGN_SYSTEM_TEMPLATE

 # Find placeholders to customize
 rg -n "\[PROJECT_NAME\]" DESIGN_SYSTEM_TEMPLATE
 rg -n "\[PATH_TO_DOCS\]" DESIGN_SYSTEM_TEMPLATE
 ```

 ---

 ## 6. Common Gotchas

 - Keep templates synchronized with current patterns in `src/` and `docs/`.
 - Avoid hard-coding this repo’s paths without explaining they are examples.

 ---

 ## 7. Pre-PR Checks (for template changes)

 - Verify placeholders are clearly marked and documented.
 - Ensure examples match real patterns in `src/` (Button, Card, ThemeContext, etc.).
