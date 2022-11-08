const timesURLBase = "https://api.nytimes.com/svc/topstories/v2"
const apiKey = "?api-key=" + process.env.REACT_APP_TIMES_API_KEY

const getStories = (section) => {
  const sectionURL = timesURLBase + `/${section}.json` + apiKey
  try {
    return fetch(sectionURL).then( response => response.json())
  } catch (error) {
    console.error(error)
  }

}

export default getStories
