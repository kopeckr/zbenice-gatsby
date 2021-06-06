import * as React from 'react';
import Page from '../components/Page';

import Main from '../components/Main';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const IndexPage = () => {
  return (
    <div>
      <a href="#main" className="skip-links">
        Přeskočit na obsah
      </a>
      <Page>
        <Main />
        <SkipLinks />
        <ScrollToTopBtn />
      </Page>
    </div>
  );
};

export default IndexPage;
