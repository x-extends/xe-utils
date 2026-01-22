var helperNumberDecimal = require('./helperNumberDecimal')
var toNumberString = require('./toNumberString')
var multiply = require('./multiply')

function helperNumberAdd (addend, augend) {
  var str1 = toNumberString(addend)
  var str2 = toNumberString(augend)
  var ratio = Math.pow(10, Math.max(helperNumberDecimal(str1), helperNumberDecimal(str2)))
  return (multiply(addend, ratio) + multiply(augend, ratio)) / ratio
}

module.exports = helperNumberAdd
