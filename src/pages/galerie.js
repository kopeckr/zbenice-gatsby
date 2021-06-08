import * as React from 'react';
import Page from '../components/Page';
import Gallery from '../components/Gallery';
import { Helmet } from 'react-helmet';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenicegatsbymaster22229.gatsbyjs.io/" />
      </Helmet>
      <Page>
        <Gallery />
      </Page>
    </>
  );
};

export default GalleryPage;
