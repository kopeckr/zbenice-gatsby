import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const IndexPage = () => {
  return (
    <>
      <SkipLinks />
      <ScrollToTopBtn />
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;
