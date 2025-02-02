import React from 'react';
import { useUserContext } from '../context/UserContext';

const Profile = () => {
  const { logout, email } = useUserContext();

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <h2>Perfil de Usuario</h2>
        <p className="mt-3">Email: {email}</p>
        <button 
          className="btn btn-danger mt-3"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Profile; 