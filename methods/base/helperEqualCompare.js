var isNumber = require('./isNumber')
var isArray = require('./isArray')
var isString = require('./isString')
var isRegExp = require('./isRegExp')
var isDate = require('./isDate')
var isBoolean = require('./isBoolean')
var isUndefined = require('./isUndefined')
var keys = require('./keys')

var every = require('../array/every')

function helperEqualCompare (val1, val2, compare, func, key, obj1, obj2) {
  if (val1 === val2) {
    return true
  }
  if (val1 && val2 && !isNumber(val1) && !isNumber(val2) && !isString(val1) && !isString(val2)) {
    if (isRegExp(val1)) {
      return compare('' + val1, '' + val2, key, obj1, obj2)
    } if (isDate(val1) || isBoolean(val1)) {
      return compare(+val1, +val2, key, obj1, obj2)
    } else {
      var result, val1Keys, val2Keys
      var isObj1Arr = isArray(val1)
      var isObj2Arr = isArray(val2)
      if (isObj1Arr || isObj2Arr ? isObj1Arr && isObj2Arr : val1.constructor === val2.constructor) {
        val1Keys = keys(val1)
        val2Keys = keys(val2)
        if (func) {
          result = func(val1, val2, key)
        }
        if (val1Keys.length === val2Keys.length) {
          return isUndefined(result) ? every(val1Keys, function (key, index) {
            return key === val2Keys[index] && helperEqualCompare(val1[key], val2[val2Keys[index]], compare, func, isObj1Arr || isObj2Arr ? index : key, val1, val2)
          }) : !!result
        }
        return false
      }
    }
  }
  return compare(val1, val2, key, obj1, obj2)
}

module.exports = helperEqualCompare
