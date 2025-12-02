# Automotive Components

A comprehensive set of React components for building car dealership and vehicle detail interfaces. These components provide a complete automotive e-commerce experience with image galleries, specifications, pricing, and dealer contact functionality.

## Components

### CarDetailGallery
Main container component that combines all automotive sub-components into a complete vehicle detail page interface.

**Features:**
- Tabbed interface for organized content
- Mobile-responsive design with floating action bar
- Vehicle header with pricing and availability
- Share and favorites functionality
- Sticky navigation

**Usage:**
```tsx
import { CarDetailGallery } from '@/ui/components/automotive'

<CarDetailGallery
  vehicle={vehicleData}
  images={vehicleImages}
  specifications={specifications}
  features={features}
  priceBreakdown={priceBreakdown}
  financingOptions={financingOptions}
  dealer={dealerInfo}
  onContactSubmit={handleContactSubmit}
/>
```

### VehicleGallery
Interactive image gallery with thumbnail navigation, fullscreen viewing, and category filtering.

**Features:**
- Category-based image filtering (exterior, interior, engine, features)
- Fullscreen modal with zoom functionality
- Thumbnail strip navigation
- Keyboard navigation support (arrow keys, ESC, space)
- Mobile touch/swipe gestures
- Loading states and error handling
- Progressive image loading

**Usage:**
```tsx
import { VehicleGallery } from '@/ui/components/automotive'

<VehicleGallery
  images={vehicleImages}
  vehicle={vehicle}
  onImageSelect={(image) => console.log('Selected:', image)}
/>
```

### VehicleSpecs
Expandable specifications display with feature categorization and search functionality.

**Features:**
- Collapsible specification categories
- Feature categorization (standard, optional, package)
- Visual feature indicators
- Feature summary statistics
- Show/hide all features toggle

**Usage:**
```tsx
import { VehicleSpecs } from '@/ui/components/automotive'

<VehicleSpecs
  specifications={specifications}
  features={features}
  expandable={true}
/>
```

### PriceBreakdown
Comprehensive pricing component with financing calculator and payment options.

**Features:**
- Detailed price breakdown (base, options, fees, taxes, discounts)
- Multiple financing options (finance, lease, cash)
- Interactive payment calculator
- Real-time monthly payment calculation
- Customizable down payment, term, APR, and trade-in value

**Usage:**
```tsx
import { PriceBreakdown } from '@/ui/components/automotive'

<PriceBreakdown
  basePrice={vehicle.price}
  breakdown={priceBreakdown}
  financingOptions={financingOptions}
  showCalculator={true}
/>
```

### ContactDealer
Complete dealer contact form with multiple inquiry types and dealer information display.

**Features:**
- Multiple inquiry types (test drive, quote, financing, trade-in, general)
- Form validation and submission handling
- Dealer information card with ratings
- Test drive scheduling
- Multiple contact preferences
- Quick contact options (phone, email)

**Usage:**
```tsx
import { ContactDealer } from '@/ui/components/automotive'

<ContactDealer
  dealer={dealerInfo}
  vehicle={vehicle}
  onSubmit={handleFormSubmit}
  showTestDrive={true}
/>
```

## TypeScript Types

All components use comprehensive TypeScript interfaces:

- `Vehicle` - Core vehicle information
- `VehicleImage` - Image data with categories and resolution options
- `VehicleSpecification` - Organized vehicle specifications
- `VehicleFeature` - Feature information with categorization
- `PriceBreakdownItem` - Pricing line items
- `FinancingOption` - Financing and lease options
- `DealerInfo` - Dealer contact and location information
- `ContactFormData` - Form submission data structure

## Demo Implementation

See `src/CarDetailDemo.tsx` for a complete example with sample data including:
- Tesla Model S Plaid demonstration vehicle
- High-quality placeholder images
- Comprehensive specifications and features
- Realistic pricing and financing options
- Sample dealer information

## Design System Compliance

All components follow the project's design system principles:

- **Colors & Spacing**: Uses Tailwind CSS classes with consistent color schemes
- **Typography**: Consistent font weights and sizes throughout
- **Accessibility**: WCAG 2.1 AA compliance with proper ARIA labels and keyboard navigation
- **Responsive**: Mobile-first design with appropriate breakpoints
- **Performance**: Optimized with lazy loading and efficient state management

## File Structure

```
ui/components/automotive/
├── CarDetailGallery.tsx      # Main component container
├── VehicleGallery.tsx        # Image gallery with navigation
├── VehicleSpecs.tsx          # Specifications and features
├── PriceBreakdown.tsx        # Pricing and calculator
├── ContactDealer.tsx         # Contact form and dealer info
├── index.ts                  # Barrel exports
└── README.md                 # This documentation
```

## Customization

Components support extensive customization through:

- **className props** - Add custom styling to any component
- **Conditional features** - Enable/disable specific functionality
- **Callback handlers** - Custom logic for form submissions and interactions
- **Responsive behavior** - Components adapt to different screen sizes
- **Theme integration** - Works with existing design system tokens

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Keyboard navigation support
- Screen reader compatibility

## Performance Considerations

- Progressive image loading with thumbnails
- Efficient state management to avoid unnecessary re-renders
- Lazy loading for off-screen content
- Optimized for React 19 compiler
- Minimal bundle size impact through tree-shaking