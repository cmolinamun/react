import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';

const Cart = () => {
  const { 
    cart, 
    incrementQuantity, 
    decrementQuantity, 
    getTotal,
    formatPrice 
  } = useCartContext();
  
  const { token } = useUserContext();
  const [checkoutSuccess, setCheckoutSuccess] = useState('');
  const [checkoutError, setCheckoutError] = useState('');

  const handleCheckout = async () => {
    setCheckoutSuccess('');
    setCheckoutError('');
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ cart })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la compra");
      }
      setCheckoutSuccess("Compra realizada con éxito!");
    } catch (error) {
      setCheckoutError(error.message);
    }
  };

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
          <span className="me-2">${formatPrice(item.price)}</span>
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
        <h4>Total: ${formatPrice(getTotal())}</h4>
        <button 
          className="btn btn-dark mt-2"
          disabled={!token}
          title={!token ? "Debes iniciar sesión para pagar" : ""}
          onClick={handleCheckout}
        >
          {token ? "Pagar" : "Inicia sesión para pagar"}
        </button>
      </div>
      {checkoutSuccess && (
        <div className="alert alert-success mt-3">
          {checkoutSuccess}
        </div>
      )}
      {checkoutError && (
        <div className="alert alert-danger mt-3">
          {checkoutError}
        </div>
      )}
    </div>
  );
};

export default Cart