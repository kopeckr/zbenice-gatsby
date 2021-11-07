import React, { useEffect, useState } from 'react';
import { isBrowser } from '../../utils/browser';
import coatsOfArms from './coats-of-arms';
import historicPhotos from './photos';
import timeline from './timeline';

const AboutCastle = () => {
  const [items, setItems] = useState([]);

  const isElementInViewport = (el) => {
    if (isBrowser) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    return false;
  };

  const itemInViewport = () => {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  };

  useEffect(() => {
    if (isBrowser) {
      setItems(document.querySelectorAll('.timeline li'));
    }
  }, []);

  useEffect(() => {
    if (items.length) {
      window.addEventListener('resize', itemInViewport);
      window.addEventListener('scroll', itemInViewport);
    }
  }, [items]);

  return (
    <>
      <div className="about-castle-container">
        <main id="main">
          <section className="introduction container">
            <div className="introduction__container">
              <h1>O zámku</h1>
              <p className="introduction__history">
                Historie zámku Zbenice sahá do 13. století, je to ale až o 200
                let později, kdy máme první zmínky o rodu Šiců z Drahenic, kteří
                zámek vlastní. Šicové byli starým vladyckým rodem, který se
                prvně připomíná počátkem 15. století na Prácheňsku. Pocházeli ze
                vsi Drahenice a mezi prvními jsou uváděni Jan z Drahenic se
                svými syny Janem a Albertem. Jan pak vlastní Zalužany a Albert
                kupuje roku 1453 ves Laszko. Albert později získává od svého
                bratra Zalužany a od roku 1461 zastává úřad místopurkrabího na
                Karlštejně. Byl ženatý s Barborou, rozenou ze Všechlap, s kterou
                měl syna Mikuláše. Z dalších menších statků, které rod vlastnil,
                lze jmenovat např. Zbenice, Smolety, Suchou, Nedanice atd. Po
                porážce stavovského povstání na Bílé hoře roku 1620 je rod
                odsouzen ke ztrátě dvou třetin majetku. Poslední známý člen rodu
                Mikuláš Šic je připomínán roku 1650 v Drážďanech. Po tomto datu
                stopa rodu mizí.
              </p>
            </div>
          </section>

          <section className="house">
            <div className="house__coat-of-arms">
              {coatsOfArms.map((photo) => (
                <img
                  className={photo.class}
                  key={photo.id}
                  src={photo.source}
                  alt={photo.alt}
                ></img>
              ))}
            </div>
          </section>

          <section className="intro">
            <div className="intro__container">
              <h2>Jak běžel čas na zámku Zbenice</h2>
            </div>
          </section>

          <section className="timeline">
            <ul className="timeline__list">
              {timeline.map((item) => (
                <li key={item.id} className="timeline__item">
                  <p className="timeline__text">
                    <time className="timeline__year">{item.year}</time>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="section__all-photos">
            {historicPhotos.map((photo) => (
              <img
                className={photo.class}
                key={photo.id}
                src={photo.source}
                alt={photo.alt}
              ></img>
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutCastle;
