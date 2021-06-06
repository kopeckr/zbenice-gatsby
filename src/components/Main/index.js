import React from 'react';
import { Link } from 'gatsby';

import mainPhotoMobile from '../../images/zbenice-phone-32.jpg';
import mainPhotoDesktop from '../../images/zbenice-32.jpg';
import photoBottomDesktop1 from '../../images/zbenice-55.jpg';
import photoBottomDesktop2 from '../../images/zbenice-42.jpg';
import photoBottomDesktop3 from '../../images/zbenice-52.jpg';
import photoBottomMobile1 from '../../images/zbenice-phone-55.jpg';
import photoBottomMobile2 from '../../images/zbenice-phone-42.jpg';
import photoBottomMobile3 from '../../images/zbenice-phone-52.jpg';
import photoOwner from '../../images/zbenice-ceska.jpg';

const Main = () => {
  return (
    <>
      <main className="main" id="main">
        <img
          className="main__photo"
          src={mainPhotoMobile}
          srcSet={`${mainPhotoMobile} 650w, ${mainPhotoDesktop} 1440w`}
          alt="Fotka zámku Zbenice"
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
          <h3 className="main__photos-headline">Zámek Zbenice</h3>
          <p className="main__photo-content">
            Zámek Zbenice vyzařuje jedinečnou atmosféru. Více fotografií
            naleznete v naší
            <Link className="header__nav--link-gallery" to="/galerie">
              fotogalerii
            </Link>
            .
          </p>
          <div className="main__all-photos">
            <img
              className="main__photos main__photos-first"
              src={photoBottomMobile1}
              srcSet={`${photoBottomMobile1} 650w, ${photoBottomDesktop1} 1440w`}
              alt="Fotka zámku Zbenice"
            />
            <img
              className="main__photos"
              src={photoBottomMobile2}
              srcSet={`${photoBottomMobile2} 650w, ${photoBottomDesktop2} 1440w`}
              alt="Fotka erbu zámku Zbenice"
            />
            <img
              className="main__photos"
              src={photoBottomMobile3}
              srcSet={`${photoBottomMobile3} 650w, ${photoBottomDesktop3} 1440w`}
              alt="Fotka zámku Zbenice"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
