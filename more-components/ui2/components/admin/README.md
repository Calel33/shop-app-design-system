# Admin Listing Components

Interactive admin moderation layout that powers the pending approvals experience. The slice ships modular pieces for layout, navigation, filtering, approval cards, detail panel, and pagination so teams can embed directory moderation flows quickly.

## Components

| Component | Purpose |
| --- | --- |
| `AdminListingLayout` | Shell with sidebar, header, filters, content, footer, and detail slot/render control |
| `AdminListingSidebar` | Sectioned navigation with active state badges |
| `AdminListingHeader` | Title, pending count badge, export + bulk approve actions |
| `AdminListingFilters` | Category/priority/timeframe dropdowns and bulk select toggle |
| `BusinessCardGrid` | Responsive grid wrapper using auto-fill columns |
| `BusinessApprovalCard` | Pending listing card with selection, badges, owner info, and action buttons |
| `BusinessDetailPanel` | Slide-in detail drawer with focus trap and moderation shortcuts |
| `PaginationControls` | Prev/next and page buttons with count messaging |

### Usage

```tsx
import {
  AdminListingLayout,
  AdminListingSidebar,
  AdminListingHeader,
  AdminListingFilters,
  BusinessCardGrid,
  BusinessApprovalCard,
  BusinessDetailPanel,
  PaginationControls,
} from "@/ui/components/admin";

// Compose inside app code; see `src/AdminListingDemo.tsx` for a full example with filters,
// pagination, selection logic, and detail panel instrumentation.
```

The demo file provides 20 mock businesses, Lucide icons, and event handlers that can be wired into real moderation APIs.
