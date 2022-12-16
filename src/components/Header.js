import '../styles/layout/Header.scss';
import logoSerie from "../images/4277d54f4ba06ee5383ff360d6eb1cb0.jpg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__image" src={logoSerie} alt="Logo" />
    </header>
  );
};

export default Header;
