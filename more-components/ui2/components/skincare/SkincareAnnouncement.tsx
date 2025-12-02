// SkincareAnnouncement.tsx - Top announcement bar with rotating messages
import type { SkincareAnnouncementProps } from '../types/skincare.types';

export function SkincareAnnouncement({ messages, className = '' }: SkincareAnnouncementProps) {
  if (!messages || messages.length === 0) return null;

  return (
    <div className={`hidden sm:block bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4">
        {messages.map((message, index) => (
          <p key={index} className="opacity-90 flex-1 text-center">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
}
