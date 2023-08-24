import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <div className="button">
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>
          <Link to="/login">
            <button>Se connecter</button>
          </Link>
          <button className="bleu">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
