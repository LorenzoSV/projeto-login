import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../auth';
function PaginaInicial() {

  const {user, logout} = useContext(AuthContext);
  const handleLogout = () => {
    logout();
  }
  return (
    <div>
      <h2>Você,{user.name} está logado</h2>
      <p>Bem-vindo à sua conta!</p>
      <button class="logout" onClick={handleLogout}>logout</button>
    </div>
  );
}

export default PaginaInicial;