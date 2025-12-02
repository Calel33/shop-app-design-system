import React from 'react';
import { Inbox, Send, Trash2, Search, Plus } from 'lucide-react';

export const ComposeHeader: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 md:px-6 border-zinc-700 bg-gradient-to-b from-zinc-800/50 border-b pt-4 pb-4">
      <div className="flex items-center space-x-2 mb-3 md:mb-0">
        <div className="bg-clip-text text-xl font-medium text-transparent tracking-tighter bg-gradient-to-r from-indigo-400 to-indigo-300">
          Mail
        </div>
        <span className="text-zinc-500 text-xs">/ Compose</span>
      </div>

      <nav className="flex flex-wrap gap-3 md:gap-6 text-xs font-medium mb-3 md:mb-0">
        <a
          href="#"
          className="flex items-center space-x-1.5 text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <Inbox size={16} />
          <span>Inbox</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1.5 text-indigo-400 font-semibold"
        >
          <Send size={16} />
          <span>Compose</span>
        </a>
        <a
          href="#"
          className="flex items-center space-x-1.5 text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <Trash2 size={16} />
          <span>Drafts</span>
        </a>
      </nav>

      <div className="flex items-center space-x-1.5">
        <button className="p-1.5 rounded-md bg-zinc-700 hover:bg-zinc-600 transition-colors">
          <Search size={16} className="text-zinc-300" />
        </button>
        <button className="p-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
          <Plus size={16} />
        </button>
      </div>
    </header>
  );
};
