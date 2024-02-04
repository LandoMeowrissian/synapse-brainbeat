import "./Footer.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">
        <h2>links: </h2>
      </div>

      <div>
        <nav>
          <ul className="footer-links">
            <li className="footer-links__item">
              <Link
                to={"https://github.com/LandoMeowrissian/synapse-brainbeat"}
              >
                Github
              </Link>
            </li>
            <li className="footer-links__item">
              <Link to={"mailto: synapse.brainbeat@gmail.com"}>email</Link>
            </li>
            <li className="footer-links__item">
              <Link to={"https://linkedin.com/in/james-ingalls"}>
              linkedIn
              </Link>
         
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
