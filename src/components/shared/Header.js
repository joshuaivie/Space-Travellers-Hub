import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="header">
      <div className="brand"><Logo /></div>
      <div className="main-nav"><Navigation /></div>
    </header>
  );
}

export default Header;
