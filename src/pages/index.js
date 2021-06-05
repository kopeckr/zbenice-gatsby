import * as React from 'react';
import Header from '../components/Header';
// import MainNav from '../components/MainNav';
import Footer from '../components/Footer';
import Main from '../components/Main';

const IndexPage = () => {
  return (
    <>
      <a href="#main" class="skip-links">
        Přeskočit na obsah
      </a>
      <Header />
      {/* <MainNav /> */}
      <Main />
      <Footer />
    </>
  );
};

export default IndexPage;
