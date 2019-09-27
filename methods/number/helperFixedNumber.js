var toNumber = require('./toNumber')
var toValString = require('../string/toString')

function helperFixedNumber (str, digits) {
  return toValString(toNumber(str)).replace(new RegExp('(\\d+.\\d{0,' + digits + '}).*'), '$1')
}
module.exports = helperFixedNumber
