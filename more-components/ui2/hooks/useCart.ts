// useCart.ts - Shopping cart state management
import { useState, useCallback, useMemo } from 'react';
import type { CartItem, SkincareProduct, UseCartReturn } from '../components/types/skincare.types';

export function useCart(): UseCartReturn {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [items]);

  const itemCount = useMemo(() => {
    return items.reduce((count, item) => count + item.quantity, 0);
  }, [items]);

  const addItem = useCallback((product: SkincareProduct) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prevItems, { product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, [removeItem]);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const toggleCart = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    items,
    isOpen,
    subtotal,
    itemCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
  };
}
