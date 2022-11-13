// Dependencies
import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom"

// Components

// Styles
import './Error.css';

function Error() {

  return (
    <div className="error">
      <br/>
      <h1>
        404 - No page at this URL. Check again?
      </h1>
    </div>
  );
}

export default Error;