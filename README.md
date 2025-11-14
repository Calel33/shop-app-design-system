# Belize Directory - Design System Showcase

A comprehensive design system showcase for the Belize Local Business Directory application, built with Vite, React, TypeScript, and Tailwind CSS v3.

## 🎯 Overview

This project demonstrates a complete design system implementation for a local business directory application. It showcases all UI components, layouts, and patterns needed for:

- **Public Features**: Homepage, search, map view, business listings
- **Business Owner Features**: Dashboard, listing creation/management
- **Admin Features**: Review queue, category management
- **Design System**: Complete UI component library

## 🏗️ Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v3 with custom design tokens
- **Icons**: Lucide React
- **Charts**: Recharts (for data visualization)
- **Routing**: React Router DOM

## 🎨 Design System

### Color Palette

The design system includes comprehensive light and dark themes:

**Light Theme:**
- Primary: `rgb(79, 70, 229)` - Indigo
- Secondary: `rgb(20, 184, 166)` - Teal
- Accent: `rgb(245, 158, 11)` - Amber
- Destructive: `rgb(239, 68, 68)` - Red

**Dark Theme:**
- Primary: `rgb(129, 140, 248)` - Light Indigo
- Secondary: `rgb(45, 212, 191)` - Light Teal
- Accent: `rgb(252, 211, 77)` - Light Amber
- Destructive: `rgb(248, 113, 113)` - Light Red

### Typography

- **Font Families**:
  - Sans: Anek Latin
  - Serif: Andada Pro
  - Mono: Sometype Mono

- **Type Scale**:
  - H1: 32px / 40px line height
  - H2: 24px / 32px line height
  - H3: 18px / 24px line height
  - Body: 16px / 22px line height
  - Small: 14px / 20px line height

### Spacing

8pt grid system with the following scale:
- 0, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px, 112px

### Border Radius

- sm: `calc(1rem - 4px)`
- md: `calc(1rem - 2px)`
- lg: `1rem`
- xl: `calc(1rem + 4px)`

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory**:
   ```bash
   cd c:\Users\user1\Desktop\designsystem
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🚀 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Core UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Checkbox.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Avatar.tsx         ✨ NEW
│   │   ├── FilterChip.tsx     ✨ NEW
│   │   └── Pagination.tsx     ✨ NEW
│   ├── business/        # Business-specific components
│   │   └── ListingCard.tsx
│   ├── home/            # Homepage components
│   │   ├── HeroSearch.tsx
│   │   ├── FeaturedCategories.tsx
│   │   └── FeaturedBusinesses.tsx
│   └── layout/          # Layout components
│       ├── Sidebar.tsx
│       ├── Header.tsx
│       └── NavMenu.tsx        ✨ NEW
├── pages/               # Page components
│   ├── HomePage.tsx
│   ├── SearchPage.tsx
│   ├── MapViewPage.tsx
│   ├── RestaurantsPage.tsx    ✨ NEW (HTML Mockup)
│   ├── OwnerDashboardPage.tsx
│   ├── CreateListingPage.tsx
│   ├── AdminQueuePage.tsx
│   ├── AdminCategoriesPage.tsx
│   └── ComponentsPage.tsx
├── contexts/            # React contexts
│   └── ThemeContext.tsx
├── data/                # Mock data
│   └── mockData.ts
├── lib/                 # Utilities
│   └── utils.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎭 Features Showcase

### Public Section
- **Homepage**: Hero search, featured categories, featured businesses, latest listings, map preview
- **Search**: Advanced filtering by keyword, category, and location
- **Map View**: Interactive map with synchronized business list

### HTML Mockup Section ✨
- **Restaurants Page**: Complete recreation of HTML mockup with navigation, filters, grid layout, and pagination

### Business Owner Section
- **Dashboard**: Overview of all listings with status tracking
- **Create Listing**: Comprehensive form with validation
  - Business information
  - Location with map pin placement
  - Contact details
  - Image upload (max 5)
  - Tags and categories

### Admin Section
- **Review Queue**: Approve/reject business submissions
- **Category Management**: Add, edit, remove categories and tags

### Design System
- **Components Page**: Complete showcase of all UI components
  - Typography samples
  - Button variants and states
  - Form elements
  - Badges and alerts
  - Cards and layouts
  - Loading states
  - Color palette

## 🎨 Component Library

### Buttons
- Variants: primary, secondary, destructive, outline, ghost
- Sizes: sm, md, lg
- States: default, hover, active, disabled
- Icon-only variant (circular) ✨ NEW

### Form Elements
- Input fields with validation
- Input with left/right icons ✨ NEW
- Select dropdowns
- Checkboxes with labels
- Text areas

### Status Badges
- Draft (gray)
- Submitted (amber)
- Approved (teal)
- Rejected (red)

### Cards
- Standard card with header, content, footer
- Listing cards with images
- Stat cards for dashboards

### Alerts
- Informational
- Success
- Error/Destructive

### New Components (HTML Mockup Integration) ✨
- **Avatar**: Profile images with sizes (sm, md, lg, xl), fallback support, and avatar groups
- **FilterChip**: Pill-shaped filter buttons with dropdown indicators, active states, and close buttons
- **Pagination**: Smart page navigation with prev/next, numbered pages, and ellipsis for large page counts
- **NavMenu**: Horizontal navigation menu with active state highlighting

## 🌓 Theme Support

The application includes full light/dark mode support:
- Toggle via header button
- Persists to localStorage
- Smooth transitions between themes
- All components theme-aware

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Collapsible sidebar on mobile
- Responsive grids and layouts

## 🔄 Mock Data

The application uses comprehensive mock data for demonstration:
- 8+ sample businesses across different categories
- Multiple cities in Belize
- Various listing statuses
- Realistic business information

## 🎯 Use Cases

This design system showcase is perfect for:
- Understanding the complete UI component library
- Prototyping new features
- Design reviews and stakeholder presentations
- Developer onboarding
- Component documentation
- Testing responsive layouts
- Theme customization

## 📝 Notes

- All data is currently mocked for demonstration purposes
- Map integration placeholders are included for future Mapbox implementation
- Image uploads are UI-only (no backend integration)
- Form submissions log to console

## 🔮 Future Enhancements

- Mapbox GL JS integration for real maps
- Convex backend integration
- Clerk authentication
- Real image upload functionality
- Advanced filtering and sorting
- Infinite scroll implementation
- Analytics dashboard

## 📄 License

This is a design system showcase for the Belize Directory project.

---

**Built with ❤️ using Vite, React, TypeScript, and Tailwind CSS**

