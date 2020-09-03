import { Link } from 'gatsby';
import React from 'react';

const Toolbar = () => (
  <header
    style={{
      background: '#333',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1420,
        padding: '25px',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#081730',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
      </h1>
    </div>
  </header>
);

export default Toolbar;
