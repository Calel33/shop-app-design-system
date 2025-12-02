# Email Compose Interface

Production-ready email composition interface with dark theme, auto-save, rich text formatting, and comprehensive features.

## Features

- ✅ **Dark Theme** - Glassmorphic design with zinc-800/900 backgrounds
- ✅ **Auto-Save** - Debounced auto-save with visual indicators (2s default)
- ✅ **Rich Text Formatting** - Bold, Italic, Code, Alignment, Links, Attachments
- ✅ **Recipient Management** - To/CC/BCC with autocomplete from contacts
- ✅ **File Attachments** - Drag-and-drop file upload with size validation
- ✅ **Email Templates** - Pre-defined templates for common scenarios
- ✅ **Recent Contacts** - Quick-add from recent contacts
- ✅ **Email Settings** - Priority, read receipt, scheduled send
- ✅ **Keyboard Shortcuts** - ⌘+Enter to send, ⌘+S to save, Escape to discard
- ✅ **Responsive Design** - Mobile, tablet, and desktop layouts
- ✅ **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation

## Installation

The email component is part of the `project-componets` library. Install the dependencies:

```bash
npm install lucide-react
```

## Usage

### Basic Usage

```typescript
import { EmailCompose } from '@/ui/components/email';
import type { EmailDraft, EmailTemplate, RecentContact } from '@/ui/components/email';

function EmailPage() {
  const templates: EmailTemplate[] = [
    {
      id: '1',
      name: 'Meeting Request',
      description: 'Schedule meetings efficiently',
      subject: 'Meeting Request: [Topic]',
      body: 'Hi [Name],\n\nI would like to schedule a meeting to discuss...',
      category: 'business',
    },
  ];

  const contacts: RecentContact[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@company.com',
      initials: 'JS',
      colorClass: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
  ];

  const handleSend = async (draft: EmailDraft) => {
    console.log('Sending email:', draft);
    // Send email via API
    await fetch('/api/send-email', {
      method: 'POST',
      body: JSON.stringify(draft),
    });
  };

  const handleSaveDraft = async (draft: EmailDraft) => {
    console.log('Saving draft:', draft);
    // Save draft to database
    await fetch('/api/save-draft', {
      method: 'POST',
      body: JSON.stringify(draft),
    });
  };

  const handleDiscard = () => {
    console.log('Discarding draft');
    // Navigate away or clear form
    window.location.href = '/inbox';
  };

  return (
    <EmailCompose
      templates={templates}
      recentContacts={contacts}
      onSend={handleSend}
      onSaveDraft={handleSaveDraft}
      onDiscard={handleDiscard}
      autoSaveInterval={2000}
    />
  );
}
```

### With Existing Draft

```typescript
const existingDraft: EmailDraft = {
  id: 'draft-123',
  to: ['recipient@example.com'],
  cc: [],
  bcc: [],
  subject: 'Follow-up on our meeting',
  body: 'Thanks for taking the time to meet...',
  attachments: [],
  priority: 'high',
  readReceipt: true,
  lastSaved: new Date(Date.now() - 120000), // 2 minutes ago
};

<EmailCompose
  draft={existingDraft}
  templates={templates}
  recentContacts={contacts}
  onSend={handleSend}
  onSaveDraft={handleSaveDraft}
  onDiscard={handleDiscard}
/>
```

## Component Architecture

```
EmailCompose (Main Container)
├── ComposeHeader (Navigation)
├── ComposeSidebar (Left sidebar)
│   ├── AutoSaveIndicator
│   ├── Quick Actions (Send, Draft, Delete)
│   ├── Email Settings (Priority, Receipt, Schedule)
│   ├── TemplateSelector
│   └── ContactQuickAdd
└── ComposeForm (Main content)
    ├── RecipientInput (To/CC/BCC)
    ├── Subject Input
    ├── FormatToolbar
    ├── Message Textarea
    └── AttachmentZone
```

## Props

### EmailComposeProps

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `draft` | `EmailDraft` | No | `undefined` | Existing draft to edit |
| `templates` | `EmailTemplate[]` | No | `[]` | Available email templates |
| `recentContacts` | `RecentContact[]` | No | `[]` | Recent contacts for autocomplete |
| `onSend` | `(draft: EmailDraft) => Promise<void>` | Yes | - | Handler for sending email |
| `onSaveDraft` | `(draft: EmailDraft) => Promise<void>` | Yes | - | Handler for saving draft |
| `onDiscard` | `() => void` | Yes | - | Handler for discarding draft |
| `autoSaveInterval` | `number` | No | `2000` | Auto-save interval in milliseconds |

## Type Definitions

### EmailDraft

```typescript
interface EmailDraft {
  id: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  body: string;
  attachments: EmailAttachment[];
  priority?: 'high' | 'normal' | 'low';
  readReceipt?: boolean;
  scheduledSend?: Date;
  lastSaved?: Date;
}
```

