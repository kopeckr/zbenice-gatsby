import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const ContactPage = () => {
  return (
    <>
      <SkipLinks />
      <ScrollToTopBtn />
      <Header />
      <Map />
      <Footer />
    </>
  );
};

export default ContactPage;
