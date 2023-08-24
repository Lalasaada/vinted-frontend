import axios from "axios";
import { useState, useEffect } from "react";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    return alert("Votre compte a bien été crée");
  };
  return (
    <div className="form-container">
      <h1>Se Connecter</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Adresse email" />
        <input type="password" placeholder="Mot de passe" />
        <input className="submit" type="submit" value="Se connecter" />
      </form>
    </div>
  );
};
export default Login;
