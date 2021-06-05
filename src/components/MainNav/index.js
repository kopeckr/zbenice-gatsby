import React from 'react';
import { Link } from 'gatsby';

const MainNav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>{' '}
        </li>
      </ul>
    </>
  );
};

export default MainNav;
