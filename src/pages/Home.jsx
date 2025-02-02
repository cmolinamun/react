import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { useCartContext } from '../context/CartContext'

const Home = () => {
  const { pizzas, loading, error } = useCartContext()

  if (loading) return <div className="text-center mt-5">Cargando pizzas...</div>
  if (error) return <div className="text-center mt-5 text-danger">{error}</div>

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row g-4">
          {pizzas.map(pizza => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza 
                id={pizza.id}
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