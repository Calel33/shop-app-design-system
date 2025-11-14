# Belize Directory MVP — Stacked Diffs Implementation Plan

## Overview
This plan reorganizes the Belize Directory MVP implementation into **small, incremental, dependent stacks** optimized for Graphite's stacked diff workflow. Each stack is a self-contained PR that builds on the previous one, enabling parallel review and faster iteration.

**Key Principles:**
- Each PR represents 1-3 days of focused work (~200-400 LOC)
- Every PR is independently reviewable and testable
- Dependencies flow from foundation → UI → integration → hardening
- Use `gt create`, `gt submit --stack`, `gt sync` workflow

---

## Stack 1: Foundation Layer (3 PRs)

### PR 1.1: Type Definitions & Feature Flags
**Branch:** `feat/belize-types-and-flags`
**Dependencies:** `main`
**Scope:** Foundational types without implementation

```typescript
// Files touched:
lib/directory/types/listing.ts          // TypeScript interfaces
lib/directory/types/category.ts
lib/directory/types/filters.ts
lib/feature-flags.ts                    // Add BELIZE flags
```

**Deliverables:**
- [ ] `Listing`, `Category`, `Tag` TypeScript types
- [ ] `ListingStatus` enum: draft | submitted | approved | rejected
- [ ] Feature flags: `FEATURE_LIVE_DATA`, `FEATURE_MAP_VIEW`
- [ ] Passes `npm run build` and `npm run lint`

**Acceptance:** Types compile, no implementation yet, flags accessible

**Graphite Commands:**
```bash
gt checkout main
# Make changes
gt create -am "feat(belize): Add type definitions and feature flags"
gt submit -d  # Submit as draft
```

---

### PR 1.2: Mock Data Fixtures
**Branch:** `feat/belize-mock-data`
**Dependencies:** `feat/belize-types-and-flags` (stacked on PR 1.1)
**Scope:** Deterministic mock data for all UI states

```typescript
// Files touched:
lib/directory/mocks/listings.json       // 20+ Belize businesses
lib/directory/mocks/categories.json     // Tourism, Food, Hotels, etc.
lib/directory/mocks/mock-helpers.ts     // getListings(), getCategories()
```

**Deliverables:**
- [ ] 20+ realistic Belize business listings (San Pedro, Belize City, Caye Caulker)
- [ ] 8-10 categories with icons
- [ ] Mock helper functions with filtering/pagination
- [ ] States: loading, empty, error, populated

**Acceptance:** Mock data returns predictable results, covers all edge cases

**Graphite Commands:**
```bash
gt checkout feat/belize-types-and-flags
# Make changes
gt create -am "feat(belize): Add mock data fixtures with 20+ listings"
gt submit -d
```

---

### PR 1.3: Validation Schemas
**Branch:** `feat/belize-validation`
**Dependencies:** `feat/belize-mock-data`
**Scope:** Zod schemas for client and server validation

```typescript
// Files touched:
lib/directory/validation/listing.ts     // Zod schemas
lib/directory/validation/filters.ts
lib/directory/utils/slug.ts            // Slug generation helper
```

**Deliverables:**
- [ ] `listingSchema` with Belize lat/lng bounds (17.0-18.5, -89.5 to -87.5)
- [ ] Image count validation (≤5)
- [ ] Required fields enforcement
- [ ] Reusable validation utilities

**Acceptance:** Validation schemas work, tests pass (if adding tests)

**Graphite Commands:**
```bash
gt checkout feat/belize-mock-data
# Make changes
gt create -am "feat(belize): Add Zod validation schemas"
gt submit --stack  # Submit entire stack (PRs 1.1, 1.2, 1.3)
```

---

## Stack 2: Public UI - Discovery (4 PRs)

### PR 2.1: Homepage Shell & Layout
**Branch:** `feat/belize-homepage-shell`
**Dependencies:** `feat/belize-validation` (stacked on Stack 1)
**Scope:** Route structure and layout without data fetching

```typescript
// Files touched:
app/(public)/belize/page.tsx            // Server component
app/(public)/belize/layout.tsx          // Public layout
components/directory/listing-card.tsx   // Reusable card (empty shell)
```

