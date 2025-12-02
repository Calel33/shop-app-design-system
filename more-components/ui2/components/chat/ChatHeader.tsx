import { MessageCircle } from 'lucide-react';
import type { ChatHeaderProps } from '../types/chat.types';

/**
 * ChatHeader Component
 * 
 * Header section for chat card with icon and title.
 * Features glassmorphic icon container and optional subtitle.
 */
export function ChatHeader({ title, subtitle, icon }: ChatHeaderProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/10 backdrop-blur-md ring-1 ring-white/20">
        {icon || <MessageCircle className="h-5 w-5" />}
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-white/70">{subtitle || 'Nova Assist'}</p>
        {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
      </div>
    </div>
  );
}
