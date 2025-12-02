// SkincareCollectionsDropdown.tsx - Collections dropdown menu
import type { SkincareCollectionsDropdownProps } from '../types/skincare.types';

export function SkincareCollectionsDropdown({
  collections,
  isOpen,
  className = '',
}: SkincareCollectionsDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-xl p-6 transition-all duration-300 ${className}`}
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'all' : 'none',
      }}
    >
      <div className="grid grid-cols-1 gap-4">
        {collections.slice(0, 3).map((collection) => (
          <a
            key={collection.id}
            href={collection.link || '#collections'}
            className="group flex items-center gap-4 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-600 flex-shrink-0">
              <img
                src={collection.backgroundImage}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-neutral-900 dark:text-white truncate">
                {collection.name}
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 truncate">
                {collection.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="border-t border-neutral-200 dark:border-neutral-600 mt-4 pt-4">
        <a
          href="#collections"
          className="text-sm font-medium text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-400 transition flex items-center gap-2"
        >
          View all collections
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}
