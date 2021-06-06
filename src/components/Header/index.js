import React, { useState } from 'react';
import IconSun from '../../svg/icon-sun.svg';
import logo from '../../images/zbenice-logo.png';
import { Link } from 'gatsby';

const Header = () => {
  // Check the value of 'dark-mode' key in localstorage
  const initialDarkMode = localStorage.getItem('dark-mode');

  // If the value is string 'true', darkModeState is boolean true, else boolean false
  const darkModeState = initialDarkMode === 'true';

  // Set the value to the localstorage
  localStorage.setItem('dark-mode', darkModeState);

  const [open, setOpen] = useState(false);

  // The default state value is darkModeState
  // This is because if user goes to another page, he needs to get the state from the localstorage
  const [darkMode, setDarkMode] = useState(darkModeState);

  const toggleDarkMode = () => {
    console.log(darkMode);
    if (darkMode === false) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('dark-mode', !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header>
        <div className="mode-switcher">
          <label className="mode__switch--label" htmlFor="mode-switch">
            <input
              onClick={toggleDarkMode}
              checked={darkMode ? 'checked' : undefined}
              type="checkbox"
              name="mode-switch"
              id="mode-switch"
            />
            <div className="toggler switcher"></div>
          </label>
          <IconSun />
        </div>
        <div className="header__content">
          <Link to="/">
            <img className="header__logo" src={logo} alt="logo zámku Zbenice" />
          </Link>
          <div className="header__details">
            <Link className="header__details--text" to="/">
              Zámek Zbenice
            </Link>
          </div>
        </div>
        <nav className="header__nav">
          <div className="header__hamburger-items">
            <span className="header__hamburger-text">Menu</span>
            <button
              className={
                open === false
                  ? 'header__hamburger--btn'
                  : 'header__hamburger--btn header__hamburger--btn--opened'
              }
              onClick={() => {
                setOpen(!open);
              }}
              type="button"
              aria-label="open hamburger menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul
            className={
              open === false
                ? 'header__nav--list header__nav--closed'
                : 'header__nav--list'
            }
          >
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
              <Link className="header__nav--link" to="/galerie">
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
