import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutCastle from '../components/AboutCastle';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const PageOZamku = () => {
  return (
    <>
      <SkipLinks />
      <ScrollToTopBtn />
      <Header />
      <AboutCastle />
      <Footer />
    </>
  );
};

export default PageOZamku;
