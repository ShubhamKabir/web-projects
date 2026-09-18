"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  size?: string;
  color: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("atlas-cart");

    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        localStorage.removeItem("atlas-cart");
      }
    }

    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      localStorage.setItem("atlas-cart", JSON.stringify(items));
    }
  }, [items, ready]);

  function addItem(item: CartItem) {
    setItems((current) => {
      const existingIndex = current.findIndex(
        (existing) =>
          existing.id === item.id &&
          existing.size === item.size &&
          existing.color === item.color,
      );

      if (existingIndex === -1) {
        return [...current, item];
      }

      return current.map((existing, index) =>
        index === existingIndex
          ? {
              ...existing,
              quantity: existing.quantity + item.quantity,
            }
          : existing,
      );
    });
  }

  function removeItem(index: number) {
    setItems((current) => current.filter((_, i) => i !== index));
  }

  function updateQuantity(index: number, quantity: number) {
    if (quantity <= 0) {
      removeItem(index);
      return;
    }

    setItems((current) =>
      current.map((item, i) => (i === index ? { ...item, quantity } : item)),
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items],
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
