import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';

import Toolbar from './Navigation/Toolbar/Toolbar';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <SEO title="Home Page" />
    <Toolbar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1420,
        padding: '25px',
      }}
    >
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
