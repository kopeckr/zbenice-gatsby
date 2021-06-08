import * as React from 'react';
import Page from '../components/Page';
import AboutCastle from '../components/AboutCastle';
import { Helmet } from 'react-helmet';

const PageOZamku = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenicegatsbymaster22229.gatsbyjs.io/" />
      </Helmet>
      <Page>
        <AboutCastle />
      </Page>
    </>
  );
};

export default PageOZamku;
