import React, { useState } from 'react';
import { Search, Bell, User, Calendar } from 'lucide-react';

interface BIHeaderProps {
  userName?: string;
  notificationCount?: number;
  onSearch?: (query: string) => void;
}

export const BIHeader: React.FC<BIHeaderProps> = ({ 
  userName = 'Sarah',
  notificationCount = 3,
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
    console.log('Search query:', query);
  };

  return (
    <header 
      className="flex flex-col gap-6 opacity-0 animate-fade-in-up" 
      style={{ animationDelay: '100ms' }}
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="md:text-3xl bg-clip-text text-2xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-slate-800 to-slate-600">
            Welcome back, {userName}
          </h1>
          <div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
            <Calendar className="w-4 h-4" />
            <span>Monday, December 18th • Q4 Performance Overview</span>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={handleSearch}
              className="pl-10 pr-4 py-3 w-48 md:w-64 rounded-2xl bg-white/70 backdrop-blur-md text-sm border border-white/20 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200"
            />
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          
          <button 
            onClick={() => console.log('Notifications clicked')}
            className="hover:bg-white/80 hover:shadow-md transition-all duration-200 relative bg-white/60 rounded-2xl p-3 shadow-sm"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-slate-600" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            )}
          </button>
          
          <button 
            onClick={() => console.log('User profile clicked')}
            className="hover:bg-white/80 hover:shadow-md transition-all duration-200 relative bg-white/60 rounded-2xl p-3 shadow-sm"
            aria-label="User Profile"
          >
            <User className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>
    </header>
  );
};
