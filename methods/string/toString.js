var eqNull = require('../base/eqNull')
var isNumber = require('../base/isNumber')
var helperNumString = require('../number/helperNumString')

function toValString (obj) {
  if (isNumber(obj)) {
    return helperNumString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValString
