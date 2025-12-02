# Footer Component - Usage Examples

## Basic Usage

```tsx
import { Footer } from '@/ui/components/footer';
import type { ContactFormData } from '@/ui/components/footer/types';

function App() {
  const handleContactSubmit = async (data: ContactFormData) => {
    // Send to your API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
  };

  const handleSubscribe = async (email: string) => {
    // Send to your newsletter service
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to subscribe');
    }
  };

  return (
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
            { label: 'Product Development', href: '/services/product' },
            { label: 'Frontend Systems', href: '/services/frontend' },
          ],
        },
      ]}
      socialLinks={[
        { platform: 'github', url: 'https://github.com/yourcompany', ariaLabel: 'GitHub' },
        { platform: 'twitter', url: 'https://twitter.com/yourcompany', ariaLabel: 'Twitter' },
      ]}
      legalLinks={[
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ]}
      onContactSubmit={handleContactSubmit}
      onSubscribe={handleSubscribe}
    />
  );
}
```

## With Custom Logo

```tsx
<Footer
  companyName="Your Company"
  companyLogo={<YourLogoComponent />}
  // ... other props
/>
```

## Without Decorative Glows

```tsx
<Footer
  companyName="Your Company"
  showDecorativeGlows={false}
  // ... other props
/>
```

## Status Badge Variants

```tsx
// Success (green)
contactInfo={{
  statusBadge: {
    text: 'Available Now',
    variant: 'success',
  },
  // ... other fields
}}

// Warning (amber)
contactInfo={{
  statusBadge: {
    text: 'Limited Availability',
    variant: 'warning',
  },
  // ... other fields
}}

// Info (blue)
contactInfo={{
  statusBadge: {
    text: 'Coming Soon',
    variant: 'info',
  },
  // ... other fields
}}
```

## Minimal Navigation

```tsx
navigationSections={[
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]}
```

## External Links

```tsx
navigationSections={[
  {
    title: 'Resources',
    links: [
      { 
        label: 'Documentation', 
        href: 'https://docs.example.com',
        external: true  // Opens in new tab
      },
    ],
  },
]}
```

## All Social Platforms

```tsx
socialLinks={[
  { platform: 'github', url: 'https://github.com/you', ariaLabel: 'GitHub' },
  { platform: 'twitter', url: 'https://twitter.com/you', ariaLabel: 'Twitter' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/you', ariaLabel: 'LinkedIn' },
  { platform: 'facebook', url: 'https://facebook.com/you', ariaLabel: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/you', ariaLabel: 'Instagram' },
]}
```

## Form Submission with Error Handling

```tsx
const handleContactSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }
    
    // Show success message (handled by component)
    console.log('Form submitted successfully');
  } catch (error) {
    // Error will be displayed by the component
    throw error;
  }
};
```

## Integration with Analytics

```tsx
const handleContactSubmit = async (data: ContactFormData) => {
  // Track form submission
  analytics.track('Contact Form Submitted', {
    projectType: data.projectType,
    hasNDA: data.nda,
  });
  
  // Submit to API
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

const handleSubscribe = async (email: string) => {
  // Track subscription
  analytics.track('Newsletter Subscribed', { email });
  
  // Submit to service
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
```

## Using Standalone Components

### Contact Form Only

```tsx
import { ContactForm } from '@/ui/components/footer';

<ContactForm
  contactInfo={{
    email: 'hello@example.com',
    phone: '+1 (555) 123-4567',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
  }}
  onSubmit={handleSubmit}
/>
```

### Newsletter Form Only

```tsx
import { NewsletterForm } from '@/ui/components/footer';

<NewsletterForm onSubscribe={handleSubscribe} />
```

## TypeScript Types

```tsx
import type {
  FooterProps,
  ContactFormData,
  ContactInfo,
  NavigationSection,
  SocialLink,
  LegalLink,
} from '@/ui/components/footer/types';

// Define your data
const contactInfo: ContactInfo = {
  email: 'hello@example.com',
  phone: '+1 (555) 123-4567',
  features: ['Feature 1', 'Feature 2'],
};

const navSections: NavigationSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
    ],
  },
];
```

## With Custom Styling

```tsx
<Footer
  companyName="Your Company"
  className="my-custom-class"
  // ... other props
/>
```

## Full Example with All Features

```tsx
import { Footer } from '@/ui/components/footer';
import { BadgeCheck } from 'lucide-react';

export default function MyPage() {
  return (
    <div>
      {/* Your page content */}
      
      <Footer
        companyName="Relay Dev Studio"
        companyLogo={<BadgeCheck className="w-5 h-5 text-white/80" />}
        tagline="We build ambitious products with small, senior teams. Tell us about your project."
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
              { label: 'Product Development', href: '#services' },
              { label: 'Frontend Systems', href: '#services' },
              { label: 'AI & Agents', href: '#services' },
              { label: 'Cloud & DevOps', href: '#services' },
            ],
          },
          {
            title: 'Resources',
            links: [
              { label: 'Case Studies', href: '#case-studies' },
              { label: 'Playgrounds', href: '#playgrounds' },
              { label: 'Open Source', href: 'https://github.com', external: true },
              { label: 'Guides', href: '#guides' },
            ],
          },
          {
            title: 'Company',
            links: [
              { label: 'About', href: '#about' },
              { label: 'Principles', href: '#principles' },
              { label: 'Contact', href: '#contact' },
              { label: 'Careers', href: '#careers' },
            ],
          },
        ]}
        socialLinks={[
          { 
            platform: 'github', 
            url: 'https://github.com/yourcompany', 
            ariaLabel: 'GitHub' 
          },
          { 
            platform: 'twitter', 
            url: 'https://twitter.com/yourcompany', 
            ariaLabel: 'X (Twitter)' 
          },
          { 
            platform: 'linkedin', 
            url: 'https://linkedin.com/company/yourcompany', 
            ariaLabel: 'LinkedIn' 
          },
        ]}
        legalLinks={[
          { label: 'Privacy', href: '/privacy' },
          { label: 'Terms', href: '/terms' },
        ]}
        onContactSubmit={async (data) => {
          console.log('Contact form:', data);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
        onSubscribe={async (email) => {
          console.log('Newsletter:', email);
          await new Promise(resolve => setTimeout(resolve, 1000));
        }}
        showDecorativeGlows={true}
      />
    </div>
  );
}
```
