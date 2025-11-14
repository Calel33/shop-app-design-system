# Master Prompts - Quick Reference Guide

Two powerful prompts for creating and extending design systems. Choose the right one for your task!

---

## 🎨 Prompt 1: Create Design System from Scratch

**File:** `MASTER_PROMPT.md`

### When to Use
- ✅ Starting a new design system
- ✅ Building component library from documentation
- ✅ Creating showcase for existing design tokens
- ✅ No HTML mockup available

### What You Need
- Design tokens file (JSON/CSS)
- Project documentation
- List of features and user roles
- Application type (SaaS, E-commerce, etc.)

### What You Get
- Complete Vite + React + TypeScript project
- Tailwind CSS configured with design tokens
- All core UI components
- Domain-specific components
- Multiple demonstration pages
- Component showcase page
- Complete documentation

### Quick Start
```bash
1. Open MASTER_PROMPT.md
2. Replace [PROJECT_NAME], [PATH_TO_DOCS], [PATH_TO_STYLE_JSON]
3. Fill in application sections and features
4. Paste into AI assistant
5. Get complete design system!
```

---

## 🔄 Prompt 2: Integrate HTML Mockup into Design System

**File:** `MASTER_PROMPT_HTML_INTEGRATION.md`

### When to Use
- ✅ Have existing HTML mockup/prototype
- ✅ Already have a design system
- ✅ Need to extract components from HTML
- ✅ Want to convert static HTML to React

### What You Need
- HTML mockup file
- Existing React design system
- Path to components directory
- Tailwind config file

### What You Get
- New React components from HTML
- Extended existing components
- New demonstration page matching HTML
- Updated component showcase
- Integration documentation
- Design token mapping

### Quick Start
```bash
1. Open MASTER_PROMPT_HTML_INTEGRATION.md
2. Replace [PATH_TO_HTML_FILE], [PATH_TO_COMPONENTS_DIR]
3. Specify component categories
4. Paste into AI assistant
5. Get integrated components!
```

---

## 🎯 Decision Tree

```
Do you have an HTML mockup?
│
├─ NO ──────────────────────────────────────────┐
│                                                │
│   Do you have design tokens/documentation?    │
│   │                                            │
│   ├─ YES → Use MASTER_PROMPT.md               │
│   │         (Create from scratch)             │
│   │                                            │
│   └─ NO → Create design tokens first,         │
│            then use MASTER_PROMPT.md          │
│                                                │
└─ YES ──────────────────────────────────────────┤
                                                 │
    Do you have existing design system?          │
    │                                            │
    ├─ YES → Use MASTER_PROMPT_HTML_INTEGRATION.md
    │         (Integrate HTML components)       │
    │                                            │
    └─ NO → Use MASTER_PROMPT.md first,         │
             then MASTER_PROMPT_HTML_INTEGRATION.md
```

---

## 📊 Comparison Table

| Feature | Create from Scratch | HTML Integration |
|---------|-------------------|------------------|
| **Input Required** | Design tokens + docs | HTML file + existing system |
| **Output** | Complete design system | New components + page |
| **Time to Complete** | 30-60 minutes | 15-30 minutes |
| **Components Created** | 20-30+ components | 5-15 components |
| **Pages Created** | 5-10 pages | 1-2 pages |
| **Best For** | New projects | Existing projects |
| **Complexity** | High | Medium |

---

## 🔄 Combined Workflow

For maximum efficiency, use both prompts together:

### Phase 1: Foundation (MASTER_PROMPT.md)
```
1. Create base design system
2. Set up core components
3. Configure design tokens
4. Build initial pages
```

### Phase 2: Enhancement (MASTER_PROMPT_HTML_INTEGRATION.md)
```
1. Get HTML mockups from designer
2. Extract new components
3. Integrate into existing system
4. Update showcase
```

### Phase 3: Iteration
```
Repeat Phase 2 for each new mockup:
- Landing page mockup → Integrate
- Dashboard mockup → Integrate
- Product page mockup → Integrate
```

---

## 📝 Placeholder Cheat Sheet

### Common to Both Prompts
- `[PROJECT_NAME]` - Your project name
- `[PATH_TO_DOCS]` - Documentation directory
- `[COMPONENTS_DIR]` - Components directory path

### MASTER_PROMPT.md Specific
- `[PATH_TO_STYLE_JSON]` - Design tokens file
- `[ROLE 1/2/3]` - User roles (Public, User, Admin)
- `[DATA TYPE 1/2]` - Data types (Products, Users, etc.)
- `[LIST SPECIFIC PAGES]` - Pages to create

### MASTER_PROMPT_HTML_INTEGRATION.md Specific
- `[PATH_TO_HTML_FILE]` - HTML mockup location
- `[PATH_TO_COMPONENTS_DIR]` - Existing components
- `[PATH_TO_TAILWIND_CONFIG]` - Tailwind config
- `[SECTION_NAME]` - Sidebar section name
- `[HTML_COLORS]` - HTML color values
- `[OUR_COLOR_TOKENS]` - Your color tokens

