# Payment Components

Two comprehensive payment systems with card validation, formatting, and beautiful UI.

## Available Components

### 1. PaymentDashboard
Two-column payment interface with order summary (light theme).

### 2. PaymentCompletion
Animated 3D card preview with mesh gradient background (dark theme).

### 3. BillPaymentConfirmation
Success confirmation card for completed payments with receipt download.

## Common Features

- **Card Validation**: Luhn algorithm, card type detection (Visa, Mastercard, Amex, Discover)
- **Auto-Formatting**: Card number (spaces), expiry date (MM/YY), CVC
- **Real-time Validation**: Field-level error messages, touched state tracking
- **Form States**: Loading, success, error with feedback
- **Responsive Design**: Mobile, tablet, desktop optimized
- **Type-Safe**: Full TypeScript support
- **Accessible**: WCAG compliant, semantic HTML, keyboard navigation

## Quick Start

### PaymentDashboard (Light Theme)

```tsx
import { PaymentDashboard } from '@/ui/components/payment';
import { Briefcase, Headphones } from 'lucide-react';

<PaymentDashboard
  orderSummary={{
    items: [
      {
        id: '1',
        icon: <Briefcase />,
        title: 'Business Plan',
        description: 'Annual billing',
        price: 129.00,
      },
    ],
    subtotal: 129.00,
    tax: 0.00,
    total: 129.00,
  }}
  onPaymentSubmit={async (data) => {
    // Process payment
    return { success: true, transactionId: 'TXN-123' };
  }}
/>
```

### PaymentCompletion (Dark Theme)

```tsx
import { PaymentCompletion } from '@/ui/components/payment';

<PaymentCompletion
  amount={149.99}
  currency="USD"
  onSubmit={async (data) => {
    // Process payment
    return { success: true, transactionId: 'TXN-456' };
  }}
  cardPreviewEnabled={true}
/>
```

## Validation Rules

- **Card Number**: 13-19 digits, Luhn algorithm, auto-detect type
- **Expiry Date**: MM/YY format, valid month (01-12), not expired
- **CVV/CVC**: 3 digits (Visa/Mastercard), 4 digits (Amex)
- **Cardholder Name**: 2+ characters, letters/spaces/hyphens only

## Card Type Detection

- **Visa**: Starts with 4
- **Mastercard**: Starts with 51-55 or 2221-2720
- **Amex**: Starts with 34 or 37
- **Discover**: Starts with 6011 or 65

## Components

### Payment Dashboard System

#### PaymentDashboard
Main component with two-column layout (payment form + order summary). Light theme with white background.

**Features:**
- Order summary with item list
- Payment method icons (Visa, MC, Amex, PayPal)
- Configurable terms link
- Light, professional design

#### PaymentForm
Standalone payment form with validation.

#### OrderSummary
Standalone order summary display.

#### CardBrandIcons
SVG icons for payment methods.

---

### Payment Completion System

#### PaymentCompletion
Animated 3D card preview with mesh gradient background. Dark theme with black background.

**Features:**
- Animated 3D credit card preview
- 4 mesh gradient blob animations (7s, 6.3s, 4.8s, 8.2s)
- Live card updates as user types
- Glass-effect dark inputs
- Animated gradient button (blue → indigo → orange)
- Country selector with flags
- Optional card number masking

#### PaymentCompletionForm
Form component with validation logic.

#### CardPreview
Animated 3D card with live updates.

#### MeshGradientBackground
4 animated gradient blobs for card background.

#### CardChip
Realistic SVG card chip component.

#### CardLogo
SVG card logo with gradient fill.

#### GlassInput
Glass-effect input field (dark theme).

#### GradientButton
Animated gradient button with loading state.

#### CountrySelector
Country dropdown with flag emojis.

## Hooks

### useCardValidation

Card validation with Luhn algorithm and field validation.

### useCardFormatter

Card number, expiry date, and CVV formatting utilities.

