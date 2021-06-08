import * as React from 'react';
import Page from '../components/Page';
import Map from '../components/Map';
import { Helmet } from 'react-helmet';


const ContactPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenicegatsbymaster22229.gatsbyjs.io/" />
      </Helmet>
      <Page>
        <Map />
      </Page>
    </div>
  );
};

export default ContactPage;
