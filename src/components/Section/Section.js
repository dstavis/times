// External Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"

// Internal Dependencies
import utils from '../../utils';
import {getSection} from '../../api-calls';

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
  
  useEffect(() => {
    const data = getSection(name)
    data.then( data => {
      setStories(data.results)
    })
  }, [])

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
    </div>
  );
}

export default Section;
