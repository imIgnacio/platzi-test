import React from 'react';
import './styles.scss';

function Header({ children, ...props }) {
  return (
    <div id='header'>
      <h1>Lista E-Commerce</h1>
      {children}
    </div>
  );
}

export default Header;
