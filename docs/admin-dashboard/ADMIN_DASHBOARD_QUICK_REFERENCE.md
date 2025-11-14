# Admin Dashboard - Quick Reference Guide

## 🚀 Quick Start

### View the Admin Dashboard
1. Run the dev server: `npm run dev`
2. Navigate to: **Sidebar → HTML Mockup → Admin Dashboard**
3. Or directly: Click "Admin Dashboard" in the sidebar

---

## 📦 New Components

### 1. MetaItem
**Location:** `src/components/ui/MetaItem.tsx`

```tsx
import { MetaItem } from '@/components/ui/MetaItem';
import { Calendar } from 'lucide-react';

<MetaItem icon={<Calendar className="h-4 w-4" />}>
  Submitted 2 days ago
</MetaItem>
```

**Props:**
- `icon?: React.ReactNode` - Optional icon element
- `children: React.ReactNode` - Text content
- `className?: string` - Additional CSS classes

---

### 2. SidePanel
**Location:** `src/components/ui/SidePanel.tsx`

```tsx
import { SidePanel } from '@/components/ui/SidePanel';

const [isOpen, setIsOpen] = useState(false);

<SidePanel
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Business Details"
>
  <div>Panel content</div>
</SidePanel>
```

**Props:**
- `isOpen: boolean` - Controls panel visibility
- `onClose: () => void` - Close handler
- `title?: string` - Optional panel title
- `children: React.ReactNode` - Panel content
- `className?: string` - Additional CSS classes

**Features:**
- Slides in from right
- Backdrop overlay
- Close on Escape key
- Prevents body scroll
- Responsive (full width on mobile)

---

### 3. AdminSidebar
**Location:** `src/components/admin/AdminSidebar.tsx`

```tsx
import { AdminSidebar } from '@/components/admin/AdminSidebar';

<AdminSidebar
  currentPage="pending-approvals"
  onNavigate={(page) => setCurrentPage(page)}
/>
```

**Props:**
- `currentPage: string` - Current active page ID
- `onNavigate: (page: string) => void` - Navigation handler

**Nav Items:**
- overview
- pending-approvals
- all-businesses
- business-owners
- flagged-content
- settings

---

### 4. FilterBar
**Location:** `src/components/admin/FilterBar.tsx`

```tsx
import { FilterBar } from '@/components/admin/FilterBar';

<FilterBar
  filters={[
    {
      id: 'category',
      label: 'Category',
      value: categoryFilter,
      onChange: setCategoryFilter,
      options: [
        { value: 'all', label: 'All Categories' },
        { value: 'restaurant', label: 'Restaurants' },
      ],
    },
  ]}
/>
```

**Props:**
- `filters: Filter[]` - Array of filter configurations
- `className?: string` - Additional CSS classes

**Filter Type:**
```tsx
interface Filter {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}
```

---

### 5. BulkActionsBar
**Location:** `src/components/admin/BulkActionsBar.tsx`

```tsx
import { BulkActionsBar } from '@/components/admin/BulkActionsBar';

<BulkActionsBar
  selectedCount={selectedItems.size}
  totalCount={totalItems}
  onSelectAll={(checked) => handleSelectAll(checked)}
/>
```

**Props:**
- `selectedCount: number` - Number of selected items
- `totalCount: number` - Total number of items
- `onSelectAll: (checked: boolean) => void` - Select all handler
- `className?: string` - Additional CSS classes

**States:**
- None selected: Empty checkbox
- Some selected: Indeterminate checkbox
- All selected: Checked checkbox

---

### 6. BusinessCard
**Location:** `src/components/admin/BusinessCard.tsx`

```tsx
import { BusinessCard, BusinessCardData } from '@/components/admin/BusinessCard';

const business: BusinessCardData = {
  id: '1',
  name: 'Bella Vista Bistro',
  category: 'Italian Restaurant',
  address: '1247 Oak Street, Downtown',
  imageUrl: 'https://example.com/image.jpg',
  ownerName: 'Maria Rossi',
  ownerEmail: 'maria@example.com',
  submittedDate: 'Submitted 2 days ago',
  priority: 'high', // or 'normal'
};

<BusinessCard
  business={business}
  isSelected={isSelected}
  onSelect={(id, selected) => handleSelect(id, selected)}
  onApprove={(id) => handleApprove(id)}
  onRequestChanges={(id) => handleChanges(id)}
  onReject={(id) => handleReject(id)}
  onViewDetails={(id) => handleView(id)}
/>
```

**Props:**
- `business: BusinessCardData` - Business data object
- `isSelected: boolean` - Selection state
- `onSelect: (id: string, selected: boolean) => void` - Selection handler
- `onApprove: (id: string) => void` - Approve handler
- `onRequestChanges: (id: string) => void` - Request changes handler
- `onReject: (id: string) => void` - Reject handler
- `onViewDetails: (id: string) => void` - View details handler
- `className?: string` - Additional CSS classes

---

## 🎨 Extended Components

### Button - New Variants

```tsx
import { Button } from '@/components/ui/Button';

<Button variant="success">Approve</Button>
<Button variant="warning">Changes Needed</Button>
<Button variant="danger">Reject</Button>
```

**New Variants:**
- `success` - Green background, dark green text
- `warning` - Yellow background, dark yellow text
- `danger` - Red background, dark red text

---

### Badge - New Variants

```tsx
import { Badge } from '@/components/ui/Badge';

<Badge variant="warning">High Priority</Badge>
<Badge variant="info">Normal Priority</Badge>
```

**New Variants:**
- `warning` - Yellow background, dark yellow text
- `info` - Blue background, dark blue text

---

## 📄 Pages

### AdminDashboardPage
**Location:** `src/pages/AdminDashboardPage.tsx`  
**Route:** `admin-dashboard`

**Features:**
- Admin sidebar navigation
- Filter bar (category, priority, time)
- Bulk actions bar
- Business card grid (responsive)
- Pagination
- Side panel for details
- Mock data for 6 businesses

---

## 🎯 Common Patterns

### Managing Selection State

```tsx
const [selectedBusinesses, setSelectedBusinesses] = useState<Set<string>>(new Set());

const handleSelectBusiness = (id: string, selected: boolean) => {
  const newSelected = new Set(selectedBusinesses);
  if (selected) {
    newSelected.add(id);
  } else {
    newSelected.delete(id);
  }
  setSelectedBusinesses(newSelected);
};

const handleSelectAll = (checked: boolean) => {
  if (checked) {
    setSelectedBusinesses(new Set(businesses.map(b => b.id)));
  } else {
    setSelectedBusinesses(new Set());
  }
};
```

### Using Side Panel

```tsx
const [sidePanelOpen, setSidePanelOpen] = useState(false);
const [selectedId, setSelectedId] = useState<string | null>(null);

const handleViewDetails = (id: string) => {
  setSelectedId(id);
  setSidePanelOpen(true);
};

<SidePanel
  isOpen={sidePanelOpen}
  onClose={() => setSidePanelOpen(false)}
  title="Details"
>
  {/* Content based on selectedId */}
</SidePanel>
```

---

## 🎨 Styling

All components use Tailwind CSS and follow the design system:

- **Colors:** Use semantic tokens (`bg-primary`, `text-muted-foreground`)
- **Spacing:** Use Tailwind scale (`p-4`, `gap-6`, `mb-8`)
- **Typography:** Use design system classes (`text-h1`, `text-body`, `text-small`)
- **Borders:** Use design system radius (`rounded-lg`, `rounded-xl`)
- **Shadows:** Use design system shadows (`shadow-sm`, `shadow-md`)

---

## 🌓 Theme Support

All components support light and dark themes:

```tsx
// Success button in both themes
<Button variant="success">
  Approve
</Button>

// Light: bg-green-100 text-green-700
// Dark: bg-green-900/30 text-green-400
```

---

## 📱 Responsive Design

### BusinessCard Grid
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

### SidePanel
- Mobile: Full width (100vw)
- Desktop: 400px width

### FilterBar
- Wraps on small screens
- Horizontal on larger screens

---

## 🔗 Quick Links

- **Admin Dashboard:** Sidebar → HTML Mockup → Admin Dashboard
- **Component Showcase:** Sidebar → Design System → UI Components
- **Full Documentation:** `ADMIN_DASHBOARD_INTEGRATION.md`
- **Source HTML:** `admindash/admindash1.html`

---

## 💡 Tips

1. **Use TypeScript types** - All components have full type definitions
2. **Follow patterns** - Check existing components for consistency
3. **Test themes** - Toggle between light/dark to verify appearance
4. **Check responsive** - Test on different screen sizes
5. **Use mock data** - See `AdminDashboardPage.tsx` for examples

---

**Happy coding! 🚀**