## Import

### Payment Dashboard Components
```typescript
import { 
  PaymentDashboard, 
  PaymentForm, 
  OrderSummary,
  CardBrandIcon,
  VisaIcon,
  MastercardIcon,
  AmexIcon,
  PayPalIcon
} from '@/ui/components/payment';

import type { 
  PaymentFormData, 
  PaymentResult,
  OrderSummary,
  OrderItem 
} from '@/ui/components/payment/types';
```

### Payment Completion Components
```typescript
import { 
  PaymentCompletion,
  PaymentCompletionForm,
  CardPreview,
  MeshGradientBackground,
  CardChip,
  CardLogo,
  GlassInput,
  GradientButton,
  CountrySelector
} from '@/ui/components/payment';

import type { 
  PaymentCompletionFormData,
  PaymentCompletionProps,
  CountryOption,
  CardPreviewProps
} from '@/ui/components/payment/types';
```

### Hooks
```typescript
import { useCardFormatter, useCardValidation } from '@/ui';
```

## Documentation

- **Payment Completion Guide**: See [PAYMENT_COMPLETION_USAGE.md](./PAYMENT_COMPLETION_USAGE.md) for detailed documentation
- **Demo**: See `test/PaymentCompletionDemo.tsx` for working examples

## Choosing Between Components

### Use **PaymentDashboard** when:
- You need an order summary with item list
- Light theme matches your design
- Business/professional context
- Displaying multiple items and pricing breakdown

### Use **PaymentCompletion** when:
- You want a modern, animated experience
- Dark theme matches your design
- Single payment amount (no item breakdown needed)
- Consumer/retail context
- Want to showcase the card visually

Both components share the same validation logic and hooks, so you can switch between them easily.

---

### Bill Payment Confirmation System

#### BillPaymentConfirmation
Success confirmation card displaying payment details with download receipt option.

**Features:**
- Success icon with checkmark badge
- Payment details panel (amount, recipient, date, transaction ID)
- Download receipt action
- Three display variants (modal, inline, toast)
- Fade-in/fade-out animations
- ESC key dismissal
- Auto-dismiss option
- Keyboard accessible (WCAG 2.1 AA)
- Currency formatting (USD, EUR, GBP, CAD, etc.)
- Dark theme design

#### SuccessIcon
Circular success badge with animated checkmark. Configurable sizes (sm, md, lg).

#### PaymentDetailsPanel
Dark panel displaying transaction details in key-value format with proper currency and date formatting.

#### ConfirmationActions
Action button group with download receipt (primary) and dismiss (secondary) actions. Supports loading states.

### Quick Start: Bill Payment Confirmation

```tsx
import { BillPaymentConfirmation } from '@/ui/components/payment';

// Inline variant
<BillPaymentConfirmation
  transactionId="#9823451"
  amount={120.50}
  currency="USD"
  recipient="Acme Utilities"
  date="2024-06-11"
  variant="inline"
  onDismiss={() => setShowConfirmation(false)}
  onDownloadReceipt={async () => {
    // Download receipt logic
    await downloadReceipt();
  }}
/>

// Modal variant
<BillPaymentConfirmation
  variant="modal"
  transactionId="#7654321"
  amount={249.99}
  currency="USD"
  recipient="Premium Service"
  date={new Date()}
  onDismiss={() => setShowModal(false)}
/>

// Toast notification
<BillPaymentConfirmation
  variant="toast"
  transactionId="#5551234"
  amount={89.95}
  currency="USD"
  recipient="Monthly Bill"
  date={new Date()}
  autoDismiss={5000}
  onDismiss={() => setShowToast(false)}
/>
```

### Import: Bill Payment Confirmation

```typescript
import { 
  BillPaymentConfirmation,
  SuccessIcon,
  PaymentDetailsPanel,
  ConfirmationActions
} from '@/ui/components/payment';

import type { 
  BillPaymentConfirmationProps,
  PaymentDetails,
  ConfirmationVariant,
  SuccessIconProps,
  PaymentDetailsPanelProps,
  ConfirmationActionsProps
} from '@/ui/components/payment/types';
```

