import "./Header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header__container">
      <Link to={"/"}>
      <h1 className="header"> synapse / brainbeat</h1>
      </Link>
      
    </div>
  );
};

export default Header;
