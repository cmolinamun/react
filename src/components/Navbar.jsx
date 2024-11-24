
const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-3">
          <h1 className="navbar-brand mb-0">Pizzería Mamma Mia!</h1>
          <button className="btn btn-outline-light">
            🍕 Home
          </button>
          <button className="btn btn-outline-light">
            👤 Login
          </button>
          <button className="btn btn-outline-light">
            📝 Register
          </button>
        </div>
        <div className="border border-info rounded px-3 py-2 text-info">
          🛒 Total: $25,000
        </div>
      </div>
    </nav>
  )
}

export default Navbar 