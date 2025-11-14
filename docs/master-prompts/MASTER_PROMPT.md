# Master Prompt: Design System Showcase Generator

Use this prompt to create a comprehensive design system showcase for any application. Simply replace the placeholders with your specific project details.

---

## 🎯 The Prompt

```
Create a comprehensive design system showcase dashboard as a Vite + React application with the following requirements:

**Step 1: Project Analysis**
- Review the documentation in `[PATH_TO_DOCS]` to understand the application type and requirements
- Analyze the design tokens and theme configuration in `[PATH_TO_STYLE_JSON]`
- Break down the implementation into specific tasks based on the documentation findings

**Step 2: Design System Components**
Create a mock dashboard that showcases ALL design system components for [PROJECT_NAME], including:

**Core UI Components:**
- Typography (headings, body text, captions)
- Buttons (primary, secondary, destructive, outline, ghost variants)
- Form elements (inputs, selects, checkboxes, radio buttons, textareas)
- Cards and containers
- Badges and status indicators
- Alerts and notifications
- Loading states and skeletons

**Application-Specific Components:**
[LIST YOUR DOMAIN-SPECIFIC COMPONENTS HERE]
Examples:
- For E-commerce: Product cards, cart items, checkout steps
- For SaaS: Dashboard widgets, pricing tables, feature cards
- For Directory: Listing cards, search filters, map components
- For Social: Post cards, comment threads, user profiles

**Navigation Components:**
- Sidebar navigation
- Header/navbar
- Breadcrumbs
- Tabs
- Pagination

**Data Display:**
- Tables with sorting/filtering
- Charts and graphs
- Statistics cards
- Timeline components

**Step 3: Technical Implementation**
- Set up a new Vite application with React and TypeScript
- Configure Tailwind CSS v3 with custom theme tokens
- Translate ALL design tokens from `[PATH_TO_STYLE_JSON]` into Tailwind configuration:
  - Color values (light and dark themes)
  - Spacing scale
  - Typography (font families, sizes, line heights)
  - Shadows
  - Border radius
  - Any custom tokens specific to your design system
- Implement both light and dark theme support as defined in the JSON
- Ensure responsive design across different screen sizes

**Step 4: Application Pages**
Create realistic page layouts that demonstrate your application's user flows:

[DEFINE YOUR APPLICATION SECTIONS]
Examples:
- **Public Section**: Homepage, search/browse, detail views
- **User Section**: Dashboard, profile, settings, user-specific features
- **Admin Section**: Management panels, approval queues, analytics

For [PROJECT_NAME], create these specific pages:
[LIST SPECIFIC PAGES]
- Page 1: [Description]
- Page 2: [Description]
- Page 3: [Description]

**Step 5: Dashboard Layout**
- Create a realistic dashboard layout with sidebar navigation
- Organize components into logical sections based on user roles:
  - [ROLE 1]: [Features]
  - [ROLE 2]: [Features]
  - [ROLE 3]: [Features]
- Include interactive examples of each component with different states (hover, active, disabled, loading, error)
- Add theme toggle functionality
- Make sidebar collapsible and mobile-responsive

**Step 6: Component Showcase Page**
Create a dedicated "UI Components" page that displays ALL individual design system pieces:
- Quick navigation table of contents
- Each component shown in isolation with:
  - All variants
  - All sizes
  - All states
  - Code examples
  - Copy-to-clipboard functionality
- Design tokens showcase:
  - Color palette with foreground/background pairs
  - Typography scale with actual sizes
  - Spacing scale with visual representation
  - Shadow levels
  - Border radius options

**Step 7: Mock Data**
Create comprehensive mock data that represents realistic use cases:
- [DATA TYPE 1]: [Description and quantity]
- [DATA TYPE 2]: [Description and quantity]
- Include various states: draft, pending, approved, rejected, etc.
- Cover edge cases: empty states, error states, loading states

**Step 8: Documentation**
Provide complete documentation:
- README.md with:
  - Project overview
  - Tech stack
  - Design system details
  - Installation instructions
  - Project structure
  - Feature list
  - Usage examples
- QUICKSTART.md with step-by-step setup
- COMPONENT_LIBRARY.md with code reference for all components

**Step 9: Local Development**
- Provide complete setup instructions
- Configure the development server to run locally
- Include hot module replacement for efficient development
- Ensure all dependencies are properly configured

Please provide the complete implementation with all necessary configuration files, component code, and setup instructions.
```

