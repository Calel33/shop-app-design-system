import React from 'react';
import { 
  Zap, 
  LayoutDashboard, 
  TrendingUp, 
  Briefcase, 
  Users2, 
  Settings, 
  LogOut 
} from 'lucide-react';
import { NavigationItem } from './types';

interface BISidebarProps {
  activeItem?: string;
  onNavigate?: (itemId: string) => void;
}

export const BISidebar: React.FC<BISidebarProps> = ({ 
  activeItem = 'dashboard',
  onNavigate 
}) => {
  const navigationItems: NavigationItem[] = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard', active: true },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'team', icon: Users2, label: 'Team' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const handleClick = (itemId: string) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
    console.log(`Navigation clicked: ${itemId}`);
  };

  return (
    <aside className="hidden md:flex flex-col items-center w-16 bg-white/60 backdrop-blur-xl border-r border-white/20 shadow-xl py-6">
      <div className="flex-1 flex flex-col gap-4 items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
          <Zap className="w-5 h-5 text-white" />
        </div>
        
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeItem;
          
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-violet-600 bg-violet-50 hover:bg-violet-100'
                  : 'text-slate-400 hover:text-violet-600 hover:bg-violet-50'
              } hover:scale-105`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
            </button>
          );
        })}
      </div>
      
      <button 
        onClick={() => console.log('Logout clicked')}
        className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200" 
        aria-label="Logout"
      >
        <LogOut className="w-5 h-5" />
      </button>
    </aside>
  );
};
