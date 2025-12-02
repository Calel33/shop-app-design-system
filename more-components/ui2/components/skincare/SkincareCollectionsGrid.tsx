// SkincareCollectionsGrid.tsx - Expandable collection cards grid
import { ArrowRight } from 'lucide-react';
import type { SkincareCollectionsGridProps } from '../types/skincare.types';

export function SkincareCollectionsGrid({
  title = 'Explore Collections',
  subtitle = 'Targeted routines for every skin goal.',
  collections,
  className = '',
}: SkincareCollectionsGridProps) {
  return (
    <section className={`max-w-7xl mx-auto px-6 py-16 ${className}`} id="collections">
      <div className="flex mb-8 items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">{subtitle}</p>
        </div>
        <a
          href="#shop"
          className="hidden sm:inline-flex items-center gap-2 text-sm hover:text-neutral-600 dark:hover:text-neutral-400 transition"
        >
          View all
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      <div className="flex gap-1.5 bg-white dark:bg-neutral-900 rounded-3xl p-6 shadow-2xl overflow-x-auto">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="flex-1 min-w-[120px] overflow-hidden cursor-pointer transition-all duration-500 hover:flex-[4] group bg-gray-800 h-[400px] rounded-3xl relative flex items-center justify-center"
          >
            <img
              src={collection.backgroundImage}
              alt={collection.name}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl font-medium mb-1 tracking-tight">
                {collection.name}
              </h3>
              <p className="text-gray-200 text-sm">
                {collection.description}
              </p>
              <p className="text-gray-400 text-xs mt-2">
                {collection.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
