import React, { createContext, useContext, useState, ReactNode } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = Product & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    // logique d'ajout
  };
  const removeFromCart = (id: number) => {
    // logique suppression
  };
  const increaseQty = (id: number) => {
    // logique augmentation quantité
  };
  const decreaseQty = (id: number) => {
    // logique diminution quantité
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQty, decreaseQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
