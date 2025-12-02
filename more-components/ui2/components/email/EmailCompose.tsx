import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ComposeHeader } from './ComposeHeader';
import { ComposeSidebar } from './ComposeSidebar';
import { ComposeForm } from './ComposeForm';
import { EmailComposeProps, EmailDraft, ComposeSettings, EmailTemplate } from './types';

const generateId = () => `draft-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

export const EmailCompose: React.FC<EmailComposeProps> = ({
  draft: initialDraft,
  templates = [],
  recentContacts = [],
  onSend,
  onSaveDraft,
  onDiscard,
  autoSaveInterval = 2000,
}) => {
  const [draft, setDraft] = useState<EmailDraft>(
    initialDraft || {
      id: generateId(),
      to: [],
      cc: [],
      bcc: [],
      subject: '',
      body: '',
      attachments: [],
      lastSaved: undefined,
    }
  );

  const [settings, setSettings] = useState<ComposeSettings>({
    priorityHigh: draft.priority === 'high',
    readReceipt: draft.readReceipt || false,
    scheduledSend: !!draft.scheduledSend,
  });

  const [isSaving, setIsSaving] = useState(false);
  const autoSaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastDraftRef = useRef<EmailDraft>(draft);

  // Auto-save functionality with debouncing
  const triggerAutoSave = useCallback(async () => {
    if (
      draft.body.trim() ||
      draft.subject.trim() ||
      draft.to.length > 0
    ) {
      setIsSaving(true);
      try {
        await onSaveDraft({
          ...draft,
          priority: settings.priorityHigh ? 'high' : 'normal',
          readReceipt: settings.readReceipt,
          scheduledSend: settings.scheduledSend ? new Date() : undefined,
          lastSaved: new Date(),
        });
        setDraft((prev) => ({ ...prev, lastSaved: new Date() }));
      } catch (error) {
        console.error('Auto-save failed:', error);
      } finally {
        setIsSaving(false);
      }
    }
  }, [draft, settings, onSaveDraft]);

  // Debounced auto-save effect
  useEffect(() => {
    const hasChanged =
      JSON.stringify(lastDraftRef.current) !== JSON.stringify(draft);

    if (hasChanged) {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }

      autoSaveTimerRef.current = setTimeout(() => {
        triggerAutoSave();
        lastDraftRef.current = draft;
      }, autoSaveInterval);
    }

    return () => {
      if (autoSaveTimerRef.current) {
        clearTimeout(autoSaveTimerRef.current);
      }
    };
  }, [draft, autoSaveInterval, triggerAutoSave]);

  // Save draft on unmount
  useEffect(() => {
    return () => {
      if (
        draft.body.trim() ||
        draft.subject.trim() ||
        draft.to.length > 0
      ) {
        onSaveDraft(draft);
      }
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Send email: Cmd/Ctrl + Enter
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleSend();
      }
      // Save draft: Cmd/Ctrl + S
      else if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleManualSave();
      }
      // Discard: Escape
      else if (e.key === 'Escape') {
        if (window.confirm('Discard this draft?')) {
          onDiscard();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [draft, settings]);

  const handleDraftChange = (updatedDraft: EmailDraft) => {
    setDraft(updatedDraft);
  };

  const handleSend = async () => {
    if (draft.to.length === 0) {
      alert('Please add at least one recipient');
      return;
    }

    if (!draft.subject.trim()) {
      if (!window.confirm('Send email without a subject?')) {
        return;
      }
    }

    try {
      await onSend({
        ...draft,
        priority: settings.priorityHigh ? 'high' : 'normal',
        readReceipt: settings.readReceipt,
        scheduledSend: settings.scheduledSend ? new Date() : undefined,
      });
    } catch (error) {
      console.error('Send failed:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  const handleManualSave = async () => {
    await triggerAutoSave();
  };

  const handleTemplateSelect = (template: EmailTemplate) => {
    setDraft({
      ...draft,
      subject: template.subject,
      body: template.body,
    });
  };

  const handleContactAdd = (email: string) => {
    if (!draft.to.includes(email)) {
      setDraft({
        ...draft,
        to: [...draft.to, email],
      });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 px-4 md:px-6 text-sm">
      <div className="max-w-7xl mx-auto bg-zinc-800 shadow-xl rounded-xl overflow-hidden my-4 md:my-6 border border-zinc-700">
        <ComposeHeader />

        <section className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <ComposeSidebar
            lastSaved={draft.lastSaved}
            isSaving={isSaving}
            settings={settings}
            onSettingsChange={setSettings}
            onSend={handleSend}
            onSaveDraft={handleManualSave}
            onDiscard={onDiscard}
            templates={templates}
            onTemplateSelect={handleTemplateSelect}
            recentContacts={recentContacts}
            onContactAdd={handleContactAdd}
          />

          <ComposeForm
            draft={draft}
            onDraftChange={handleDraftChange}
            onSubmit={handleSend}
            onSaveDraft={handleManualSave}
            recentContacts={recentContacts}
            lastSaved={draft.lastSaved}
          />
        </section>
      </div>
    </div>
  );
};