### EmailTemplate

```typescript
interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  body: string;
  category: string;
}
```

### RecentContact

```typescript
interface RecentContact {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  colorClass?: string;
}
```

## Keyboard Shortcuts

- `⌘/Ctrl + Enter` - Send email
- `⌘/Ctrl + S` - Save draft manually
- `⌘/Ctrl + K` - Focus link toolbar button
- `⌘/Ctrl + B` - Bold text (formatting)
- `⌘/Ctrl + I` - Italic text (formatting)
- `Escape` - Discard draft (with confirmation)
- `Tab` - Navigate between fields
- `Backspace` (in empty recipient input) - Remove last recipient

## Auto-Save Behavior

- Triggers 2 seconds after last keystroke (configurable)
- Only saves non-empty drafts (subject, body, or recipients)
- Shows visual indicator: green dot = saved, yellow pulsing = saving
- Displays "Saved X minutes ago" timestamp
- Automatically saves on component unmount

## File Attachments

- Drag-and-drop support
- File browser fallback
- Default max size: 10MB (configurable)
- Shows file name and size
- Remove button for each attachment
- Size validation with user feedback

## Recipient Autocomplete

- Searches by name or email
- Live filtering as you type
- Click to add from suggestions
- Shows avatar/initials and color
- Supports To, CC, and BCC fields
- Tag-style display with remove buttons

## Responsive Behavior

### Mobile (<768px)
- Single column layout
- Sidebar collapses (could be modal)
- Simplified toolbar
- Stack form fields vertically

### Tablet (768px-1024px)
- Two-column layout
- Collapsible sidebar
- Full toolbar visible

### Desktop (>1024px)
- Three-column layout
- Persistent sidebar
- Full feature set

## Accessibility

- ✅ Semantic HTML (form, label, button, textarea)
- ✅ Proper form labels and ARIA attributes
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements
- ✅ Screen reader announcements for auto-save
- ✅ Error messages associated with form fields
- ✅ Auto-focus first input on mount
- ✅ Escape key to cancel/close

## Styling

Uses Tailwind CSS with design system tokens:

- **Background**: `zinc-900` (page), `zinc-800` (card)
- **Text**: `white`, `zinc-300`, `zinc-400`
- **Primary**: `indigo-600` (formerly flux purple)
- **Borders**: `zinc-700`, `zinc-600`
- **Inputs**: `zinc-700` background, `zinc-600` border

## Advanced Usage

### Customizing Auto-Save Interval

```typescript
<EmailCompose
  autoSaveInterval={5000} // 5 seconds
  onSend={handleSend}
  onSaveDraft={handleSaveDraft}
  onDiscard={handleDiscard}
/>
```

### Using Individual Components

```typescript
import { RecipientInput, FormatToolbar, AttachmentZone } from '@/ui/components/email';

// Use components individually in custom forms
<RecipientInput
  label="To:"
  value={recipients}
  onChange={setRecipients}
  placeholder="Enter emails..."
  contacts={contacts}
/>
```

## Integration with Backend

### Sending Email

```typescript
const handleSend = async (draft: EmailDraft) => {
  try {
    const response = await fetch('/api/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: draft.to,
        cc: draft.cc,
        bcc: draft.bcc,
        subject: draft.subject,
        body: draft.body,
        attachments: draft.attachments,
        priority: draft.priority,
        readReceipt: draft.readReceipt,
      }),
    });

    if (!response.ok) throw new Error('Failed to send');
    
    // Show success message and redirect
    alert('Email sent successfully!');
    window.location.href = '/inbox';
  } catch (error) {
    console.error('Send error:', error);
    alert('Failed to send email. Please try again.');
  }
};
```

### Saving Draft

```typescript
const handleSaveDraft = async (draft: EmailDraft) => {
  try {
    await fetch('/api/email/drafts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draft),
    });
    console.log('Draft saved');
  } catch (error) {
    console.error('Save error:', error);
  }
};
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires ES6+ support
- Uses modern CSS (flexbox, grid)

## Performance

- Debounced auto-save prevents excessive API calls
- Controlled inputs with React state
- Minimal re-renders with proper memoization
- Efficient file handling with FileReader API

## Future Enhancements

- [ ] Rich text editor (TipTap, Slate, or similar)
- [ ] Emoji picker
- [ ] Markdown support
- [ ] Signature insertion
- [ ] Email scheduling calendar picker
- [ ] Contact search API integration
- [ ] Attachment preview
- [ ] Inline image embedding
- [ ] Spell check
- [ ] Word count

## Related Components

- See `ui/components/types/email.types.ts` for full type definitions
- Part of the project-componets library

## License

Part of project-componets library
