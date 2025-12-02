# Account Setup Modal Component

A multi-step onboarding modal with progress tracking, security options, and accessible design patterns.

## 🎯 Features

- ✅ **Multi-step Progress**: Visual step indicator with completion tracking
- ✅ **Security Options**: Configurable toggle switches for security settings
- ✅ **Portal Rendering**: Uses React Portal for proper z-index layering
- ✅ **Focus Trap**: Keyboard navigation stays within modal
- ✅ **Escape Key**: Close modal with Escape key
- ✅ **Loading States**: Built-in loading indicator for async operations
- ✅ **Responsive**: Mobile-first design adapts to all screen sizes
- ✅ **Accessible**: WCAG 2.1 AA compliant with ARIA labels
- ✅ **TypeScript**: Fully typed with no `any` types
- ✅ **Design Tokens**: Uses project design system tokens

## 📦 Components

### Main Component
- `AccountSetupModal` - Full modal with all features

### Sub-Components
- `ModalHeader` - Header with title and close button
- `ProgressStepper` - Step progress indicator
- `SecurityOptionCard` - Individual security option with toggle
- `ModalActions` - Navigation buttons (Back/Continue)

## 🚀 Basic Usage

```tsx
import React, { useState } from 'react';
import { Sun, Lock, Bell } from 'lucide-react';
import { AccountSetupModal } from '@/ui/components/onboarding';
import type { OnboardingStep, SecurityOption } from '@/ui/components/onboarding';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const [securityOptions, setSecurityOptions] = useState<SecurityOption[]>([
    {
      id: '2fa',
      title: 'Two-Factor Authentication',
      description: 'Add extra security with verification codes.',
      icon: <Sun className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'strong-password',
      title: 'Strong Password Requirements',
      description: 'Enforce complex password policies.',
      icon: <Lock className="w-5 h-5" />,
      enabled: true,
    },
    {
      id: 'login-notifications',
      title: 'Login Notifications',
      description: 'Get alerts for new login attempts.',
      icon: <Bell className="w-5 h-5" />,
      enabled: false,
    },
  ]);

  const steps: OnboardingStep[] = [
    { id: 'account', number: 1, title: 'Account', status: 'completed' },
    { id: 'security', number: 2, title: 'Security', status: 'active' },
    { id: 'preferences', number: 3, title: 'Preferences', status: 'inactive' },
    { id: 'complete', number: 4, title: 'Complete', status: 'inactive' },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsOpen(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleToggle = (id: string, enabled: boolean) => {
    setSecurityOptions((prev) =>
      prev.map((option) =>
        option.id === id ? { ...option, enabled } : option
      )
    );
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Setup</button>
      
      <AccountSetupModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        steps={steps}
        currentStep={currentStep}
        onNext={handleNext}
        onBack={handleBack}
        securityOptions={securityOptions}
        onOptionToggle={handleToggle}
      />
    </>
  );
}
```

## 📋 Props

### AccountSetupModalProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | ✅ | - | Controls modal visibility |
| `onClose` | `() => void` | ✅ | - | Handler for closing modal |
| `steps` | `OnboardingStep[]` | ✅ | - | Array of onboarding steps |
| `currentStep` | `number` | ✅ | - | Current step number (1-based) |
| `onNext` | `() => void` | ✅ | - | Handler for next button |
| `onBack` | `() => void` | ✅ | - | Handler for back button |
| `securityOptions` | `SecurityOption[]` | ✅ | - | Array of security options |
| `onOptionToggle` | `(id: string, enabled: boolean) => void` | ✅ | - | Handler for toggle changes |
| `title` | `string` | ❌ | `'Complete Your Account Setup'` | Modal header title |
| `subtitle` | `string` | ❌ | `'Set Up Your Security Preferences'` | Content section title |
| `description` | `string` | ❌ | `'Enhance your account...'` | Content description |
| `isLoading` | `boolean` | ❌ | `false` | Show loading state |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### OnboardingStep

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique step identifier |
| `number` | `number` | ✅ | Step number (display) |
| `title` | `string` | ✅ | Step label |
| `status` | `'completed' \| 'active' \| 'inactive'` | ✅ | Current status |
| `icon` | `ReactNode` | ❌ | Optional custom icon |

