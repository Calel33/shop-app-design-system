import React from 'react';
import { Bold, Italic, Code, AlignLeft, AlignCenter, AlignRight, Link, Paperclip } from 'lucide-react';
import { FormatToolbarProps, FormatCommand } from './types';

export const FormatToolbar: React.FC<FormatToolbarProps> = ({ onFormat }) => {
  const handleFormat = (command: FormatCommand) => {
    onFormat(command);
  };

  return (
    <div className="border-t border-b border-zinc-700 py-3">
      <div className="flex items-center space-x-0.5 flex-wrap gap-1">
        <button
          type="button"
          onClick={() => handleFormat('bold')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Bold (⌘+B)"
          aria-label="Bold"
        >
          <Bold size={14} />
        </button>
        
        <button
          type="button"
          onClick={() => handleFormat('italic')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Italic (⌘+I)"
          aria-label="Italic"
        >
          <Italic size={14} />
        </button>
        
        <button
          type="button"
          onClick={() => handleFormat('code')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Code"
          aria-label="Code"
        >
          <Code size={14} />
        </button>
        
        <div className="w-px h-4 bg-zinc-600 mx-1" />
        
        <button
          type="button"
          onClick={() => handleFormat('align-left')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Align Left"
          aria-label="Align Left"
        >
          <AlignLeft size={14} />
        </button>
        
        <button
          type="button"
          onClick={() => handleFormat('align-center')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Align Center"
          aria-label="Align Center"
        >
          <AlignCenter size={14} />
        </button>
        
        <button
          type="button"
          onClick={() => handleFormat('align-right')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Align Right"
          aria-label="Align Right"
        >
          <AlignRight size={14} />
        </button>
        
        <div className="w-px h-4 bg-zinc-600 mx-1" />
        
        <button
          type="button"
          onClick={() => handleFormat('link')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Insert Link (⌘+K)"
          aria-label="Insert Link"
        >
          <Link size={14} />
        </button>
        
        <button
          type="button"
          onClick={() => handleFormat('attachment')}
          className="p-1.5 rounded hover:bg-zinc-700 text-zinc-300 transition-colors"
          title="Attach File"
          aria-label="Attach File"
        >
          <Paperclip size={14} />
        </button>
      </div>
    </div>
  );
};
