# Glassmorphic Sign-In Card

An animated, dark-themed sign-in component with glassmorphic effects, rotating blur backgrounds, and comprehensive form validation.

## 🎨 Features

- ✅ **Glassmorphic Design**: Layered blur effects with gradient borders
- ✅ **Animated Background**: Dual-layer rotating blur (10s and 18s cycles)
- ✅ **Form Validation**: Client-side email and password validation
- ✅ **Password Toggle**: Show/hide password visibility
- ✅ **Remember Me**: Custom styled checkbox
- ✅ **OAuth Support**: Configurable OAuth provider buttons
- ✅ **Loading States**: Disabled form with spinner during submission
- ✅ **Error Handling**: Display validation and server errors
- ✅ **Keyboard Navigation**: Full keyboard support with Tab and Enter
- ✅ **Accessibility**: WCAG 2.1 AA compliant with ARIA labels
- ✅ **Responsive**: Mobile-first design (375px+)
- ✅ **Hover Effects**: Card lift, ring enhancement, shadow

## 📦 Components

### Main Component
- `GlasmorphicSignIn` - Complete sign-in card with all features

### Sub-Components
- `AnimatedBackground` - Rotating blur gradients
- `FormField` - Reusable input field with icons
- `CustomCheckbox` - Styled checkbox
- `DividerWithText` - OR divider

## 🚀 Basic Usage

```tsx
import React, { useState } from 'react';
import { GlasmorphicSignIn } from '@/ui/components/auth';
import type { SignInFormData } from '@/ui/components/auth';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    try {
      // Your authentication logic here
      await signIn(data.email, data.password, data.remember);
      console.log('Signed in successfully!');
    } catch (error) {
      console.error('Sign in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuth = async (provider: string) => {
    console.log('OAuth with:', provider);
    // Your OAuth logic here
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <GlasmorphicSignIn
          onSubmit={handleSubmit}
          onOAuthSignIn={handleOAuth}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
```

## 📋 Props

### GlasmorphicSignInProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `onSubmit` | `(data: SignInFormData) => void \| Promise<void>` | ✅ | - | Form submission handler |
| `onOAuthSignIn` | `(provider: string) => void \| Promise<void>` | ❌ | - | OAuth provider handler |
| `onForgotPassword` | `() => void` | ❌ | - | Forgot password handler |
| `onSignUp` | `() => void` | ❌ | - | Sign up link handler |
| `isLoading` | `boolean` | ❌ | `false` | Loading state |
| `error` | `FormFieldError \| null` | ❌ | `null` | External error to display |
| `title` | `string` | ❌ | `'Sign in'` | Card title |
| `subtitle` | `string` | ❌ | `'Use your email...'` | Card subtitle |
| `secureIndicator` | `boolean` | ❌ | `true` | Show "Secure area" badge |
| `showOAuth` | `boolean` | ❌ | `true` | Display OAuth section |
| `oauthProviders` | `OAuthProvider[]` | ❌ | `[GitHub]` | OAuth provider buttons |
| `showFooter` | `boolean` | ❌ | `true` | Display footer links |
| `className` | `string` | ❌ | `''` | Additional CSS classes |

### SignInFormData

```tsx
interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}
```

### FormFieldError

```tsx
interface FormFieldError {
  field: 'email' | 'password' | 'general';
  message: string;
}
```

## 🎨 Customization

### Custom OAuth Providers
```tsx
import { Github, Chrome, Apple } from 'lucide-react';

const providers = [
  { id: 'github', name: 'GitHub', icon: <Github className="h-4 w-4" /> },
  { id: 'google', name: 'Google', icon: <Chrome className="h-4 w-4" /> },
  { id: 'apple', name: 'Apple', icon: <Apple className="h-4 w-4" /> },
];

<GlasmorphicSignIn
  onSubmit={handleSubmit}
  oauthProviders={providers}
/>
```

### Without OAuth
```tsx
<GlasmorphicSignIn
  onSubmit={handleSubmit}
  showOAuth={false}
/>
```

### Custom Text
```tsx
<GlasmorphicSignIn
  onSubmit={handleSubmit}
  title="Welcome Back"
  subtitle="Sign in to your account to continue."
  secureIndicator={false}
/>
```

### With Error Handling
```tsx
const [error, setError] = useState<FormFieldError | null>(null);

const handleSubmit = async (data: SignInFormData) => {
  try {
    await api.signIn(data);
  } catch (err) {
    setError({
      field: 'general',
      message: 'Invalid credentials. Please try again.',
    });
  }
};

<GlasmorphicSignIn
  onSubmit={handleSubmit}
  error={error}
/>
```