---

## 💡 Pro Tips

### For MASTER_PROMPT.md
1. **Be Detailed** - More details = better output
2. **Use Examples** - Reference similar apps
3. **List Everything** - All features, all pages, all data types
4. **Organize by Role** - Group features by user type

### For MASTER_PROMPT_HTML_INTEGRATION.md
1. **Analyze First** - Let AI analyze before building
2. **Map Tokens** - Clearly map HTML styles to your tokens
3. **Categorize Components** - Group by type for clarity
4. **Check Existing** - Reuse what you already have

---

## 🎓 Learning Path

### Beginner
```
1. Start with MASTER_PROMPT.md
2. Create simple design system (5-10 components)
3. Learn the patterns
4. Experiment with customization
```

### Intermediate
```
1. Use MASTER_PROMPT.md for full project
2. Add HTML mockup integration
3. Extend components with new variants
4. Create custom component categories
```

### Advanced
```
1. Combine both prompts in workflow
2. Create component libraries
3. Build design system packages
4. Generate Storybook stories
5. Add automated testing
```

---

## 📚 Documentation Files

After using the prompts, you'll have:

### From MASTER_PROMPT.md
- `README.md` - Project overview
- `QUICKSTART.md` - Setup guide
- `COMPONENT_LIBRARY.md` - API reference

### From MASTER_PROMPT_HTML_INTEGRATION.md
- `HTML_INTEGRATION_SUMMARY.md` - Technical details
- `INTEGRATION_COMPLETE.md` - Quick reference

### Master Prompts
- `MASTER_PROMPT.md` - Create from scratch
- `MASTER_PROMPT_HTML_INTEGRATION.md` - Integrate HTML
- `MASTER_PROMPTS_QUICK_REFERENCE.md` - This file

---

## 🚀 Quick Commands

### Create New Design System
```bash
# 1. Copy MASTER_PROMPT.md content
# 2. Fill in placeholders
# 3. Paste to AI assistant
# 4. Wait for generation
# 5. Run: npm install && npm run dev
```

### Integrate HTML Mockup
```bash
# 1. Place HTML file in project
# 2. Copy MASTER_PROMPT_HTML_INTEGRATION.md content
# 3. Fill in file paths
# 4. Paste to AI assistant
# 5. Components auto-integrate with HMR
```

---

## ✅ Success Checklist

### After MASTER_PROMPT.md
- [ ] All components created
- [ ] Design tokens configured
- [ ] Pages built and working
- [ ] Theme toggle functional
- [ ] Documentation complete
- [ ] Dev server running
- [ ] No TypeScript errors

### After MASTER_PROMPT_HTML_INTEGRATION.md
- [ ] HTML components extracted
- [ ] React components created
- [ ] Existing components extended
- [ ] New page matches HTML
- [ ] ComponentsPage updated
- [ ] Documentation created
- [ ] Integration verified

---

## 🎯 Common Scenarios

### Scenario 1: New SaaS Project
```
1. Use MASTER_PROMPT.md
2. Define: Dashboard, Settings, Billing pages
3. Create: User, Admin roles
4. Get: Complete SaaS design system
```

### Scenario 2: E-commerce Site
```
1. Use MASTER_PROMPT.md
2. Define: Products, Cart, Checkout pages
3. Create: Customer, Vendor, Admin roles
4. Get: Complete e-commerce design system
```

### Scenario 3: Adding Designer Mockups
```
1. Already have design system (from MASTER_PROMPT.md)
2. Designer provides HTML mockup
3. Use MASTER_PROMPT_HTML_INTEGRATION.md
4. Get: New components integrated seamlessly
```

### Scenario 4: Iterative Development
```
Week 1: MASTER_PROMPT.md → Base system
Week 2: HTML_INTEGRATION → Landing page
Week 3: HTML_INTEGRATION → Dashboard
Week 4: HTML_INTEGRATION → Product pages
```

---

## 🔗 Resources

- **Examples**: See `HTML_INTEGRATION_SUMMARY.md` for real integration example
- **Templates**: Both master prompts include fill-in-the-blank templates
- **Patterns**: `COMPONENT_LIBRARY.md` shows component patterns

---

## 📞 Need Help?

### Common Issues

**Issue**: "Too many components to create"
**Solution**: Use MASTER_PROMPT.md in phases, start with core components

**Issue**: "HTML has custom components not in design system"
**Solution**: Use MASTER_PROMPT_HTML_INTEGRATION.md to extract them

**Issue**: "Design tokens don't match HTML"
**Solution**: Map tokens explicitly in the prompt

**Issue**: "Components look different than HTML"
**Solution**: Check design token mapping, adjust Tailwind config

---

**Keep both master prompts handy for all your design system needs!** 🎨✨

