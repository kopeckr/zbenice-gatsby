import React from 'react';
import uvodniFotka from '../../images/Zbenice_Desktop_01.jpg';

const Main = () => {
  return (
    <>
      <main className="main">
        <img
          className="main__photo"
          src={uvodniFotka}
          alt="Fotka zámku Zbenice"
        />

        <div className="main__section">
          <img
            className="main__photo-ceska"
            src="img/Ceska-Desktop.jpg"
            alt="Fotka pana Češky"
          />

          <div className="main__welcome">
            <h3 className="main__headline">Vítejte na zámku Zbenice</h3>
            <div className="main__text">
              <p>
                Zámek Zbenice se nachází ve stejnojmenné vesnici na jihu okresu
                Příbram ve Středočeském kraji. Na jeho místě původně stála
                starší středověká tvrz, kterou nechal v roce 1626 Vilém
                Šléglovský ze Šicendorfu přestavět na renesanční zámek, později
                upravený v barokním slohu. Zámecký areál se nachází v blízkosti
                rybníku na okraji vesnice Zbenice. Zámek je chráněn jako
                kulturní památka.
              </p>
              <p>
                V roce 2007 byl zakoupen restaurátorem Jiřím Češkou, nyní slouží
                jako restaurátorská dílna. Také je využíván k příležitostným
                kulturním akcím.
              </p>
              <p>A opět pomalu začíná ožívat.</p>
              <p>Na návštěvu Vás zve majitel zámku Zbenice</p>
              <p>Jiří Češka</p>
            </div>
          </div>
        </div>

        <div className="main__photo-section">
          <h3 className="main__photos-headline">Zámek Zbenice</h3>
          <div className="main__all-photos">
            <img
              className="main__photos"
              src="img/zbenice-54.jpg"
              alt="Fotka zámku Zbenice"
            />
            <img
              className="main__photos"
              src="img/zbenice-42.jpg"
              alt="Fotka erbu zámku Zbenice"
            />
            <img
              className="main__photos"
              src="img/zbenice-52.jpg"
              alt="Fotka zámku Zbenice"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
