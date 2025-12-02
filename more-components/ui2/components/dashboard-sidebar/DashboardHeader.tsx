import React from 'react';
import { Bell, HelpCircle } from 'lucide-react';
import type { DashboardHeaderProps } from './types';

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  notifications,
  userAvatar,
  onNotificationClick,
  onHelpClick,
  onProfileClick,
}) => {
  return (
    <header className="flex items-center justify-between gap-4 px-4 lg:px-6 py-4 border-b border-white/10 bg-slate-900/30 backdrop-blur-lg">
      <div className="flex items-center gap-4">
        <div className="lg:hidden w-8"></div>
        <div>
          <h1 className="text-base lg:text-lg font-medium">{title}</h1>
          {subtitle && <p className="text-xs lg:text-sm text-white/60">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-3">
        {onNotificationClick && (
          <button
            onClick={onNotificationClick}
            className="relative hidden sm:block"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            {notifications && notifications > 0 && (
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-cyan-500" />
            )}
          </button>
        )}
        {onHelpClick && (
          <button
            onClick={onHelpClick}
            className="hidden sm:block"
            aria-label="Help"
          >
            <HelpCircle className="h-5 w-5" />
          </button>
        )}
        {userAvatar && (
          <button
            onClick={onProfileClick}
            className="h-8 w-8 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${userAvatar})` }}
            aria-label="User profile"
          />
        )}
      </div>
    </header>
  );
};
