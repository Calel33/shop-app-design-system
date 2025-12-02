import { useState } from 'react';
import type { GlassChatCardProps, ChatMessage } from '../types/chat.types';
import { ChatHeader } from './ChatHeader';
import { ChatMessages } from './ChatMessages';
import { ChatInput } from './ChatInput';

/**
 * GlassChatCard Component
 * 
 * Complete glassmorphic chat support card with message management.
 * Features auto-scroll, form handling, and responsive design.
 * 
 * @example
 * ```tsx
 * <GlassChatCard
 *   header={{ title: 'Round-the-Clock Chat Support' }}
 *   onSendMessage={(msg) => console.log('Sent:', msg)}
 *   initialMessages={[
 *     { id: '1', content: 'Hello!', sender: 'support', timestamp: new Date() }
 *   ]}
 * />
 * ```
 */
export function GlassChatCard({
  header,
  initialMessages = [],
  onSendMessage,
  autoScroll = true,
  maxHeight = '300px',
  className = ''
}: GlassChatCardProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleSendMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, newMessage]);
    onSendMessage(content);
  };

  return (
    <div
      className={`
        flex flex-col 
        bg-white/10 backdrop-blur-xl 
        rounded-2xl p-6 
        ring-1 ring-white/20 
        transition hover:-translate-y-1 hover:shadow-2xl 
        shadow-lg 
        max-h-[600px] 
        text-white
        ${className}
      `}
    >
      <ChatHeader {...header} />
      
      <h2 className="mb-6 text-2xl md:text-3xl font-semibold leading-tight tracking-tight">
        {header.title}
      </h2>

      <ChatMessages 
        messages={messages} 
        maxHeight={maxHeight}
        autoScroll={autoScroll}
      />

      <ChatInput 
        onSendMessage={handleSendMessage}
        placeholder="Type your message…"
      />
    </div>
  );
}
