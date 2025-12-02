import type { ChatMessage as ChatMessageType } from '../types/chat.types';

interface ChatMessageProps {
  message: ChatMessageType;
}

/**
 * ChatMessage Component
 * 
 * Individual message bubble with glassmorphic styling.
 * Supports user and support sender types with distinct visual styles.
 */
export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.sender === 'user';
  
  return (
    <div
      className={`
        ${isUser ? 'self-end' : 'self-start'}
        max-w-[75%]
        ${isUser 
          ? 'bg-emerald-500/30 text-emerald-400' 
          : 'bg-white/10 text-white/90'
        }
        rounded-xl px-4 py-2
        font-medium text-sm leading-relaxed
        shadow-sm
        animate-in fade-in slide-in-from-bottom-2
        duration-300
      `}
    >
      {message.content}
    </div>
  );
}
