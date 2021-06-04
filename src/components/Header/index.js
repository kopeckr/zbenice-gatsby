import React from 'react';
import IconSun from '../IconSun';
import logo from '../../images/Zbenice_Gold.png';

const Header = () => {
  return (
    <>
      <header>
        <div class="mode-switcher">
          <label class="mode__switch--label" for="mode-switch">
            <input type="checkbox" name="mode-switch" id="mode-switch" />
            <div class="toggler switcher"></div>
          </label>
          {/* <IconSun /> */}
        </div>

        <div class="header__content">
          <a href="#">
            <img class="header__logo" src={logo} alt="logo zámku Zbenice" />
          </a>
          <div class="header__details">
            <a class="header__details--text" href="#">
              Zámek Zbenice
            </a>
          </div>
        </div>

        <nav class="header__nav">
          <div class="header__hamburger-items">
            <span class="header__hamburger-text">Menu</span>
            <button
              class="header__hamburger--btn"
              type="button"
              aria-label="open hamburger menu"
              aria-expanded="false"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <ul class="header__nav--list">
            <li class="header__nav--item">
              <a class="header__nav--link" href="#">
                Domů
              </a>
            </li>
            <li class="header__nav--item">
              <a class="header__nav--link" href="#">
                O zámku
              </a>
            </li>
            <li class="header__nav--item">
              <a class="header__nav--link" href="#">
                Fotogalerie
              </a>
            </li>
            <li class="header__nav--item">
              <a class="header__nav--link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
