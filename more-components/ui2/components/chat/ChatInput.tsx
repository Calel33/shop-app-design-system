import { useState, FormEvent, KeyboardEvent } from 'react';
import { Send } from 'lucide-react';
import type { ChatInputProps } from '../types/chat.types';

/**
 * ChatInput Component
 * 
 * Input form for sending chat messages.
 * Features Enter key support, auto-clear, and glassmorphic styling.
 */
export function ChatInput({ 
  onSendMessage, 
  placeholder = 'Type your message…',
  disabled = false,
  clearOnSend = true
}: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    
    if (trimmedMessage && !disabled) {
      onSendMessage(trimmedMessage);
      if (clearOnSend) {
        setMessage('');
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <form className="flex items-center gap-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="flex-grow rounded-xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 px-4 py-2 text-sm font-medium text-white/80 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      />
      <button
        type="submit"
        disabled={disabled || !message.trim()}
        className="flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-600 transition focus:outline-none focus:ring-2 focus:ring-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-500"
        aria-label="Send message"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
