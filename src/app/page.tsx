'use client'

import { useCart } from '../context/CartContext'

const products = [
  {
    id: 1,
    name: 'T-shirt noir',
    price: 19.99,
    image: 'https://via.placeholder.com/200/000000/FFFFFF/?text=T-shirt'
  },
  {
    id: 2,
    name: 'Sweat à capuche',
    price: 39.99,
    image: 'https://via.placeholder.com/200/001233/FFFFFF/?text=Sweat'
  },
  {
    id: 3,
    name: 'Casquette',
    price: 14.99,
    image: 'https://via.placeholder.com/200/001233/FFFFFF/?text=Casquette'
  },
  {
    id: 4,
    name: 'Pantalon',
    price: 49.99,
    image: 'https://via.placeholder.com/200/000814/FFFFFF/?text=Pantalon'
  }
]

export default function Home() {
  const { addToCart } = useCart()

  return (
    <>
      <h2>Nos produits</h2>
      <div className="grid-products">
        {products.map(prod => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>{prod.price.toFixed(2)} €</p>
            <button onClick={() => addToCart(prod)}>Ajouter au panier</button>
          </div>
        ))}
      </div>
    </>
  )
}
