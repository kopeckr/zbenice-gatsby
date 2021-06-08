import * as React from 'react';
import Page from '../components/Page';
import Main from '../components/Main';
import { Helmet } from 'react-helmet';


const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenicegatsbymaster22229.gatsbyjs.io/" />
      </Helmet>
      <Page>
        <Main />
      </Page>
    </div>
  );
};

export default IndexPage;
