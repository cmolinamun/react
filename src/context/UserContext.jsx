import { createContext, useState, useContext } from 'react';

const API_URL = 'http://localhost:5000/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState('');


  const loginUser = async ({ email, password }) => {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el login");
      }
      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
      return data;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  const registerUser = async ({ email, password }) => {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }
      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
      return data;
    } catch (error) {
      console.error("Error en register:", error);
      throw error;
    }
  };

  const getProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al obtener el perfil");
      }
      const data = await response.json();
      setEmail(data.email);
      return data;
    } catch (error) {
      console.error("Error al obtener perfil:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null);
    setEmail('');
  };

  return (
    <UserContext.Provider value={{
      token,
      email,
      loginUser,
      registerUser,
      getProfile,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext); 