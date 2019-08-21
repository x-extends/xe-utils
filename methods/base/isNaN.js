var isNumber = require('./isNumber')

/* eslint-disable eqeqeq */
function isNumberNaN (obj) {
  return isNumber(obj) && isNaN(obj)
}

module.exports = isNumberNaN
