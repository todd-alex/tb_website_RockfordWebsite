import React from 'react';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1>Rockford Website</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
