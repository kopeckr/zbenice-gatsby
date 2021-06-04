import React from 'react';
import logo from '../../images/Zbenice_Gold.png';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="footer__details">
          <img class="footer__logo" src={logo} alt="logo zámku Zbenice" />
          <div class="footer__address">
            <p>
              Adresa
              <br />
              Zamek Zbenice
              <br />
              Zbenice 1<br />
              262 31 Zbenice
            </p>
          </div>
          <div class="footer__contacts">
            <div class="footer__contacts--phone">
              {/* <svg
                version="1.1"
                class="footer__phone--icon"
                aria-label="Telefon"
                id="Layer_1"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 122.27"
                style="enable-background: new 0 0 122.88 122.27"
                xml:space="preserve"
              >
                <g>
                  <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z" />
                </g>
              </svg> */}
              <a class="footer__link--phone" href="tel:+420 603 542 878">
                +420 603 542 878
              </a>
            </div>
            <div class="footer__contacts--email">
              {/* <svg
                version="1.1"
                class="footer__email--icon"
                aria-label="Email"
                fill="#fff"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.879 88.855"
                enable-background="new 0 0 122.879 88.855"
                xml:space="preserve"
              >
                <g>
                  <path d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,44.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z" />
                </g>
              </svg> */}
              <a class="footer__link--email" href="mailto: jiriceska@seznam.cz">
                jiriceska@seznam.cz
              </a>
            </div>
          </div>
        </div>

        <div class="footer__nav">
          <ul class="footer__list">
            <li class="footer__item">
              <a class="footer__link" href="#">
                Domů
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">
                O zámku
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">
                Fotogalerie
              </a>
            </li>
            <li class="footer__item">
              <a class="footer__link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__copyrights">
          <p class="footer__copyrights--text">
            Všechna práva vyhrazena. Žádná část tohoto webu, není-li uvedeno
            jinak, v&nbspcelku ani v části nesmí být kopírována nebo jinak
            reprodukována bez výslovné souhlasu provozovatele.
          </p>
          <a class="footer__copyrights--link" href="#">
            Informace o zpracování osobních údajů
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
