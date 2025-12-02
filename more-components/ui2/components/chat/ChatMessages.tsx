import { useEffect, useRef } from 'react';
import type { ChatMessagesProps } from '../types/chat.types';
import { ChatMessage } from './ChatMessage';

/**
 * ChatMessages Component
 * 
 * Scrollable container for chat messages with auto-scroll support.
 * Features glassmorphic styling and smooth scroll behavior.
 */
export function ChatMessages({ 
  messages, 
  maxHeight = '300px',
  autoScroll = true 
}: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end'
      });
    }
  }, [messages, autoScroll]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col gap-4 mb-6 bg-white/5 rounded-xl p-4 ring-1 ring-white/15 overflow-y-auto scroll-smooth"
      style={{ maxHeight }}
    >
      <div className="flex flex-col space-y-2">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}
