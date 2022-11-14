// Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

import { getArticle } from '../../api-calls';
import utils from '../../utils';


// Components

// Styles
import './Article.css';

function Article() {
  const [story, setStory] = useState()
  const {articleURI} = useParams()
  let image;
  if(story && story.multimedia){
    image = story.multimedia[0]
  }
  
  useEffect(() => {
    getArticle(articleURI).then( (data) => {
      const storyData = data.response.docs[0];
      setStory(storyData)
    })
  }, [])

  useEffect( () => {
    console.log({story})
  }, [story])

  let output = (<h1> Loading... </h1>)

  if (story) {
    output = (<article className="article">
      <h1>Article</h1>
      <h2>{story.section_name}</h2>
      <h1>{story.headline.main}</h1>
      <h3>{story.byline.original}</h3>
      <sub>published on {utils.humanReadableDate(story.pub_date)}</sub>
      <div>
        <img src={`https://www.nytimes.com/${image.url}`} height="353" width = "512" alt={image.caption}></img>
      </div>
      <h3>{story.abstract}</h3>
      <p>{story.lead_paragraph}</p>
      <a href={story.web_url}>Read more at NYTimes.com...</a>
    </article>)
  }

  return output;
}

export default Article;