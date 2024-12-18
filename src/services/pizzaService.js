const API_URL = 'http://localhost:5000/api'

export const getAllPizzas = async () => {
  try {
    const response = await fetch(`${API_URL}/pizzas`)
    return await response.json()
  } catch (error) {
    console.error('Error al obtener las pizzas:', error)
    throw error
  }
}