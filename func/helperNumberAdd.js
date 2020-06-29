var helperNumberDecimal = require('./helperNumberDecimal')
var helperNumString = require('./helperNumString')
var multiply = require('./multiply')

function helperNumberAdd (addend, augend) {
  var str1 = helperNumString(addend)
  var str2 = helperNumString(augend)
  var ratio = Math.pow(10, Math.max(helperNumberDecimal(str1), helperNumberDecimal(str2)))
  return (multiply(addend, ratio) + multiply(augend, ratio)) / ratio
}

module.exports = helperNumberAdd
