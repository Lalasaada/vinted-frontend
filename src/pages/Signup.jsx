import axios from "axios";
import { useState, useEffect } from "react";

const Signup = () => {
  const [data, setData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    return alert("Votre compte a bien été crée");
  };

  return (
    <div className="form-container">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nom d'utilisateur" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Mot de passe" />
        <input className="submit" type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
