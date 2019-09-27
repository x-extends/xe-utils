var eqNull = require('../base/eqNull')

var isNumber = require('../base/isNumber')

function toValString (obj) {
  if (isNumber(obj)) {
    if (('' + obj).indexOf('e-') >= 0) {
      var isNegative = obj < 0
      return (isNegative ? '-' : '') + '0' + ('' + ((isNegative ? Math.abs(obj) : obj) + 1)).substr(1)
    }
  }
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValString
