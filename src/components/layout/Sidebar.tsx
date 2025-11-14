import { cn } from '@/lib/utils';
import {
  Home,
  Search,
  Map,
  UtensilsCrossed,
  LayoutDashboard,
  FileText,
  Settings,
  Users,
  CheckSquare,
  Tags,
  Palette,
  Dumbbell
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
}

const navigation = [
  { id: 'home', label: 'Home', icon: Home, section: 'Public' },
  { id: 'search', label: 'Search', icon: Search, section: 'Public' },
  { id: 'map', label: 'Map View', icon: Map, section: 'Public' },
  { id: 'restaurants', label: 'Restaurants', icon: UtensilsCrossed, section: 'HTML Mockup' },
  { id: 'gym-listing', label: 'Gym Listing', icon: Dumbbell, section: 'HTML Mockup' },
  { id: 'admin-dashboard', label: 'Admin Dashboard', icon: Users, section: 'HTML Mockup' },
  { id: 'owner-dashboard', label: 'My Listings', icon: LayoutDashboard, section: 'Owner' },
  { id: 'create-listing', label: 'Create Listing', icon: FileText, section: 'Owner' },
  { id: 'admin-queue', label: 'Review Queue', icon: CheckSquare, section: 'Admin' },
  { id: 'admin-categories', label: 'Categories', icon: Tags, section: 'Admin' },
  { id: 'components', label: 'UI Components', icon: Settings, section: 'Design System' },
  { id: 'theme-showcase', label: 'Theme Showcase', icon: Palette, section: 'Design System' },
];

export function Sidebar({ currentPage, onNavigate, isOpen }: SidebarProps) {
  const sections = Array.from(new Set(navigation.map(item => item.section)));

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-transform duration-300 z-40',
        isOpen ? 'translate-x-0' : '-translate-x-full',
        'w-64'
      )}
    >
      <div className="p-6">
        <h2 className="text-h3 font-bold text-sidebar-foreground">Belize Directory</h2>
        <p className="text-small text-sidebar-foreground/70">Design System</p>
      </div>
      
      <nav className="px-3 space-y-6">
        {sections.map((section) => (
          <div key={section}>
            <h3 className="px-3 mb-2 text-small font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
              {section}
            </h3>
            <div className="space-y-1">
              {navigation
                .filter(item => item.section === section)
                .map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => onNavigate(item.id)}
                      className={cn(
                        'w-full flex items-center gap-3 px-3 py-2 rounded-md text-body transition-colors',
                        isActive
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}

