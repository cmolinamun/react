import { useState, useEffect } from 'react'
import { getAllPizzas } from '../services/pizzaService'

const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPizza = async () => {
      try {
        const pizzas = await getAllPizzas()
        // ID 'p001' de la pizza napolitana
        const selectedPizza = pizzas.find(p => p.id === 'p001')
        if (selectedPizza) {
          setPizza(selectedPizza)
        } else {
          setError('Pizza no encontrada')
        }
      } catch (err) {
        setError('Error al cargar la pizza')
      } finally {
        setLoading(false)
      }
    }

    loadPizza()
  }, [])

  if (loading) return <div className="text-center mt-5">Cargando pizza...</div>
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>
  if (!pizza) return <div className="text-center mt-5">Pizza no encontrada</div>

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
              <button className="btn btn-dark mt-3">
                Añadir al carrito 🛒
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza 