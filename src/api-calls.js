const timesURLBase = "https://api.nytimes.com/svc/topstories/v2"
const sectionEndpoints = {
  arts: "/arts.json"
}
const sectionOptions = Object.keys(sectionEndpoints)
const apiKey = "?api-key=" + process.env.REACT_APP_TIMES_API_KEY

const artsURL = timesURLBase + sectionEndpoints.arts + apiKey

const getStories = (section) => {
  try {
    if(!sectionOptions.includes(section)){
      throw new Error(`${section} is not a valid section name`)
    } else {
      return fetch(artsURL).then( response => response.json())
    } 
  } catch (error) {
    
  }

}

export default getStories
