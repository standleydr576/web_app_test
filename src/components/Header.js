import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__box">
      <h1 className="header__logo">
        <a href="/" className="header__logo-link" rel="noreferrer">
          <span className="header__logo-note header__logo-note--b">Brand</span>
          <span className="header__logo-note header__logo-note--m">Mark</span>
        </a>
      </h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {/* Navigation items */}
        </ul>
      </nav>
      <a href="#" className="header__mobile-menu sidebar-toggle" data-toggleclass="sidebar-open" data-target="body" rel="noreferrer">
        <svg className="ico-svg ico-svg__menu">
          <use xlinkHref="/images/icons.svg#menu"></use>
        </svg>
      </a>
    </div>
  </header>
);

export default Header;
