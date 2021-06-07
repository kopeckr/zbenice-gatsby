import React from 'react';
import LightGallery from 'lightgallery/react';

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-thumbnail.scss';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import images from '../../gallery-one.js';
import imagesTwo from '../../gallery-two.js';
import { isBrowser } from '../../utils/browser';

const Gallery = () => {
  let gallery1;
  let gallery2;

  if (isBrowser) {
    gallery1 = (
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen]} mode="lg-fade">
        {images.map((image) => 
          <a href={image.source} key={image.id} className="gallery__item" data-sub-html={image.author}>
          <img alt={image.alt} src={image.source} className="gallery__item-img" loading="lazy"/>
        </a>
        )}
        </LightGallery>
    );

    gallery2 = (
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen]} mode="lg-fade">
        {imagesTwo.map((image) => 
          <a href={image.source} key={image.id} className="gallery__item" data-sub-html={image.author}>
          <img alt={image.alt} src={image.source} className="gallery__item-img" loading="lazy"/>
        </a>
        )}
        </LightGallery>
    );
  }


  return (
    <main className="container" id="main">
    <section className="gallery__top">
      <h1>Fotogalerie</h1>
      <h2>Jaro na Zámku Zbenice</h2>
      <div>
        {gallery1}
      </div>
    </section>

    <section className="gallery__bottom">
      <h2>Expozice na Zámku Zbenice</h2>
      <p>V naší sbírce najdete přibližně 200 let stáre kousky, mimo jiné první vydání Dějin Českého národa od Františka Palackého nebo kojeneckou lahvičku z 19. století.</p>
      <div>
      {gallery2}
      </div>
    </section>
    
    </main>
  );
}

export default Gallery;