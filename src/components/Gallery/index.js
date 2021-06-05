import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import images from '../../images.js';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-thumbnail.scss';

const Gallery = () => {
  console.log(images, 'ahoj');
  return (
    <main>
    <h1>Fotogalerie</h1>
    <div>
      <LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgFullscreen]} mode="lg-fade">
      {images.map((image) => 
        <a href={image.source} key={image.id} className="gallery__item" data-sub-html={image.author}>
        <img alt={image.alt} src={image.source} className="gallery__item-img" />
      </a>
      )}
      </LightGallery>
    </div>
    </main>
  );
}

export default Gallery;