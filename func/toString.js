var eqNull = require('./eqNull')
var isNumber = require('./isNumber')
var helperNumString = require('./helperNumString')

function toValString (obj) {
  if (isNumber(obj)) {
    return helperNumString(obj)
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValString
