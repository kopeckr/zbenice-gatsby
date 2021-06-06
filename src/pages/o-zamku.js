import * as React from 'react';
import Page from '../components/Page';

import AboutCastle from '../components/AboutCastle';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const PageOZamku = () => {
  return (
    <>
      <Page>
        <AboutCastle />
        <SkipLinks />
        <ScrollToTopBtn />
      </Page>
    </>
  );
};

export default PageOZamku;