### Documentation: Bill Payment Confirmation

- **Usage Guide**: See [BILL_PAYMENT_CONFIRMATION_USAGE.md](./BILL_PAYMENT_CONFIRMATION_USAGE.md) for comprehensive documentation
- **Examples**: See [CONFIRMATION_EXAMPLES.tsx](./CONFIRMATION_EXAMPLES.tsx) for implementation examples
- **Types**: See `ui/components/types/payment.types.ts` for TypeScript definitions

### Complete Payment Flow

```tsx
import { PaymentCompletion, BillPaymentConfirmation } from '@/ui/components/payment';

function PaymentFlow() {
  const [step, setStep] = useState<'payment' | 'confirmation'>('payment');
  const [transactionData, setTransactionData] = useState(null);

  const handlePayment = async (data) => {
    const result = await processPayment(data);
    setTransactionData(result);
    setStep('confirmation');
    return result;
  };

  if (step === 'confirmation' && transactionData) {
    return (
      <BillPaymentConfirmation
        variant="modal"
        {...transactionData}
        onDismiss={() => setStep('payment')}
        onDownloadReceipt={generateReceipt}
      />
    );
  }

  return (
    <PaymentCompletion
      amount={149.99}
      onSubmit={handlePayment}
    />
  );
}
```

## Virtual Payment Card Components

Interactive 3D payment card with glassmorphism design and click-to-flip functionality. Perfect for modern payment interfaces, fintech applications, and interactive card previews.

### 8. VirtualPaymentCard
Main component that provides 3D card flip functionality with glassmorphism styling.

**Features:**
- **3D Flip Animation**: Smooth cubic-bezier transition (0.8s duration)
- **Glassmorphism Design**: Backdrop blur with rgba backgrounds
- **Shimmer Effect**: Animated shimmer across card surface (4s infinite)
- **Click to Flip**: Interactive card flipping with callback support
- **Responsive Design**: Optimized for mobile and desktop
- **Type Safety**: Full TypeScript support with defined interfaces

**Props:**
```typescript
interface VirtualPaymentCardProps {
  cardData: VirtualCardData;
  onFlip?: (showingBack: boolean) => void;
  enableFlip?: boolean;
  className?: string;
}

interface VirtualCardData {
  cardNumber: string; // Full number (masked display)
  cardHolder: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  cardId: string;
  issuer: string;
}
```

**Usage:**
```tsx
import { VirtualPaymentCard } from '@/ui/components/payment';

const cardData = {
  cardNumber: '4921890145627631',
  cardHolder: 'Jamie Chen',
  expiryMonth: '05',
  expiryYear: '2029',
  cvv: '921',
  cardId: 'NX-387542',
  issuer: 'NEXUS'
};

<VirtualPaymentCard
  cardData={cardData}
  onFlip={(showingBack) => console.log(`Card side: ${showingBack ? 'back' : 'front'}`)}
  enableFlip={true}
  className="max-w-md"
/>
```

### 9. CardFront
Front face of the virtual payment card with glassmorphism effect.

**Features:**
- Cardholder name and masked card number display
- Expiry date with proper formatting
- Issuer logo and branding
- Card chip and contactless payment icons
- Animated shimmer effect
- Glassmorphism styling with backdrop blur

**Usage:** (Typically used internally by VirtualPaymentCard)
```tsx
import { CardFront } from '@/ui/components/payment';

<CardFront cardData={cardData} />
```

### 10. CardBack
Back face of the virtual payment card with security details.

**Features:**
- Magnetic strip design
- CVV/CVC security code display
- Card terms and conditions
- Card ID and issuer information
- Glassmorphism styling
- Rotated for 3D flip animation

