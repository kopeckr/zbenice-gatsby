import React, { useEffect, useState } from 'react';
import fotkaZbenice from '../../images/zbenice-stare-1.jpg';

const AboutCastle = () => {
  const [items, setItems] = useState([]);

  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const callbackFunc = () => {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add('in-view');
      }
    }
  };

  useEffect(() => {
    console.log('hello');

    setItems(document.querySelectorAll('.timeline li'));
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
      <section className="intro">
        <div className="intro__container">
          <h3 className="intro__headline">O zámku</h3>
          <img className="intro__photo" src={fotkaZbenice}></img>
        </div>
      </section>

      <section className="intro">
        <div className="intro__container">
          <h3 className="intro__headline">Jak běžel čas na zámku Zbenice</h3>
        </div>
      </section>

      <section className="timeline">
        <ul>
          <li>
            <div>
              <time>1293</time> Ves Zbenice se poprvé připomíná v souvislosti s
              bratry Hronem a Dětmarem ze Zbenic, kteří roku 1293 vlastní zdejší
              statek. Jejich potomci vlastní Zbenice až do roku 1510, kdy jsou
              zde již zmiňováni bratři Hynek a Jan Šicové z Drahenic.
            </div>
          </li>
          <li>
            <div>
              <time>1539</time> Po Janově smrti zůstává jediným vlastníkem
              Hynek, který tvrz, dvůr a ves prodává roku 1539 Jindřichu
              Opršalovi z Jetřichovic, který měl za manželku Dorotu z Bolu.
              Jindřich byl oddaným přívržencem Jiříka z Poděbrad a účastnil se
              po jeho boku mnoha bitev.
            </div>
          </li>
          <li>
            <div>
              <time>1547</time> Roku 1547 kupuje Zbenice Jan Bukovanský z
              Bukovan a připojil je k Bukovanům. Při dělení majetku dostává
              Zbenice Adam Bukovanský, který je roku 1609 prodal Barboře Vlkové,
              rozené z Mitrovic. Po ní dědí Jan Vlk z Kvítkova / ženatý s
              Johankou Eusebií z Harasova /, který vše prodává Vilému
              Šléglovskému ze Sicendorfu, místopísaři království Českého.
            </div>
          </li>
          <li>
            <div>
              <time>1626</time> Ten nechává roku 1626 starou tvrz přestavět na
              zámek v pozdně renesančním stylu s malým uzavřeným nádvořím. Po
              smrti Viléma Šléglovského se majetku ujímá jeho manželka Alena,
              rozená ze Střítěže, která se podruhé vdává za Jindřicha Bynu z
              Bynu. Posledním držitelem z tohoto rodu byla Bernarda Bynová,
              provdaná Čejková.
            </div>
          </li>
          <li>
            <div>
              <time>1754</time> Její syn hrabě Jan Čejka z Olbramovic prodává
              Zbenice roku 1754 klášteru sv. Jana pod Skalou. Po zrušení
              kláštera roku 1785 kupuje, po dořešení majetkových převodů, roku
              1791 zámek s dvorem Josef ze Salzburgu. Ten jej však již o tři
              roky později prodal Františku Schrenkovi.
            </div>
          </li>
          <li>
            <div>
              <time>1805</time> Od roku 1805 drží Zbenice Karel Schwarzenberk,
              který je připojil k orlickému panství. Schwarzenberkové drží
              Zbenice až do první pozemkové reformy v roce 1919. Tehdy se
              majitelem zámku stává Václav a Sylvie Váńovi.
            </div>
          </li>
          <li>
            <div>
              <time>1942</time> V roce 1942 zámek vyhořel. Po té byl provizorně
              zastřešen a nebyl dlouho využíván. V dobách kdy patřilo všechno
              všem zámek náleží JZD Chraštice,což se na něm značně podepsalo.
            </div>
          </li>
          <li>
            <div>
              <time>2007</time> V roce 2007 byl zakoupen restaurátorem Jiřím
              Češkou, nyní slouží jako restaurátorská dílna. Také je využíván k
              příležitostným kulturním akcím.
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default AboutCastle;
