import * as React from 'react';
import Page from '../components/Page';
import Gallery from '../components/Gallery';
import { Helmet } from 'react-helmet';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <html lang="cs" />
        <meta charSet="utf-8" />
        <title>Zámek Zbenice</title>
        <link rel="canonical" href="https://zbenice-gatsby.vercel.app/" />
        <meta name='description' content='Webová stránka Zámku Zbenice. Zámek vyzařuje jedinečnou atmosféru, kterou načerpáte díky prohlídkám a akcím na zámku. Domluvte si návštěvu ještě dnes' />
      </Helmet>
      <Page>
        <Gallery />
      </Page>
    </>
  );
};

export default GalleryPage;