**Deliverables:**
- [ ] Route `/belize` renders
- [ ] Layout with proper spacing (Tailwind)
- [ ] Section placeholders: Hero, Featured Categories, Featured Businesses, Latest
- [ ] Dark/light theme support
- [ ] Mobile-responsive grid

**Acceptance:** Page renders with empty sections, no data yet

**Graphite Commands:**
```bash
gt checkout feat/belize-validation
gt create -am "feat(belize): Add homepage route and layout shell"
gt submit -d
```

---

### PR 2.2: Hero Search Component
**Branch:** `feat/belize-hero-search`
**Dependencies:** `feat/belize-homepage-shell`
**Scope:** Search input with URL state management

```typescript
// Files touched:
components/directory/hero-search.tsx    // Client component
lib/directory/hooks/use-search-params.ts // URL state hook
```

**Deliverables:**
- [ ] Search input with debounce (300ms)
- [ ] Updates URL params on type
- [ ] Redirects to `/belize/search?query=...`
- [ ] Keyboard accessible
- [ ] Loading state indicator

**Acceptance:** Search input updates URL, redirects work

**Graphite Commands:**
```bash
gt checkout feat/belize-homepage-shell
gt create -am "feat(belize): Add hero search with URL state"
gt submit -d
```

---

### PR 2.3: Featured Sections with Mock Data
**Branch:** `feat/belize-featured-sections`
**Dependencies:** `feat/belize-hero-search`
**Scope:** Featured categories, businesses, latest listings

```typescript
// Files touched:
components/directory/featured-categories.tsx
components/directory/featured-businesses.tsx
components/directory/latest-listings.tsx
components/directory/listing-card.tsx   // Implement card content
lib/directory/hooks/use-listings-mock.ts
```

**Deliverables:**
- [ ] Featured categories grid (4-6 items)
- [ ] Featured businesses carousel
- [ ] Latest listings (infinite scroll placeholder)
- [ ] Listing cards with image, name, category, location
- [ ] All using mock data
- [ ] Skeleton loading states

**Acceptance:** All sections render with mock data, responsive layout

**Graphite Commands:**
```bash
gt checkout feat/belize-hero-search
gt create -am "feat(belize): Add featured sections with mock data"
gt submit -d
```

---

### PR 2.4: Infinite Scroll Implementation
**Branch:** `feat/belize-infinite-scroll`
**Dependencies:** `feat/belize-featured-sections`
**Scope:** Intersection Observer for latest listings section

```typescript
// Files touched:
components/directory/infinite-listings.tsx
lib/directory/hooks/use-infinite-scroll.ts
```

**Deliverables:**
- [ ] Intersection Observer implementation
- [ ] Load more on scroll
- [ ] Loading spinner at bottom
- [ ] Handles "no more results" state
- [ ] Virtualization for performance (if >50 items)

**Acceptance:** Infinite scroll works, performant on mobile

**Graphite Commands:**
```bash
gt checkout feat/belize-featured-sections
gt create -am "feat(belize): Add infinite scroll for listings"
gt submit --stack  # Submit Stack 2 (PRs 2.1-2.4)
```

---

## Stack 3: Search & Filters (3 PRs)

### PR 3.1: Search Results Page
**Branch:** `feat/belize-search-page`
**Dependencies:** `feat/belize-infinite-scroll`
**Scope:** Search route with basic listing grid

```typescript
// Files touched:
app/(public)/belize/search/page.tsx     // Server component
components/directory/search-results-grid.tsx
```

**Deliverables:**
- [ ] `/belize/search` route renders
- [ ] Reads `query` from URL params
- [ ] Displays filtered mock results
- [ ] Grid layout with listing cards
- [ ] "No results" empty state

**Acceptance:** Search page shows filtered results from query param

**Graphite Commands:**
```bash
gt checkout feat/belize-infinite-scroll
gt create -am "feat(belize): Add search results page"
gt submit -d
```

---

### PR 3.2: Filter Components
**Branch:** `feat/belize-filters`
**Dependencies:** `feat/belize-search-page`
**Scope:** Category, location, tag filters with URL state