**Usage:** (Typically used internally by VirtualPaymentCard)
```tsx
import { CardBack } from '@/ui/components/payment';

<CardBack cardData={cardData} />
```

### Virtual Card Demo

Complete interactive demo with flip counter, auto-flip mode, and card details display.

**Location:** `src/VirtualCardDemo.tsx`

**Features:**
- Interactive card with click-to-flip
- Flip counter and current side indicator
- Auto-flip toggle for continuous animation
- Card details panel showing all data
- Instructions and usage example

**Usage:**
```tsx
import { VirtualCardDemo } from '/src/VirtualCardDemo';

<VirtualCardDemo />
```

### Import: Virtual Payment Card

```typescript
// Main component
import { VirtualPaymentCard } from '@/ui/components/payment';

// Individual components (for custom implementations)
import { CardFront, CardBack } from '@/ui/components/payment';

// Types for TypeScript
import type { 
  VirtualCardData,
  VirtualPaymentCardProps
} from '@/ui/components/payment/types';
```

### Styling Details

The VirtualPaymentCard uses advanced CSS features:

- **3D Transforms**: `transform-style: preserve-3d` and `backface-visibility: hidden`
- **Glassmorphism**: `backdrop-filter: blur(8px)` with `rgba(255, 255, 255, 0.05)` background
- **Animations**: Keyframe shimmer animation with 4-second infinite loop
- **Transitions**: Cubic-bezier easing function for smooth card flipping (0.175, 0.885, 0.32, 1.275)

### Browser Support

- **3D Transforms**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Backdrop Filter**: Chrome 76+, Firefox 103+, Safari 14+, Edge 79+
- **CSS Animations**: Universal support

### Accessibility

- **Click/Tap Support**: Works on both mouse and touch devices
- **Keyboard Navigation**: Card can be flipped with Enter/Space when focused
- **Screen Readers**: Card data is properly structured and announced
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## FlowPay Landing Page Components

Modern, dark-themed landing page components with glass-morphism effects and animated payment cards. Perfect for fintech, payment platforms, and SaaS landing pages.

### 4. FlowPayHero
Hero section with animated 3D payment cards and gradient text effects.

**Features:**
- Animated floating payment cards with rotation
- Customizable badge with icon
- Dual CTA buttons (primary + secondary)
- Gradient text highlighting
- Optional grid background overlay
- Staggered fade-in animations

**Props:**
```typescript
interface FlowPayHeroProps {
  badge?: {
    icon?: ReactNode;
    text: string;
  };
  headline: string;
  highlightedText: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryCta?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  cards?: PaymentCardData[];
  showGridBackground?: boolean;
  className?: string;
}
```

**Usage:**
```tsx
import { FlowPayHero } from '@/ui/components/payment';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

<FlowPayHero
  badge={{
    icon: <Sparkles className="w-4 h-4" />,
    text: "New: Instant crypto payments now available"
  }}
  headline="Digital payments"
  highlightedText="reimagined"
  description="Experience the future of finance with instant transfers, smart contracts, and seamless global payments."
  primaryCta={{
    text: "Start building",
    href: "#",
    icon: <ArrowRight className="w-5 h-5" />
  }}
  secondaryCta={{
    text: "Watch demo",
    href: "#",
    icon: <Play className="w-5 h-5" />
  }}
/>
```

### 5. PaymentFeatureGrid
Three-column feature grid with glass-morphism cards and hover effects.

**Features:**
- Responsive grid layout (1 col mobile, 3 col desktop)
- Glass-effect cards with backdrop blur
- Icon containers with gradient backgrounds
- Hover scale animations
- Centered headline and description

**Props:**
```typescript
interface PaymentFeatureGridProps {
  headline: string;
  description: string;
  features: Feature[];
  className?: string;
}

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: string;
}
```

