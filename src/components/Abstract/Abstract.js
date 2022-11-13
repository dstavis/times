// Dependencies
import React from 'react';
// import utils from '../../utils';

// Components

// Styles
import './Abstract.css';


function Abstract(props) {
  const {story} = props
  const image = story.multimedia && story.multimedia[1]
  let output = (<></>)
  if (image && story) {
    output = (
      <article className="abstract">
        <img src={image.url} height="353" width = "512" alt={image.caption}></img>
        <h2>{story.title}</h2>
        {/* <p>{story.abstract}</p> */}
      </article>
    )
  }
  
  return output;
}

export default Abstract;


