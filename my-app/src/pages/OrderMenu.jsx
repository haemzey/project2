import { useState } from 'react'
import '../styles/pages.css'

const MENU = [
  { id: 1, name: 'Margherita Pizza', price: 9 },
  { id: 2, name: 'Spicy Ramen', price: 12 },
  { id: 3, name: 'Grilled Steak', price: 18 },
]

export default function OrderMenu() {
  const [cart, setCart] = useState([])
  function add(item) {
    setCart((c) => [...c, item])
  }

  return (
    <main className="page page-order">
      <h2>Menu</h2>
      <div className="menu-grid">
        {MENU.map((m) => (
          <div key={m.id} className="menu-item card">
            <h3>{m.name}</h3>
            <p className="muted">${m.price}</p>
            <button className="btn" onClick={() => add(m)}>
              Add
            </button>
          </div>
        ))}
      </div>

      <aside className="cart card">
        <h3>Cart</h3>
        {cart.length === 0 ? (
          <p className="muted">No items yet</p>
        ) : (
          <ul>
            {cart.map((c, i) => (
              <li key={i}>{c.name} — ${c.price}</li>
            ))}
          </ul>
        )}
        <div className="cart-total muted">Total: ${cart.reduce((s, i) => s + i.price, 0)}</div>
      </aside>
    </main>
  )
}
