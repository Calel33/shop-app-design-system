import React from 'react';
import { Bell, Menu } from 'lucide-react';

export interface DashboardNavProps {
  title?: string;
  onMenuClick?: () => void;
  notifications?: number;
}

export const DashboardNav: React.FC<DashboardNavProps> = ({
  title = 'PulsePeak',
  onMenuClick,
  notifications = 0,
}) => {
  return (
    <header className="w-full sticky top-0 z-40 bg-neutral-950/70 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Open navigation menu"
            onClick={onMenuClick}
          >
            <Menu size={18} />
          </button>
          <span className="text-white font-semibold tracking-tight">{title}</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Notifications"
          >
            <Bell size={18} />
            {notifications > 0 && (
              <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] leading-none h-4 min-w-4 px-1">
                {notifications}
              </span>
            )}
          </button>
          <div className="w-8 h-8 rounded-full bg-white/10 ring-1 ring-white/10" aria-hidden />
        </div>
      </div>
    </header>
  );
};

export default DashboardNav;
