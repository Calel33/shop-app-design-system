import React from 'react';
import { Plus } from 'lucide-react';
import { RecentContact } from './types';

interface ContactQuickAddProps {
  contacts: RecentContact[];
  onAdd: (email: string) => void;
}

export const ContactQuickAdd: React.FC<ContactQuickAddProps> = ({
  contacts,
  onAdd,
}) => {
  if (contacts.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-zinc-500 text-xs">No recent contacts</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
        Recent Contacts
      </h3>
      <div className="space-y-1">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            type="button"
            onClick={() => onAdd(contact.email)}
            className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group"
          >
            <div className="flex items-center space-x-2">
              <div
                className={`w-5 h-5 ${
                  contact.colorClass || 'bg-gradient-to-br from-blue-400 to-blue-600'
                } rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}
              >
                {contact.initials || contact.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-zinc-200 truncate">
                  {contact.name}
                </p>
                <p className="text-xs text-zinc-400 truncate">{contact.email}</p>
              </div>
              <Plus
                size={10}
                className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
