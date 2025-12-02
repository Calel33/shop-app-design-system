import React from 'react';
import { Send, Briefcase, Trash2 } from 'lucide-react';
import { AutoSaveIndicator } from './AutoSaveIndicator';
import { TemplateSelector } from './TemplateSelector';
import { ContactQuickAdd } from './ContactQuickAdd';
import { ComposeSettings, EmailTemplate, RecentContact } from './types';

interface ComposeSidebarProps {
  lastSaved?: Date;
  isSaving: boolean;
  settings: ComposeSettings;
  onSettingsChange: (settings: ComposeSettings) => void;
  onSend: () => void;
  onSaveDraft: () => void;
  onDiscard: () => void;
  templates: EmailTemplate[];
  onTemplateSelect: (template: EmailTemplate) => void;
  recentContacts: RecentContact[];
  onContactAdd: (email: string) => void;
}

export const ComposeSidebar: React.FC<ComposeSidebarProps> = ({
  lastSaved,
  isSaving,
  settings,
  onSettingsChange,
  onSend,
  onSaveDraft,
  onDiscard,
  templates,
  onTemplateSelect,
  recentContacts,
  onContactAdd,
}) => {
  const handleSettingToggle = (key: keyof ComposeSettings) => {
    onSettingsChange({
      ...settings,
      [key]: !settings[key],
    });
  };

  return (
    <aside className="col-span-1 lg:col-span-3 p-4 lg:p-6 lg:border-r lg:border-zinc-700 bg-gradient-to-b from-zinc-800/30 to-zinc-800/50">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm font-semibold text-white">Compose</h2>
        <AutoSaveIndicator lastSaved={lastSaved} isSaving={isSaving} />
      </div>

      {/* Quick Actions */}
      <div className="space-y-2 mb-6">
        <button
          type="button"
          onClick={onSend}
          className="w-full flex items-center space-x-2 px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors text-xs font-medium"
        >
          <Send size={14} />
          <span>Send Email</span>
          <div className="ml-auto text-xs opacity-60">⌘↵</div>
        </button>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onSaveDraft}
            className="flex items-center justify-center space-x-1 px-2 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs"
          >
            <Briefcase size={12} />
            <span>Draft</span>
          </button>
          <button
            type="button"
            onClick={onDiscard}
            className="flex items-center justify-center space-x-1 px-2 py-1.5 border border-zinc-600 text-zinc-300 rounded-md hover:bg-zinc-700 transition-colors text-xs"
          >
            <Trash2 size={12} />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Email Settings */}
      <div className="space-y-3 mb-6">
        <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
          Settings
        </h3>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
            <span>Priority: High</span>
            <input
              type="checkbox"
              checked={settings.priorityHigh}
              onChange={() => handleSettingToggle('priorityHigh')}
              className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-indigo-600 focus:ring-indigo-500 focus:ring-1"
            />
          </label>
          <label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
            <span>Read receipt</span>
            <input
              type="checkbox"
              checked={settings.readReceipt}
              onChange={() => handleSettingToggle('readReceipt')}
              className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-indigo-600 focus:ring-indigo-500 focus:ring-1"
            />
          </label>
          <label className="flex items-center justify-between text-xs text-zinc-300 cursor-pointer">
            <span>Schedule send</span>
            <input
              type="checkbox"
              checked={settings.scheduledSend}
              onChange={() => handleSettingToggle('scheduledSend')}
              className="w-3 h-3 rounded border-zinc-600 bg-zinc-700 text-indigo-600 focus:ring-indigo-500 focus:ring-1"
            />
          </label>
        </div>
      </div>

      {/* Templates */}
      <div className="mb-6">
        <TemplateSelector templates={templates} onSelect={onTemplateSelect} />
      </div>

      {/* Recent Contacts */}
      <div>
        <ContactQuickAdd contacts={recentContacts} onAdd={onContactAdd} />
      </div>
    </aside>
  );
};
