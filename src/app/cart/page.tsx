'use client'

import { useCart } from '../../context/CartContext'
import Image from 'next/image'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a23] to-[#191970] text-white px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">🛒 Votre Panier</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-300">Votre panier est vide.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-[#0f0f2e] border border-[#2a2a4f] rounded-xl shadow-md p-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-300 text-sm">{item.price.toFixed(2)} €</p>
                  <p className="text-gray-400 text-sm">Quantité : {item.quantity || 1}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-500 hover:text-red-400 transition"
              >
                Supprimer
              </button>
            </div>
          ))}

          <div className="mt-8 text-right">
            <p className="text-xl font-semibold mb-4">Total : {total.toFixed(2)} €</p>
            <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl transition font-medium"
            >
              Vider le panier
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
