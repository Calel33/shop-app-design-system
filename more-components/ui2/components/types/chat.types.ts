/**
 * Chat Component Types
 * 
 * Type definitions for the glassmorphic chat support card components.
 * Supports message management, auto-scrolling, and form interactions.
 */

export interface ChatMessage {
  /** Unique identifier for the message */
  id: string;
  
  /** Message text content */
  content: string;
  
  /** Message sender type */
  sender: 'user' | 'support';
  
  /** Timestamp when message was created */
  timestamp: Date;
}

export interface ChatHeaderProps {
  /** Header title text */
  title: string;
  
  /** Optional subtitle text */
  subtitle?: string;
  
  /** Optional custom icon component */
  icon?: React.ReactNode;
}

export interface ChatMessagesProps {
  /** Array of chat messages to display */
  messages: ChatMessage[];
  
  /** Maximum height for scrollable area (default: 300px) */
  maxHeight?: string;
  
  /** Whether to auto-scroll to latest message */
  autoScroll?: boolean;
}

export interface ChatInputProps {
  /** Callback fired when message is sent */
  onSendMessage: (message: string) => void;
  
  /** Input placeholder text */
  placeholder?: string;
  
  /** Whether input is disabled */
  disabled?: boolean;
  
  /** Whether to clear input after sending */
  clearOnSend?: boolean;
}

export interface GlassChatCardProps {
  /** Header configuration */
  header: ChatHeaderProps;
  
  /** Initial messages to display */
  initialMessages?: ChatMessage[];
  
  /** Callback fired when user sends a message */
  onSendMessage: (message: string) => void;
  
  /** Whether to auto-scroll to latest message */
  autoScroll?: boolean;
  
  /** Maximum height for message area */
  maxHeight?: string;
  
  /** Optional CSS classes for container */
  className?: string;
}
