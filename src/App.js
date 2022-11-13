// Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom"

// Components
import Home from './components/Home/Home';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Error from './components/Error/Error';

// Styles
import './App.css';
import {getSection, getArticle} from './api-calls';

const sectionNames = ["arts",
  "automobiles",
  "books",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world"]

function App() {

  // const sectionNames = ["arts", "science", "home", "us", "world"]
  // const sections = sectionNames.map( (name) => {
  //   return (<Section name={name}/>)
  // })

  return (
    <div className='App'>
      <Header sectionNames={sectionNames}/>
      <section className='body'>
        <Routes>
          <Route path="/" element={<Home sectionNames={sectionNames}/>} />
          <Route path="/article/:articleURI" element={<Article />} />
          <Route path="/section/:sectionName" element={<Section />} />
          <Route path="/:other" element={<Error />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
