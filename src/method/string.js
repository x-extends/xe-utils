'use strict'

var baseExports = require('./base')

/**
  * 去除字符串左右两边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function stringTrim (str) {
  return str && str.trim ? str.trim() : stringTrimRight(stringTrimLeft(str))
}

/**
  * 去除字符串左边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function stringTrimLeft (str) {
  return str && str.trimLeft ? str.trimLeft() : baseExports.toString(str).replace(/^[\s\uFEFF\xA0]+/g, '')
}

/**
  * 去除字符串右边的空格
  *
  * @param {String} str 字符串
  * @return {String}
  */
function stringTrimRight (str) {
  return str && str.trimRight ? str.trimRight() : baseExports.toString(str).replace(/[\s\uFEFF\xA0]+$/g, '')
}

var escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
}

var unescapeMap = {}
baseExports.each(escapeMap, function (item, key) {
  unescapeMap[escapeMap[key]] = key
})

function formatEscaper (dataMap) {
  var replaceRegexp = new RegExp('(?:' + baseExports.keys(dataMap).join('|') + ')', 'g')
  return function (str) {
    return baseExports.toString(str).replace(replaceRegexp, function (match) {
      return dataMap[match]
    })
  }
}

/**
  * 转义HTML字符串，替换&, <, >, ", ', `字符
  *
  * @param {String} str 字符串
  * @return {String}
  */
var escape = formatEscaper(escapeMap)

/**
  * 反转escape
  *
  * @param {String} str 字符串
  * @return {String}
  */
var unescape = formatEscaper(unescapeMap)

/**
  * 将带字符串转成驼峰字符串,例如： project-name 转为 projectName
  *
  * @param {String} str 字符串
  * @return {String}
  */
function camelCase (str) {
  return baseExports.toString(str).replace(/(-[a-zA-Z])/g, function (text, u) {
    return u.substring(1).toLocaleUpperCase()
  })
}

/**
  * 将带驼峰字符串转成字符串,例如： projectName 转为 project-name
  *
  * @param {String} str 字符串
  * @return {String}
  */
function kebabCase (str) {
  return baseExports.toString(str).replace(/([A-Z])/g, function (text, u) {
    return '-' + u.toLowerCase()
  })
}

/**
  * 将字符串重复 n次
  *
  * @param {String} str 字符串
  * @param {Number} count 次数
  * @return {String}
  */
function stringRepeat (str, count) {
  var rest = baseExports.toString(str)
  if (rest.repeat) {
    return rest.repeat(count)
  }
  var list = isNaN(count) ? [] : new Array(parseInt(count))
  return list.join(rest) + (list.length > 0 ? rest : '')
}

/**
  * 用指定字符从前面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {Number} padString 补全字符
  * @return {String}
  */
function stringPadStart (str, targetLength, padString, UNDEFINED) {
  var rest = baseExports.toString(str)
  targetLength = targetLength >> 0
  padString = padString === UNDEFINED ? ' ' : '' + padString
  if (rest.padStart) {
    return rest.padStart(targetLength, padString)
  }
  if (targetLength > rest.length) {
    targetLength -= rest.length
    if (targetLength > padString.length) {
      padString += stringRepeat(padString, targetLength / padString.length)
    }
    return padString.slice(0, targetLength) + rest
  }
  return rest
}

/**
  * 用指定字符从后面开始补全字符串
  *
  * @param {String} str 字符串
  * @param {Number} targetLength 结果长度
  * @param {Number} padString 补全字符
  * @return {String}
  */
function stringPadEnd (str, targetLength, padString, UNDEFINED) {
  var rest = baseExports.toString(str)
  targetLength = targetLength >> 0
  padString = padString === UNDEFINED ? ' ' : '' + padString
  if (rest.padEnd) {
    return rest.padEnd(targetLength, padString)
  }
  if (targetLength > rest.length) {
    targetLength -= rest.length
    if (targetLength > padString.length) {
      padString += stringRepeat(padString, targetLength / padString.length)
    }
    return rest + padString.slice(0, targetLength)
  }
  return rest
}

/**
  * 判断字符串是否在源字符串的头部
  *
  * @param {String} str 字符串
  * @param {String/Number} val 值
  * @param {Number} startIndex 开始索引
  * @return {String}
  */
function stringStartsWith (str, val, startIndex) {
  var rest = baseExports.toString(str)
  return (arguments.length === 1 ? rest : rest.substring(startIndex)).indexOf(val) === 0
}

/**
  * 判断字符串是否在源字符串的尾部
  *
  * @param {String} str 字符串
  * @param {String/Number} val 值
  * @param {Number} startIndex 开始索引
  * @return {String}
  */
function stringEndsWith (str, val, startIndex) {
  var rest = baseExports.toString(str)
  return arguments.length === 1 ? rest.indexOf(val) === rest.length - 1 : rest.substring(0, startIndex).indexOf(val) === startIndex - 1
}

/**
 * 解析动态字符串模板
 * @param {String} str 字符串模板
 * @param {Object} obj 对象
 */
function template (str, obj) {
  var rest = baseExports.toString(str)
  if (rest && obj) {
    return rest.replace(/\{{2}([.\w[\]\s]+)\}{2}/g, function (match, keys) {
      return baseExports.get(obj, keys)
    })
  }
  return rest
}

var stringExports = {
  trim: stringTrim,
  trimLeft: stringTrimLeft,
  trimRight: stringTrimRight,
  escape: escape,
  unescape: unescape,
  camelCase: camelCase,
  kebabCase: kebabCase,
  repeat: stringRepeat,
  padStart: stringPadStart,
  padEnd: stringPadEnd,
  startsWith: stringStartsWith,
  endsWith: stringEndsWith,
  template: template
}

module.exports = stringExports