```typescript
// Files touched:
components/directory/search-filters.tsx
components/directory/filter-chips.tsx
lib/directory/hooks/use-filters.ts
```

**Deliverables:**
- [ ] Category dropdown (shadcn Select)
- [ ] Location dropdown (Belize cities)
- [ ] Tag multi-select
- [ ] Active filter chips with remove button
- [ ] All filters update URL params
- [ ] Filters persist on page refresh

**Acceptance:** Filters update URL and results, chips work

**Graphite Commands:**
```bash
gt checkout feat/belize-search-page
gt create -am "feat(belize): Add search filters with URL state"
gt submit -d
```

---

### PR 3.3: Sort Options
**Branch:** `feat/belize-sort`
**Dependencies:** `feat/belize-filters`
**Scope:** Sort by relevance, date, distance

```typescript
// Files touched:
components/directory/sort-selector.tsx
lib/directory/utils/sort-listings.ts
```

**Deliverables:**
- [ ] Sort dropdown (Relevance, Newest, Distance)
- [ ] Distance sort requires location filter
- [ ] Updates URL param
- [ ] Mock implementation

**Acceptance:** Sort updates results order

**Graphite Commands:**
```bash
gt checkout feat/belize-filters
gt create -am "feat(belize): Add sort options for search results"
gt submit --stack  # Submit Stack 3
```

---

## Stack 4: Listing Detail Page (2 PRs)

### PR 4.1: Detail Page Layout
**Branch:** `feat/belize-detail-page`
**Dependencies:** `feat/belize-sort`
**Scope:** Listing detail route with static data

```typescript
// Files touched:
app/(public)/belize/listing/[slug]/page.tsx
components/directory/listing-detail.tsx
components/directory/image-gallery.tsx
components/directory/hours-display.tsx
components/directory/contact-info.tsx
```

**Deliverables:**
- [ ] `/belize/listing/[slug]` dynamic route
- [ ] Fetches listing by slug from mock data
- [ ] Image gallery (lightbox for ≤5 images)
- [ ] Business hours table
- [ ] Contact info (phone, email, website links)
- [ ] 404 handling for invalid slugs
- [ ] Breadcrumb navigation

**Acceptance:** Detail page shows all listing fields, 404 works

**Graphite Commands:**
```bash
gt checkout feat/belize-sort
gt create -am "feat(belize): Add listing detail page"
gt submit -d
```

---

### PR 4.2: Map Preview Component
**Branch:** `feat/belize-map-preview`
**Dependencies:** `feat/belize-detail-page`
**Scope:** Static map preview (not live Mapbox yet)

```typescript
// Files touched:
components/directory/map-preview.tsx
components/directory/static-map.tsx
```

**Deliverables:**
- [ ] Static map preview image
- [ ] Shows approximate location
- [ ] Link to full map view (placeholder)
- [ ] Directions link to Google Maps
- [ ] Falls back gracefully if no coordinates

**Acceptance:** Map preview renders, external links work

**Graphite Commands:**
```bash
gt checkout feat/belize-detail-page
gt create -am "feat(belize): Add static map preview to detail page"
gt submit --stack  # Submit Stack 4
```

---

## Stack 5: Owner Dashboard (4 PRs)

### PR 5.1: Owner Dashboard Route & Layout
**Branch:** `feat/belize-owner-dashboard`
**Dependencies:** `feat/belize-map-preview`
**Scope:** Protected route with middleware

```typescript
// Files touched:
middleware.ts                           // Add /dashboard/my-listings protection
app/dashboard/my-listings/page.tsx
app/dashboard/my-listings/layout.tsx
```

**Deliverables:**
- [ ] `/dashboard/my-listings` route protected by Clerk
- [ ] Redirects unauthenticated users
- [ ] Empty state for no listings
- [ ] "Create Listing" CTA button
- [ ] Uses existing dashboard sidebar pattern

**Acceptance:** Route protected, renders for authenticated users

**Graphite Commands:**
```bash
gt checkout feat/belize-map-preview
gt create -am "feat(belize): Add owner dashboard route with auth"
gt submit -d
```

---

### PR 5.2: Listing Table Component
**Branch:** `feat/belize-owner-table`
**Dependencies:** `feat/belize-owner-dashboard`
**Scope:** Data table with status badges

