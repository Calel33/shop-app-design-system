/**
 * Chat Components
 * 
 * Glassmorphic chat support card components with message management,
 * auto-scroll, and form handling capabilities.
 */

export { GlassChatCard } from './GlassChatCard';
export { ChatHeader } from './ChatHeader';
export { ChatMessages } from './ChatMessages';
export { ChatMessage } from './ChatMessage';
export { ChatInput } from './ChatInput';

// Re-export types
export type {
  ChatMessage as ChatMessageType,
  ChatHeaderProps,
  ChatMessagesProps,
  ChatInputProps,
  GlassChatCardProps
} from '../types/chat.types';
