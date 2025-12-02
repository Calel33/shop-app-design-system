// SkincareProductCard.tsx - Individual product card with hover effects
import { Heart, Plus, Star } from 'lucide-react';
import type { SkincareProductCardProps } from '../types/skincare.types';

export function SkincareProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  isInWishlist = false,
  className = '',
}: SkincareProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-current' : 'opacity-40'}`}
      />
    ));
  };

  return (
    <article className={`group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${className}`}>
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && (
          <span className="text-xs font-medium text-neutral-900 dark:text-white bg-white/60 dark:bg-neutral-800/95 border border-neutral-200 dark:border-neutral-600 rounded-full px-3 py-1.5 absolute top-4 left-4 shadow-sm backdrop-blur-sm">
            {product.badge}
          </span>
        )}
        <button
          onClick={() => onToggleWishlist?.(product.id)}
          className="absolute top-4 right-4 p-2.5 bg-white/95 dark:bg-neutral-800/95 rounded-full hover:bg-white dark:hover:bg-neutral-800 transition-all transform hover:scale-110 shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current text-red-500' : ''}`} />
        </button>
      </div>
      
      <div className="p-6">
        <header className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
              {product.name}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              {product.description}
            </p>
          </div>
          <span className="text-lg font-semibold text-neutral-900 dark:text-white ml-4">
            ${product.price}
          </span>
        </header>
        
        <div className="mt-4 flex items-center gap-1 text-amber-500">
          {renderStars(product.rating)}
          <span className="ml-2 text-sm text-neutral-600 dark:text-neutral-400 font-medium">
            {product.reviewCount} reviews
          </span>
        </div>
        
        <div className="mt-6">
          <button
            onClick={() => onAddToCart?.(product)}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            Add to cart
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
