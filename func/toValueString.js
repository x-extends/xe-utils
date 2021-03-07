var eqNull = require('./eqNull')
var isNumber = require('./isNumber')
var toNumberString = require('./toNumberString')

function toValueString (obj) {
  if (isNumber(obj)) {
    return toNumberString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValueString
