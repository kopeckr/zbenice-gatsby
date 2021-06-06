import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MarkerImg from '../../svg/marker.svg';
import Form from '../Form/index.js';

const Map = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 49.59265,
    longitude: 14.08732,
    zoom: 15,
  });
  return (
    <main className="container">
    <section className="contact">
      <h1>Kontakt</h1>
      <p className="contact__text">Kde nás najdete?</p>
      <div className="contact__address">
        <p>
          Zámek Zbenice
          <br />
          Zbenice 1<br />
          262 31 Zbenice
        </p>
        </div>
        <div className="contact__details">
          <a className="contact__link" href="tel:+420 603 542 878">
            <strong>Tel:</strong> +420 603 542 878
          </a>
          <a
            className="contact__link"
            href="mailto: jiriceska@seznam.cz"
          >
            <strong>E-mail:</strong> jiriceska@seznam.cz
          </a>
          <div className="contact__hours">
            <p className="contact__hours--text"><strong>Otevirací doba:</strong> 10:00-18:00</p>
            <p className="contact__hours--text"><strong>Vstupné:</strong> dobrovolné</p>
          </div>
        </div>
    </section>

    <section>
    <ReactMapGL
      mapStyle={{
        version: 8,
        sources: {
          'raster-tiles': {
            type: 'raster',
            tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
            tileSize: 256,
            attribution:
              'Mapové podklady od <a target="_top" rel="noopener" href="https://mapy.cz/">Seznam.cz</a> a <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>.',
          },
        },
        layers: [
          {
            id: 'simple-tiles',
            type: 'raster',
            source: 'raster-tiles',
            minzoom: 0,
            maxzoom: 20,
          },
        ],
      }}
      {...viewport}
      width="100%"
      height={400}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
    <Marker
          latitude={49.59265}
          longitude={14.08732}
          offsetLeft={-25}
          offsetTop={-50}
        >
          <button
            className="marker__btn"
            onClick={() => setPopupOpen(true)}
          >
          <MarkerImg />
          </button>
    </Marker>
    {popupOpen ? (
      <Popup
        latitude={49.59265}
        longitude={14.08732}
        offsetTop={-60}
        onClose={() => setPopupOpen(false)}
      >
        Zámek Zbenice
      </Popup>
    ) : null}
    </ReactMapGL>
    </section>
    <section>
      <Form />
    </section>
    </main>
  );
}

export default Map;