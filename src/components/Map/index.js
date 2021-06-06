import React, { useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import MarkerImg from '../../svg/marker.svg';

const Map = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: 49.59265,
    longitude: 14.08732,
    zoom: 15,
    // zde si nastavuji stred na mape
  });
  return (
    <>
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
    </>
  );
}

export default Map;