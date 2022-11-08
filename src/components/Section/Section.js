// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import utils from '../../utils';
import getStories from '../../api-calls';

// Components

// Styles
import './Section.css';


function Section(props) {
  const {name} = props
  const [stories, setStories] = useState([])
  const [topStory, setTopStory] = useState()
  
  useEffect(() => {
    const data = getStories(name)
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
      <h1>{utils.capitalize(name)}</h1>
      { topStory && (
          <article className="">
            <img src={topStory.multimedia[0].url} height="353" width = "512"></img>
            <h2>{topStory.title}</h2>
            <p>{topStory.abstract}</p>
          </article>
        )
      }
    </div>
  );
}

export default Section;
