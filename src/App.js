// Dependencies
import React from 'react';
// import { useState, useEffect } from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom"

// Components
import Home from './components/Home/Home';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

// Styles
import './App.css';
import {getSection, getArticle} from './api-calls';

function App() {

  // const sectionNames = ["arts", "science", "home", "us", "world"]
  // const sections = sectionNames.map( (name) => {
  //   return (<Section name={name}/>)
  // })

  return (
    < >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleURI" element={<Article />} />
        <Route path="/section/:sectionName" element={<Section />} />
      </Routes>
    </>
  );
}

export default App;
