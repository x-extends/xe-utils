var helperCreateMathNumber = require('./helperCreateMathNumber')

/**
 * 将数值向上舍入
 *
 * @param {string|number} num 数值
 * @param {number} digits 小数保留位数
 * @return {number}
 */
var ceil = helperCreateMathNumber('ceil')

module.exports = ceil
