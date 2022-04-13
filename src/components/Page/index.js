import React, {useState, useEffect} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import SkipLinks from '../SkipLinks';
import ScrollToTopBtn from '../ScrollToTop';
import {Sugar} from 'react-preloaders';

const Page = ({ children }) => {
  const isSSR = typeof window === 'undefined';
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SkipLinks />
      <Header />
      {children}
      <Footer />
      <ScrollToTopBtn />
      {!isSSR && (
        <Sugar
          customLoading={loading}
          background={'#0b1734'}
          color={'#ffffff'}
        />
      )}
    </>
  );
};

export default Page;
