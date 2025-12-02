import { useState } from 'react';
import { Info, List, Star, Brush } from 'lucide-react';
import { ProductTabsProps } from './types';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  info: Info,
  list: List,
  star: Star,
  brush: Brush,
};

export const ProductTabs = ({ tabs, defaultTab }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || '');

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = ICON_MAP[iconName];
    return IconComponent ? <IconComponent className="h-4 w-4 mr-2 inline" /> : null;
  };

  return (
    <div className="mt-16">
      <div className="border-t border-gray-200">
        {/* Tab Navigation */}
        <nav className="flex border-b border-gray-200 bg-gray-50/50 rounded-t-2xl">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200
                ${index === 0 ? 'rounded-tl-2xl' : ''}
                ${index === tabs.length - 1 ? 'rounded-tr-2xl' : ''}
                ${activeTab === tab.id
                  ? 'text-blue-600 border-blue-600 bg-white'
                  : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
                }
              `}
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`${tab.id}-panel`}
            >
              {getIcon(tab.icon)}
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        <div className="bg-white rounded-b-2xl">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              id={`${tab.id}-panel`}
              role="tabpanel"
              className={`p-8 ${activeTab === tab.id ? 'block' : 'hidden'}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
