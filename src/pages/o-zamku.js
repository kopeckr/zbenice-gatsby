import * as React from 'react';
import Page from '../components/Page';
import AboutCastle from '../components/AboutCastle';
import { Helmet } from 'react-helmet';

const PageOZamku = () => {
  return (
    <>
      <Helmet>
        <html lang="cs" />
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenice-gatsby.vercel.app/" />
        <meta
          name="description"
          content="Webová stránka Zámku Zbenice. Zámek vyzařuje jedinečnou atmosféru, kterou načerpate díky prohlidkám a akcím na zámku. Domluvte si návštěvu ještě dnes."
        />
      </Helmet>
      <Page>
        <AboutCastle />
      </Page>
    </>
  );
};

export default PageOZamku;
