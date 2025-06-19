'use client'

import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'T-shirt noir',
    price: 19.99,
    image: 'https://via.placeholder.com/150/000000/FFFFFF/?text=T-shirt'
  },
  {
    id: 2,
    name: 'Sweat à capuche',
    price: 39.99,
    image: 'https://via.placeholder.com/150/666666/FFFFFF/?text=Sweat'
  },
  {
    id: 3,
    name: 'Casquette',
    price: 14.99,
    image: 'https://via.placeholder.com/150/999999/FFFFFF/?text=Casquette'
  },
  {
    id: 4,
    name: 'Pantalon',
    price: 49.99,
    image: 'https://via.placeholder.com/150/333333/FFFFFF/?text=Pantalon'
  }
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Nos produits</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(prod => (
          <div key={prod.id} className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={prod.image} alt={prod.name} className="w-full h-32 object-cover mb-3 rounded" />
            <h3 className="font-semibold">{prod.name}</h3>
            <p className="text-gray-700 mb-2">{prod.price.toFixed(2)} €</p>
            <button
              onClick={() => addToCart(prod)}
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </>
  )
}