```typescript
// Files touched:
components/directory/owner-listing-table.tsx
components/directory/status-badge.tsx
lib/directory/hooks/use-owner-listings-mock.ts
```

**Deliverables:**
- [ ] shadcn/ui Data Table
- [ ] Columns: Name, Category, Status, Updated, Actions
- [ ] Status badges (draft, submitted, approved, rejected)
- [ ] Edit and Delete buttons
- [ ] Mock data filtered by "current user"

**Acceptance:** Table shows mock listings, status colors correct

**Graphite Commands:**
```bash
gt checkout feat/belize-owner-dashboard
gt create -am "feat(belize): Add owner listings table"
gt submit -d
```

---

### PR 5.3: Listing Form - Basic Info & Location Steps
**Branch:** `feat/belize-form-basics`
**Dependencies:** `feat/belize-owner-table`
**Scope:** Multi-step form (steps 1-2 of 4)

```typescript
// Files touched:
app/dashboard/my-listings/create/page.tsx
app/dashboard/my-listings/[id]/edit/page.tsx
components/directory/listing-form/form-wrapper.tsx
components/directory/listing-form/basic-info-step.tsx
components/directory/listing-form/location-step.tsx
components/directory/map-picker.tsx     // Static for now
```

**Deliverables:**
- [ ] Create and Edit routes
- [ ] Multi-step form shell with progress indicator
- [ ] Step 1: Name, category, description (Zod validation)
- [ ] Step 2: Address input, static map picker placeholder
- [ ] Form state management (React Hook Form)
- [ ] Validation error messages

**Acceptance:** Steps 1-2 work, validation enforced, can't proceed without required fields

**Graphite Commands:**
```bash
gt checkout feat/belize-owner-table
gt create -am "feat(belize): Add listing form steps 1-2"
gt submit -d
```

---

### PR 5.4: Listing Form - Images & Review Steps
**Branch:** `feat/belize-form-complete`
**Dependencies:** `feat/belize-form-basics`
**Scope:** Complete the 4-step form

```typescript
// Files touched:
components/directory/listing-form/images-step.tsx
components/directory/listing-form/contact-hours-step.tsx
components/directory/listing-form/review-step.tsx
components/directory/image-upload.tsx
lib/directory/hooks/use-listing-form.ts
```

**Deliverables:**
- [ ] Step 3: Drag-drop image upload (≤5, preview, remove)
- [ ] Step 3: Contact info + hours editor
- [ ] Step 4: Review all fields before submit
- [ ] Save as draft button (all steps)
- [ ] Submit button (final step) → status "submitted"
- [ ] Mock persistence (localStorage or state)

**Acceptance:** Full form works, draft save, submit changes status

**Graphite Commands:**
```bash
gt checkout feat/belize-form-basics
gt create -am "feat(belize): Complete listing form with images and review"
gt submit --stack  # Submit Stack 5
```

---

## Stack 6: Admin Flow (3 PRs)

### PR 6.1: Admin Review Queue Route
**Branch:** `feat/belize-admin-queue`
**Dependencies:** `feat/belize-form-complete`
**Scope:** Admin-only route with role check

```typescript
// Files touched:
middleware.ts                           // Add /dashboard/admin protection with role check
app/dashboard/admin/review-queue/page.tsx
lib/directory/hooks/use-admin-queue-mock.ts
```

**Deliverables:**
- [ ] `/dashboard/admin/review-queue` route
- [ ] Middleware role check (redirect if not admin)
- [ ] Mock pending listings (status: "submitted")
- [ ] Empty state for no pending reviews

**Acceptance:** Route accessible only to admins

**Graphite Commands:**
```bash
gt checkout feat/belize-form-complete
gt create -am "feat(belize): Add admin review queue route"
gt submit -d
```

---

### PR 6.2: Review Queue Table & Actions
**Branch:** `feat/belize-admin-table`
**Dependencies:** `feat/belize-admin-queue`
**Scope:** Data table with bulk actions

```typescript
// Files touched:
components/directory/admin-queue-table.tsx
components/directory/bulk-actions-toolbar.tsx
components/directory/listing-review-modal.tsx
```

