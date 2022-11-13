// Dependencies
import React from 'react';
import { Link, NavLink } from "react-router-dom"

// Components


// Styles
import './Header.css';

function Header(props) {
  const {sectionNames} = props

  const sections = sectionNames.map( (sectionName) => {
    return (<Link to={`/section/${sectionName}`}>
        {sectionName}
    </Link>)
  } )


  return (    
    <header>
      <Link to="/">
        <h1>Times</h1>
      </Link>

      <nav>
        {sections}
        {/* <Link to="/section/arts">
          Arts
        </Link>
        <Link to="/section/business">
          Business
        </Link> */}
      </nav>
    </header>
  );
}

export default Header;