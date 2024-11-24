const CardPizza = ({ name, price, ingredients, img }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

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
          <button className="btn btn-outline-dark px-5">
            Ver Más <span className="ms-1">↗️</span>
          </button>
          <button className="btn btn-dark px-5">
            Añadir <span className="ms-1">🛒</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza 