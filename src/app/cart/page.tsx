'use client'

import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (cart.length === 0) return <p>Votre panier est vide.</p>

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Votre panier</h2>
      <ul className="space-y-4 mb-6">
        {cart.map(item => (
          <li key={item.id} className="flex items-center gap-4 border p-3 rounded shadow">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p>
                {item.price.toFixed(2)} € x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <p className="font-semibold text-lg mb-6">Total : {total.toFixed(2)} €</p>
      <button
        onClick={() => clearCart()}
        className="bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
      >
        Vider le panier
      </button>
    </>
  )
}