import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

const IndexPage = () => {
  return (
    <div>
      <a href="#main" className="skip-links">
        Přeskočit na obsah
      </a>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default IndexPage;
