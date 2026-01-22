var toValueString = require('./toValueString')
var helperStringSubstring = require('./helperStringSubstring')
var helperStringLowerCase = require('./helperStringLowerCase')

var kebabCacheMaps = {}

/**
  * 将带驼峰字符串转成字符串,例如： projectName 转为 project-name
  *
  * @param {String} str 字符串
  * @return {String}
  */
function kebabCase (str) {
  str = toValueString(str)
  if (kebabCacheMaps[str]) {
    return kebabCacheMaps[str]
  }
  if (/^[A-Z]+$/.test(str)) {
    return helperStringLowerCase(str)
  }
  var rest = str.replace(/^([a-z])([A-Z]+)([a-z]+)$/, function (text, prevLower, upper, nextLower) {
    var upperLen = upper.length
    if (upperLen > 1) {
      return prevLower + '-' + helperStringLowerCase(helperStringSubstring(upper, 0, upperLen - 1)) + '-' + helperStringLowerCase(helperStringSubstring(upper, upperLen - 1, upperLen)) + nextLower
    }
    return helperStringLowerCase(prevLower + '-' + upper + nextLower)
  }).replace(/^([A-Z]+)([a-z]+)?$/, function (text, upper, nextLower) {
    var upperLen = upper.length
    return helperStringLowerCase(helperStringSubstring(upper, 0, upperLen - 1) + '-' + helperStringSubstring(upper, upperLen - 1, upperLen) + (nextLower || ''))
  }).replace(/([a-z]?)([A-Z]+)([a-z]?)/g, function (text, prevLower, upper, nextLower, index) {
    var upperLen = upper.length
    if (upperLen > 1) {
      if (prevLower) {
        prevLower += '-'
      }
      if (nextLower) {
        return (prevLower || '') + helperStringLowerCase(helperStringSubstring(upper, 0, upperLen - 1)) + '-' + helperStringLowerCase(helperStringSubstring(upper, upperLen - 1, upperLen)) + nextLower
      }
    }
    return (prevLower || '') + (index ? '-' : '') + helperStringLowerCase(upper) + (nextLower || '')
  })
  rest = rest.replace(/([-]+)/g, function (text, flag, index) {
    return index && index + flag.length < rest.length ? '-' : ''
  })
  kebabCacheMaps[str] =  rest
  return rest
}

module.exports = kebabCase