**Deliverables:**
- [ ] shadcn/ui Data Table with checkboxes
- [ ] Columns: Select, Name, Category, Owner, Submitted Date, Actions
- [ ] Bulk select (select all, select individual)
- [ ] Bulk actions toolbar: Approve, Reject (with confirmation)
- [ ] Individual approve/reject buttons
- [ ] Review modal shows full listing details
- [ ] Rejection requires reason input

**Acceptance:** Bulk actions work, mock updates status

**Graphite Commands:**
```bash
gt checkout feat/belize-admin-queue
gt create -am "feat(belize): Add admin review table with bulk actions"
gt submit -d
```

---

### PR 6.3: Category Management
**Branch:** `feat/belize-admin-categories`
**Dependencies:** `feat/belize-admin-table`
**Scope:** CRUD for categories

```typescript
// Files touched:
app/dashboard/admin/categories/page.tsx
components/directory/category-manager.tsx
components/directory/category-form-dialog.tsx
```

**Deliverables:**
- [ ] `/dashboard/admin/categories` route
- [ ] List all categories
- [ ] Create category (dialog with name, slug, icon)
- [ ] Edit category
- [ ] Delete category (with confirmation)
- [ ] Mock persistence

**Acceptance:** Category CRUD works, persists to mock data

**Graphite Commands:**
```bash
gt checkout feat/belize-admin-table
gt create -am "feat(belize): Add category management for admins"
gt submit --stack  # Submit Stack 6
```

---

## Stack 7: Map View (3 PRs)

### PR 7.1: Map Route & Lazy Loading Shell
**Branch:** `feat/belize-map-route`
**Dependencies:** `feat/belize-admin-categories`
**Scope:** Route with feature flag gate

```typescript
// Files touched:
app/(public)/belize/map/page.tsx
components/directory/map-shell.tsx
components/directory/static-map-placeholder.tsx
```

**Deliverables:**
- [ ] `/belize/map` route
- [ ] Feature flag check: `FEATURE_MAP_VIEW`
- [ ] Falls back to static map if flag off or no Mapbox token
- [ ] Lazy load indicator
- [ ] Mobile-responsive layout (map + list side-by-side on desktop)

**Acceptance:** Route renders, shows placeholder when Mapbox disabled

**Graphite Commands:**
```bash
gt checkout feat/belize-admin-categories
gt create -am "feat(belize): Add map route with feature flag gate"
gt submit -d
```

---

### PR 7.2: Mapbox Integration with Clustering
**Branch:** `feat/belize-mapbox`
**Dependencies:** `feat/belize-map-route`
**Scope:** Live Mapbox with clustering

```typescript
// Files touched:
components/directory/map-view.tsx
lib/directory/hooks/use-mapbox.ts
lib/directory/utils/map-clustering.ts
```

**Deliverables:**
- [ ] Dynamic import of Mapbox GL JS (SSR: false)
- [ ] Initialize map centered on Belize
- [ ] Add listing markers as GeoJSON source
- [ ] Implement clustering (50px radius, color by count)
- [ ] Click cluster → zoom in
- [ ] Click marker → open listing popup
- [ ] Cleanup on unmount

**Acceptance:** Map renders, clusters work, markers clickable

**Graphite Commands:**
```bash
gt checkout feat/belize-map-route
gt create -am "feat(belize): Add Mapbox with marker clustering"
gt submit -d
```

---

### PR 7.3: List-Map Synchronization
**Branch:** `feat/belize-map-sync`
**Dependencies:** `feat/belize-mapbox`
**Scope:** Bidirectional selection sync

```typescript
// Files touched:
components/directory/map-list-sync.tsx
components/directory/map-sidebar-list.tsx
lib/directory/hooks/use-list-map-sync.ts
```

**Deliverables:**
- [ ] Sidebar list of visible listings
- [ ] Click marker → highlight list item + scroll into view
- [ ] Hover list item → highlight marker on map
- [ ] Click list item → center map on marker
- [ ] Filters sync between map and list
- [ ] URL params sync viewport bounds

**Acceptance:** List and map selection syncs bidirectionally

