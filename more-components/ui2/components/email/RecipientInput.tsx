import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { RecipientInputProps } from './types';

export const RecipientInput: React.FC<RecipientInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  contacts = [],
}) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<typeof contacts>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputValue.length > 0) {
      const filtered = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(inputValue.toLowerCase()) ||
          contact.email.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, contacts]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addRecipient(inputValue.trim());
    } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
      removeRecipient(value[value.length - 1]);
    }
  };

  const addRecipient = (email: string) => {
    if (!value.includes(email)) {
      onChange([...value, email]);
      setInputValue('');
      setShowSuggestions(false);
    }
  };

  const removeRecipient = (email: string) => {
    onChange(value.filter((v) => v !== email));
  };

  const handleSuggestionClick = (email: string) => {
    addRecipient(email);
  };

  return (
    <div className="flex items-start space-x-3 relative">
      <label className="w-12 text-xs font-medium text-zinc-300 pt-2">{label}</label>
      <div className="flex-1">
        <div className="flex flex-wrap gap-1.5 px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
          {value.map((email) => (
            <span
              key={email}
              className="inline-flex items-center gap-1 px-2 py-0.5 bg-zinc-600 text-white text-xs rounded-md"
            >
              {email}
              <button
                type="button"
                onClick={() => removeRecipient(email)}
                className="hover:text-red-400 transition-colors"
                aria-label={`Remove ${email}`}
              >
                <X size={12} />
              </button>
            </span>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder={value.length === 0 ? placeholder : ''}
            className="flex-1 min-w-[120px] bg-transparent text-sm text-white placeholder-zinc-400 focus:outline-none"
          />
        </div>
        
        {showSuggestions && (
          <div className="absolute z-10 mt-1 w-full max-w-md bg-zinc-800 border border-zinc-600 rounded-md shadow-lg">
            {suggestions.map((contact) => (
              <button
                key={contact.id}
                type="button"
                onClick={() => handleSuggestionClick(contact.email)}
                className="w-full text-left px-3 py-2 hover:bg-zinc-700 transition-colors flex items-center space-x-2"
              >
                <div
                  className={`w-6 h-6 ${contact.colorClass || 'bg-gradient-to-br from-blue-400 to-blue-600'} rounded-full flex items-center justify-center text-white text-xs font-medium`}
                >
                  {contact.initials || contact.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-zinc-200 truncate">{contact.name}</p>
                  <p className="text-xs text-zinc-400 truncate">{contact.email}</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
