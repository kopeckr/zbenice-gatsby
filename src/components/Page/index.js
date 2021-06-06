import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Page;
