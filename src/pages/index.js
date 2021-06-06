import * as React from 'react';
import Page from '../components/Page';

import Main from '../components/Main';

const IndexPage = () => {
  return (
    <div>
      <a href="#main" className="skip-links">
        Přeskočit na obsah
      </a>
      <Page>
        <Main />
      </Page>
    </div>
  );
};

export default IndexPage;
