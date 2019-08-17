var eqNull = require('../base/eqNull')

function toValString (obj) {
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toValString
