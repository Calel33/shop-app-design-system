# Master Prompt: HTML Mockup to React Design System Integration

Use this prompt to extract UI components from any HTML mockup/prototype and integrate them into your existing React + TypeScript design system. Simply replace the placeholders with your specific project details.

---

## 🎯 The Prompt

```
I have created an HTML mockup/prototype for [PROJECT_NAME] (located at `[PATH_TO_HTML_FILE]`). I would like to extract the UI components from this HTML file and integrate them into our existing Vite + React + TypeScript design system showcase.

Please:

**Step 1: Analyze the HTML File**
- Identify all unique UI components and patterns used in the HTML mockup
- List components by category:
  - Navigation components (header, nav, menu, breadcrumbs)
  - Form components (inputs, selects, buttons, checkboxes, radio buttons)
  - Display components (cards, lists, grids, tables)
  - Feedback components (alerts, toasts, modals, tooltips)
  - Layout components (containers, sections, dividers)
  - Interactive components (dropdowns, tabs, accordions, pagination)
  - Media components (images, avatars, icons, galleries)
  - Data components (charts, graphs, statistics)
  - [ADD ANY DOMAIN-SPECIFIC COMPONENT TYPES]

**Step 2: Compare with Existing Design System**
Review our existing components in `[PATH_TO_COMPONENTS_DIR]` and determine:
- ✅ Which components already exist and can be reused as-is
- 🔧 Which components exist but need to be extended with new variants/props
- ✨ Which components are completely new and need to be created
- 🎨 Which design tokens need to be mapped from HTML to our system

**Step 3: Create Integration Plan**
Before making any changes, provide a detailed plan showing:
- List of new components to create with their features
- List of existing components to extend with new props/variants
- Design token mapping (colors, spacing, typography, etc.)
- File structure for new components
- Execution order (which components to build first)

**Step 4: Create New React Components**
For each NEW component identified, create:
- TypeScript component file in appropriate directory
- Props interface with full type definitions
- All variants and states from the HTML
- Responsive design support
- Accessibility features (ARIA labels, semantic HTML)
- Follow our existing component patterns and conventions
- Use our design tokens from `[PATH_TO_TAILWIND_CONFIG]`

Component categories to consider:
- Core UI: `[COMPONENTS_DIR]/ui/`
- Layout: `[COMPONENTS_DIR]/layout/`
- Domain-specific: `[COMPONENTS_DIR]/[DOMAIN]/`

**Step 5: Extend Existing Components**
For components that need EXTENSION:
- Add new props to existing interfaces
- Add new variants/sizes/states
- Maintain backward compatibility
- Update prop documentation
- Preserve existing functionality

**Step 6: Create Demonstration Page**
Build a new page that replicates the HTML mockup layout:
- Use all new and existing components
- Match the HTML structure and styling
- Add to sidebar navigation under "[SECTION_NAME]"
- Include interactive functionality
- Add mock data if needed
- Ensure responsive design

**Step 7: Update Component Showcase**
Update `[PATH_TO_COMPONENTS_PAGE]` to include:
- New section for each new component
- Visual examples showing all variants
- Code snippets with copy functionality
- All states (default, hover, active, disabled, loading)
- Size variants
- Usage examples
- Update table of contents with links to new sections

**Step 8: Create Documentation**
Provide:
- Integration summary document listing all changes
- Component usage examples
- Before/after comparison
- File structure overview
- Quick reference guide

**Step 9: Design Token Mapping**
Map HTML styles to our design system:
- Colors: [HTML_COLORS] → [OUR_COLOR_TOKENS]
- Typography: [HTML_FONTS] → [OUR_FONT_TOKENS]
- Spacing: [HTML_SPACING] → [OUR_SPACING_SCALE]
- Border radius: [HTML_RADIUS] → [OUR_RADIUS_TOKENS]
- Shadows: [HTML_SHADOWS] → [OUR_SHADOW_TOKENS]

**Step 10: Quality Checklist**
Ensure all components:
- [ ] Have full TypeScript types
- [ ] Follow existing design system patterns
- [ ] Support light/dark themes
- [ ] Are responsive (mobile-first)
- [ ] Include accessibility features
- [ ] Have proper documentation
- [ ] Work with hot reload
- [ ] Have no TypeScript errors
- [ ] Are showcased in ComponentsPage

Please show me the analysis and integration plan before making changes.
```

---

## 📝 How to Use This Prompt

### 1. Gather Your Information

Before using the prompt, collect:

**Required:**
- [ ] Path to HTML mockup file
- [ ] Path to existing components directory
- [ ] Path to Tailwind config file
- [ ] Path to ComponentsPage file
- [ ] Project name

**Optional:**
- [ ] Domain-specific component types
- [ ] Specific section name for new page
- [ ] Custom design token mappings

### 2. Fill in the Placeholders

