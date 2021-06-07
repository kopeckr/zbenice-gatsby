import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SkipLinks from '../SkipLinks';
import ScrollToTopBtn from '../ScrollToTop';

const Page = ({ children }) => {
  return (
    <>
      <SkipLinks />
      <Header />
      {children}
      <Footer />
      <ScrollToTopBtn />
    </>
  );
};

export default Page;
