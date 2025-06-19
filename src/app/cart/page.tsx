'use client'

import { useCart } from '../../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart()

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <>
      <h2>Votre panier</h2>
      {cartItems.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">{(item.price * item.quantity).toFixed(2)} €</div>
                <div className="cart-item-qty">
                  <button className="qty-btn" onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={() => increaseQty(item.id)}>+</button>
                  <button className="qty-btn" onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto', backgroundColor: 'transparent', borderColor: '#f44336', color: '#f44336' }}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">Total: {total.toFixed(2)} €</div>
          <button onClick={clearCart} style={{ marginTop: '1rem' }}>Vider le panier</button>
        </div>
      )}
    </>
  )
}
