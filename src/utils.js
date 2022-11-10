const utils = {}

utils.capitalize = (input) => {
  return input.substring(0, 1).toUpperCase() + input.substring(1, input.length)
}

utils.extractURI = (input) => {
  // example: "nyt://article/c0580750-0bd0-54fb-8012-14dda69530ef"
  return input.substring(14, input.length)
}

utils.humanReadableDate = (input) => {
  return new Date(input).toLocaleDateString()
}

export default utils