import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Map from '../components/Map';
import ScrollToTopBtn from '../components/ScrollToTop';

const ContactPage = () => {
  return (
    <>
      <ScrollToTopBtn />
      <Header />
      <Map />
      <Footer />
    </>
  );
};

export default ContactPage;