| Placeholder | Replace With | Example |
|-------------|--------------|---------|
| `[PROJECT_NAME]` | Your project name | "Belize Directory", "E-commerce Platform" |
| `[PATH_TO_HTML_FILE]` | Path to HTML mockup | `mockups/homepage.html` |
| `[PATH_TO_COMPONENTS_DIR]` | Components directory | `src/components/` |
| `[PATH_TO_TAILWIND_CONFIG]` | Tailwind config file | `tailwind.config.js` |
| `[PATH_TO_COMPONENTS_PAGE]` | ComponentsPage file | `src/pages/ComponentsPage.tsx` |
| `[SECTION_NAME]` | Sidebar section name | "HTML Mockup", "Prototypes" |
| `[COMPONENTS_DIR]` | Base components path | `src/components` |
| `[DOMAIN]` | Domain folder name | `business`, `product`, `user` |
| `[HTML_COLORS]` | HTML color values | `#111418`, `#f0f2f4` |
| `[OUR_COLOR_TOKENS]` | Your color tokens | `text-foreground`, `bg-muted` |
| `[HTML_FONTS]` | HTML font families | "Space Grotesk", "Noto Sans" |
| `[OUR_FONT_TOKENS]` | Your font tokens | "Anek Latin", "Andada Pro" |
| `[HTML_SPACING]` | HTML spacing values | Tailwind defaults |
| `[OUR_SPACING_SCALE]` | Your spacing scale | 8pt grid system |
| `[HTML_RADIUS]` | HTML border radius | `rounded-xl`, `rounded-full` |
| `[OUR_RADIUS_TOKENS]` | Your radius tokens | `rounded-lg`, `rounded-xl` |
| `[HTML_SHADOWS]` | HTML shadow values | Various box-shadows |
| `[OUR_SHADOW_TOKENS]` | Your shadow tokens | `shadow-sm`, `shadow-md` |

### 3. Example: E-commerce Product Page

```
I have created an HTML mockup/prototype for ShopHub E-commerce Platform (located at `mockups/product-page.html`). I would like to extract the UI components from this HTML file and integrate them into our existing Vite + React + TypeScript design system showcase.

Please:

**Step 1: Analyze the HTML File**
- Identify all unique UI components and patterns used in the HTML mockup
- List components by category:
  - Navigation components (header, nav, menu, breadcrumbs)
  - Form components (inputs, selects, buttons, checkboxes, radio buttons)
  - Display components (cards, lists, grids, tables)
  - Feedback components (alerts, toasts, modals, tooltips)
  - Layout components (containers, sections, dividers)
  - Interactive components (dropdowns, tabs, accordions, pagination)
  - Media components (images, avatars, icons, galleries)
  - Data components (charts, graphs, statistics)
  - Product components (product cards, image galleries, reviews, ratings)

**Step 2: Compare with Existing Design System**
Review our existing components in `src/components/` and determine:
- ✅ Which components already exist and can be reused as-is
- 🔧 Which components exist but need to be extended with new variants/props
- ✨ Which components are completely new and need to be created
- 🎨 Which design tokens need to be mapped from HTML to our system

[Continue with rest of prompt...]

**Step 9: Design Token Mapping**
Map HTML styles to our design system:
- Colors: #1a1a1a, #ffffff, #0066cc → text-foreground, bg-background, bg-primary
- Typography: "Inter", "Roboto" → "Poppins", "Open Sans"
- Spacing: Tailwind defaults → 4px base scale
- Border radius: rounded-lg, rounded-full → rounded-md, rounded-full
- Shadows: box-shadow values → shadow-sm, shadow-md, shadow-lg
```

### 4. Example: SaaS Dashboard

```
I have created an HTML mockup/prototype for TaskMaster SaaS Dashboard (located at `prototypes/dashboard.html`). I would like to extract the UI components from this HTML file and integrate them into our existing Vite + React + TypeScript design system showcase.

[...standard prompt sections...]

**Step 1: Analyze the HTML File**
- List components by category:
  [Standard categories...]
  - Dashboard components (stat cards, activity feeds, quick actions)
  - Team components (member cards, role badges, invite forms)
  - Project components (project cards, status indicators, progress bars)

**Step 9: Design Token Mapping**
Map HTML styles to our design system:
- Colors: #2563eb, #10b981, #f59e0b → bg-blue-600, bg-green-500, bg-amber-500
- Typography: "SF Pro", "Helvetica" → "Inter", "System UI"
- Spacing: 8px base → 8pt grid system
- Border radius: 8px, 16px → rounded-lg, rounded-xl
- Shadows: Multiple levels → shadow-sm through shadow-2xl
```

---

## 🎨 Common Component Patterns to Look For

### Navigation Components
- [ ] Header/Navbar with logo
- [ ] Horizontal navigation menu
- [ ] Vertical sidebar navigation
- [ ] Breadcrumbs
- [ ] Tabs
- [ ] Pagination
- [ ] Mobile hamburger menu

### Form Components
- [ ] Text inputs (with/without icons)
- [ ] Search inputs
- [ ] Select dropdowns
- [ ] Multi-select
- [ ] Checkboxes
- [ ] Radio buttons
- [ ] Toggle switches
- [ ] Date pickers
- [ ] File upload
- [ ] Form validation messages

### Button Components
- [ ] Primary buttons
- [ ] Secondary buttons
- [ ] Outline buttons
- [ ] Ghost/text buttons
- [ ] Icon-only buttons
- [ ] Button groups
- [ ] Loading buttons
- [ ] Disabled states

