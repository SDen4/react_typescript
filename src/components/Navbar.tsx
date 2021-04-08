import React from 'react';

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Info</a>
        </li>
      </ul>
    </div>
  </nav>
);
