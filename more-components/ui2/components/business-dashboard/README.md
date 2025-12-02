# Business Dashboard (Owner Listing Editor)

Provides a split-view editor with live preview for business owners.

Usage:

```tsx
import BusinessDashboardDemo from '@/src/BusinessDashboardDemo'

export default function App() {
  return <BusinessDashboardDemo />
}
```

Components exported from `ui/components/business-dashboard`:
- BusinessDashboardLayout, DashboardSidebar, DashboardHeader
- SplitViewContainer, EditPanel, PreviewPanel, FormTabs
- StatusCard, BusinessCardPreview, DragDropUpload
- forms: BasicInfoForm, HoursForm, PhotosForm, ContactForm

All styles use Tailwind tokens. Types live under `ui/components/types/business-dashboard.types.ts`.