### Display Components
- [ ] Cards (basic, with image, with actions)
- [ ] Lists (ordered, unordered, description)
- [ ] Grids (responsive, masonry)
- [ ] Tables (sortable, filterable)
- [ ] Avatars (single, group)
- [ ] Badges/Tags
- [ ] Labels
- [ ] Dividers

### Feedback Components
- [ ] Alerts (info, success, warning, error)
- [ ] Toasts/Notifications
- [ ] Modals/Dialogs
- [ ] Tooltips
- [ ] Popovers
- [ ] Progress bars
- [ ] Spinners/Loaders
- [ ] Skeleton screens

### Interactive Components
- [ ] Dropdowns
- [ ] Accordions
- [ ] Collapsible sections
- [ ] Carousels/Sliders
- [ ] Lightboxes
- [ ] Drag and drop areas
- [ ] Filter chips/pills
- [ ] Sort controls

### Media Components
- [ ] Image galleries
- [ ] Video players
- [ ] Audio players
- [ ] Icon sets
- [ ] Emoji pickers
- [ ] Color pickers

---

## 📋 Pre-Integration Checklist

Before running the prompt:

- [ ] HTML mockup file exists and is accessible
- [ ] Existing design system is set up (Vite + React + TypeScript)
- [ ] Tailwind CSS is configured
- [ ] ComponentsPage exists for showcasing
- [ ] You know where components should be organized
- [ ] You have design tokens documented
- [ ] You understand the HTML structure

---

## 🔄 Expected Output

After running this prompt, you'll get:

### **Analysis Phase**
1. Complete list of components found in HTML
2. Categorization of components
3. Comparison with existing components
4. Design token mapping table
5. Integration plan with execution order

### **Implementation Phase**
1. New component files with TypeScript
2. Extended existing components
3. New demonstration page
4. Updated ComponentsPage with showcases
5. Integration documentation

### **Documentation Phase**
1. Integration summary document
2. Component usage examples
3. Before/after comparison
4. Quick reference guide

---

## 💡 Tips for Best Results

### **Be Specific About Paths**
```
✅ Good: `mockups/homepage-v2.html`
❌ Bad: "the HTML file"
```

### **Identify Domain Components**
```
✅ Good: "Product components (product cards, reviews, ratings)"
❌ Bad: "Some product stuff"
```

### **Map Design Tokens Clearly**
```
✅ Good: "#111418 → text-foreground, #f0f2f4 → bg-muted"
❌ Bad: "Use similar colors"
```

### **Specify Component Organization**
```
✅ Good: "Core UI in src/components/ui/, Product-specific in src/components/product/"
❌ Bad: "Put them somewhere"
```

---

## 🎯 Common Use Cases

### **Landing Page Integration**
- Hero sections
- Feature grids
- Testimonial cards
- Pricing tables
- CTA buttons
- Footer navigation

### **Dashboard Integration**
- Stat cards
- Charts/graphs
- Data tables
- Activity feeds
- Quick actions
- Notification panels

### **E-commerce Integration**
- Product cards
- Shopping cart
- Checkout forms
- Review systems
- Wishlist items
- Category filters

### **SaaS Application Integration**
- User profiles
- Team management
- Project cards
- Task lists
- Settings panels
- Billing sections

---

## 🔧 Customization Options

### Add Custom Component Categories
```
- [YOUR_DOMAIN] components (component1, component2, component3)
```

### Specify Component Variants
```
For Button component, extract:
- Size variants: xs, sm, md, lg, xl
- Color variants: primary, secondary, success, danger, warning
- States: default, hover, active, disabled, loading
```

### Define Responsive Breakpoints
```
Ensure components work at:
- Mobile: 320px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+
```

---

## 📊 Success Metrics

After integration, you should have:

- [ ] All HTML components identified (100% coverage)
- [ ] New components created with TypeScript
- [ ] Existing components extended where needed
- [ ] Demonstration page matching HTML mockup
- [ ] ComponentsPage updated with examples
- [ ] Documentation created
- [ ] No TypeScript errors
- [ ] All components theme-aware
- [ ] Responsive design implemented
- [ ] Accessibility features included

---

## 🚀 Advanced Options

### **Multi-Page HTML Integration**
```
I have multiple HTML mockups:
- Homepage: `mockups/home.html`
- Product Page: `mockups/product.html`
- Checkout: `mockups/checkout.html`

Please integrate components from all pages...
```

### **Partial Integration**
```
From the HTML mockup, only extract and integrate:
- Navigation components
- Form components
- Card components

Skip the footer and sidebar for now.
```

### **Component Library Export**
```
After integration, also create:
- Storybook stories for each component
- Unit tests for new components
- Accessibility audit report
```

---

## 📖 Related Resources

- **MASTER_PROMPT.md** - For creating design systems from scratch
- **COMPONENT_LIBRARY.md** - Component API reference
- **HTML_INTEGRATION_SUMMARY.md** - Example integration documentation

---

**Save this prompt template and reuse it for any HTML mockup integration!**

