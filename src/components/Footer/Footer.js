import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header" >
      <h2>links: </h2>
      </div>
     
      <div >
        <nav>
          <ul className="footer-links" >
            <li className="footer-links__item" >
            <a
        className="footer-links__github"
        href="https://github.com/LandoMeowrissian/synapse-brainbeat"
      >
        github
      </a>
            </li>
            <li className="footer-links__item" >
            <a href="mailto: synapse.brainbeat@gmail.com" type="footer-links__email">email me</a>
            </li>
            <li  className="footer-links__item" >
            <a type="footer-links__linkedin">linked in </a>
            </li>
          </ul>
        </nav>
     
      
      </div>
      
    </footer>
  );
};

export default Footer;
