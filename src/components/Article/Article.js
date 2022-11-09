// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from "react-router-dom"

import utils from '../../utils';


// Components

// Styles
import './Article.css';


function Article() {
  const story = useLoaderData()
  const image = story.multimedia[0]
  
  useEffect(() => {
  }, [])

  return (
    <article className="article">
      <h2>{story.section}</h2>
      <h1>{story.title}</h1>
      <h3>{story.byline}</h3>
      <sub>published on {story.published_date.toLocaleDateString()}</sub>
      <sub>updated on {story.updated_date.toLocaleDateString()}</sub>
      <img src={image.url} height="353" width = "512" alt={image.caption}></img>
      <sub>"{image.caption}" Copyright {image.copyright}</sub>
      <p>{story.abstract}</p>
    </article>
  );
}

export default Article;
