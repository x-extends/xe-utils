var eqNull = require('../base/eqNull')

function toString (obj) {
  return '' + (eqNull(obj) ? '' : obj)
}

module.exports = toString
