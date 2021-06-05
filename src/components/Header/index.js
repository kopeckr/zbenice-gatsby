import React from 'react';
import IconSun from '../../svg/icon-sun.svg';
import logo from '../../images/zbenice-logo.png';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <>
      <header>
        <div className="mode-switcher">
          <label className="mode__switch--label" htmlFor="mode-switch">
            <input type="checkbox" name="mode-switch" id="mode-switch" />
            <div className="toggler switcher"></div>
          </label>
          <IconSun />
        </div>

        <div className="header__content">
          <a href="#">
            <img className="header__logo" src={logo} alt="logo zámku Zbenice" />
          </a>
          <div className="header__details">
            <a className="header__details--text" href="#">
              Zámek Zbenice
            </a>
          </div>
        </div>

        <nav className="header__nav">
          <div className="header__hamburger-items">
            <span className="header__hamburger-text">Menu</span>
            <button
              className="header__hamburger--btn"
              type="button"
              aria-label="open hamburger menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul className="header__nav--list">
            <li className="header__nav--item">
              <Link className="header__nav--link" to="/">
                Domů
              </Link>
            </li>
            <li className="header__nav--item">
              <Link className="header__nav--link" to="/o-zamku">
                O zámku
              </Link>
            </li>
            <li className="header__nav--item">
              <Link className="header__nav--link" to="/">
                Fotogalerie
              </Link>
            </li>
            <li className="header__nav--item">
              <Link className="header__nav--link" to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
