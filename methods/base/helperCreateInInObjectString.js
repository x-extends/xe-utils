var objectToString = require('../static/staticObjectToString')

function helperCreateInInObjectString (type) {
  return function (obj) {
    return '[object ' + type + ']' === objectToString.call(obj)
  }
}

module.exports = helperCreateInInObjectString