---

## 📝 How to Use This Prompt

### 1. Gather Your Project Information

Before using the prompt, collect:

**Required Files:**
- [ ] Design tokens file (JSON/CSS/config file with colors, spacing, typography)
- [ ] Documentation about your application (what it does, who uses it)
- [ ] List of features and user roles

**Project Details to Define:**
- [ ] Project name
- [ ] Application type (SaaS, E-commerce, Directory, Social, etc.)
- [ ] User roles (Public, User, Admin, Owner, etc.)
- [ ] Main features and pages
- [ ] Domain-specific components needed

### 2. Fill in the Placeholders

Replace these placeholders in the prompt:

| Placeholder | Replace With | Example |
|-------------|--------------|---------|
| `[PATH_TO_DOCS]` | Path to your documentation folder | `./docs/` |
| `[PATH_TO_STYLE_JSON]` | Path to your design tokens file | `./style.json` or `./tokens.json` |
| `[PROJECT_NAME]` | Your project name | "Belize Directory", "ShopHub", "TaskMaster" |
| `[LIST YOUR DOMAIN-SPECIFIC COMPONENTS HERE]` | Components unique to your app | Product cards, Listing cards, Task cards |
| `[DEFINE YOUR APPLICATION SECTIONS]` | Your app's main sections | Public, Customer, Vendor, Admin |
| `[LIST SPECIFIC PAGES]` | Actual pages to build | Homepage, Product Catalog, Checkout, Dashboard |
| `[ROLE 1/2/3]` | User roles in your app | Visitor, Customer, Admin |
| `[DATA TYPE 1/2]` | Types of data in your app | Products, Orders, Users, Listings |

### 3. Example: E-commerce Application

```
**Application-Specific Components:**
- Product cards with image, price, rating
- Shopping cart items
- Checkout progress steps
- Order status badges
- Review/rating components
- Wishlist items
- Category navigation

**Application Sections:**
- **Public Section**: Homepage, Product catalog, Product detail, Cart
- **Customer Section**: Order history, Wishlist, Profile, Addresses
- **Admin Section**: Product management, Order management, Analytics

**Specific Pages:**
- Homepage: Hero banner, featured products, categories, testimonials
- Product Catalog: Filters, sorting, grid view, list view
- Product Detail: Image gallery, specs, reviews, related products
- Customer Dashboard: Recent orders, saved items, account settings
- Admin Dashboard: Sales stats, recent orders, inventory alerts

**Mock Data:**
- Products: 20+ items across different categories with various prices
- Orders: 10+ orders with different statuses (pending, shipped, delivered)
- Reviews: Multiple reviews with ratings 1-5 stars
```

### 4. Example: SaaS Application

```
**Application-Specific Components:**
- Pricing table with feature comparison
- Usage metrics widgets
- Subscription status cards
- API key management
- Team member cards
- Billing history table
- Feature toggle switches

**Application Sections:**
- **Public Section**: Landing page, Pricing, Documentation
- **User Section**: Dashboard, Projects, Settings, Billing
- **Admin Section**: User management, Analytics, System settings

**Specific Pages:**
- Landing Page: Hero, features, pricing preview, testimonials
- Dashboard: Usage stats, recent activity, quick actions
- Projects: Project list, create new, project details
- Billing: Current plan, usage, payment history, upgrade options
- Admin Panel: User list, system metrics, configuration

**Mock Data:**
- Users: 15+ users with different subscription tiers
- Projects: 10+ projects with various statuses
- Usage metrics: API calls, storage, bandwidth data
- Invoices: Payment history with different statuses
```

