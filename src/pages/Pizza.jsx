import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const Pizza = () => {
  const { formatPrice, pizzas, loading, error, addToCart } = useCartContext();
  const { id } = useParams();
  const [pizza] = useState(() => pizzas.find(p => p.id === id));

  if (loading) return <div className="text-center mt-5">Cargando pizza...</div>;
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>;
  if (!pizza) return <div className="text-center mt-5">Pizza no encontrada</div>;

  return (
    <div className="container mt-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-6">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start" 
              alt={pizza.name}
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title text-capitalize">{pizza.name}</h2>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text">
                <strong>Ingredientes:</strong><br/>
                🍕 {pizza.ingredients.join(', ')}
              </p>
              <h4 className="card-text">Precio: ${formatPrice(pizza.price)}</h4>
              <button 
                className="btn btn-dark mt-3"
                onClick={() => addToCart(pizza)}
              >
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza; 