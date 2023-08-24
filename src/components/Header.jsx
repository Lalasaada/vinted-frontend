import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
        <div className="button">
          <button>S'inscrire</button>
          <button>Se connecter</button>
          <button className="bleu">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
