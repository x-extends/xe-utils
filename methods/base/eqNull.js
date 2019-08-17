var isNull = require('./isNull')
var isUndefined = require('./isUndefined')

function eqNull (obj) {
  return isNull(obj) || isUndefined(obj)
}

module.exports = eqNull