## 🎬 Animations

### Rotating Blur Background
- **Primary Layer**: 10-second clockwise rotation
- **Secondary Layer**: 18-second counter-clockwise rotation
- **Effect**: Creates dynamic, ethereal backdrop

### Hover Effects
- Card lifts up: `-translate-y-0.5`
- Ring enhances: `ring-gray-400/30`
- Shadow appears: `shadow-[0_10px_40px_-10px_rgba(107,114,128,0.4)]`
- Gradient border opacity increases

### Transitions
- All transitions: `duration-300` ease timing
- Button hover: Gradient shift and shadow enhancement
- Input focus: Ring expansion (ring-1 → ring-2)

## ♿ Accessibility

### Keyboard Support
- **Tab**: Navigate through fields
- **Enter**: Submit form
- **Space**: Toggle checkbox
- **Escape**: Clear focus (standard browser behavior)

### ARIA Labels
- Form fields have proper labels
- Password toggle has descriptive aria-label
- Required fields marked with `*` and `aria-required`
- Errors announced with `role="alert"`
- Checkbox has hidden input with sr-only class

### Focus States
- All interactive elements have visible focus rings
- Focus colors: `focus-visible:outline-gray-400/60`
- Focus offset for better visibility

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Base (375px+)
- **Tablet**: sm: (640px+) - Increased padding
- **Desktop**: lg: (1024px+) - Maximum padding

### Mobile Optimizations
- Touch-friendly targets (44px+)
- Stacked footer layout on mobile
- Adequate spacing between elements
- Readable text sizes

## 🔒 Form Validation

### Email Validation
- Required field check
- Valid email format (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Real-time validation on blur

### Password Validation
- Required field check
- Minimum 8 characters
- Real-time validation on blur

### Validation Timing
- **On Blur**: Validate when user leaves field
- **On Change**: Clear error when user types
- **On Submit**: Validate all fields before submission

## 🎯 Integration Examples

### With React Router
```tsx
import { useNavigate } from 'react-router-dom';

function SignInPage() {
  const navigate = useNavigate();

  const handleSubmit = async (data: SignInFormData) => {
    await signIn(data);
    navigate('/dashboard');
  };

  return <GlasmorphicSignIn onSubmit={handleSubmit} />;
}
```

### With Next.js
```tsx
'use client';
import { useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = async (data: SignInFormData) => {
    await signIn(data);
    router.push('/dashboard');
  };

  return <GlasmorphicSignIn onSubmit={handleSubmit} />;
}
```

### With Firebase
```tsx
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, githubProvider } from './firebase';

function SignInPage() {
  const handleSubmit = async (data: SignInFormData) => {
    await signInWithEmailAndPassword(auth, data.email, data.password);
  };

  const handleOAuth = async (provider: string) => {
    if (provider === 'github') {
      await signInWithPopup(auth, githubProvider);
    }
  };

  return (
    <GlasmorphicSignIn
      onSubmit={handleSubmit}
      onOAuthSignIn={handleOAuth}
    />
  );
}
```

## 🔧 Technical Details

### Radial Gradient Background
Uses inline styles for complex radial gradients:
- 6-layer radial gradient overlay
- Positioned at strategic points (88%, 49%, 14%, etc.)
- HSL color space for smooth gradients
- 85% transparency for subtle effect

### Animated Blur Layers
- Primary: `animate-spin` with `[animation-duration:10s]`
- Secondary: `[animation-direction:reverse]` for counter-rotation
- Positioned outside card bounds (`-inset-10`, `-inset-20`)
- Pointer events disabled to prevent interaction

### Gradient Border
Uses pseudo-element technique:
- `before:` pseudo-element with gradient
- Positioned absolutely with `-1px` inset
- Opacity transitions on hover
- `z-index: -1` to sit behind content

## 📚 Dependencies

- React 19 ✅
- TypeScript 5 ✅
- Tailwind CSS 3 ✅
- lucide-react ✅

## 📄 License

Part of the Elite Component Library.

## 🤝 Contributing

Follow project guidelines:
- Max 500 lines per file ✅
- TypeScript strict mode ✅
- Design system tokens ✅
- WCAG 2.1 AA compliance ✅

## 📖 Related

- [Type Definitions](./types.ts)
- [Usage Examples](./USAGE_EXAMPLE.tsx)
- [Layout Examples](./LAYOUT_EXAMPLES.tsx)
- [Integration Prompt](../../../uidocs/glassmorphic-signin-integration-prompt.md)
