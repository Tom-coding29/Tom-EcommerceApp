'use client'

import { useCart } from '../context/CartContext'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'T-shirt noir',
    price: 19.99,
    image: 'https://via.placeholder.com/300x300/0a0a0a/FFFFFF/?text=T-shirt'
  },
  {
    id: 2,
    name: 'Sweat à capuche',
    price: 39.99,
    image: 'https://via.placeholder.com/300x300/1c1c1c/FFFFFF/?text=Sweat'
  },
  {
    id: 3,
    name: 'Casquette',
    price: 14.99,
    image: 'https://via.placeholder.com/300x300/2e2e2e/FFFFFF/?text=Casquette'
  },
  {
    id: 4,
    name: 'Pantalon',
    price: 49.99,
    image: 'https://via.placeholder.com/300x300/191970/FFFFFF/?text=Pantalon'
  }
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a23] to-[#191970] text-white px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🛍️ Nos Produits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {products.map(prod => (
          <div
            key={prod.id}
            className="bg-[#0f0f2e] border border-[#2a2a4f] rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-4 flex flex-col items-center"
          >
            <Image
              src={prod.image}
              alt={prod.name}
              width={250}
              height={250}
              className="rounded-xl object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{prod.name}</h3>
            <p className="text-sm text-gray-300 mb-4">{prod.price.toFixed(2)} €</p>
            <button
              onClick={() => addToCart(prod)}
              className="mt-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition font-medium"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
