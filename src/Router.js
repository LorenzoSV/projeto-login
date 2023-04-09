import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider, AuthContext } from "./auth";
import { useContext } from "react";
import PaginaInicial from "./components/PaginaInicial";

function Router() {
  // Verifica se o usuário está logado
  

  const Private = ({ children }) => {
    const {authenticated, loading} = useContext(AuthContext);
    if(loading){
      return <div className="loading">Carregando...</div>
    }

    if (!authenticated) {
      return <Navigate to="login" />;
    }
    console.log("ae");
    console.log(authenticated);
    return children;
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <PaginaInicial/>
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Router;
