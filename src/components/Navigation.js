import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects" className="nav-link">Projects</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className="nav-link">Resume</Link>
      </li>
    </ul>
  );
}

export default Navigation;
