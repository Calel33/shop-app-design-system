# Payment Completion Portal - Usage Guide

## Overview

The **PaymentCompletion** component is a fully-featured payment portal with an animated 3D credit card preview, real-time form validation, and a beautiful dark theme interface.

## Features

✅ **Animated 3D Card Preview** - Live updates as user types  
✅ **Mesh Gradient Background** - 4 animated gradient blobs  
✅ **Real-time Validation** - Card number, expiry, CVC, name, country  
✅ **Card Type Detection** - Auto-detects Visa, Mastercard, Amex, Discover  
✅ **Auto-formatting** - Card number (spaces), expiry (MM/YY), CVC  
✅ **Glass-effect Inputs** - Dark theme with subtle borders  
✅ **Animated Gradient Button** - Smooth color transitions  
✅ **Country Selector** - Dropdown with flag emojis  
✅ **Loading States** - Button spinner during submission  
✅ **Error Handling** - Field-level validation errors  
✅ **Accessibility** - WCAG 2.1 AA compliant  
✅ **Responsive Design** - Mobile, tablet, desktop  

## Installation

The component is part of the payment domain in the UI library:

```tsx
import { PaymentCompletion } from '@/ui/components/payment';
import type { PaymentCompletionFormData, PaymentResult } from '@/ui/components/payment';
```

## Basic Usage

```tsx
import React from 'react';
import { PaymentCompletion } from '@/ui/components/payment';

function CheckoutPage() {
  const handlePayment = async (data: PaymentCompletionFormData) => {
    // Process payment with your payment gateway
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (response.ok) {
      return { 
        success: true, 
        transactionId: await response.text(),
        timestamp: new Date(),
      };
    } else {
      return { 
        success: false, 
        error: 'Payment failed. Please try again.' 
      };
    }
  };

  return (
    <PaymentCompletion
      amount={149.99}
      currency="USD"
      onSubmit={handlePayment}
    />
  );
}
```

## Props

### PaymentCompletionProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `amount` | `number` | **required** | Payment amount |
| `currency` | `string` | `'USD'` | Currency code |
| `onSubmit` | `(data) => Promise<PaymentResult>` | **required** | Payment submission handler |
| `title` | `string` | `'Complete Your Payment'` | Page title |
| `countries` | `CountryOption[]` | Default list | Available countries |
| `securityMessage` | `string` | Default message | Security disclaimer text |
| `className` | `string` | `''` | Additional CSS classes |
| `cardPreviewEnabled` | `boolean` | `true` | Show/hide card preview |
| `maskCardNumber` | `boolean` | `false` | Mask card number (show last 4) |

## Advanced Usage

### Custom Country List

```tsx
const customCountries = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
];

<PaymentCompletion
  amount={99.99}
  currency="USD"
  onSubmit={handlePayment}
  countries={customCountries}
/>
```

### Masked Card Number

```tsx
<PaymentCompletion
  amount={199.99}
  currency="USD"
  onSubmit={handlePayment}
  maskCardNumber={true} // Shows •••• •••• •••• 1234
/>
```

### Without Card Preview

```tsx
<PaymentCompletion
  amount={49.99}
  currency="USD"
  onSubmit={handlePayment}
  cardPreviewEnabled={false} // Hide card preview
/>
```

### Custom Security Message

```tsx
<PaymentCompletion
  amount={299.99}
  currency="USD"
  onSubmit={handlePayment}
  securityMessage="Your payment is protected by 256-bit SSL encryption and PCI DSS compliance."
/>
```

## Form Data Structure

### PaymentCompletionFormData

```typescript
interface PaymentCompletionFormData {
  cardholderName: string;  // e.g., "John Doe"
  cardNumber: string;      // e.g., "4111 1111 1111 1111"
  expiryDate: string;      // e.g., "12/25"
  cvc: string;             // e.g., "123"
  country: string;         // e.g., "US"
}
```

### PaymentResult

```typescript
interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  timestamp?: Date;
}
```

## Validation Rules

### Cardholder Name
- **Required**: Yes
- **Min Length**: 2 characters
- **Max Length**: 50 characters
- **Allowed**: Letters, spaces, hyphens, apostrophes
- **Example**: `John Doe`, `Mary-Jane O'Brien`

### Card Number
- **Required**: Yes
- **Length**: 13-19 digits
- **Validation**: Luhn algorithm
- **Auto-format**: Spaces every 4 digits
- **Example**: `4111 1111 1111 1111`

### Expiry Date
- **Required**: Yes
- **Format**: MM/YY
- **Validation**: Valid month (01-12), not expired
- **Auto-format**: Adds slash automatically
- **Example**: `12/25`

### CVC
- **Required**: Yes
- **Length**: 3 digits (4 for Amex)
- **Validation**: Numeric only
- **Example**: `123` or `1234`

