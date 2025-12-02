# Bill Payment Confirmation Component

A professional success confirmation card for bill payments with customizable variants, animations, and accessibility features.

## Features

✅ **Success Confirmation UI** - Clean, professional confirmation card  
✅ **Payment Details** - Displays amount, recipient, date, and transaction ID  
✅ **Three Variants** - Modal, inline, and toast notification modes  
✅ **Smooth Animations** - Fade-in entrance with cubic-bezier easing  
✅ **Keyboard Accessible** - ESC key dismissal, focus management  
✅ **Download Receipt** - Optional receipt download with loading state  
✅ **Auto-Dismiss** - Optional automatic dismissal timer  
✅ **Currency Support** - Proper formatting for multiple currencies  
✅ **Date Formatting** - Flexible date display options  
✅ **WCAG 2.1 AA** - Fully accessible with ARIA attributes  
✅ **TypeScript** - Fully typed with no `any` types  

## Installation

The component is part of the payment domain in the UI component library:

```tsx
import { BillPaymentConfirmation } from '@/ui/components/payment';
```

## Basic Usage

### Inline Variant (Default)

```tsx
import { useState } from 'react';
import { BillPaymentConfirmation } from '@/ui/components/payment';

function PaymentSuccess() {
  const [showConfirmation, setShowConfirmation] = useState(true);

  if (!showConfirmation) return null;

  return (
    <BillPaymentConfirmation
      transactionId="#9823451"
      amount={120.50}
      currency="USD"
      recipient="Acme Utilities"
      date="2024-06-11"
      onDismiss={() => setShowConfirmation(false)}
      onDownloadReceipt={() => console.log('Downloading...')}
    />
  );
}
```

### Modal Variant

```tsx
function PaymentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Make Payment
      </button>

      {showModal && (
        <BillPaymentConfirmation
          transactionId="#7654321"
          amount={249.99}
          currency="USD"
          recipient="Premium Service"
          date={new Date()}
          variant="modal"
          onDismiss={() => setShowModal(false)}
        />
      )}
    </>
  );
}
```

### Toast Notification

```tsx
function PaymentToast() {
  const [showToast, setShowToast] = useState(false);

  const handlePayment = async () => {
    // Process payment...
    setShowToast(true);
  };

  return (
    <>
      <button onClick={handlePayment}>Pay Now</button>

      {showToast && (
        <BillPaymentConfirmation
          transactionId="#5551234"
          amount={89.95}
          currency="USD"
          recipient="Monthly Bill"
          date={new Date()}
          variant="toast"
          autoDismiss={5000}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
```

## Props API

### BillPaymentConfirmationProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `transactionId` | `string` | **Required** | Unique transaction identifier |
| `amount` | `number` | **Required** | Payment amount (numeric value) |
| `recipient` | `string` | **Required** | Payment recipient name |
| `date` | `string \| Date` | **Required** | Payment date |
| `currency` | `string` | `"USD"` | Currency code (ISO 4217) |
| `variant` | `'modal' \| 'inline' \| 'toast'` | `"inline"` | Display variant |
| `onDismiss` | `() => void` | **Required** | Dismiss handler |
| `onDownloadReceipt` | `() => void \| Promise<void>` | `undefined` | Receipt download handler |
| `isDownloading` | `boolean` | `false` | External download loading state |
| `autoDismiss` | `number` | `undefined` | Auto-dismiss delay in ms |
| `title` | `string` | `"Bill Payment Successful"` | Card title |
| `message` | `string` | `"Your payment has been..."` | Confirmation message |
| `downloadLabel` | `string` | `"Download Receipt"` | Download button label |
| `dismissLabel` | `string` | `"Dismiss"` | Dismiss button label |
| `showCloseButton` | `boolean` | `true` | Show X close button |
| `className` | `string` | `""` | Additional CSS classes |

## Advanced Examples

### With Async Download Handler

```tsx
<BillPaymentConfirmation
  transactionId="#ABC123"
  amount={350.00}
  currency="USD"
  recipient="Service Provider"
  date={new Date()}
  onDismiss={() => setShow(false)}
  onDownloadReceipt={async () => {
    const response = await fetch('/api/receipts/ABC123');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'receipt-ABC123.pdf';
    a.click();
  }}
/>
```

