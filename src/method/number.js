'use strict'

var XEUtils = require('../core/utils')
var baseExports = require('./base')

/**
  * 获取一个指定范围内随机数
  *
  * @param {Number} min 最小值
  * @param {Number} max 最大值
  * @return {Number}
  */
function getRandom (min, max) {
  return min >= max ? min : ((min = min >> 0) + Math.round(Math.random() * ((max || 9) - min)))
}

function createMinMax (handle) {
  return function (arr, iterate) {
    return handle(XEUtils.sortBy(baseExports.clone(arr), iterate, this))
  }
}

/**
  * 获取最小值
  *
  * @param {Array} arr 数组
  * @param {Function} iterate(item, index, obj) 回调
  * @return {Number}
  */
var arrayMin = createMinMax(function (result) {
  return result[0]
})

/**
  * 获取最大值
  *
  * @param {Array} arr 数组
  * @param {Function} iterate(item, index, obj) 回调
  * @return {Number}
  */
var arrayMax = createMinMax(function (result) {
  return result.reverse()[0]
})

/**
  * 千分位分隔符、小数点
  *
  * @param {String/Number} num 数值
  * @param {Object} 参数 {spaceNumber: 分割位数(默认3), separator: 分隔符(默认,), fixed: 小数位数(默认null)}
  * @return {String}
 */
function commafy (num, options) {
  num = ('' + num).replace(/,/g, '')
  if (num) {
    var opts = baseExports.assign({ spaceNumber: 3, separator: ',' }, options)
    var optFixed = opts.fixed
    var result = (optFixed ? stringToNumber(num).toFixed(optFixed) : num).split('.')
    return result[0].replace(new RegExp('(?=(?!(\\b))(\\d{' + opts.spaceNumber + '})+$)', 'g'), opts.separator) + (result[1] ? '.' + result[1] : '')
  }
  return num
}

function createToNumber (handle) {
  return function (str) {
    if (str) {
      var num = handle(str)
      return isNaN(num) ? 0 : num
    }
    return 0
  }
}

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回字符串
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedString (str, digits) {
  var nums = ('' + toFixedNumber(str, digits)).split('.')
  return digits ? [nums[0], '.', XEUtils.padEnd(nums[1] || '', digits, '0')].join('') : nums[0]
}

/**
 * 和 Number.toFixed 类似，区别就是不会对小数进行四舍五入，结果返回数值
 *
 * @param { String/Number } str 数值
 * @return {String}
 */
function toFixedNumber (str, digits) {
  if (digits) {
    return stringToNumber(('' + stringToNumber(str)).replace(new RegExp('(\\d+.\\d{0,' + digits + '}).*'), '$1'))
  }
  return stringToInteger(str)
}

/**
 * 转数值
 * @param { String/Number } str 数值
 *
 * @return {Number}
 */
var stringToNumber = createToNumber(parseFloat)

/**
 * 转整数
 * @param { String/Number } str 数值
 *
 * @return {Number}
 */
var stringToInteger = createToNumber(parseInt)

var numberExports = {
  random: getRandom,
  min: arrayMin,
  max: arrayMax,
  commafy: commafy,
  toFixedString: toFixedString,
  toFixedNumber: toFixedNumber,
  toNumber: stringToNumber,
  toInteger: stringToInteger
}

module.exports = numberExports
