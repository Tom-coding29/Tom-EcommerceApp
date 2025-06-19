"use client";

import React from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

export default function CartPopup() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, isCartOpen, setIsCartOpen } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed top-4 right-4 w-80 bg-[#001233] text-[#d4af37] rounded-lg shadow-lg z-50 p-4">
      <button
        onClick={() => setIsCartOpen(false)}
        className="text-[#bfa76f] hover:text-[#f5f5f5] float-right font-bold"
        aria-label="Fermer le panier"
      >
        &times;
      </button>
      <h3 className="mb-4 text-lg font-bold">Panier</h3>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          <ul className="max-h-64 overflow-auto">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center mb-3 border-b border-[#3a3a3a] pb-2">
                <img src={item.image} alt={item.name} className="w-14 h-14 rounded-md mr-3 object-cover" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p>{(item.price * item.quantity).toFixed(2)} €</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="qty-btn"
                      aria-label={`Réduire la quantité de ${item.name}`}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="qty-btn"
                      aria-label={`Augmenter la quantité de ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-3 text-red-500 hover:text-red-700 font-bold"
                      aria-label={`Supprimer ${item.name} du panier`}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold mt-3">
            Total: {cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)} €
          </div>
          <Link href="/cart">
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-4 w-full bg-[#bfa76f] text-[#000814] py-2 rounded-md font-semibold hover:bg-[#d4af37]"
            >
              Voir le panier
            </button>
          </Link>
        </>
      )}
    </div>
  );
}
