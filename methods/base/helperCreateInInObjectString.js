var objectToString = Object.prototype.toString

function helperCreateInInObjectString (type) {
  return function (obj) {
    return '[object ' + type + ']' === objectToString.call(obj)
  }
}

module.exports = helperCreateInInObjectString
