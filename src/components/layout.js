import React from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import SEO from './seo';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <SEO title="Home Page" />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0 1.0875rem 1.45rem',
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
