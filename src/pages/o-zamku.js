import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutCastle from '../components/AboutCastle';
import ScrollToTopBtn from '../components/ScrollToTop';

const PageOZamku = () => {
  return (
    <>
      <ScrollToTopBtn />
      <Header />
      <AboutCastle />
      <Footer />
    </>
  );
};

export default PageOZamku;
