import React, { useEffect, useState } from 'react';
import { isBrowser } from '../../utils/browser';
import fotkaZbenice1 from '../../../static/images/zbenice-old-1.jpg';
import fotkaZbenice2 from '../../../static/images/zbenice-old-2.jpg';
import fotkaZbenice3 from '../../../static/images/zbenice-old-3.jpg';
import timeline from './data';

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

  const callbackFunc = () => {
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
      console.log(items);
      window.addEventListener('resize', callbackFunc);
      window.addEventListener('scroll', callbackFunc);
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

          <section className="intro">
            <div className="intro__container">
              <h2>Jak běžel čas na zámku Zbenice</h2>
            </div>
          </section>

          <section className="timeline">
            <ul className="timeline__list">
              {timeline.map((item) => (
                <li className="timeline__item">
                  <p className="timeline__text">
                    <time className="timeline__year">{item.year}</time>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
              {/* <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1539</time> Po Janově smrti
                  zůstává jediným vlastníkem Hynek, který tvrz, dvůr a ves
                  prodává roku 1539 Jindřichu Opršalovi z Jetřichovic, který měl
                  za manželku Dorotu z Bolu. Jindřich byl oddaným přívržencem
                  Jiříka z Poděbrad a účastnil se po jeho boku mnoha bitev.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1547</time> Roku 1547 kupuje
                  Zbenice Jan Bukovanský z Bukovan a připojil je k Bukovanům.
                  Při dělení majetku dostává Zbenice Adam Bukovanský, který je
                  roku 1609 prodal Barboře Vlkové, rozené z Mitrovic. Po ní dědí
                  Jan Vlk z Kvítkova, ženatý s Johankou Eusebií z Harasova,
                  který vše prodává Vilému Šléglovskému ze Sicendorfu,
                  místopísaři království Českého.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1626</time> Ten nechává roku
                  1626 starou tvrz přestavět na zámek v pozdně renesančním stylu
                  s malým uzavřeným nádvořím. Po smrti Viléma Šléglovského se
                  majetku ujímá jeho manželka Alena, rozená ze Střítěže, která
                  se podruhé vdává za Jindřicha Bynu z Bynu. Posledním držitelem
                  z tohoto rodu byla Bernarda Bynová, provdaná Čejková.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1754</time> Její syn hrabě
                  Jan Čejka z Olbramovic prodává Zbenice roku 1754 klášteru sv.
                  Jana pod Skalou. Po zrušení kláštera roku 1785 kupuje, po
                  dořešení majetkových převodů, roku 1791 zámek s dvorem Josef
                  ze Salzburgu. Ten jej však již o tři roky později prodává
                  Františku Schrenkovi.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1805</time> Od roku 1805 drží
                  Zbenice Karel Schwarzenberk, který je připojil k orlickému
                  panství. Schwarzenberkové drží Zbenice až do první pozemkové
                  reformy v roce 1919. Tehdy se majitelem zámku stává Václav a
                  Sylvie Váňovi.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">1942</time> V roce 1942 zámek
                  vyhořel. Poté byl provizorně zastřešen a nebyl dlouho
                  využíván. V dobách, kdy patřilo všechno všem, zámek náleží JZD
                  Chraštice, což se na něm značně podepsalo.
                </p>
              </li>
              <li className="timeline__item">
                <p className="timeline__text">
                  <time className="timeline__year">2007</time> V roce 2007 byl
                  zakoupen restaurátorem Jiřím Češkou a nyní slouží jako
                  restaurátorská dílna. Také je využíván k příležitostným
                  kulturním akcím.
                </p>
              </li> */}
            </ul>
          </section>

          <section className="section__all-photos">
            <img
              className="section__photo section__photo-first"
              src={fotkaZbenice1}
              alt="Historická fotka zámku Zbenice"
              loading="lazy"
            />
            <img
              className="section__photo"
              src={fotkaZbenice2}
              alt="Historická fotka zámku Zbenice"
              loading="lazy"
            ></img>
            <img
              className="section__photo"
              src={fotkaZbenice3}
              alt="Historická fotka zámku Zbenice"
              loading="lazy"
            ></img>
          </section>
        </main>
      </div>
    </>
  );
};

export default AboutCastle;
