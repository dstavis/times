// Dependencies
import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom"

// Components
import Section from '../Section/Section';

// Styles
import './Home.css';

function Home() {

  // const sectionNames = ["arts", "science", "home", "us", "world"]
  // const sections = sectionNames.map( (name) => {
  //   return (<Section name={name}/>)
  // })

  return (
    <div className="home">
      <h1> Top stories by section </h1>
      {/* TODO: Replace these hardcoded sections with programmatically generated list of all sections */}
      <Section name="arts"/>
      <Section name="business"/>
    </div>
  );
}

export default Home;