import React, { useRef } from 'react';
import { Clock } from 'lucide-react';
import { RecipientInput } from './RecipientInput';
import { FormatToolbar } from './FormatToolbar';
import { AttachmentZone } from './AttachmentZone';
import { EmailDraft, EmailAttachment, RecentContact, FormatCommand } from './types';

interface ComposeFormProps {
  draft: EmailDraft;
  onDraftChange: (draft: EmailDraft) => void;
  onSubmit: () => void;
  onSaveDraft: () => void;
  recentContacts: RecentContact[];
  lastSaved?: Date;
}

export const ComposeForm: React.FC<ComposeFormProps> = ({
  draft,
  onDraftChange,
  onSubmit,
  onSaveDraft,
  recentContacts,
  lastSaved,
}) => {
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const handleRecipientChange = (field: 'to' | 'cc' | 'bcc', value: string[]) => {
    onDraftChange({
      ...draft,
      [field]: value,
    });
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDraftChange({
      ...draft,
      subject: e.target.value,
    });
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onDraftChange({
      ...draft,
      body: e.target.value,
    });
  };

  const handleFormat = (command: FormatCommand) => {
    // In a real implementation, this would apply formatting to the selected text
    // For now, we'll just log the command
    console.log('Format command:', command);
    
    if (command === 'attachment' && bodyRef.current) {
      // Focus the textarea when attachment button is clicked
      bodyRef.current.focus();
    }
  };

  const handleFilesAdd = (files: File[]) => {
    const newAttachments: EmailAttachment[] = files.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    onDraftChange({
      ...draft,
      attachments: [...draft.attachments, ...newAttachments],
    });
  };

  const handleAttachmentRemove = (id: string) => {
    onDraftChange({
      ...draft,
      attachments: draft.attachments.filter((a) => a.id !== id),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const getCharCount = () => {
    return draft.body.length + draft.subject.length;
  };

  const getTimeAgo = (date?: Date): string => {
    if (!date) return 'Not saved';
    
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    
    if (seconds < 60) return 'Just now';
    if (seconds < 120) return '1 minute ago';
    if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
    return `${Math.floor(seconds / 3600)} hours ago`;
  };

  return (
    <main className="col-span-1 lg:col-span-9 p-4 lg:p-8 space-y-5">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-white">New Message</h1>
        <div className="flex items-center space-x-1.5 text-xs text-zinc-400">
          <Clock size={12} />
          <span>Auto-saved {getTimeAgo(lastSaved)}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipients */}
        <div className="space-y-3">
          <RecipientInput
            label="To:"
            value={draft.to}
            onChange={(value) => handleRecipientChange('to', value)}
            placeholder="Enter recipient emails..."
            contacts={recentContacts}
          />

          <RecipientInput
            label="CC:"
            value={draft.cc || []}
            onChange={(value) => handleRecipientChange('cc', value)}
            placeholder="Carbon copy recipients..."
            contacts={recentContacts}
          />

          <RecipientInput
            label="BCC:"
            value={draft.bcc || []}
            onChange={(value) => handleRecipientChange('bcc', value)}
            placeholder="Blind carbon copy recipients..."
            contacts={recentContacts}
          />
        </div>

        {/* Subject */}
        <div className="flex items-center space-x-3">
          <label className="w-12 text-xs font-medium text-zinc-300">Subject:</label>
          <input
            type="text"
            value={draft.subject}
            onChange={handleSubjectChange}
            placeholder="Enter email subject..."
            className="flex-1 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        {/* Formatting Toolbar */}
        <FormatToolbar onFormat={handleFormat} />

        {/* Message Body */}
        <div className="space-y-2">
          <label className="block text-xs font-medium text-zinc-300">Message:</label>
          <textarea
            ref={bodyRef}
            rows={10}
            value={draft.body}
            onChange={handleBodyChange}
            placeholder="Write your email message here..."
            className="w-full px-3 py-3 bg-zinc-700 border border-zinc-600 rounded-md text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-y"
          />
        </div>

        {/* Attachments */}
        <AttachmentZone
          attachments={draft.attachments}
          onAdd={handleFilesAdd}
          onRemove={handleAttachmentRemove}
        />

        {/* Send Options */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-600">
          <div className="flex items-center space-x-3 text-xs text-zinc-400">
            <span>Draft saved • {getCharCount()} chars</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              type="button"
              onClick={onSaveDraft}
              className="px-3 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium text-xs"
            >
              Send Email
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};
