import * as React from 'react';
import Page from '../components/Page';

import Gallery from '../components/Gallery';
import ScrollToTopBtn from '../components/ScrollToTop';
import SkipLinks from '../components/SkipLinks';

const GalleryPage = () => {
  return (
    <>
      <Page>
        <SkipLinks />
        <ScrollToTopBtn />
        <Gallery />
      </Page>
    </>
  );
};

export default GalleryPage;
