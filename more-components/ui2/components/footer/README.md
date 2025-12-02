# Footer Component

Dark-themed footer component with integrated contact form, newsletter subscription, navigation links, and social media buttons.

## Features

- **Contact Form**: Multi-field form with validation (name, email, company, project type, message, NDA checkbox)
- **Newsletter Subscription**: Email subscription with validation
- **Navigation Sections**: Flexible column-based navigation (2-4 columns)
- **Social Links**: Support for GitHub, Twitter, LinkedIn, Facebook, Instagram
- **Status Badge**: Customizable badge with pulse animation
- **Scroll to Top**: Smooth scroll to top functionality
- **Decorative Glows**: Optional gradient background effects
- **Responsive Design**: Mobile, tablet, and desktop layouts
- **Form States**: Loading, success, and error states with feedback
- **Type-Safe**: Full TypeScript support

## Components

### Footer

Main footer component with dark theme and rounded container.

```tsx
import { Footer } from '@/ui/components/footer';

<Footer
  companyName="Relay Dev Studio"
  tagline="We build ambitious products with small, senior teams."
  contactInfo={{
    email: 'hello@relay.dev',
    phone: '+1 (415) 555-1234',
    statusBadge: {
      text: 'Booking Q4',
      variant: 'success',
    },
    features: [
      'Senior engineers and designers only — no handoffs, no fluff.',
      'Transparent weekly demos, metrics, and delivery plans.',
      'Security, accessibility, and performance baked-in.',
    ],
  }}
  navigationSections={[
    {
      title: 'Services',
      links: [
        { label: 'Product Development', href: '#work' },
        { label: 'Frontend Systems', href: '#work' },
        { label: 'AI & Agents', href: '#work' },
        { label: 'Cloud & DevOps', href: '#work' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Case Studies', href: '#work' },
        { label: 'Playgrounds', href: '#' },
        { label: 'Open Source', href: '#' },
        { label: 'Guides', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Principles', href: '#' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
      ],
    },
  ]}
  socialLinks={[
    { platform: 'github', url: '#', ariaLabel: 'GitHub' },
    { platform: 'twitter', url: '#', ariaLabel: 'X' },
    { platform: 'linkedin', url: '#', ariaLabel: 'LinkedIn' },
  ]}
  legalLinks={[
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ]}
  onContactSubmit={async (data) => {
    console.log('Contact form:', data);
    // Handle form submission
  }}
  onSubscribe={async (email) => {
    console.log('Newsletter:', email);
    // Handle subscription
  }}
  showDecorativeGlows={true}
/>
```

### ContactForm

Standalone contact form component with validation.

```tsx
import { ContactForm } from '@/ui/components/footer';

<ContactForm
  contactInfo={{
    email: 'hello@relay.dev',
    phone: '+1 (415) 555-1234',
    statusBadge: { text: 'Booking Q4', variant: 'success' },
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  }}
  onSubmit={async (data) => {
    // Handle submission
  }}
/>
```

### NewsletterForm

Standalone newsletter subscription form.

```tsx
import { NewsletterForm } from '@/ui/components/footer';

<NewsletterForm
  onSubscribe={async (email) => {
    // Handle subscription
  }}
/>
```

## Types

### FooterProps

```typescript
interface FooterProps {
  companyName: string;
  companyLogo?: ReactNode;
  tagline: string;
  contactInfo: ContactInfo;
  navigationSections: NavigationSection[];
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
  onContactSubmit: (data: ContactFormData) => Promise<void>;
  onSubscribe: (email: string) => Promise<void>;
  showDecorativeGlows?: boolean;
  className?: string;
}
```

### ContactFormData

```typescript
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: 'product' | 'feature' | 'advisory' | 'ai';
  message?: string;
  nda: boolean;
}
```

### ContactInfo

```typescript
interface ContactInfo {
  email: string;
  phone: string;
  statusBadge?: StatusBadge;
  features: string[];
}
```

## Form Validation

- **Name**: Required, trimmed
- **Email**: Required, validated with regex
- **Company**: Optional
- **Project Type**: Required, dropdown selection
- **Message**: Optional textarea
- **NDA**: Optional checkbox

## Form States

- **idle**: Initial state
- **loading**: Submitting form
- **success**: Submission successful (auto-resets after 3s)
- **error**: Submission failed with error message

## Styling

Uses Tailwind CSS with:
- Dark theme (neutral-900 background)
- Glass-morphism effects (white/5, white/10)
- Amber accent colors for CTAs
- Emerald colors for success states
- White text with opacity variants
- Border radius: rounded-xl, rounded-2xl, rounded-3xl
- Focus states with amber ring

## Accessibility

- Semantic HTML (footer, form, nav)
- Proper form labels and associations
- ARIA labels for icon-only buttons
- Required field indicators
- Keyboard navigation support
- Focus indicators on all interactive elements
- Screen reader friendly

## Dependencies

- React 19
- Lucide React (icons)
- TypeScript
- Tailwind CSS

## Integration

Import directly from domain:
```typescript
import { Footer } from '@/ui/components/footer';
import type { FooterProps, ContactFormData } from '@/ui/components/footer/types';
```

Or use namespaced import:
```typescript
import * as FooterComponents from '@/ui/components/footer';
```
