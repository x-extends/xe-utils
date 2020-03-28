var helperNumString = require('./helperNumString')
var toNumber = require('./toNumber')

function helperFixedNumber (str, digits) {
  return helperNumString(toNumber(str)).replace(new RegExp('(\\d+.\\d{0,' + digits + '}).*'), '$1')
}

module.exports = helperFixedNumber
