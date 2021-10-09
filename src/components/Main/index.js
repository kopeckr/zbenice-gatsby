import React from 'react';
import { Link } from 'gatsby';

import mainPhotoMobile from '../../../static/images/zbenice-phone-32.webp';
import mainPhotoDesktop from '../../../static/images/zbenice-32.webp';
import photoBottom1 from '../../../static/images/zbenice-55.webp';
import photoBottom2 from '../../../static/images/zbenice-42.webp';
import photoBottom3 from '../../../static/images/zbenice-52.webp';
import photoOwner from '../../../static/images/zbenice-ceska.webp';

const Main = () => {
  return (
    <>
      <main className="main" id="main">
        <img
          className="main__photo"
          src={mainPhotoMobile}
          srcSet={`${mainPhotoMobile} 650w, ${mainPhotoDesktop} 1440w`}
          alt="Fotka zámku Zbenice"
          loading="lazy"
        />
        <div className="main__section">
          <div className="container">
            <div className="main__wrapper">
              <img
                className="main__photo-ceska"
                src={photoOwner}
                alt="Fotka pana Češky"
              />

              <div className="main__welcome">
                <h1 className="main__headline">Vítejte na zámku Zbenice</h1>
                <div className="main__text">
                  <p className="main__content">
                    Zámek Zbenice se nachází ve stejnojmenné vesnici na jihu
                    okresu Příbram ve Středočeském kraji. Na jeho místě původně
                    stála starší středověká tvrz, kterou nechal v roce 1626
                    Vilém Šléglovský ze Šicendorfu přestavět na renesanční
                    zámek, později upravený v barokním slohu. Zámecký areál se
                    nachází v blízkosti rybníku na okraji vesnice Zbenice. Zámek
                    je chráněn jako kulturní památka.
                  </p>
                  <p className="main__content">
                    V roce 2007 byl zakoupen restaurátorem Jiřím Češkou, nyní
                    slouží jako restaurátorská dílna. Také je využíván k
                    příležitostným kulturním akcím.
                  </p>
                  <p className="main__content">A opět pomalu začíná ožívat.</p>
                  <p className="main__content">
                    Na návštěvu Vás zve majitel zámku Zbenice
                  </p>
                  <p className="main__content main__content--align">
                    Jiří Češka
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main__photo-section">
          <h2 className="main__photos-headline">Zámek Zbenice</h2>
          <p className="main__photo-content">
            Zámek Zbenice vyzařuje jedinečnou atmosféru, kterou můžete načerpat
            skrze fotografie z naší
            <Link className="header__nav--link-gallery" to="/galerie">
              fotogalerie
            </Link>
            .
          </p>
          <div className="main__all-photos">
            <div className="main__photos--wrapper">
              <img
                className="main__photos main__photos-first"
                src={photoBottom1}
                alt="Fotka zámku Zbenice"
                loading="lazy"
              />
            </div>

            <div className="main__photos--wrapper">
              <img
                className="main__photos"
                src={photoBottom2}
                alt="Fotka erbu zámku Zbenice"
                loading="lazy"
              />
            </div>

            <div className="main__photos--wrapper">
              <img
                className="main__photos"
                src={photoBottom3}
                alt="Fotka zámku Zbenice"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