### Country
- **Required**: Yes
- **Validation**: Must be in provided list
- **Example**: `US`

## Card Type Detection

The component automatically detects card types:

| Card Type | Starts With | CVC Length |
|-----------|-------------|------------|
| **Visa** | 4 | 3 digits |
| **Mastercard** | 51-55 or 2221-2720 | 3 digits |
| **American Express** | 34 or 37 | 4 digits |
| **Discover** | 6011, 622126-622925, 644-649, 65 | 3 digits |

## Animations

### Mesh Gradient Blobs
- 4 animated blobs with different timings
- Colors: Blue (#2563eb), Indigo (#6366f1), White (rgba), Orange (#fb923c)
- Durations: 7s, 6.3s, 4.8s, 8.2s
- Smooth ease-in-out transitions

### Gradient Button
- Animated background gradient shift
- Normal: 3s animation
- Hover: 1.5s animation (faster)
- Colors: Blue → Indigo → Orange → Blue

### Card Preview
- Live updates as user types
- Smooth transitions
- Realistic 3D depth with shadows

## Responsive Breakpoints

### Mobile (< 768px)
- Stacked layout (card on top, form below)
- Card size: 320x200px
- Full-width inputs

### Tablet (768px - 1024px)
- Side-by-side layout (50/50)
- Card size: 350x220px

### Desktop (> 1024px)
- Side-by-side layout (45/55)
- Card size: 380x240px
- Larger spacing

## Accessibility

✅ **Semantic HTML** - Proper form structure  
✅ **ARIA Labels** - Screen reader support  
✅ **Keyboard Navigation** - Full keyboard support  
✅ **Focus Indicators** - Clear focus rings  
✅ **Error Announcements** - aria-live regions  
✅ **Required Fields** - aria-required attributes  
✅ **Color Contrast** - WCAG 2.1 AA compliant  

## Styling

The component uses dark theme colors:
- Background: `#000000` (pure black)
- Card surface: `#191f2e` (dark navy)
- Text: `#f9fafb` (near-white)
- Inputs: `#000000` with white/10% borders
- Focus: Blue glow (`#3b82f6`)

## Security Considerations

⚠️ **Important Security Notes:**

1. **Never log card data** - Don't console.log or store card details
2. **Use HTTPS only** - Always serve over secure connection
3. **PCI Compliance** - Follow PCI DSS guidelines
4. **Tokenization** - Consider using payment gateway tokens
5. **Clear data** - Clear form after successful submission
6. **Validate server-side** - Never trust client-side validation alone

## Error Handling

```tsx
const handlePayment = async (data: PaymentCompletionFormData) => {
  try {
    const response = await processPayment(data);
    return { success: true, transactionId: response.id };
  } catch (error) {
    console.error('Payment error:', error);
    return { 
      success: false, 
      error: 'Payment failed. Please check your card details.' 
    };
  }
};
```

## Integration with Payment Gateways

### Stripe Example

```tsx
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

const handlePayment = async (data: PaymentCompletionFormData) => {
  const stripe = await stripePromise;
  
  // Create payment intent on your server
  const response = await fetch('/api/create-payment-intent', {
    method: 'POST',
    body: JSON.stringify({ amount: 14999 }), // in cents
  });
  
  const { clientSecret } = await response.json();
  
  // Confirm payment with Stripe
  const result = await stripe?.confirmCardPayment(clientSecret, {
    payment_method: {
      card: {
        number: data.cardNumber.replace(/\s/g, ''),
        exp_month: parseInt(data.expiryDate.split('/')[0]),
        exp_year: parseInt('20' + data.expiryDate.split('/')[1]),
        cvc: data.cvc,
      },
      billing_details: {
        name: data.cardholderName,
      },
    },
  });
  
  if (result?.error) {
    return { success: false, error: result.error.message };
  }
  
  return { 
    success: true, 
    transactionId: result?.paymentIntent?.id 
  };
};
```

## Testing

### Test Card Numbers

Use these test cards in development:

| Card Type | Number | CVC | Expiry |
|-----------|--------|-----|--------|
| Visa | 4242 4242 4242 4242 | 123 | Any future date |
| Mastercard | 5555 5555 5555 4444 | 123 | Any future date |
| Amex | 3782 822463 10005 | 1234 | Any future date |
| Discover | 6011 1111 1111 1117 | 123 | Any future date |

## Demo

See `test/PaymentCompletionDemo.tsx` for a working example.

## Related Components

- **PaymentDashboard** - Alternative payment interface with order summary
- **PaymentForm** - Standalone payment form component
- **CardPreview** - Reusable animated card component

## Support

For issues or questions, please refer to the main UI library documentation.