**Graphite Commands:**
```bash
gt checkout feat/belize-mapbox
gt create -am "feat(belize): Add list-map synchronization"
gt submit --stack  # Submit Stack 7
```

---

## Stack 8: Convex Integration (5 PRs)

### PR 8.1: Convex Schema Definition
**Branch:** `feat/belize-convex-schema`
**Dependencies:** `feat/belize-map-sync`
**Scope:** Database schema only

```typescript
// Files touched:
convex/schema.ts                        // Add listings, categories, tags tables
```

**Deliverables:**
- [ ] `categories` table with indexes
- [ ] `listings` table with all fields
- [ ] Indexes: bySlug, byOwner, byStatus, byCategory
- [ ] Search index on name field
- [ ] `tags` table (optional)
- [ ] Schema compiles and deploys

**Acceptance:** `npx convex dev` runs without errors, schema visible in dashboard

**Graphite Commands:**
```bash
gt checkout feat/belize-map-sync
gt create -am "feat(belize): Add Convex schema for listings and categories"
gt submit -d
```

---

### PR 8.2: Convex Queries - Public
**Branch:** `feat/belize-convex-queries`
**Dependencies:** `feat/belize-convex-schema`
**Scope:** Read-only queries for public

```typescript
// Files touched:
convex/listings.ts                      // listPublic, getBySlug, search
convex/categories.ts                    // list
lib/directory/hooks/use-listings-live.ts
```

**Deliverables:**
- [ ] `listings.listPublic` - paginated approved listings
- [ ] `listings.search` - full-text search with filters
- [ ] `listings.getBySlug` - single listing detail
- [ ] `categories.list` - all categories
- [ ] Hook: `useListingsLive` wraps Convex `useQuery`

**Acceptance:** Queries return data, pagination works

**Graphite Commands:**
```bash
gt checkout feat/belize-convex-schema
gt create -am "feat(belize): Add Convex public queries"
gt submit -d
```

---

### PR 8.3: Convex Mutations - Owner
**Branch:** `feat/belize-convex-owner`
**Dependencies:** `feat/belize-convex-queries`
**Scope:** Owner CRUD mutations

```typescript
// Files touched:
convex/listings.ts                      // upsert, myListings
convex/auth.ts                          // requireRole, requireOwnership
lib/directory/hooks/use-owner-listings-live.ts
```

**Deliverables:**
- [ ] `listings.upsert` - create/update listing
- [ ] `listings.myListings` - query owner's listings
- [ ] Auth helpers: `requireRole`, `requireOwnership`
- [ ] Server-side validation (Zod)
- [ ] Hook: `useOwnerListingsLive`

**Acceptance:** Owner can create/edit listings, auth enforced

**Graphite Commands:**
```bash
gt checkout feat/belize-convex-queries
gt create -am "feat(belize): Add Convex owner mutations"
gt submit -d
```

---

### PR 8.4: Convex Mutations - Admin
**Branch:** `feat/belize-convex-admin`
**Dependencies:** `feat/belize-convex-owner`
**Scope:** Admin approval mutations

```typescript
// Files touched:
convex/listings.ts                      // approve, reject, approveBulk
convex/auditLog.ts                      // logAdminAction
convex/categories.ts                    // create, update, remove
lib/directory/hooks/use-admin-queue-live.ts
```

**Deliverables:**
- [ ] `listings.approve` - approve listing
- [ ] `listings.reject` - reject with reason
- [ ] `listings.approveBulk` - bulk approve
- [ ] `auditLog.logAdminAction` - log all actions
- [ ] `categories.create/update/remove` - category CRUD
- [ ] Hook: `useAdminQueueLive`

**Acceptance:** Admin actions work, audit log persists

**Graphite Commands:**
```bash
gt checkout feat/belize-convex-owner
gt create -am "feat(belize): Add Convex admin mutations"
gt submit -d
```

---

### PR 8.5: Feature Flag Data Source Toggle
**Branch:** `feat/belize-data-toggle`
**Dependencies:** `feat/belize-convex-admin`
**Scope:** Wire feature flag to swap hooks

