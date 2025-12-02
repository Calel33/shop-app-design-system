# Glass Chat Support Card Components

Glassmorphic chat interface components with message management, auto-scroll, and form handling.

## Components

### GlassChatCard

Main container component that combines header, messages, and input into a complete chat interface.

**Features:**
- Glassmorphic design with backdrop blur
- Auto-scroll to latest messages
- Message state management
- Responsive layout
- Hover animations

**Usage:**

```tsx
import { GlassChatCard } from '@/ui/components/chat';

function App() {
  const handleSendMessage = (message: string) => {
    console.log('User sent:', message);
    // Handle message (e.g., send to API)
  };

  return (
    <GlassChatCard
      header={{ 
        title: 'Round-the-Clock Chat Support',
        subtitle: 'Nova Assist'
      }}
      initialMessages={[
        {
          id: '1',
          content: 'Hello! How can I help you today?',
          sender: 'support',
          timestamp: new Date()
        }
      ]}
      onSendMessage={handleSendMessage}
      autoScroll={true}
      maxHeight="300px"
    />
  );
}
```

### ChatHeader

Header section with icon and title.

```tsx
import { ChatHeader } from '@/ui/components/chat';
import { MessageCircle } from 'lucide-react';

<ChatHeader 
  title="Customer Support"
  subtitle="Online Now"
  icon={<MessageCircle className="h-5 w-5" />}
/>
```

### ChatMessages

Scrollable message container with auto-scroll support.

```tsx
import { ChatMessages } from '@/ui/components/chat';

<ChatMessages
  messages={messages}
  maxHeight="400px"
  autoScroll={true}
/>
```

### ChatMessage

Individual message bubble component.

```tsx
import { ChatMessage } from '@/ui/components/chat';

<ChatMessage
  message={{
    id: '1',
    content: 'Hello!',
    sender: 'user',
    timestamp: new Date()
  }}
/>
```

### ChatInput

Input form with send button.

```tsx
import { ChatInput } from '@/ui/components/chat';

<ChatInput
  onSendMessage={(msg) => console.log(msg)}
  placeholder="Type your message…"
  disabled={false}
  clearOnSend={true}
/>
```

## Props

### GlassChatCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `header` | `ChatHeaderProps` | required | Header configuration |
| `onSendMessage` | `(message: string) => void` | required | Message send callback |
| `initialMessages` | `ChatMessage[]` | `[]` | Initial messages to display |
| `autoScroll` | `boolean` | `true` | Auto-scroll to latest message |
| `maxHeight` | `string` | `'300px'` | Max height for message area |
| `className` | `string` | `''` | Additional CSS classes |

### ChatMessage Type

```typescript
interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'support';
  timestamp: Date;
}
```

## Styling

Components use Tailwind CSS with glassmorphism utilities:
- `backdrop-blur-xl` - Backdrop blur effect
- `bg-white/10` - Semi-transparent backgrounds
- `ring-white/20` - Subtle borders
- `emerald-500` - Accent color for user messages

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support (Enter to send)
- Focus management
- Disabled states

## Examples

### Basic Chat

```tsx
<GlassChatCard
  header={{ title: 'Support Chat' }}
  onSendMessage={(msg) => console.log(msg)}
/>
```

### With Custom Icon

```tsx
import { Headphones } from 'lucide-react';

<GlassChatCard
  header={{ 
    title: 'Live Support',
    icon: <Headphones className="h-5 w-5" />
  }}
  onSendMessage={handleMessage}
/>
```

### With Initial Messages

```tsx
const initialMessages = [
  {
    id: '1',
    content: 'Welcome! How can we help?',
    sender: 'support',
    timestamp: new Date()
  },
  {
    id: '2',
    content: 'I have a question about my order',
    sender: 'user',
    timestamp: new Date()
  }
];

<GlassChatCard
  header={{ title: 'Order Support' }}
  initialMessages={initialMessages}
  onSendMessage={handleMessage}
/>
```

### Custom Height

```tsx
<GlassChatCard
  header={{ title: 'Extended Chat' }}
  maxHeight="500px"
  onSendMessage={handleMessage}
/>
```

## Integration Notes

- Requires React 18+
- Uses Lucide React icons
- Tailwind CSS 3+ required
- TypeScript support included
- No external state management needed (internal state management)

## Design System Integration

Components follow project design tokens:
- Colors from design system
- Consistent spacing
- Typography hierarchy
- Glassmorphic patterns

## Browser Support

- Modern browsers with backdrop-filter support
- Fallback styles for older browsers
- Mobile-responsive design
