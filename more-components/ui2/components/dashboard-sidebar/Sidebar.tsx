import React from 'react';
import { Plus, LayoutDashboard, Music, Radio, FileAudio, Users, SlidersHorizontal, Activity } from 'lucide-react';
import type { SidebarProps } from './types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  waveform: Activity, // Using Activity as fallback for Waveform
  plus: Plus,
  'layout-dashboard': LayoutDashboard,
  music: Music,
  radio: Radio,
  'file-audio': FileAudio,
  users: Users,
  'sliders-horizontal': SlidersHorizontal,
};

export const Sidebar: React.FC<SidebarProps> = ({
  logo = { icon: 'waveform', text: 'SoundForge' },
  newActionButton,
  navItems,
  upgradeCard,
  isMobileOpen = false,
}) => {
  const LogoIcon = iconMap[logo.icon] || Activity;

  return (
    <aside
      className={`fixed lg:relative inset-y-0 left-0 z-40 w-64 transform ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col gap-6 border-r border-white/10 bg-slate-900/50 backdrop-blur-lg p-6`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg grid place-content-center">
          <LogoIcon className="h-5 w-5 text-white" />
        </div>
        <span className="text-lg font-semibold tracking-tight">{logo.text}</span>
      </div>

      {/* New Action Button */}
      {newActionButton && (
        <button
          onClick={newActionButton.onClick}
          className="flex items-center justify-between gap-3 text-sm font-medium bg-blue-600/20 hover:bg-blue-600/30 transition p-3 rounded-lg"
        >
          <span className="flex items-center gap-3">
            <Plus className="h-4 w-4" />
            {newActionButton.label}
          </span>
          {newActionButton.shortcut && (
            <kbd className="text-xs text-white/60 hidden sm:block">{newActionButton.shortcut}</kbd>
          )}
        </button>
      )}

      {/* Navigation */}
      <nav className="flex flex-col gap-1 text-sm">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon] || Music;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                item.isActive ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span
                  className={`ml-auto text-xs px-1.5 py-0.5 rounded-md ${
                    item.badge.variant === 'live'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : item.badge.variant === 'new'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-purple-500/20 text-purple-300'
                  }`}
                >
                  {item.badge.text}
                </span>
              )}
            </a>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      {upgradeCard && (
        <div className="mt-auto bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-xl">
          <p className="text-sm leading-snug">
            {upgradeCard.description}{' '}
            {upgradeCard.highlight && (
              <span className="font-semibold text-cyan-400">{upgradeCard.highlight}</span>
            )}
          </p>
          <div className="flex items-center justify-between mt-4 text-sm">
            {upgradeCard.dismissText && upgradeCard.onDismiss && (
              <button
                onClick={upgradeCard.onDismiss}
                className="hover:underline text-white/70"
              >
                {upgradeCard.dismissText}
              </button>
            )}
            <button
              onClick={upgradeCard.onUpgrade}
              className="bg-white/10 hover:bg-white/20 transition px-3 py-1.5 rounded-md font-medium"
            >
              {upgradeCard.ctaText}
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