```typescript
// Files touched:
lib/directory/hooks/use-listings.ts     // Facade that checks flag
lib/directory/hooks/use-owner-listings.ts
lib/directory/hooks/use-admin-queue.ts
```

**Deliverables:**
- [ ] Facade hooks check `FEATURE_LIVE_DATA` flag
- [ ] If true → use `*Live` hooks (Convex)
- [ ] If false → use `*Mock` hooks
- [ ] No UI changes required
- [ ] Toggle works without code changes

**Acceptance:** Flipping flag swaps data source, UI unchanged

**Graphite Commands:**
```bash
gt checkout feat/belize-convex-admin
gt create -am "feat(belize): Add feature flag toggle for data source"
gt submit --stack  # Submit Stack 8
```

---

## Stack 9: Security & Hardening (4 PRs)

### PR 9.1: Server-Side Validation
**Branch:** `feat/belize-validation-hardening`
**Dependencies:** `feat/belize-data-toggle`
**Scope:** Enforce validation in all mutations

```typescript
// Files touched:
convex/listings.ts                      // Add validation to all mutations
convex/validation.ts                    // Shared validators
```

**Deliverables:**
- [ ] All mutations validate with Zod
- [ ] Lat/lng bounds check (Belize coordinates)
- [ ] Image count check (≤5)
- [ ] Required fields enforced
- [ ] Return typed errors to UI

**Acceptance:** Invalid submissions rejected with clear errors

**Graphite Commands:**
```bash
gt checkout feat/belize-data-toggle
gt create -am "feat(belize): Enforce server-side validation"
gt submit -d
```

---

### PR 9.2: Rate Limiting
**Branch:** `feat/belize-rate-limiting`
**Dependencies:** `feat/belize-validation-hardening`
**Scope:** Prevent abuse

```typescript
// Files touched:
convex/rate-limit.ts                    // Rate limiting logic
convex/listings.ts                      // Add rate limit checks
```

**Deliverables:**
- [ ] Rate limiter: 5 submissions per user per hour
- [ ] Rate limiter: 10 edits per user per hour
- [ ] Store counters with TTL
- [ ] Return clear "rate limit exceeded" errors

**Acceptance:** Excessive submissions blocked with error message

**Graphite Commands:**
```bash
gt checkout feat/belize-validation-hardening
gt create -am "feat(belize): Add rate limiting for submissions"
gt submit -d
```

---

### PR 9.3: Audit Logging
**Branch:** `feat/belize-audit-log`
**Dependencies:** `feat/belize-rate-limiting`
**Scope:** Log all admin actions

```typescript
// Files touched:
convex/audit-log.ts                     // Complete audit log implementation
app/dashboard/admin/audit-log/page.tsx  // Audit log viewer
```

**Deliverables:**
- [ ] Log approvals (admin ID, timestamp, listing ID)
- [ ] Log rejections (+ reason)
- [ ] Log category CRUD
- [ ] Admin page to view audit log
- [ ] Filter by action, date, admin

**Acceptance:** All admin actions logged and viewable

**Graphite Commands:**
```bash
gt checkout feat/belize-rate-limiting
gt create -am "feat(belize): Add comprehensive audit logging"
gt submit -d
```

---

### PR 9.4: Accessibility Audit
**Branch:** `feat/belize-a11y`
**Dependencies:** `feat/belize-audit-log`
**Scope:** Accessibility improvements

```typescript
// Files touched:
components/directory/*.tsx              // Add ARIA labels
lib/directory/constants/aria.ts         // ARIA constants
```

**Deliverables:**
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Focus indicators visible on all interactive elements
- [ ] ARIA labels on complex components (map, filters, forms)
- [ ] Screen reader testing for forms
- [ ] Color contrast meets WCAG AA
- [ ] Form error announcements

**Acceptance:** Accessibility checklist complete, keyboard-only navigation works

**Graphite Commands:**
```bash
gt checkout feat/belize-audit-log
gt create -am "feat(belize): Accessibility improvements and ARIA labels"
gt submit --stack  # Submit Stack 9
```

---

## Stack 10: Testing & Polish (2 PRs)

### PR 10.1: Integration Testing
**Branch:** `feat/belize-integration-tests`
**Dependencies:** `feat/belize-a11y`
**Scope:** End-to-end flow tests

