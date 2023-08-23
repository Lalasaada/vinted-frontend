import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <div>
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button className="bleu">Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