### SecurityOption

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | ✅ | Unique option identifier |
| `title` | `string` | ✅ | Option title |
| `description` | `string` | ✅ | Option description |
| `icon` | `ReactNode` | ✅ | Icon component |
| `enabled` | `boolean` | ✅ | Current toggle state |

## 🎨 Customization

### Custom Step Icons
```tsx
import { User, Shield, Settings, Check } from 'lucide-react';

const steps: OnboardingStep[] = [
  { 
    id: 'profile', 
    number: 1, 
    title: 'Profile', 
    status: 'completed',
    icon: <User className="w-4 h-4" />
  },
  // ... more steps
];
```

### Custom Security Options
```tsx
import { Fingerprint, Key, Smartphone } from 'lucide-react';

const customOptions: SecurityOption[] = [
  {
    id: 'biometric',
    title: 'Biometric Authentication',
    description: 'Use fingerprint or face recognition.',
    icon: <Fingerprint className="w-5 h-5" />,
    enabled: false,
  },
  // ... more options
];
```

### Async Step Transitions
```tsx
const handleNext = async () => {
  setIsLoading(true);
  try {
    await saveStepData(currentStep);
    setCurrentStep((prev) => prev + 1);
  } catch (error) {
    console.error('Failed to save:', error);
  } finally {
    setIsLoading(false);
  }
};
```

## ♿ Accessibility

### Keyboard Navigation
- **Tab**: Navigate between interactive elements
- **Shift + Tab**: Navigate backwards
- **Enter/Space**: Toggle security options
- **Escape**: Close modal

### ARIA Labels
- Modal has `role="dialog"` and `aria-modal="true"`
- Progress steps have `aria-current="step"` for active step
- Toggle switches have descriptive `aria-label` attributes
- Close button has `aria-label="Close modal"`

### Focus Management
- Focus trapped within modal when open
- First focusable element receives focus on open
- Previous focus restored on close
- Visual focus indicators on all interactive elements

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px+ (single column, stacked layout)
- **Tablet**: 640px+ (optimized spacing)
- **Desktop**: 1024px+ (full layout with side-by-side elements)

### Mobile Optimizations
- Touch-friendly toggle switches (44px minimum)
- Adequate spacing between interactive elements
- Readable text sizes (14px minimum)
- Full-width buttons on mobile

## 🎬 Examples

See `LAYOUT_EXAMPLES.tsx` for:
- 3-step onboarding flow
- Extended security options (5+ options)
- Loading state handling
- Completed state

See `USAGE_EXAMPLE.tsx` for:
- Full working implementation
- State management patterns
- Event handler examples

## 🔧 Technical Details

### Portal Rendering
Modal uses `ReactDOM.createPortal` to render outside the parent component hierarchy, ensuring proper z-index layering and preventing CSS conflicts.

### Focus Trap
Implements keyboard focus trap to keep Tab navigation within modal boundaries, following ARIA authoring practices.

### Body Scroll Lock
Prevents background scrolling when modal is open by setting `overflow: hidden` on document body.

### Gradient Border Effect
Uses Tailwind's `before:` pseudo-element utilities to create gradient border effect without additional DOM elements.

## 📚 Dependencies

- React 19
- TypeScript 5
- Tailwind CSS 3
- lucide-react (icons)

## 📄 License

Part of the Elite Component Library.  
See project LICENSE for details.

## 🤝 Contributing

Follow project constitution and AGENTS.md guidelines:
- Max 500 lines per file ✅
- TypeScript strict mode ✅
- Design system tokens only ✅
- WCAG 2.1 AA compliance ✅
- Vertical slice organization ✅

## 📖 Related Documentation

- [Type Definitions](./types.ts)
- [Usage Examples](./USAGE_EXAMPLE.tsx)
- [Layout Examples](./LAYOUT_EXAMPLES.tsx)
- [Integration Prompt](../../../uidocs/account-setup-modal-integration-prompt.md)
