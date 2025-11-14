# Quick Start Guide

Get the Belize Directory Design System Showcase running in minutes!

## Prerequisites

Make sure you have Node.js 18 or higher installed:
```bash
node --version
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React 18
- TypeScript
- Tailwind CSS v3
- Vite
- Lucide React (icons)
- Recharts (charts)

### 2. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is busy).

### 3. Explore the Application

Once the server is running, you'll see the homepage with:
- **Sidebar Navigation** (left side) - Navigate between different sections
- **Theme Toggle** (top right) - Switch between light and dark modes
- **Main Content Area** - Current page content

## Navigation Guide

### Public Section
- **Home** - Landing page with hero search, featured categories, and businesses
- **Search** - Advanced search with filters
- **Map View** - Interactive map with business listings

### Owner Section
- **My Listings** - Dashboard showing all your business listings
- **Create Listing** - Form to add a new business

### Admin Section
- **Review Queue** - Approve/reject pending business submissions
- **Categories** - Manage business categories and tags

### Design System
- **UI Components** - Complete showcase of all design system components

## Key Features to Try

### 1. Theme Switching
Click the sun/moon icon in the top right to toggle between light and dark themes.

### 2. Search & Filter
Go to the Search page and try:
- Searching by keyword
- Filtering by category
- Filtering by location

### 3. Component Showcase
Visit the "UI Components" page to see:
- All button variants and sizes
- Form elements
- Status badges
- Cards and layouts
- Color palette
- Typography scale

### 4. Responsive Design
Resize your browser window to see:
- Mobile sidebar (hamburger menu)
- Responsive grids
- Adaptive layouts

## Mock Data

The application includes realistic mock data:
- 8+ sample businesses
- Multiple categories (Restaurants, Hotels, Tours, etc.)
- Various cities in Belize
- Different listing statuses (draft, submitted, approved, rejected)

## Development Tips

### Hot Module Replacement (HMR)
Changes to your code will automatically reload in the browser without losing state.

### TypeScript
All components are fully typed. Your IDE will provide autocomplete and type checking.

### Tailwind CSS
Use Tailwind utility classes for styling. The design system tokens are configured in `tailwind.config.js`.

### Adding New Components
1. Create component in `src/components/`
2. Import and use in pages
3. Follow existing patterns for consistency

## Common Tasks

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port. Check the terminal output for the actual URL.

### Dependencies Not Installing
Try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Make sure your IDE is using the workspace TypeScript version:
- VS Code: Cmd/Ctrl + Shift + P → "TypeScript: Select TypeScript Version" → "Use Workspace Version"

## Next Steps

1. **Explore the Code**: Check out the component structure in `src/components/`
2. **Customize Colors**: Edit `tailwind.config.js` to change the color palette
3. **Add Features**: Create new pages or components following existing patterns
4. **Review Documentation**: Read the full README.md for detailed information

## Need Help?

- Check the README.md for comprehensive documentation
- Review the ComponentsPage to see all available UI components
- Look at existing pages for implementation examples

---

**Happy coding! 🚀**

