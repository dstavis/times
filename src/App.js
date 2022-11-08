// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';

// Components
import Section from './components/Section/Section';

// Styles
import './App.css';


function App() {

  const sectionNames = ["arts", "science", "home", "us", "world"]
  const sections = sectionNames.map( (name) => {
    return (<Section name={name}/>)
  })

  return (
    <div className="App">
      <header>
        <h1>Times</h1>
      </header>
      <Section name="arts"/>
      <Section name="science"/>
    </div>
  );
}

export default App;
