import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { useUserContext } from '../context/UserContext';

const Navbar = () => {
  const { getTotal, formatPrice } = useCartContext();
  const { token, logout } = useUserContext();

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <Link to="/" className="navbar-brand mb-0">
            🍕 Pizzería Mamma Mia!
          </Link>
          <Link to="/" className="btn btn-outline-light">
            🏠 Home
          </Link>
          {!token ? (
            <>
              <Link to="/login" className="btn btn-outline-light">
                👤 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light">
                📝 Register
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile" className="btn btn-outline-light">
                👤 Perfil
              </Link>
              <button onClick={logout} className="btn btn-outline-light">
                🚪 Logout
              </button>
            </>
          )}
        </div>
        <Link to="/cart" className="border border-light rounded px-3 py-2 text-light text-decoration-none">
          🛒 Total: ${formatPrice(getTotal())}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar; 