### Custom Labels and Messages

```tsx
<BillPaymentConfirmation
  transactionId="#INTL-001"
  amount={500.00}
  currency="EUR"
  recipient="International Transfer"
  date="2024-06-15"
  title="Transfer Complete!"
  message="Your funds have been transferred successfully."
  downloadLabel="Get Confirmation"
  dismissLabel="Close"
  onDismiss={() => setShow(false)}
/>
```

### Without Download Option

```tsx
<BillPaymentConfirmation
  transactionId="#SIMPLE-789"
  amount={45.00}
  currency="USD"
  recipient="Quick Payment"
  date={new Date()}
  onDismiss={() => setShow(false)}
  showCloseButton={false}
/>
```

### Auto-Dismiss Toast

```tsx
<BillPaymentConfirmation
  transactionId="#AUTO-456"
  amount={29.99}
  currency="USD"
  recipient="Subscription"
  date={new Date()}
  variant="toast"
  autoDismiss={3000}
  onDismiss={() => setShow(false)}
/>
```

### Multiple Currencies

```tsx
// USD
<BillPaymentConfirmation amount={100.00} currency="USD" {...props} />

// Euro
<BillPaymentConfirmation amount={92.50} currency="EUR" {...props} />

// British Pound
<BillPaymentConfirmation amount={79.25} currency="GBP" {...props} />

// Canadian Dollar
<BillPaymentConfirmation amount={135.75} currency="CAD" {...props} />
```

## Component Architecture

### Component Breakdown

```
BillPaymentConfirmation (Main)
├── SuccessIcon (Checkmark badge)
├── PaymentDetailsPanel (Details display)
└── ConfirmationActions (Button group)
```

### Subcomponents

Each subcomponent can be used independently:

```tsx
import { 
  SuccessIcon, 
  PaymentDetailsPanel, 
  ConfirmationActions 
} from '@/ui/components/payment';

// Success icon only
<SuccessIcon size="lg" />

// Details panel only
<PaymentDetailsPanel
  amount={120.50}
  currency="USD"
  recipient="Acme Corp"
  date="2024-06-11"
  transactionId="#123"
/>

// Actions only
<ConfirmationActions
  onDownload={handleDownload}
  onDismiss={handleDismiss}
  downloadLabel="Get PDF"
  dismissLabel="Close"
/>
```

## Styling and Customization

### Design Tokens

The component uses design system tokens for all styling:

- **Background**: `bg-slate-900` (card), `bg-neutral-800` (panel)
- **Borders**: `border-neutral-700`
- **Text**: `text-gray-100` (primary), `text-gray-400` (secondary)
- **Success**: `bg-green-500`, `text-green-400`
- **Spacing**: Tailwind spacing scale (p-4, p-6, mb-4, etc.)
- **Radius**: `rounded-xl` (card), `rounded-lg` (panel), `rounded-full` (icon)
- **Shadows**: `shadow-2xl` (card), `shadow-md` (icon)

### Custom Styling

Add custom classes via the `className` prop:

```tsx
<BillPaymentConfirmation
  className="custom-shadow custom-animation"
  {...props}
/>
```

## Accessibility

### ARIA Attributes

- **Modal**: `role="dialog"` with backdrop
- **Inline**: `role="status"` with `aria-live="polite"`
- **Toast**: Portal-rendered with proper focus management
- **Labels**: `aria-label` on all interactive elements
- **Descriptions**: `aria-describedby` for detailed info

### Keyboard Support

| Key | Action |
|-----|--------|
| `ESC` | Dismiss confirmation |
| `Tab` | Navigate between buttons |
| `Enter` | Activate focused button |
| `Space` | Activate focused button |

### Focus Management

- Modal variant captures focus on mount
- Returns focus to trigger element on dismiss
- Visible focus indicators on all interactive elements
- Proper tab order through card content

### Screen Readers

- Success message announced on display
- Transaction details properly labeled
- Button purposes clearly communicated
- Loading states announced

