import React from 'react';
import uvodniFotkaMala from '../../images/zbenice-phone-32.jpg';
import uvodniFotka from '../../images/zbenice-32.jpg';
import fotka1 from '../../images/zbenice-55.jpg';
import fotka2 from '../../images/zbenice-42.jpg';
import fotka3 from '../../images/zbenice-52.jpg';
import fotka1Mala from '../../images/zbenice-phone-55.jpg';
import fotka2Mala from '../../images/zbenice-phone-42.jpg';
import fotka3Mala from '../../images/zbenice-phone-52.jpg';
import fotkaCeska from '../../images/zbenice-ceska.jpg';

const Main = () => {
  return (
    <>
      <main className="main" id="main">
        <img
          className="main__photo"
          src={uvodniFotkaMala} srcSet={`${uvodniFotkaMala} 650w, ${uvodniFotka} 1440w`} 
          alt="Fotka zámku Zbenice"
        />

        <div className="main__section">
          <img
            className="main__photo-ceska"
            src={fotkaCeska}
            alt="Fotka pana Češky"
          />

          <div className="main__welcome">
            <h3 className="main__headline">Vítejte na zámku Zbenice</h3>
            <div className="main__text">
              <p className="main__content">
                Zámek Zbenice se nachází ve stejnojmenné vesnici na jihu okresu
                Příbram ve Středočeském kraji. Na jeho místě původně stála
                starší středověká tvrz, kterou nechal v roce 1626 Vilém
                Šléglovský ze Šicendorfu přestavět na renesanční zámek, později
                upravený v barokním slohu. Zámecký areál se nachází v blízkosti
                rybníku na okraji vesnice Zbenice. Zámek je chráněn jako
                kulturní památka.
              </p>
              <p className="main__content">
                V roce 2007 byl zakoupen restaurátorem Jiřím Češkou, nyní slouží
                jako restaurátorská dílna. Také je využíván k příležitostným
                kulturním akcím.
              </p>
              <p className="main__content">A opět pomalu začíná ožívat.</p>
              <p className="main__content">
                Na návštěvu Vás zve majitel zámku Zbenice
              </p>
              <p className="main__content">Jiří Češka</p>
            </div>
          </div>
        </div>

        <div className="main__photo-section">
          <h3 className="main__photos-headline">Zámek Zbenice</h3>
          <div className="main__all-photos">
            <img
              className="main__photos"
              src={fotka1Mala} srcSet={`${fotka1Mala} 650w, ${fotka1} 1440w`} 
              alt="Fotka zámku Zbenice"
            />
            <img
              className="main__photos"
              src={fotka2Mala} srcSet={`${fotka2Mala} 650w, ${fotka2} 1440w`} 
              alt="Fotka erbu zámku Zbenice"
            />
            <img
              className="main__photos"
              src={fotka3Mala} srcSet={`${fotka3Mala} 650w, ${fotka3} 1440w`} 
              alt="Fotka zámku Zbenice"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
