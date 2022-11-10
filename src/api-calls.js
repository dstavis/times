const apiKey = "api-key=" + process.env.REACT_APP_TIMES_API_KEY
const sectionURLBase = "https://api.nytimes.com/svc/topstories/v2"
const articleURLBase = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=uri:`

// `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=uri:("c0580750-0bd0-54fb-8012-14dda69530ef")&api-key=wxKuQsYXxjUoKeduPobb0vjPYZQdUtPX`


const getSection = (section) => {
  const sectionURL = sectionURLBase + `/${section}.json?` + apiKey
  try {
    return fetch(sectionURL).then( response => response.json())
  } catch (error) {
    console.error(error)
  }
}

const getArticle = (articleURI) => {
  const articleURL = articleURLBase + `("nyt://article/${articleURI}")&` + apiKey
  try {
    return fetch(articleURL).then( response => response.json())
  } catch (error) {
    console.error(error)
  }
}

export {getSection, getArticle}