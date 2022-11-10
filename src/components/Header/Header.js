// Dependencies
import React from 'react';
import { Link, NavLink } from "react-router-dom"

// Components


// Styles
import './Header.css';

function Header() {

  return (    
    <header>
      <Link to="/">
        <h1>Times</h1>
      </Link>
      <nav>
        <Link to="/section/arts">
          Arts
        </Link>
        <Link to="/section/business">
          Business
        </Link>
      </nav>
    </header>
  );
}

export default Header;