# Aura Web3 Infrastructure Landing Page Components

Modern, dark-themed Web3 infrastructure landing page components built with React, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Fixed Glass-Effect Navigation**: Backdrop-blur header with mobile menu toggle
- **Animated Hero Section**: Floating tags with staggered animations and stats grid
- **Networks Showcase**: Grid display of supported blockchain networks
- **Pricing Tiers**: 3-tier pricing section with highlighted popular plan
- **Testimonials**: 5-star ratings with avatar and role display
- **FAQ Accordion**: Smooth expand/collapse functionality
- **3D Background**: Spline animation integration support
- **Custom Animations**: fadeInUp and float keyframe animations
- **Responsive Design**: Mobile-first approach with breakpoints
- **Dark Theme**: Black background with orange accent (#f97316)
- **Geist Font**: Modern, clean typography

## 📦 Components

### Main Components

- **`AuraLanding`**: Main container component integrating all sections
- **`AuraHeader`**: Fixed navigation with mobile menu
- **`AuraHero`**: Hero section with floating tags and stats
- **`NetworksSection`**: Blockchain networks grid
- **`PricingSection`**: Pricing plans with features
- **`TestimonialsSection`**: User testimonials with ratings
- **`FAQSection`**: FAQ accordion
- **`AuraFooter`**: Footer with social links

## 🚀 Quick Start

```tsx
import { AuraLanding } from './alimonyapp/componets/web3';

function App() {
  return (
    <AuraLanding
      header={{
        navigation: [
          { label: 'Home', href: '#home' },
          { label: 'Infrastructure', href: '#infrastructure' },
          { label: 'Validators', href: '#validators' },
          { label: 'Networks', href: '#networks' },
          { label: 'Staking', href: '#staking' },
          { label: 'Ecosystem', href: '#community' },
        ],
      }}
      hero={{
        headline: 'Meet Aura',
        highlightedText: 'Web3 Infrastructure',
        description: 'Professional blockchain infrastructure powering the next generation of decentralized networks.',
        stats: [
          { value: '50+', label: 'Networks' },
          { value: '99.9%', label: 'Uptime' },
          { value: '$2.8B', label: 'Total Staked' },
          { value: '15k+', label: 'Delegators' },
        ],
        primaryCta: { text: 'Explore Infrastructure', href: '#infrastructure' },
        secondaryCta: { text: 'View Validators', href: '#validators' },
      }}
      networks={{
        title: 'Trusted by Leading Networks',
        description: 'Providing secure validation and infrastructure services across multiple blockchain ecosystems',
        networks: [
          { symbol: 'ATOM', name: 'Cosmos' },
          { symbol: 'OSMO', name: 'Osmosis' },
          { symbol: 'JUNO', name: 'Juno' },
          { symbol: 'STAR', name: 'Stargaze' },
          { symbol: 'EVMOS', name: 'Evmos' },
          { symbol: 'AKASH', name: 'Akash' },
        ],
      }}
      pricing={{
        title: 'Simple, Transparent Pricing',
        description: 'Choose the perfect plan for your infrastructure needs.',
        plans: [
          {
            name: 'Starter',
            description: 'Perfect for individual validators',
            price: '$49',
            period: 'month',
            features: [
              'Up to 3 validator nodes',
              'Basic RPC endpoints',
              '24/7 monitoring',
              'Email support',
              '99.9% SLA',
            ],
            buttonText: 'Get Started',
          },
          {
            name: 'Professional',
            description: 'Ideal for growing networks',
            price: '$199',
            period: 'month',
            features: [
              'Up to 15 validator nodes',
              'Premium RPC endpoints',
              'IBC relaying services',
              'Advanced monitoring & alerts',
              'Priority support',
              '99.99% SLA',
            ],
            highlighted: true,
            buttonText: 'Start Free Trial',
          },
          {
            name: 'Enterprise',
            description: 'Custom solutions for large-scale operations',
            price: 'Custom',
            features: [
              'Unlimited validator nodes',
              'Dedicated infrastructure',
              'Custom integrations',
              'White-label solutions',
              'Dedicated support team',
              '99.99% SLA guarantee',
            ],
            buttonText: 'Contact Sales',
          },
        ],
      }}
      testimonials={{
        title: 'Trusted by Web3 Leaders',
        description: 'See what leading validators and developers say about our infrastructure platform',
        testimonials: [
          {
            rating: 5,
            quote: "Aura's infrastructure has been rock-solid for our validator operations.",
            author: 'Sarah Mitchell',
            role: 'Lead Validator, CosmosHub',
            avatarColor: 'orange',
          },
          {
            rating: 5,
            quote: 'The RPC endpoints are incredibly fast and reliable.',
            author: 'David Kim',
            role: 'CTO, DeFi Protocol',
            avatarColor: 'blue',
          },
          {
            rating: 5,
            quote: 'Their IBC relaying service is exceptional.',
            author: 'Alex Liu',
            role: 'Founder, Cross-chain Bridge',
            avatarColor: 'purple',
          },
        ],
      }}
      faq={{
        title: 'Frequently Asked Questions',
        description: 'Everything you need to know about our infrastructure platform',
        faqs: [
          {
            question: 'What networks do you support?',
            answer: 'We support 50+ blockchain networks including Cosmos Hub, Osmosis, Juno, Stargaze, Evmos, Akash, and many more.',
          },
          {
            question: 'How do you ensure high availability?',
            answer: 'Our infrastructure is built with redundancy in mind. We operate multiple geographically distributed data centers.',
          },
        ],
      }}
      footer={{
        socialLinks: [
          { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
          { name: 'GitHub', href: 'https://github.com', icon: 'github' },
          { name: 'Discord', href: 'https://discord.com', icon: 'discord' },
        ],
      }}
    />
  );
}
```

## 🎨 Customization

All components accept props for full customization. See `types/web3.types.ts` for complete TypeScript interfaces.

### Color Scheme

- **Background**: Black (#000000)
- **Text**: White (#ffffff), Gray variants
- **Accent**: Orange (#f97316)
- **Overlays**: white/5, white/10, white/20
- **Borders**: white/10, white/20

### Animations

- **fadeInUp**: 0.8s ease-out with translateY
- **float**: 6s ease-in-out infinite
- **Delays**: 100ms, 200ms, 300ms, 500ms, 700ms variants

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all focusable elements
- Proper heading hierarchy
- Color contrast WCAG AA compliant

## 📚 Documentation

- See `INSTALLATION.md` for setup instructions
- See `USAGE_EXAMPLE.tsx` for complete implementation examples
- See `LAYOUT_EXAMPLES.tsx` for layout variations

## 🔧 Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Geist Font (Google Fonts)

## 📄 License

Part of the project-componets component library.
