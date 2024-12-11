import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from '../pizzas'

const Home = () => {

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