### 5. Example: Social Media Application

```
**Application-Specific Components:**
- Post cards (text, image, video)
- Comment threads with nesting
- User profile cards
- Follow/unfollow buttons
- Like/share/save actions
- Notification items
- Story circles
- Message bubbles

**Application Sections:**
- **Public Section**: Explore, trending, public profiles
- **User Section**: Feed, profile, messages, notifications
- **Admin Section**: Content moderation, user reports, analytics

**Specific Pages:**
- Feed: Post stream, create post, stories
- Profile: User info, posts grid, followers/following
- Messages: Conversation list, chat interface
- Notifications: Activity feed with different types
- Admin Moderation: Reported content, user management

**Mock Data:**
- Users: 25+ user profiles with avatars and bios
- Posts: 30+ posts with text, images, likes, comments
- Comments: Nested comment threads
- Notifications: Various types (likes, comments, follows, mentions)
```

---

## 🎨 Design Token Structure

Your design tokens file should include:

```json
{
  "designSystem": {
    "meta": {
      "name": "Your Design System Name",
      "version": "1.0"
    },
    "colors": {
      "light": {
        "primary": "rgb(...)",
        "secondary": "rgb(...)",
        // ... more colors
      },
      "dark": {
        "primary": "rgb(...)",
        "secondary": "rgb(...)",
        // ... more colors
      }
    },
    "typography": {
      "fonts": {
        "sans": "Font Name, fallbacks",
        "serif": "Font Name, fallbacks",
        "mono": "Font Name, fallbacks"
      },
      "scale": {
        "h1": { "size": 32, "lineHeight": 40 },
        // ... more sizes
      }
    },
    "spacing": {
      "scale": [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96]
    },
    "radius": {
      "sm": "...",
      "md": "...",
      "lg": "..."
    },
    "shadows": {
      "sm": "...",
      "md": "...",
      "lg": "..."
    }
  }
}
```

---

## 📋 Checklist Before Running

- [ ] Design tokens file is ready
- [ ] Documentation exists (or you can describe the app)
- [ ] You've identified all user roles
- [ ] You've listed all main features
- [ ] You've defined domain-specific components
- [ ] You've outlined the page structure
- [ ] You know what mock data is needed

---

## 🚀 Expected Output

After running this prompt, you'll get:

1. **Complete Vite + React + TypeScript project**
2. **Tailwind CSS configured with your design tokens**
3. **All UI components** (buttons, inputs, cards, etc.)
4. **Domain-specific components** for your application
5. **Multiple pages** demonstrating your app's features
6. **Sidebar navigation** with role-based sections
7. **Component showcase page** with all design system pieces
8. **Light/dark theme support**
9. **Mock data** for realistic demonstrations
10. **Complete documentation** (README, QUICKSTART, COMPONENT_LIBRARY)
11. **Working development server** ready to run

---

## 💡 Tips for Best Results

1. **Be Specific**: The more details you provide about your application, the better the output
2. **Organize by Role**: Group features by user type (public, user, admin)
3. **Include Edge Cases**: Mention empty states, error states, loading states
4. **List Real Features**: Use actual feature names from your application
5. **Provide Examples**: If you have existing designs or apps, reference them
6. **Think Complete**: Include all the pages and components you'll actually need

---

## 🔄 Iterative Refinement

After the initial generation, you can refine with follow-up prompts:

```
"Add a [COMPONENT_NAME] component that shows [DESCRIPTION]"
"Create a page for [FEATURE_NAME] with [SPECIFIC_ELEMENTS]"
"Update the color palette to use [NEW_COLORS]"
"Add more mock data for [DATA_TYPE]"
"Create a [SPECIFIC_COMPONENT] that matches [DESIGN_PATTERN]"
```

---

**Save this prompt template and reuse it for any design system showcase project!**

