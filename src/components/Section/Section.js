// External Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom"

// Internal Dependencies
import utils from '../../utils';
import {getSection, getArticle} from '../../api-calls';

// Components
import Abstract from "../Abstract/Abstract"

// Styles
import './Section.css';


function Section(props) {
  const {name} = props
  const [stories, setStories] = useState([])
  const [topStory, setTopStory] = useState()
  
  useEffect(() => {
    const data = getSection(name)
    // console.log({data})
    // debugger
    data.then( data => {
      setStories(data.results)
    })
  }, [])

  useEffect( () => {
    stories && setTopStory(stories[0])
  }, [stories])

  return (
    <div className="section" id={name}>
      <Link to="/section/arts">
        <h1>{utils.capitalize(name)}</h1>
      </Link>
      { topStory && (
        <Link to={"/article/" + utils.extractURI(topStory.uri)}>
          <Abstract story={topStory}/>
        </Link>
        )
      }
    </div>
  );
}

export default Section;
