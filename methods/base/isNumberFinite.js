var isNumber = require('./isNumber')

function isNumberFinite (obj) {
  return isNumber(obj) && isFinite(obj)
}

module.exports = isNumberFinite
