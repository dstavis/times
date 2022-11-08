// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import utils from '../../utils';

// Components

// Styles
import './Section.css';


function Section(props) {
  const {name} = props
  useEffect(() => {
  }, [])

  return (
    <div className="section" id={name}>
      <h1>{utils.capitalize(name)}</h1>
    </div>
  );
}

export default Section;
