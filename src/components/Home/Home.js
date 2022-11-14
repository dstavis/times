// Dependencies
import React from 'react';

// Components
import Section from '../Section/Section';

// Styles
import './Home.css';

function Home() {

  return (
    <div className="home">
      <h1> Choose a section from the navbar to see other articles </h1>
      <Section name="home"/>
    </div>
  );
}

export default Home;