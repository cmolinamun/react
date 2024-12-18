import { useState, useEffect } from 'react'
import Header from './Header'
import CardPizza from './CardPizza'
import { getAllPizzas } from '../services/pizzaService'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadPizzas = async () => {
      try {
        const data = await getAllPizzas()
        setPizzas(data)
      } catch (err) {
        setError('Error al cargar las pizzas')
      } finally {
        setLoading(false)
      }
    }

    loadPizzas()
  }, [])

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row g-4">
          {pizzas.map(pizza => (
            <div className="col-12 col-md-4" key={pizza.name}>
              <CardPizza 
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home 