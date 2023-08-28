import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = ({ handleToken, userToken }) => {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {!userToken ? (
          <>
            {" "}
            <Link to="/signup">
              <button>S'inscrire</button>
            </Link>
            <Link to="/login">
              <button>Se connecter</button>
            </Link>{" "}
          </>
        ) : (
          <button
            onClick={() => {
              handleToken();
            }}
          >
            Deconnexion
          </button>
        )}
        <div className="button">
          <button className="bleu">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
