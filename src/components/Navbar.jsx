import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* <Link to="/movies">Movies</Link> */}
      <Link to="/blog">Blog</Link>
      <Link to="/llminfo">Project</Link>
      <Link to="/contact">Contact</Link>

    </nav>
  );
}

export default Navbar;
