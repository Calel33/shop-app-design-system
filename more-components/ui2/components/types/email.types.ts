// Email Compose Interface Type Definitions

export interface EmailAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url?: string;
}

export interface EmailDraft {
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

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  subject: string;
  body: string;
  category: string;
}

export interface RecentContact {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials?: string;
  colorClass?: string;
}

export interface ComposeSettings {
  priorityHigh: boolean;
  readReceipt: boolean;
  scheduledSend: boolean;
}

export interface EmailComposeProps {
  draft?: EmailDraft;
  templates?: EmailTemplate[];
  recentContacts?: RecentContact[];
  onSend: (draft: EmailDraft) => Promise<void>;
  onSaveDraft: (draft: EmailDraft) => Promise<void>;
  onDiscard: () => void;
  autoSaveInterval?: number;
}

export interface RecipientInputProps {
  label: string;
  value: string[];
  onChange: (value: string[]) => void;
  placeholder: string;
  contacts?: RecentContact[];
}

export interface FormatToolbarProps {
  onFormat: (command: FormatCommand) => void;
}

export type FormatCommand =
  | 'bold'
  | 'italic'
  | 'code'
  | 'align-left'
  | 'align-center'
  | 'align-right'
  | 'link'
  | 'attachment';

export interface AttachmentZoneProps {
  attachments: EmailAttachment[];
  onAdd: (files: File[]) => void;
  onRemove: (id: string) => void;
  maxSize?: number;
}

export interface AutoSaveIndicatorProps {
  lastSaved?: Date;
  isSaving: boolean;
}
