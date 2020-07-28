var eqNull = require('../base/eqNull')
var isNumber = require('../base/isNumber')

var toNumberString = require('../number/toNumberString')

function toValString (obj) {
  if (isNumber(obj)) {
    return toNumberString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValString
