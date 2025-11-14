# Component Library Reference

Complete reference for all UI components in the Belize Directory Design System.

## 🎨 Design Tokens

### Colors
```tsx
// Primary colors
bg-primary text-primary-foreground
bg-secondary text-secondary-foreground
bg-accent text-accent-foreground
bg-destructive text-destructive-foreground

// Neutral colors
bg-background text-foreground
bg-card text-card-foreground
bg-muted text-muted-foreground

// Chart colors
bg-chart-1 through bg-chart-5
```

### Typography
```tsx
// Headings
text-h1 font-bold      // 32px / 40px
text-h2 font-bold      // 24px / 32px
text-h3 font-semibold  // 18px / 24px

// Body text
text-body              // 16px / 22px
text-small             // 14px / 20px

// Font families
font-sans   // Anek Latin
font-serif  // Andada Pro
font-mono   // Sometype Mono
```

### Spacing (8pt grid)
```tsx
p-0   // 0px
p-1   // 4px
p-2   // 8px
p-3   // 12px
p-4   // 16px
p-6   // 24px
p-8   // 32px
p-10  // 40px
p-12  // 48px
p-14  // 56px
p-16  // 64px
p-20  // 80px
p-24  // 96px
p-28  // 112px
```

### Border Radius
```tsx
rounded-sm  // calc(1rem - 4px)
rounded-md  // calc(1rem - 2px)
rounded-lg  // 1rem
rounded-xl  // calc(1rem + 4px)
```

### Shadows
```tsx
shadow-2xs
shadow-xs
shadow-sm
shadow     // default
shadow-md
shadow-lg
shadow-xl
shadow-2xl
```

## 🧩 Core Components

### Button
```tsx
import { Button } from '@/components/ui/Button';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button disabled>Disabled</Button>

// With icons
<Button>
  <Icon className="h-4 w-4 mr-2" />
  With Icon
</Button>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

### Input
```tsx
import { Input } from '@/components/ui/Input';

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Password" />
<Input disabled placeholder="Disabled" />
```

### Select
```tsx
import { Select } from '@/components/ui/Select';

<Select>
  <option value="">Choose...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>
```

### Checkbox
```tsx
import { Checkbox } from '@/components/ui/Checkbox';

<Checkbox id="terms" label="I agree to terms" />
<Checkbox id="newsletter" label="Subscribe" />
<Checkbox disabled label="Disabled" />
```

### Badge
```tsx
import { Badge } from '@/components/ui/Badge';

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="draft">Draft</Badge>
<Badge variant="submitted">Submitted</Badge>
<Badge variant="approved">Approved</Badge>
<Badge variant="rejected">Rejected</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
```

### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/Alert';

<Alert variant="default">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational message.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Operation completed successfully.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    An error occurred.
  </AlertDescription>
</Alert>
```

### Skeleton
```tsx
import { Skeleton } from '@/components/ui/Skeleton';

<Skeleton className="h-12 w-full" />
<Skeleton className="h-12 w-3/4" />
<Skeleton className="h-12 w-1/2" />
```

### Avatar
```tsx
import { Avatar, AvatarGroup } from '@/components/ui/Avatar';

// Basic avatar
<Avatar src="image.jpg" alt="User" />

// Size variants
<Avatar src="image.jpg" alt="User" size="sm" />
<Avatar src="image.jpg" alt="User" size="md" />
<Avatar src="image.jpg" alt="User" size="lg" />
<Avatar src="image.jpg" alt="User" size="xl" />

// Fallback to initials
<Avatar fallback="JD" alt="John Doe" />
<Avatar alt="User" /> // Shows first letter of alt

// Avatar group with overflow count
<AvatarGroup max={3}>
  <Avatar src="user1.jpg" />
  <Avatar src="user2.jpg" />
  <Avatar src="user3.jpg" />
  <Avatar src="user4.jpg" />
  <Avatar src="user5.jpg" />
</AvatarGroup>
```

### FilterChip
```tsx
import { FilterChip, FilterChipGroup } from '@/components/ui/FilterChip';

// Basic filter chip
<FilterChip label="Category" />

// With dropdown indicator
<FilterChip label="Price" showDropdown />

// Active state
<FilterChip label="Selected" active />

// With close button
<FilterChip
  label="Applied Filter"
  showClose
  onClose={() => console.log('Remove filter')}
/>

// Group multiple chips
<FilterChipGroup>
  <FilterChip label="Price" showDropdown />
  <FilterChip label="Cuisine" showDropdown />
  <FilterChip label="Rating" showDropdown />
  <FilterChip label="Open Now" active />
</FilterChipGroup>
```

### Pagination
```tsx
import { Pagination } from '@/components/ui/Pagination';

// Basic pagination
<Pagination
  currentPage={currentPage}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
/>

// With custom max visible pages
<Pagination
  currentPage={5}
  totalPages={50}
  onPageChange={handlePageChange}
  maxVisible={7}
/>

// Features:
// - Previous/Next buttons
// - Numbered page buttons
// - Smart ellipsis for large page counts
// - Active page highlighting
// - Fully accessible with ARIA labels
```

### Input with Icons
```tsx
import { Input } from '@/components/ui/Input';
import { Search, Mail, Bell } from 'lucide-react';

// Left icon
<Input
  leftIcon={<Search className="h-5 w-5" />}
  placeholder="Search..."
/>

// Right icon
<Input
  rightIcon={<Mail className="h-5 w-5" />}
  placeholder="Email address"
  type="email"
/>

// Both icons
<Input
  leftIcon={<Search className="h-5 w-5" />}
  rightIcon={<Bell className="h-5 w-5" />}
  placeholder="Search notifications..."
/>
```

### Icon-Only Button
```tsx
import { Button } from '@/components/ui/Button';
import { Bell, Search, Settings } from 'lucide-react';

// Icon-only button (circular)
<Button iconOnly variant="primary">
  <Bell className="h-5 w-5" />
</Button>

// Different variants
<Button iconOnly variant="ghost">
  <Search className="h-5 w-5" />
</Button>

<Button iconOnly variant="outline">
  <Settings className="h-5 w-5" />
</Button>

// Different sizes
<Button iconOnly size="sm">
  <Bell className="h-4 w-4" />
</Button>

<Button iconOnly size="md">
  <Bell className="h-5 w-5" />
</Button>

<Button iconOnly size="lg">
  <Bell className="h-6 w-6" />
</Button>
```

## 🏗️ Feature Components

### ListingCard
```tsx
import { ListingCard } from '@/components/business/ListingCard';

<ListingCard 
  business={businessData} 
  onClick={() => handleClick()}
/>
```

### HeroSearch
```tsx
import { HeroSearch } from '@/components/home/HeroSearch';

<HeroSearch />
```

### FeaturedCategories
```tsx
import { FeaturedCategories } from '@/components/home/FeaturedCategories';

<FeaturedCategories />
```

### FeaturedBusinesses
```tsx
import { FeaturedBusinesses } from '@/components/home/FeaturedBusinesses';

<FeaturedBusinesses />
```

## 📐 Layout Components

### Sidebar
```tsx
import { Sidebar } from '@/components/layout/Sidebar';

<Sidebar
  currentPage={currentPage}
  onNavigate={setCurrentPage}
  isOpen={sidebarOpen}
/>
```

### Header
```tsx
import { Header } from '@/components/layout/Header';

<Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
```

### NavMenu
```tsx
import { NavMenu } from '@/components/layout/NavMenu';

// Define navigation items
const navItems = [
  { label: 'Home', href: '#', active: true },
  { label: 'Categories', href: '#', active: false },
  { label: 'Deals', href: '#', active: false },
  { label: 'Events', href: '#', active: false },
];

// Horizontal navigation menu
<NavMenu items={navItems} />

// With click handler
<NavMenu
  items={navItems}
  onItemClick={(item) => console.log('Clicked:', item.label)}
/>

// Features:
// - Horizontal layout
// - Active state highlighting
// - Hover effects
// - Click handler support
```

## 🎭 Theme Support

### Using Theme Context
```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

## 📊 Data Types

### Business
```tsx
interface Business {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  website?: string;
  hours: string;
  images: string[];
  lat: number;
  lng: number;
  status: 'draft' | 'submitted' | 'approved' | 'rejected';
  tags: string[];
  featured: boolean;
}
```

## 🎨 Best Practices

### Component Composition
```tsx
// ✅ Good - Compose components
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button variant="primary">Action</Button>
  </CardContent>
</Card>

// ❌ Avoid - Creating custom styled divs
<div className="custom-card">
  <div className="custom-header">Title</div>
  <div className="custom-content">
    <button className="custom-button">Action</button>
  </div>
</div>
```

### Using Design Tokens
```tsx
// ✅ Good - Use design tokens
<div className="p-4 bg-card text-card-foreground rounded-lg shadow-md">

// ❌ Avoid - Arbitrary values
<div className="p-[17px] bg-[#ffffff] text-[#000000] rounded-[13px]">
```

### Responsive Design
```tsx
// ✅ Good - Mobile-first responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Use breakpoints: sm, md, lg, xl
```

## 📱 Responsive Breakpoints

```tsx
sm: 640px   // Small devices
md: 768px   // Medium devices
lg: 1024px  // Large devices
xl: 1280px  // Extra large devices
```

## 🔧 Utility Functions

### cn (Class Names)
```tsx
import { cn } from '@/lib/utils';

<div className={cn(
  'base-classes',
  condition && 'conditional-classes',
  className
)} />
```

---

**For live examples, visit the "UI Components" page in the application!**