**Usage:**
```tsx
import { PaymentFeatureGrid } from '@/ui/components/payment';
import { Zap, Shield, Globe } from 'lucide-react';

<PaymentFeatureGrid
  headline="Built for modern businesses"
  description="Powerful APIs, instant settlements, and enterprise-grade security."
  features={[
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Lightning Fast",
      description: "Process payments in milliseconds with our optimized infrastructure."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption, fraud detection, and global compliance."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Global Coverage",
      description: "Accept payments from 150+ countries with automatic conversion."
    }
  ]}
/>
```

### 6. PaymentTestimonials
Testimonial section with customer quote and stat cards.

**Features:**
- Large testimonial card (2/3 width)
- Star rating display
- Author avatar and credentials
- Stat cards with icons
- Responsive two-column layout

**Props:**
```typescript
interface PaymentTestimonialsProps {
  testimonial: {
    rating: number;
    quote: string;
    content: string;
    author: {
      name: string;
      role: string;
      avatar: string;
    };
  };
  stats: Stat[];
  className?: string;
}

interface Stat {
  icon: ReactNode;
  label: string;
  value: string;
  subtitle: string;
  gradient?: string;
}
```

**Usage:**
```tsx
import { PaymentTestimonials } from '@/ui/components/payment';
import { TrendingUp, Users } from 'lucide-react';

<PaymentTestimonials
  testimonial={{
    rating: 5,
    quote: "FlowPay transformed how we handle payments",
    content: "The integration was seamless, and our conversion rates improved by 40%.",
    author: {
      name: "Marcus Johnson",
      role: "CTO at TechFlow",
      avatar: "https://example.com/avatar.jpg"
    }
  }}
  stats={[
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      label: "Transaction Volume",
      value: "$2.4B",
      subtitle: "processed monthly"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      label: "Customer Satisfaction",
      value: "98%",
      subtitle: "would recommend us"
    }
  ]}
/>
```

### 7. GlassCard
Reusable glass-morphism card component.

**Features:**
- Backdrop blur effect
- Optional gradient overlay
- Optional glow effect
- Optional hover animations
- Clickable with onClick handler

**Props:**
```typescript
interface GlassCardProps {
  children: ReactNode;
  gradient?: string;
  glow?: boolean;
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}
```

**Usage:**
```tsx
import { GlassCard } from '@/ui/components/payment';

<GlassCard
  glow
  hover
  gradient="from-blue-500/20 via-purple-500/20 to-pink-500/20"
  className="p-8"
>
  <h3 className="text-xl font-bold mb-4">Custom Content</h3>
  <p>Any content you want in a glass card</p>
</GlassCard>
```

## Complete Landing Page Example

See `src/FlowPayDemo.tsx` for a complete implementation combining all FlowPay components into a production-ready landing page.

```tsx
import { FlowPayDemo } from '@/src/FlowPayDemo';

// Full landing page with hero, features, testimonials, and footer
<FlowPayDemo />
```

## Design System Compliance

All FlowPay components follow the project design system:

- **Typography**: System font stack with font-weight utilities
- **Colors**: Dark theme with white text and blue/purple gradients
- **Spacing**: Consistent padding and margins using Tailwind scale
- **Animations**: Staggered fade-in, slide-up, and scale-in effects
- **Glass Effects**: Backdrop blur with rgba backgrounds
- **Responsive**: Mobile-first with sm/md/lg breakpoints

## Accessibility

- **Semantic HTML**: Proper heading hierarchy, section landmarks
- **ARIA Labels**: All interactive elements have descriptive labels
- **Keyboard Navigation**: Full tab navigation support
- **Focus States**: Visible focus indicators on all interactive elements
- **Color Contrast**: WCAG 2.1 AA compliant text contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` user preference

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Supports backdrop-filter (glass effect)

## Related Documentation

- [Payment Completion Usage Guide](./PAYMENT_COMPLETION_USAGE.md)
- [Bill Payment Confirmation Usage](./BILL_PAYMENT_CONFIRMATION_USAGE.md)
- [Design System Tokens](../../../design-system/design.md)
