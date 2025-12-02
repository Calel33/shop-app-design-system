# Business Listing Detail Components

Public-facing directory slice that renders a business profile page with hero gallery, verified badge, hours, credentials, and contact actions while keeping everything responsive and accessible.

## Components

| Component | Purpose |
| --- | --- |
| `BusinessListingLayout` | View shell with sticky navigation, breadcrumb slot, hero, main content area, and sidebar |
| `BusinessHeader` | Sticky navigation bar with brand mark, primary links, and optional CTA |
| `Breadcrumb` | Path trail with accessible separators and current page state |
| `BusinessHero` | Wraps the gallery and detail card for the hero presentation |
| `ImageGallery` | Main hero media with dot navigation and keyboard focus handling |
| `BusinessDetails` | Title block, verification badge, rating, distance, status, description, and CTA buttons |
| `BusinessSidebar` | Vertical stack container for sidebar info cards |
| `InfoCard` | Reusable card wrapper for sidebar modules |
| `ContactInfo` | Address, phone, website, email, and directions link list |
| `HoursDisplay` | Weekly schedule grid with current-day highlighting |
| `CredentialsDisplay` | Credential/award list with icon badges |
| `ReviewsPlaceholder` | Coming-soon block for future review integrations |
| `LastUpdatedBadge` | Owner-updated timestamp badge |

### Usage

```tsx
import {
  BusinessListingLayout,
  BusinessHeader,
  Breadcrumb,
  BusinessHero,
  ImageGallery,
  BusinessDetails,
  BusinessSidebar,
  ContactInfo,
  HoursDisplay,
  CredentialsDisplay,
  ReviewsPlaceholder,
  LastUpdatedBadge,
} from "@/ui/components/business-listing";

// See `src/BusinessListingDemo.tsx` for a complete example with mock businesses,
// status calculation, responsive layout, and analytics hooks.
```
