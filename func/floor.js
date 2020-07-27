var helperCreateMathNumber = require('./helperCreateMathNumber')

/**
 * 将数值向下舍入
 *
 * @param {string|number} num 数值
 * @param {number} digits 小数保留位数
 * @return {number}
 */
var floor = helperCreateMathNumber('floor')

module.exports = floor
