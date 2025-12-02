// SkincareCart.tsx - Shopping cart drawer component
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import type { SkincareCartProps } from '../types/skincare.types';

export function SkincareCart({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  className = '',
}: SkincareCartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/30 z-50" onClick={onClose} />
      <aside className={`fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-neutral-900 shadow-2xl z-50 flex flex-col transition-colors duration-300 ${className}`}>
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-neutral-600 dark:text-neutral-400 py-12">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-neutral-900 dark:text-white truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      ${item.product.price}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors self-start"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Subtotal</span>
              <span className="text-2xl font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
