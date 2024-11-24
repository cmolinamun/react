import headerImage from '../assets/img/header-pizza.jpg'

const Header = () => {
  return (
    <div className="text-center py-5 mb-5 header-container" 
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${headerImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           height: '300px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           flexDirection: 'column',
           color: 'white'
         }}>
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  )
}

export default Header 