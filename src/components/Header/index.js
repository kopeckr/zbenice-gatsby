import React, { useState, useEffect } from 'react';
import IconSun from '../../svg/icon-sun.svg';
import IconMoon from '../../svg/icon-moon.svg';
import logo from '../../images/zbenice-logo.png';
import { Link } from 'gatsby';
import { isBrowser } from '../../utils/browser';

const Header = () => {
  // Check the value of 'dark-mode' key in local storage
  const initialDarkMode =
    isBrowser && localStorage.getItem('dark-mode') === 'true';

  const [open, setOpen] = useState(false);

  // The default state value is initialDarkMode
  // This is because if user goes to another page, he needs to get the state from the local storage
  const [darkMode, setDarkModeState] = useState(initialDarkMode);

  // Set the dark mode state variable, the corresponding class on the body element and save the
  // state to the local storage.
  const setDarkMode = (enable) => {
    if (enable) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    setDarkModeState(enable);

    if (isBrowser) {
      localStorage.setItem('dark-mode', enable);
    }
  };

  // Toggle the dark mode state (and call the setDarkMode function that will take care of all the
  // logic behind).
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Make sure that we set the dark mode class on the body element when the page is loaded.
  useEffect(() => {
    setDarkMode(darkMode);
  });

  return (
    <>
      <header>
        <div className="mode-switcher">
          <IconMoon />
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
