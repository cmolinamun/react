import { useState } from 'react'
import { pizzaCart } from '../pizzas.js'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const incrementQuantity = (index) => {
    const newCart = [...cart]
    newCart[index].count += 1
    setCart(newCart)
  }

  const decrementQuantity = (index) => {
    const newCart = [...cart]
    if (newCart[index].count > 1) {
      newCart[index].count -= 1
      setCart(newCart)
    } else {
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  const total = cart.reduce((sum, item) => sum + (item.price * item.count), 0)

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>
      {cart.map((item, index) => (
        <div key={index} className="d-flex align-items-center justify-content-between mb-2">
          <img 
            src={item.img} 
            alt={item.name} 
            style={{ width: '100px', height: '75px', objectFit: 'cover' }}
            className="me-2"
          />
          <span className="me-2">{item.name}</span>
          <span className="me-2">${item.price}</span>
          <div>
            <button 
              className="btn btn-sm btn-danger me-1"
              onClick={() => decrementQuantity(index)}
            >
              -
            </button>
            <span className="mx-4">{item.count}</span>
            <button 
              className="btn btn-sm btn-primary"
              onClick={() => incrementQuantity(index)}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-4">
        <h4>Total: ${total}</h4>
        <button className="btn btn-dark mt-2">Pagar</button>
      </div>
    </div>
  )
}

export default Cart