var helperCreateToNumber = require('./helperCreateToNumber')

/**
 * 转整数
 * @param { String/Number } str 数值
 *
 * @return {Number}
 */
var toInteger = helperCreateToNumber(parseInt)

module.exports = toInteger
