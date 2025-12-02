// Main Email Compose component
export { EmailCompose } from './EmailCompose';

// Sub-components (for advanced usage)
export { AutoSaveIndicator } from './AutoSaveIndicator';
export { FormatToolbar } from './FormatToolbar';
export { RecipientInput } from './RecipientInput';
export { AttachmentZone } from './AttachmentZone';
export { ComposeHeader } from './ComposeHeader';
export { TemplateSelector } from './TemplateSelector';
export { ContactQuickAdd } from './ContactQuickAdd';
export { ComposeSidebar } from './ComposeSidebar';
export { ComposeForm } from './ComposeForm';

// Export all types
export type {
  EmailAttachment,
  EmailDraft,
  EmailTemplate,
  RecentContact,
  ComposeSettings,
  EmailComposeProps,
  RecipientInputProps,
  FormatToolbarProps,
  FormatCommand,
  AttachmentZoneProps,
  AutoSaveIndicatorProps,
} from './types';
