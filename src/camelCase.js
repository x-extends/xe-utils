var toValueString = require('./toValueString')
var helperStringSubstring = require('./helperStringSubstring')
var helperStringUpperCase = require('./helperStringUpperCase')
var helperStringLowerCase = require('./helperStringLowerCase')

var camelCacheMaps = {}

/**
  * 将带字符串转成驼峰字符串,例如： project-name 转为 projectName
  *
  * @param {String} str 字符串
  * @return {String}
  */
function camelCase (str) {
  str = toValueString(str)
  if (camelCacheMaps[str]) {
    return camelCacheMaps[str]
  }
  var strLen = str.length
  var rest = str.replace(/([-]+)/g, function (text, flag, index) {
    return index && index + flag.length < strLen ? '-' : ''
  })
  strLen = rest.length
  rest = rest.replace(/([A-Z]+)/g, function (text, upper, index) {
    var upperLen = upper.length
    upper = helperStringLowerCase(upper)
    if (index) {
      if (upperLen > 2 && index + upperLen < strLen) {
        return helperStringUpperCase(helperStringSubstring(upper, 0, 1)) + helperStringSubstring(upper, 1, upperLen - 1) + helperStringUpperCase(helperStringSubstring(upper, upperLen - 1, upperLen))
      }
      return helperStringUpperCase(helperStringSubstring(upper, 0, 1)) + helperStringSubstring(upper, 1, upperLen)
    } else {
      if (upperLen > 1 && index + upperLen < strLen) {
        return helperStringSubstring(upper, 0, upperLen - 1) + helperStringUpperCase(helperStringSubstring(upper, upperLen - 1, upperLen))
      }
    }
    return upper
  }).replace(/(-[a-zA-Z])/g, function (text, upper) {
    return helperStringUpperCase(helperStringSubstring(upper, 1, upper.length))
  })
  camelCacheMaps[str] = rest
  return rest
}

module.exports = camelCase
