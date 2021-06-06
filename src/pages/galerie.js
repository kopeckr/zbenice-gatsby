import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import ScrollToTopBtn from '../components/ScrollToTop';

const GalleryPage = () => {
  return (
    <>
      <ScrollToTopBtn />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryPage;
