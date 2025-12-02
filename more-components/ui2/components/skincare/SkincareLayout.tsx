// SkincareLayout.tsx - Main layout orchestrator component
import { useState } from 'react';
import { SkincareAnnouncement } from './SkincareAnnouncement';
import { SkincareHeader } from './SkincareHeader';
import { SkincareHero } from './SkincareHero';
import { SkincareTrustBar } from './SkincareTrustBar';
import { SkincareCollectionsGrid } from './SkincareCollectionsGrid';
import { SkincareProductGrid } from './SkincareProductGrid';
import { SkincarePhilosophy } from './SkincarePhilosophy';
import { SkincareFooter } from './SkincareFooter';
import { SkincareCart } from './SkincareCart';
import { SkincareToast } from './SkincareToast';
import { useCart } from '../../hooks/useCart';
import { useTheme } from '../../hooks/useTheme';
import type { SkincareLayoutProps, ToastNotification } from '../types/skincare.types';

export function SkincareLayout({
  announcement,
  header,
  hero,
  trustBar,
  collections,
  products,
  philosophy,
  footer,
  className = '',
}: SkincareLayoutProps) {
  const {
    items,
    isOpen: isCartOpen,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    toggleCart,
    closeCart,
  } = useCart();

  const { toggleTheme } = useTheme();
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const handleAddToCart = (product: typeof products.products[0]) => {
    addItem(product);
    
    // Show toast notification
    const newToast: ToastNotification = {
      id: `${Date.now()}-${product.id}`,
      message: `${product.name} added to cart`,
      type: 'success',
      duration: 3000,
    };
    
    setToasts((prev) => [...prev, newToast]);
  };

  const handleRemoveToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <div className={`min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300 ${className}`}>
      {/* Announcement Bar */}
      {announcement && <SkincareAnnouncement {...announcement} />}

      {/* Header */}
      <SkincareHeader
        {...header}
        cartCount={itemCount}
        onCartToggle={toggleCart}
        onThemeToggle={toggleTheme}
      />

      {/* Hero Section */}
      <SkincareHero {...hero} />

      {/* Trust Bar */}
      {trustBar && <SkincareTrustBar {...trustBar} />}

      {/* Collections Grid */}
      <SkincareCollectionsGrid {...collections} />

      {/* Featured Products */}
      <SkincareProductGrid
        {...products}
        onAddToCart={handleAddToCart}
      />

      {/* Philosophy Section */}
      <SkincarePhilosophy {...philosophy} />

      {/* Footer */}
      <SkincareFooter {...footer} />

      {/* Shopping Cart Drawer */}
      <SkincareCart
        isOpen={isCartOpen}
        items={items}
        onClose={closeCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onCheckout={() => console.log('Checkout clicked')}
      />

      {/* Toast Notifications */}
      <div className="fixed top-20 right-6 z-[100] space-y-2">
        {toasts.map((toast) => (
          <SkincareToast
            key={toast.id}
            {...toast}
            onClose={() => handleRemoveToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}
