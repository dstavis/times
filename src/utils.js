const utils = {}

utils.capitalize = (input) => {
  return input.substring(0, 1).toUpperCase() + input.substring(1, input.length)
}

export default utils