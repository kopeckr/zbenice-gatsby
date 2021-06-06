import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/zbenice-logo.png';
import IconPhone from '../../svg/phone-call.svg';
import IconEmail from '../../svg/icon-email.svg';

const Footer = () => {
  // const [open, setOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <>
      {/* <footer className={darkMode ? 'dark-mode' : ''}> */}
      <footer>
        <div className="footer__details">
          <Link to="/">
            <img className="footer__logo" src={logo} alt="logo zámku Zbenice" />
          </Link>
          <div className="footer__address">
            <p>
              <strong>Adresa</strong>
              <br />
              Zámek Zbenice
              <br />
              Zbenice 1<br />
              262 31 Zbenice
            </p>
          </div>
          <div className="footer__contacts">
            <div className="footer__contacts--phone">
              <IconPhone />
              <a className="footer__link--phone" href="tel:+420 603 542 878">
                +420 603 542 878
              </a>
            </div>
            <div className="footer__contacts--email">
              <IconEmail />
              <a
                className="footer__link--email"
                href="mailto: jiriceska@seznam.cz"
              >
                jiriceska@seznam.cz
              </a>
            </div>
          </div>
        </div>

        <div className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="/">
                Domů
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/o-zamku">
                O zámku
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/galerie">
                Fotogalerie
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__link" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__copyrights">
          <p className="footer__copyrights--text">
            Všechna práva vyhrazena. Žádná část tohoto webu, není-li uvedeno
            jinak, v celku ani v části nesmí být kopírována nebo jinak
            reprodukována bez výslovné souhlasu provozovatele.
          </p>
          <a
            className="footer__copyrights--link"
            href="https://www.gdpr.cz/gdpr/heslo/zpracovani-osobnich-udaju/"
          >
            Informace o zpracování osobních údajů
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
