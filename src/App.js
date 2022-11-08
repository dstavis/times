// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import getStories from './api-calls';

// Components
import Section from './components/Section/Section';

// Styles
import './App.css';


function App() {

  const [stories, setStories] = useState([])

  useEffect(() => {
    const artsData = getStories("arts")
    // console.log({artsData})
    // debugger
    artsData.then( data => {
      setStories(data.results)
    })
  }, [])

  return (
    <div className="App">
      <Section name="arts"/>
    </div>
  );
}

export default App;
