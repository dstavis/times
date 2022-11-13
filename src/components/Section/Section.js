// External Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, NavLink, useParams } from "react-router-dom"

// Internal Dependencies
import utils from '../../utils';
import {getSection, getArticle} from '../../api-calls';

// Components
import Abstract from "../Abstract/Abstract"

// Styles
import './Section.css';


function Section(props) {
  let name = useParams().sectionName
  if(props.name) {
    name = props.name
  }
  
  const [stories, setStories] = useState([])
  const [topStory, setTopStory] = useState()
  
  useEffect(() => {
    const data = getSection(name)
    data.then( data => {
      setStories(data.results)
    })
  }, [])

  useEffect( () => {
    stories && setTopStory(stories[0])
  }, [stories])

  const mappedStories = stories.map( (storyData) => {
        return (
          <Link to={"/article/" + utils.extractURI(storyData.uri)}>
            <Abstract story={storyData}/>
          </Link>
        )
  })

  return (
    <div className="section" id={name}>
      <Link to="/section/arts">
        <h1>{utils.capitalize(name)}</h1>
      </Link>
      { mappedStories }
      {/* TODO: If this the home page, just do Top Story. if this is the section page, do all stories. */}
    </div>
  );
}

export default Section;