```typescript
// Files touched:
tests/integration/belize/public-flow.test.ts
tests/integration/belize/owner-flow.test.ts
tests/integration/belize/admin-flow.test.ts
```

**Deliverables:**
- [ ] Test: Public search → filter → detail
- [ ] Test: Owner create → submit → view status
- [ ] Test: Admin approve → view in public
- [ ] All tests pass with mock data

**Acceptance:** All integration tests pass

**Graphite Commands:**
```bash
gt checkout feat/belize-a11y
gt create -am "feat(belize): Add integration tests for all flows"
gt submit -d
```

---

### PR 10.2: OpenSpec Validation & Documentation
**Branch:** `feat/belize-final-polish`
**Dependencies:** `feat/belize-integration-tests`
**Scope:** Final checks and documentation

```typescript
// Files touched:
openspec/changes/add-belize-directory-mvp/IMPLEMENTATION.md
openspec/changes/add-belize-directory-mvp/README.md
```

**Deliverables:**
- [ ] Run `openspec validate add-belize-directory-mvp --strict` (passes)
- [ ] Run `npm run lint` (passes)
- [ ] Run `npm run build` (passes)
- [ ] Implementation notes document
- [ ] Feature flag documentation
- [ ] Deployment checklist

**Acceptance:** All validation passes, documentation complete

**Graphite Commands:**
```bash
gt checkout feat/belize-integration-tests
gt create -am "feat(belize): Final OpenSpec validation and documentation"
gt submit --stack  # Submit Stack 10
```

---

## Graphite Workflow Summary

### Daily Workflow
```bash
# Morning: Sync with trunk
gt sync

# Create new branch for next PR
gt create -am "feat(belize): Description"

# Submit for review
gt submit -d  # Draft PR

# After review feedback
gt modify -a  # Amend changes
gt submit     # Update PR

# Check stack status
gt log short  # See all branches
```

### Submitting Entire Stack
```bash
# From any branch in the stack
gt submit --stack --reviewers reviewer1,reviewer2

# Or use alias
gt ss --reviewers reviewer1,reviewer2
```

### Navigating Stack
```bash
gt up      # Move to child branch (upstack)
gt down    # Move to parent branch (downstack)
gt top     # Jump to top of stack
gt bottom  # Jump to bottom of stack
gt co      # Interactive branch selector
```

### After PRs Merge
```bash
# Cleanup merged branches
gt sync

# Graphite will prompt to delete merged branches
```

---

## Timeline Estimate

**Total: ~8-10 weeks** (assuming 1 developer)

- Stack 1 (Foundation): 3 days
- Stack 2 (Public UI): 5 days
- Stack 3 (Search): 3 days
- Stack 4 (Detail): 2 days
- Stack 5 (Owner): 6 days
- Stack 6 (Admin): 4 days
- Stack 7 (Map): 5 days
- Stack 8 (Convex): 10 days
- Stack 9 (Security): 6 days
- Stack 10 (Testing): 3 days

**Parallelization:** Multiple developers can work on independent stacks simultaneously after Stack 1 completes.

---

## Benefits of This Structure

✅ **Small PRs:** Each PR is 200-400 LOC, easy to review
✅ **Independent Review:** PRs can be reviewed in parallel
✅ **Fast Iteration:** Feedback on PR 3.1 doesn't block work on PR 5.2
✅ **Gradual Integration:** Foundation → UI → Backend → Hardening
✅ **Easy Rollback:** Each PR is independently revertible
✅ **Clear Dependencies:** Directed acyclic graph (DAG) of dependencies
✅ **Graphite Automation:** `gt sync` handles all rebasing automatically

---

## Next Steps

1. **Initialize Graphite** (if not already):
   ```bash
   gt init
   gt auth
   ```

2. **Start Stack 1**:
   ```bash
   gt checkout main
   gt create -am "feat(belize): Add type definitions and feature flags"
   gt submit -d
   ```

3. **Continue building stack-by-stack**, submitting each PR for review

4. **Use `gt sync` daily** to stay up-to-date with main

5. **Submit entire stacks** with `gt submit --stack` when ready for review
