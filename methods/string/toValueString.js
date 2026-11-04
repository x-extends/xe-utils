var eqNull = require('../base/eqNull')
var isNumber = require('../base/isNumber')
var toNumberString = require('../number/toNumberString')

function toValueString (obj) {
  if (isNumber(obj)) {
    return toNumberString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValueString
