function helperDeleteProperty (obj, property) {
  try {
    delete obj[property]
  } catch (e) {
    obj[property] = undefined
  }
}

module.exports = helperDeleteProperty
