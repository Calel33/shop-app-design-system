import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Clock, 
  Building2, 
  Users, 
  Flag, 
  Settings 
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface AdminSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems: NavItem[] = [
  { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="h-5 w-5" /> },
  { id: 'pending-approvals', label: 'Pending Approvals', icon: <Clock className="h-5 w-5" /> },
  { id: 'all-businesses', label: 'All Businesses', icon: <Building2 className="h-5 w-5" /> },
  { id: 'business-owners', label: 'Business Owners', icon: <Users className="h-5 w-5" /> },
  { id: 'flagged-content', label: 'Flagged Content', icon: <Flag className="h-5 w-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
];

export function AdminSidebar({ currentPage, onNavigate }: AdminSidebarProps) {
  return (
    <nav className="w-[280px] bg-card border-r border-border h-screen sticky top-0 flex flex-col">
      {/* Logo/Header */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary">LocalHub Admin</h1>
      </div>

      {/* Navigation Items */}
      <div className="py-6 flex-1 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={cn(
              'w-full flex items-center gap-3 px-6 py-3 text-left transition-colors relative',
              currentPage === item.id
                ? 'bg-primary/10 text-primary border-r-2 border-primary'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

