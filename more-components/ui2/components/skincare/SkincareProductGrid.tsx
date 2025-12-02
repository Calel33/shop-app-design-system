// SkincareProductGrid.tsx - Featured products section with grid layout
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SkincareProductCard } from './SkincareProductCard';
import type { SkincareProductGridProps } from '../types/skincare.types';

export function SkincareProductGrid({
  title,
  subtitle,
  products,
  onAddToCart,
  className = '',
}: SkincareProductGridProps) {
  return (
    <section className={`bg-neutral-50 dark:bg-neutral-800 border-y border-neutral-200 dark:border-neutral-700 transition-colors duration-300 overflow-hidden ${className}`} id="shop">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{subtitle}</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-lg transition text-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 shadow-lg transition text-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products.map((product) => (
            <SkincareProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
