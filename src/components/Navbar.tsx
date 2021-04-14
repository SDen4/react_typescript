import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = (): React.ReactElement => (
  <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li className="link1">
          <NavLink to="/" exact>
            Todo list
          </NavLink>
        </li>
        <li className="link1">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="link1">
          <NavLink to="/server">Server</NavLink>
        </li>
        <li className="link1">
          <NavLink to="/redux">Redux</NavLink>
        </li>
        <li className="link1">
          <NavLink to="/animation">Animation</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