## Animation Details

### Entrance Animation

- **Duration**: 0.35s
- **Easing**: `cubic-bezier(0.16, 1, 0.3, 1)`
- **Effect**: Fade in + scale from 97% to 100%
- **Trigger**: Component mount

### Exit Animation

- **Duration**: 0.35s
- **Effect**: Fade out + scale to 97%
- **Trigger**: Dismiss action

### Reduced Motion

The component respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

## Integration Examples

### After Payment Form

```tsx
function PaymentFlow() {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [transactionData, setTransactionData] = useState(null);

  const handlePaymentSuccess = (data) => {
    setTransactionData(data);
    setStep('confirmation');
  };

  if (step === 'confirmation' && transactionData) {
    return (
      <BillPaymentConfirmation
        {...transactionData}
        onDismiss={() => setStep('form')}
      />
    );
  }

  return <PaymentForm onSuccess={handlePaymentSuccess} />;
}
```

### With Payment Dashboard

```tsx
import { PaymentDashboard, BillPaymentConfirmation } from '@/ui/components/payment';

function Dashboard() {
  const [confirmation, setConfirmation] = useState(null);

  const handlePayment = async (data) => {
    const result = await processPayment(data);
    setConfirmation(result);
    return result;
  };

  return (
    <>
      <PaymentDashboard onPaymentSubmit={handlePayment} />
      
      {confirmation && (
        <BillPaymentConfirmation
          variant="modal"
          {...confirmation}
          onDismiss={() => setConfirmation(null)}
        />
      )}
    </>
  );
}
```

### With Receipt Generation

```tsx
function PaymentWithReceipt() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  const generateReceipt = async () => {
    const pdf = await generatePDF(transactionData);
    downloadFile(pdf, `receipt-${transactionData.transactionId}.pdf`);
  };

  return (
    <>
      {showConfirmation && (
        <BillPaymentConfirmation
          {...transactionData}
          onDismiss={() => setShowConfirmation(false)}
          onDownloadReceipt={generateReceipt}
        />
      )}
    </>
  );
}
```

## Testing

### Type Safety

```bash
# Verify TypeScript compilation
tsc --noEmit
```

### Manual Testing Checklist

- [ ] Card renders without errors
- [ ] Fade-in animation plays on mount
- [ ] ESC key dismisses card
- [ ] Download button shows loading state
- [ ] Dismiss button closes card
- [ ] Close X button works
- [ ] Currency formats correctly (USD, EUR, GBP, CAD)
- [ ] Date formats properly
- [ ] Modal backdrop dismisses on click
- [ ] Toast appears in correct position
- [ ] Auto-dismiss timer works
- [ ] Focus management correct in modal
- [ ] Keyboard navigation works
- [ ] Screen reader announces content
- [ ] Responsive on mobile/tablet/desktop
- [ ] Reduced motion respected

## Troubleshooting

### Card not appearing

```tsx
// ❌ Wrong - conditional without check
{showConfirmation && <BillPaymentConfirmation />}

// ✅ Correct - with proper state management
{showConfirmation && transactionData && (
  <BillPaymentConfirmation {...transactionData} />
)}
```

### Download not working

```tsx
// ❌ Wrong - synchronous function
onDownloadReceipt={() => downloadFile()}

// ✅ Correct - async with proper error handling
onDownloadReceipt={async () => {
  try {
    await downloadFile();
  } catch (error) {
    console.error('Download failed:', error);
  }
}}
```

### Modal not dismissing

```tsx
// ❌ Wrong - no state update
onDismiss={() => console.log('dismissed')}

// ✅ Correct - updates state
onDismiss={() => setShowModal(false)}
```

## Related Components

- **PaymentCompletion** - Payment form with 3D card preview
- **PaymentDashboard** - Two-column payment interface
- **PaymentForm** - Payment input form
- **OrderSummary** - Order details display

## Support

For issues or questions:
- Check `CONFIRMATION_EXAMPLES.tsx` for implementation examples
- Review `payment.types.ts` for full TypeScript definitions
- See `ui/components/payment/README.md` for payment component overview
