import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const GalleryPage = () => {
  return (
    <>
      <SkipLinks />
      <ScrollToTopBtn />
      <Header />
      <Gallery />
      <Footer />
    </>
  );
};

export default GalleryPage;
