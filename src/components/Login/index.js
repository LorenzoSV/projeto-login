import React from "react";
import "./login.css";
import { useState } from "react";
import { AuthContext } from "../../auth";
import { useContext } from "react";
function Login() {
  const {authenticated, login} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log("estoufuncionando");
    console.log(email);
    console.log(password);

    login(email, password);
  };

  return (
    <div className="login-container">
      <p>{String(authenticated)}</p>
      
      <form onSubmit={onHandleSubmit} className="login-form">
        <h2>Login</h2>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="Senha"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
