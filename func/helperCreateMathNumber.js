var toNumber = require('./toNumber')

function helperCreateMathNumber (name) {
  return function (num, digits) {
    var rest = toNumber(num)
    if (digits) {
      var ratio = Math.pow(10, digits)
      return Math[name](rest * ratio) / ratio
    }
    return Math[name](rest)
  }
}

module.exports = helperCreateMathNumber
