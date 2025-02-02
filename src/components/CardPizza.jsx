import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { formatPrice, addToCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="card border-1">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body px-0">
        <h3 className="card-title text-center fw-bold">{name}</h3>
        <hr />
        <div className="text-center">
          <p className="text-secondary mb-2">Ingredientes:</p>
          <p className="mb-4">
            🍕 {ingredients.join(', ')}
          </p>
        </div>
        <hr />
        <h4 className="text-center mb-4">Precio: ${formatPrice(price)}</h4>
        <div className="d-flex justify-content-center gap-5">
          <button 
            className="btn btn-outline-dark px-5"
            onClick={() => navigate(`/pizza/${id}`)}
          >
            Ver Más <span className="ms-1">↗️</span>
          </button>
          <button 
            className="btn btn-dark px-5"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir <span className="ms-1">🛒</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza; 