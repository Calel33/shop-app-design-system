import React from 'react';
import { ChevronRight } from 'lucide-react';
import { EmailTemplate } from './types';

interface TemplateSelectorProps {
  templates: EmailTemplate[];
  onSelect: (template: EmailTemplate) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  templates,
  onSelect,
}) => {
  if (templates.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-zinc-500 text-xs">No templates available</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h3 className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
        Templates
      </h3>
      <div className="space-y-1">
        {templates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => onSelect(template)}
            className="w-full text-left p-2 rounded-md hover:bg-zinc-700 transition-colors group"
          >
            <div className="flex items-center justify-between">
              <p className="font-medium text-zinc-200 text-xs">{template.name}</p>
              <ChevronRight
                size={12}
                className="text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-zinc-400 text-xs mt-0.5">{template.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
