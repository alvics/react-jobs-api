import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/">
          <span className="brand-logo">Programming Jobs 2020</span>
        </Link>
        <ul className="right">
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
