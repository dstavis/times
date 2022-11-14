// Dependencies
import React from 'react';
import { Link } from "react-router-dom"

// Components

// Styles
import './Error.css';

function Error() {

  return (
    <div className="error">
      <br/>
      <h1>
        404 - No page at this URL. <Link to="/">Go home?</Link>
      </h1>
    </div>
  );
}

export default Error;