import React, { useEffect, useState } from 'react';
import fotkaZbenice from '../../images/zbenice-stare-1.jpg';
import { isBrowser } from '../../utils/browser';

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
      <section className="introduction container">
        <div className="introduction__container">
          <h1>O zámku</h1>
          <p className="introduction__history">
            Historie zámku Zbenice sahá až do 13. století, ale je to až o 200
            let později, kdy máme první zmínky o rodu Šiců z Drahenic, kteří
            zámek vlastní. Šicové byli starým vladyckým rodem, který se prvně
            připomíná počátkem 15. století na Prácheňsku. Pocházeli ze vsi
            Drahenice a mezi prvními jsou uváděni Jan z Drahenic se svými syny
            Janem a Albertem. Jan pak vlastní Zalužany a Albert kupuje roku 1453
            ves Laszko. Albert později získává od svého bratra Zalužany a od
            roku 1461 zastává úřad místopurkrabího na Karlštejně. Byl ženatý s
            Barborou, rozenou ze Všechlap, s kterou měl syna Mikuláše. Z dalších
            menších statků, které rod vlastnil, lze jmenovat např. Zbenice,
            Smolety, Suchou, Nedanice atd. Po porážce stavovského povstání na
            Bílé hoře roku 1620, je rod odsouzen ke ztrátě dvou třetin majetku.
            Poslední známý člen rodu Mikuláš Šic je připomínán roku 1650 v
            Drážďanech. Po tomto datu stopa tohoto rodu mizí.
          </p>
          <img
            className="introduction__photo"
            src={fotkaZbenice}
            alt="Fotka zámku Zbenice"
          ></img>
        </div>
      </section>

      <section className="intro">
        <div className="intro__container">
          <h2>Jak běžel čas na zámku Zbenice</h2>
        </div>
      </section>

      <section className="timeline">
        <ul className="timeline__list">
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1293</time> Ves Zbenice se poprvé
              připomíná v souvislosti s bratry Hronem a Dětmarem ze Zbenic,
              kteří roku 1293 vlastní zdejší statek. Jejich potomci vlastní
              Zbenice až do roku 1510, kdy jsou zde již zmiňováni bratři Hynek a
              Jan Šicové z Drahenic.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1539</time> Po Janově smrti
              zůstává jediným vlastníkem Hynek, který tvrz, dvůr a ves prodává
              roku 1539 Jindřichu Opršalovi z Jetřichovic, který měl za manželku
              Dorotu z Bolu. Jindřich byl oddaným přívržencem Jiříka z Poděbrad
              a účastnil se po jeho boku mnoha bitev.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1547</time> Roku 1547 kupuje
              Zbenice Jan Bukovanský z Bukovan a připojil je k Bukovanům. Při
              dělení majetku dostává Zbenice Adam Bukovanský, který je roku 1609
              prodal Barboře Vlkové, rozené z Mitrovic. Po ní dědí Jan Vlk z
              Kvítkova / ženatý s Johankou Eusebií z Harasova /, který vše
              prodává Vilému Šléglovskému ze Sicendorfu, místopísaři království
              Českého.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1626</time> Ten nechává roku 1626
              starou tvrz přestavět na zámek v pozdně renesančním stylu s malým
              uzavřeným nádvořím. Po smrti Viléma Šléglovského se majetku ujímá
              jeho manželka Alena, rozená ze Střítěže, která se podruhé vdává za
              Jindřicha Bynu z Bynu. Posledním držitelem z tohoto rodu byla
              Bernarda Bynová, provdaná Čejková.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1754</time> Její syn hrabě Jan
              Čejka z Olbramovic prodává Zbenice roku 1754 klášteru sv. Jana pod
              Skalou. Po zrušení kláštera roku 1785 kupuje, po dořešení
              majetkových převodů, roku 1791 zámek s dvorem Josef ze Salzburgu.
              Ten jej však již o tři roky později prodal Františku Schrenkovi.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1805</time> Od roku 1805 drží
              Zbenice Karel Schwarzenberk, který je připojil k orlickému
              panství. Schwarzenberkové drží Zbenice až do první pozemkové
              reformy v roce 1919. Tehdy se majitelem zámku stává Václav a
              Sylvie Váńovi.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">1942</time> V roce 1942 zámek
              vyhořel. Po té byl provizorně zastřešen a nebyl dlouho využíván. V
              dobách kdy patřilo všechno všem zámek náleží JZD Chraštice,což se
              na něm značně podepsalo.
            </p>
          </li>
          <li className="timeline__item">
            <p className="timeline__text">
              <time className="timeline__year">2007</time> V roce 2007 byl
              zakoupen restaurátorem Jiřím Češkou, nyní slouží jako
              restaurátorská dílna. Také je využíván k příležitostným kulturním
              akcím.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutCastle;
